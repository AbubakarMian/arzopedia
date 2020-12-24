import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Dimensions,
    Button,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView, Platform, Alert
} from 'react-native';
import styles from '../styleSheets/SignInCss'
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';
import { SET_USER, LOGOUT_USER } from '../redux/constants/index';
import { Constants } from '../views/Constant';
// import AsyncStorage from '@react-native-community/async-storage';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            number: '',
            password: '',
            confirmPassword: '',
            access_token: '',
            spinner: false,
            id: 0
        }
    }
    static navigationOptions = {
        header: null,
    };

    onPressSignup = async () => {
        this.setState({ spinner: true });
        if (this.state.email.trim() === '') {
            this.setState({ spinner: false });
            // this.refs.PopUp.setModal(true, 'Please Enter valid Input');
            Alert.alert('enter correct email');
            return;
        }

        var formData = new FormData();
        formData.append('email', this.state.email); // this.state.email
        formData.append('name', this.state.name);
        formData.append('password', this.state.password);
        console.log('formData', formData)
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: this.props.user.access_token,
                'Authorization-secure': this.props.user.access_token,
                'client-id': Constants.clientID
            },
            body: formData,
        };
        console.log('url', Constants.signup);
        fetch(Constants.signup, postData)
            .then(response => response.json())
            .then(async responseJson => {
                this.setState({ spinner: false });
                console.log('responseJson', responseJson.error);
                if (responseJson.status === true) {
                    this.setState({
                        access_token: responseJson.response.access_token,
                    });
                    this.props.setUser(this.state);
                    this.props.navigation.navigate('Home')
                } else {
                    let message = JSON.stringify(responseJson.error.message)
                    Alert.alert('Error', message)
                    // this.refs.PopUp.setModal(true, responseJson.error.message);
                }
            })
            .catch(error => {
            });
    };


    render() {
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}

                />
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <ScrollView>
                        <View style={styles.SingInView}>
                            <View>
                                <Image
                                    style={{ height: 100, width: width - 80, marginTop: 30 }}
                                    source={require('../images/logo.png')}
                                />
                                <Text style={styles.Heading}>Create an Account</Text>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ name: text })}
                                        placeholder="USER NAME"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="EMAIL"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ password: text })}
                                        placeholder="PASSWORD"
                                        placeholderTextColor="#1d1d1d"
                                        secureTextEntry={true}
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput

                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ confirmPassword: text })}
                                        placeholder="CONFIRM PASSWORD"
                                        placeholderTextColor="#1d1d1d"
                                        secureTextEntry={true}
                                        style={styles.TextInputArea}
                                    />
                                </View>
                            </View>
                            <View style={{ width: width - 80 }}>
                                <TouchableOpacity
                                    onPress={{}}
                                    style={{ marginTop: 10, display: 'flex' }}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>By Pressing "Submit" I declare that i have read and I agree to the <Text style={{ color: '#43c6ac' }}>Arzopedia.com</Text></Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableHighlight
                                // onPress={() => this.props.navigation.navigate('SignIn')}
                                onPress={() => this.onPressSignup()}
                                // onPress={() => this.props.setUser()}
                                underlayColor='#1b1464'
                                style={[{ width: width - 80 }, styles.LoginTouch]} >
                                <View >
                                    <Text style={{ color: '#fff', fontSize: 20 }} >SUBMIT</Text>
                                </View>
                            </TouchableHighlight>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignIn')}
                                    style={{ marginTop: 10, display: 'flex' }}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>Already Have An Account ? <Text style={{ color: '#43c6ac' }}>Sign In</Text></Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>


                </ImageBackground>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
};
function mapDispatchToProps(dispatch) {
    return {
        setUser: (value) => dispatch({ type: SET_USER, value: value }),
        logoutUser: () => dispatch({ type: LOGOUT_USER })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
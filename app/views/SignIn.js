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
import Spinner from 'react-native-loading-spinner-overlay';
import styles from '../styleSheets/SignInCss'
import { Constants } from '../views/Constant';
import { connect } from 'react-redux';
import { SET_USER, LOGOUT_USER } from '../redux/constants/index';

// import AsyncStorage from '@react-native-community/async-storage';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: 'Ab@mail.com',
            password: '123',
            message: '',
            user: '',
            id: 0
        }
    }
    static navigationOptions = {
        header: null,
    };

    SignInRequest = () => {
        this.setState({ spinner: true });
        if (this.state.email.trim() === '' || this.state.password.trim() == '') {
            this.setState({ spinner: false });
            //  this.refs.PopUp.setModal(true, 'Please Enter valid Input');
            Alert.alert('Error', 'Please Enter Valid Input');
            return;
        }

        var formData = new FormData();
        formData.append('email', this.state.email);
        formData.append('password', this.state.password);
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: this.props.user.access_token,
                'Authorization-secure': Constants.autherizationKey , //this.props.user.access_token,
                'client-id': Constants.clientID
            },
            body: formData,
        };
        console.log('signIn url ', Constants.login);
        fetch(Constants.login, postData)
            .then(response => response.json())
            .then(async responseJson => {
                this.setState({ spinner: false });
                if (responseJson.status === true) {
                    this.setState({
                        access_token: responseJson.response.access_token,
                        id: responseJson.response.id
                    });
                    this.props.setUser(this.state);
                    this.props.navigation.navigate('Home');
                } else {
                    // this.refs.PopUp.setModal(true, responseJson.error.message);
                    Alert.alert('Error', 'User not found');
                }
            })
            .catch(error => {
                console.error(error);
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
                                <Text style={styles.Heading}>Sign In To Arzopedia</Text>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email:text })}
                                        placeholder="Email"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                        keyboardType={'email-address'}
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
                                        keyboardType={'default'}
                                    />
                                </View>
                            </View>
                            <View style={{ alignSelf: 'flex-end' }} >
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ForgetPassword')}
                                    style={{ marginTop: 10 }}
                                >
                                    <Text>Forgot Password?</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableHighlight
                                // onPress={() => this.props.navigation.navigate('Home')}
                                onPress={() => this.SignInRequest()}
                                underlayColor='#1b1464'
                                style={[{ width: width - 80 }, styles.LoginTouch]} >
                                <View >
                                    <Text style={{ color: '#fff', fontSize: 20 }} >Sign In</Text>
                                </View>
                            </TouchableHighlight>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('SignUp')}
                                    style={{ marginTop: 10, display: 'flex' }}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>Need An Account ? <Text style={{ color: '#43c6ac' }}>Sign Up</Text></Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
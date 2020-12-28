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
    ScrollView, Platform, Alert, Picker
} from 'react-native';
import Header from '../includes/Header';
import Spinner from 'react-native-loading-spinner-overlay';
import { Constants } from '../views/Constant';
var { width, height } = Dimensions.get('window');
const isIos = Platform.OS === 'ios' ? '?ios' : '';
export default class Emails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            spinner: false,
            email: '',
            name: '',
            message: '',
            number: '',


        }
    }

    sendEmail() {
        this.setState({
            spinner:true
        })
        var formData = new FormData();
        formData.append('email', this.state.email); // this.state.email
        formData.append('phone', this.state.number);
        formData.append('msg', this.state.message);
        formData.append('user_id', this.props.route.params.user_id);
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
        console.log('url', Constants.sendMail);
        fetch(Constants.sendMail, postData)
            .then(response => response.json())
            .then(async responseJson => {
                this.setState({ spinner: false });
                console.log('responseJson', responseJson.error);
                if (responseJson.status === true) {
                    Alert.alert(responseJson.response);
                    // this.setState({
                    //     access_token: responseJson.response.access_token,
                    // });
                    // this.props.setUser(this.state);
                    // this.props.navigation.navigate('Home')
                } else {
                    Alert.alert('Error', responseJson.error.message)
                    // this.refs.PopUp.setModal(true, responseJson.error.message);
                }
            })
            .catch(error => {
            });

    }


    render() {
        console.log('user_id user_id user_id user_id ', this.props.route.params.user_id)
        return (
            <View style={styles.container}>
                <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                />
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Emails" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ name: text })}
                                        placeholder="Enter Name"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="Enter Email"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ number: text })}
                                        placeholder="Enter Number"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxAreaMsg}>
                                    <TextInput
                                        multiline={true}
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ message: text })}
                                        placeholder="Enter Your Message"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputAreaMsg}
                                    />
                                </View>


                                <TouchableHighlight
                                    // onPress={() => this.props.navigation.navigate('Home')}
                                    onPress={() => this.sendEmail()}
                                    underlayColor='#1b1464'
                                    style={[{ width: width - 66 }, styles.LoginTouch]} >
                                    <View >
                                        <Text style={{ color: '#fff', fontSize: 20 }} >SUBMIT</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
    },
    ImageBackground: {
        width: width,
        height: height,
        backgroundColor: '#fff'
    },
    TextBoxArea: {
        height: 55,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        alignSelf: 'center',
        marginTop: 15,
        borderWidth: 2,
    },
    TextInputArea: {
        width: width - 66,
        height: 55,
        textAlignVertical: 'center',
        color: '#1d1d1d',
        paddingLeft: 20,
        paddingHorizontal: 50,
        fontSize: 18,

    },
    TextBoxAreaMsg: {
        height: 200,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 10,
        borderWidth: 2,
        overflow: 'hidden',
        position: 'relative',
        alignSelf: 'center',
        marginTop: 15,

    },
    TextInputAreaMsg: {
        width: width - 66,
        height: 200,
        paddingLeft: 20,
        textAlignVertical: 'top',
        color: '#1d1d1d',
        fontSize: 18,
        fontWeight: '200'

    },
    LoginTouch: {
        backgroundColor: '#43c6ac',
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 70,
        borderRadius: 5,
        marginTop: 10
    },
});

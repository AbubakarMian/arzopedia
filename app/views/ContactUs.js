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
import { Constants } from './Constant';
// import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject:'',
            message:'',
        }
    }
    sendmessage= async () =>{
        this.setState({ spinner: true });
        if (this.state.email.trim() === '') {
            this.setState({ spinner: false });
            Alert.alert('Error', 'Please Enter Valid Input');
            return;
        }  
        var formData = new FormData();
        formData.append('name', this.state.name); 
        formData.append('email', this.state.email); 
        formData.append('subject', this.state.subject);
        formData.append('message', this.state.message);  
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: Constants.autherizationKey,
                'Authorization-secure': Constants.autherizationKey,
                'client-id': Constants.clientID
            },
            body: formData,
        };
     console.log('sendlink 3');
        fetch(Constants.contact, postData)
            .then(response => response.json())
            .then(async responseJson => {
                if (responseJson.status === true) {
                    Alert.alert("Message sent successfully");
                    this.props.navigation.navigate('Home')
                    this.setState({
                       spinner:false
                    });
                    this.props.setUser(this.state);
                }
            })
            .catch(error => {
               console.log('responseJson error',error);
            });  
};
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Contact Us" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                            <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ name: text })}
                                        placeholder="Your Name (required)"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="Your Email (required)"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                        keyboardType={'email-address'}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ subject: text })}
                                        placeholder="Subject"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxAreaMsg}>
                                    <TextInput
                                        multiline={true}
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ message: text })}
                                        placeholder="Description"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputAreaMsg}
                                    />
                                </View>
                                
                                
                                <TouchableHighlight
                                    onPress={{}}
                                    // onPress={() => this.props.setUser()}
                                    
                                    onPress={() => this.sendmessage()}
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

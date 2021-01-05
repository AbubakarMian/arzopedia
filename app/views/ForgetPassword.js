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
import styles from '../styleSheets/SignUpCss'
import { Constants } from './Constant';
var { width, height } = Dimensions.get('window');
const isIos = Platform.OS === 'ios' ? '?ios' : '';
export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'aukhan288@gmail.com',
        }
    }
    static navigationOptions = {
        header: null,
    };
    sendlink= () =>{
        this.setState({ spinner:true })
        var formData = new FormData();
        formData.append('email', this.state.email); 
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
        fetch(Constants.forgetpassword, postData)
        .then(response => response.json())
        .then(async responseJson => {          
            if (responseJson.status === true) {
                Alert.alert("Message sent successfully");
                {this.props.navigation.navigate('SignIn')}
                this.setState({    
                    spinner:false    
                });
                // this.props.setUser(this.state); 
            }
        })
        .catch(error => {
            this.setState({spinner:false})
           console.log('responseJson error',error);
           Alert.alert(""+error)
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
                        <View style={styles.SignUpView}>
                            <View>
                                <Image
                                    style={{ height:130, width:100, marginTop: 30 ,alignSelf:'center' }}
                                    source={require('../images/lock.png')}
                                />
                                <Text style={styles.Heading}>FORGET PASSWORD</Text>

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
                                <View style={{ width: width - 80, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ marginTop: 20, fontWeight: 'bold' }}>Enter Your Email Address and new generated password will be sent to your email</Text>
                                </View>



                            </View>
                            <TouchableHighlight
                                
                                onPress={this.sendlink}
                                underlayColor='#1b1464'
                                style={styles.SignUpTuch} >
                                <View >
                                    <Text style={{ color: '#fff', fontSize: 25 }} >SEND</Text>
                                </View>
                            </TouchableHighlight>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SignIn')}
                                style={{ marginTop: 10 }}
                            >
                                <Text>Already Have An Account? SignIn Here</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}

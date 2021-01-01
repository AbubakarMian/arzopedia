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
import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class ForgetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }
    static navigationOptions = {
        header: null,
    };

    sendlink= async () =>{
        if (this.state.email.trim() === '' || this.state.password.trim() == '') {
            this.setState({ spinner: false });
            //  this.refs.PopUp.setModal(true, 'Please Enter valid Input');
            Alert.alert('Error', 'Please Enter Valid Input');
            return;
        }  
      Alert.alert('New password send successfully');
      this.props.navigation.navigate('SignIn')
     console.log('sendlink 1');
        var formData = new FormData();
        formData.append('email', this.state.email); 
       
        console.log('sendlink 2');
 
        let postData = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'EvcGFyZWl0LWFwcC1hZG1pbjo4NmRmMjZkMi01NjE1LTRiOTAtYTBjYy1jMDM5OWJiasdYAnHYzYNCg==',
                'Authorization-secure': 'EvcGFyZWl0LWFwcC1hZG1pbjo4NmRmMjZkMi01NjE1LTRiOTAtYTBjYy1jMDM5OWJiasdYAnHYzYNCg==',
                'client-id': 'arzopedia-app-mobile'
            },
            body: formData,
        };
     console.log('sendlink 3');

        // console.log('url', Constants.signup);
        fetch('http://development.hatinco.com/arzopediabackend/public/api/forgetpassword', postData)
            .then(response => response.text())
            .then(async responseJson => {
     console.log('responseJson',responseJson);
              
                console.log('responseJson', responseJson.error);
                if (responseJson.status === true) {
                    this.setState({
                    
                    });
                    this.props.setUser(this.state);
                    Alert.alert("Message sent successfully")
                     {() => this.props.navigation.navigate('SignIn')} 
                } else {
                    let message = JSON.stringify(responseJson.error.message)
                    Alert.alert('Error', message)
                    // this.refs.PopUp.setModal(true, responseJson.error.message);
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
                                
                                onPress={() => this.sendlink()}
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

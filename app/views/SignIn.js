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

// import AsyncStorage from '@react-native-community/async-storage';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            message: '',
            user: '',
            id: 0
        }
    }
    static navigationOptions = {
        header: null,
    };


    render() {
      
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <ScrollView>
                        <View style={styles.SingInView}>
                            <View>
                                <Image
                                    style={{height: 100,width:width-80,marginTop:30}}
                                    source={require('../images/logo.png')}
                                />
                                <Text style={styles.Heading}>Sign In To Arzopedia</Text>
                                <View
                                    style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="USER NAME"
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
                                onPress={() => this.props.navigation.navigate('Home')}
                                // onPress={() => this.props.setUser()}
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

export default SignIn;
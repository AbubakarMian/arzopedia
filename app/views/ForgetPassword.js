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
                                onPress={{}}
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

import {
    StyleSheet,
    Dimensions,
} from 'react-native';
var { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS == 'android'
export default StyleSheet.create({
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
    SingInView: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Heading: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight:'bold',
        color: '#43c6ac',
        paddingVertical: 10,
        marginTop: 20
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
        marginTop: 50
    },
    signUpTouch: {
        backgroundColor: '#43c6ac',
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 50
    },
    GuestTouch: {
        backgroundColor: '#43c6ac',
        color: '#fff',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginTop: 20
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
        width: width - 86,
        height: 55,
        textAlignVertical: 'center',
        color: '#1d1d1d',
        paddingLeft: 20,
        paddingHorizontal: 50,
        fontSize: 18,
        
    },
    TextInputIcon: {
        height: 30,
        width: 30,
        position: 'absolute',
        right: 13,
        top: 13
    },

});
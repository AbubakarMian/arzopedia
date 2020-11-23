

import {StyleSheet,Dimensions} from 'react-native';
var { width, height } = Dimensions.get('window');
export default StyleSheet.create({
    searchBtnTop: {
        flex: 0.5, justifyContent: 'center', alignSelf: 'center', alignItems: 'center'
    },
    SearchTextBoxArea: {

        height: 40,
        borderColor: '#4dac34',
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        alignSelf: 'center',
        marginTop: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    SearchTextInputArea: {
        width: width - 100,
        height: 40,
        textAlignVertical: 'center',
        color: '#1d1d1d',
        fontSize: 14,
        fontWeight: '200'
    },
    SearchTextInputIcon: {
        height: 20,
        width: 20,
        position: 'absolute',
        right: 13,
        top: 10
    },
})
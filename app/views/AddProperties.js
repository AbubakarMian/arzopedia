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
import { Constants } from '../views/Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import ImagePicker from 'react-native-image-crop-picker';
// import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class AddProperties extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            categoryarr: [],
            details: '',
            address: '',
            title: '',
            price: '',
            city: '',
            lat: '',
            long: '',
            bathroom: '',
            bedroom: '',
            sqm: '',
            contact: '',
            type: '',
            property_type: '',

        };
    }

    componentDidMount() {
        this.getPropertyType();
    }


    getPropertyType() {
        let postData = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization: Constants.autherizationKey,
                'Authorization-secure': Constants.autherizationKey,
                'client-id': Constants.clientID
            },
        };
        return fetch(Constants.property_type, postData)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ spinner: false });
                console.log('"response Json type   ', responseJson.response);
                if (responseJson.status === true) {
                    let res = responseJson.response;
                    let categoryarr = res.map((x, key) => { return { label: x.name, value: x.id } });
                    console.log('categoryarr !!!!!!!!', categoryarr);
                    this.setState({
                        categoryarr: categoryarr,
                    });
                } else {
                    // this.refs.PopUp.setModal(true , responseJson.error.message);
                    Alert.alert('Error', 'Bad Request');
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    addProperty(){
        var formData = new FormData();
        formData.append('email', this.state.email); // this.state.email
        formData.append('name', this.state.name);
        formData.append('password', this.state.password);
        console.log('formData',formData)
        let postData = {    
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: this.props.user.access_token,
            'Authorization-secure': this.props.user.access_token,
            'client-id' : Constants.clientID
          },
          body: formData,
        };
        console.log('url',Constants.signUp);
        fetch(Constants.signUp, postData)
          .then(response => response.json())
          .then(async responseJson => {
            this.setState({spinner:false});
            console.log('responseJson',responseJson);
            if (responseJson.status === true) {
                this.setState({
                    access_token: responseJson.response.access_token,
                });
                this.props.setUser(this.state);
                this.props.navigation.navigate('Home')
            } else {
                Alert.alert('Error','Greetings Error')
                // this.refs.PopUp.setModal(true, responseJson.error.message);
            }
          })
          .catch(error => {
          });
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Add Properties" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <View>
                                <View style={styles.TextBoxAreaMsg}>
                                    <TextInput
                                        multiline={true}
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ details: text })}
                                        placeholder=" Details"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputAreaMsg}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ address: text })}
                                        placeholder="Address"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ title: text })}
                                        placeholder="Title"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ price: text })}
                                            placeholder="Price"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ city: text })}
                                            placeholder="City"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ lat: text })}
                                            placeholder="Latitude"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ long: text })}
                                            placeholder="Logitude"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ sqm: text })}
                                            placeholder="Area"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ contact: text })}
                                            placeholder="Contact No"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ bed: text })}
                                            placeholder="Bedroom"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ bath: text })}
                                            placeholder="Bathroom"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ type: text })}
                                            placeholder="Type"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ bath: text })}
                                            placeholder="Bathroom"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={{ flex: 1, marginRight: 5 }}>
                                        {/* {this.state.categoryarr.length < 1 ? null : */}
                                        <DropDownPicker
                                            // items={this.state.categoryarr}
                                            items={this.state.categoryarr}
                                            // containerStyle={{ height: 50, width: width - 50, marginTop: 15 }}    
                                            style={{
                                                borderColor: '#ccc',
                                                backgroundColor: '#fff',
                                                borderRadius: 10, marginTop: 15,
                                                borderWidth: 2
                                            }}
                                            itemStyle={{
                                                justifyContent: 'flex-start'
                                            }}
                                            placeholder="Property Type"
                                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                                            onChangeItem={item => this.setState({
                                                property_type: item.id
                                            })}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ bath: text })}
                                            placeholder="Bathroom"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <TouchableHighlight
                                    onPress={{}}
                                    // onPress={() => this.props.setUser()}
                                    underlayColor='#1b1464'
                                    style={[{ width: width - 80, marginBottom: 40 }, styles.LoginTouch]} >
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

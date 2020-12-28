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
import Spinner from 'react-native-loading-spinner-overlay';
// import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class SearchProperties extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: '',
            PropertyType: '',
            areaUnit: '',
            selectMaxArea: '',
            selectMinArea: '',
            maxPrice: '',
            minPrice: '',
            spinner: ''
        }
    }
    searchProperty() {

        this.setState({
            spinner: true,
        })
        var formData = new FormData();
        formData.append('location', this.state.location); // this.state.email
        formData.append('PropertyType', this.state.PropertyType);
        formData.append('areaUnit', this.state.areaUnit);
        formData.append('selectMaxArea', this.state.selectMaxArea);
        formData.append('selectMinArea', this.state.selectMinArea);
        formData.append('maxPrice', this.state.maxPrice);
        formData.append('minPrice', this.state.minPrice);
        formData.append('type', this.props.route.params.type);
        console.log('formData', formData)
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
        console.log('url searchProperty', Constants.searchProperty);
        fetch(Constants.searchProperty, postData)
            .then(response => response.json())
            .then(async responseJson => {
                this.setState({ spinner: false });
                console.log('responseJson', responseJson);
                if (responseJson.status === true) {
                    let res = responseJson.response;
                    this.props.navigation.navigate('SearchResults', {properties:res})
                } else {
                    Alert.alert('Error',  responseJson.error.message)
                    // this.refs.PopUp.setModal(true, responseJson.error.message);
                }
            })
            .catch(error => {
                console.log('Error ',error);
                Alert.alert('Error')
            });
    }

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
                    <Header heading="Search Properties" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <View>

                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ location: text })}
                                        placeholder="Location"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ PropertyType: text })}
                                        placeholder="Property Type"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ areaUnit: text })}
                                        placeholder="Area Unit"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ selectMaxArea: text })}
                                            placeholder="Max Area"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ selectMinArea: text })}
                                            placeholder="Min Area"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ maxPrice: text })}
                                            placeholder="Max Area"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ minPrice: text })}
                                            placeholder="Min Price"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>

                                <TouchableHighlight
                                    // onPress={() => this.props.navigation.navigate('SearchResults')}
                                    onPress={() => this.searchProperty()}
                                    underlayColor='#1b1464'
                                    style={[{ width: width - 66 }, styles.LoginTouch]} >
                                    <View >
                                        <Text style={{ color: '#fff', fontSize: 20 }} >Search Property</Text>
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
        marginTop: 40
    },
});

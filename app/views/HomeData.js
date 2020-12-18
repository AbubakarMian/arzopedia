import React from 'react';
import SwitchSelector from "react-native-switch-selector";
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
    FlatList,
    ScrollView, Platform, Alert, Picker
} from 'react-native';
import { Constants } from '../views/Constant';
var { width, height } = Dimensions.get('window');
import Spinner from 'react-native-loading-spinner-overlay';
import sampleImg from '../images/image.png';
const isIos = Platform.OS === 'ios' ? '?ios' : '';

const options = [
    { label: "BUY", value: "1" },
    { label: "RENT", value: "2" }
];
export default class HomeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
            popularproject: [],
            featureproperties: [],
            spinner: ''
        }
    }

    componentDidMount() {
        console.log('here in didmount ')
        this.getpopularproject();
        this.getfeatureproperty();
    }

    getpopularproject() {

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
        return fetch(Constants.getPopularProject, postData)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ spinner: false });
                console.log('"response Json', responseJson.response);
                if (responseJson.status === true) {
                    this.setState({
                        popularproject: responseJson.response,
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
    getfeatureproperty() {
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
        return fetch(Constants.getFeatureProperty, postData)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ spinner: false });
                console.log('"response Json feature ', responseJson.response);
                if (responseJson.status === true) {
                    this.setState({
                        featureproperties: responseJson.response,
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

    projectDetails(item) {
        console.log(item)
        // this.props.navigation.navigation.navigate('PropertyDetails')
    }

    propertyDetails() {
        console.log(item)
        // this.props.navigation.navigation.navigate('PropertyDetails')
    }


    render() {
        console.log('props !!!!!!!!!!!!', this.props.navigation)
        return (
            <ScrollView>
                 <Spinner
                    visible={this.state.spinner}
                    textContent={'Loading...'}
                />
                <View style={{ width: width - 30, marginVertical: 10 }}>
                    <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 20 }}>
                        Popular Projects
                                </Text>
                    <Text style={{}}>
                        Wapda Town, Lahore, Punjab
                                </Text>
                </View>
                <ScrollView horizontal={true} >
                    <FlatList
                        data={this.state.popularproject}
                        numColumns={3}
                        style={{ flex: 1 }}
                        renderItem={({ item, index }) => (
                            <View style={{ flexDirection: 'column', borderBottomColor: "#ddd", borderBottomWidth: 3, alignSelf: 'center', }}>
                                <TouchableOpacity
                                    style={{ flex: 1, marginBottom: 20 }}
                                    // onPress={() => this.props.navigation.navigate('PropertyDetails')}
                                    onPress={() => this.projectDetails(item)}
                                >
                                    <View >
                                        <Image
                                            style={{
                                                width: '100%',
                                                height: 115,
                                                borderWidth: 5,
                                                borderColor: '#fff'
                                            }}
                                            resizeMode="contain"
                                            source={require('../images/icon-22.png')}
                                        />
                                        <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>{item.name}</Text></View>
                                        <View><Text>{ }</Text></View>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        )}
                    />
                </ScrollView>
                <View style={{ width: width - 30, marginVertical: 10 }}>
                    <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 20 }}>
                        Feature Listing Properties
                                </Text>
                    <Text style={{}}>
                        Wapda Town, Lahore, Punjab
                                </Text>
                </View>

                {/* <FlatList

                    data={this.state.popularproject}
                    numColumns={3}
                    style={{ flex: 1 }}
                    renderItem={({ item, index }) => ( */}
                <View style={{ flexDirection: 'row', alignSelf: 'center', width: width - 30 }}>


                    <TouchableOpacity
                        onPress={() => this.projectDetails()}
                        style={{ flex: 1, marginBottom: 20 }}
                    >
                        <View >
                            <Image
                                style={{
                                    width: '100%',
                                    height: 115,
                                }}
                                resizeMode="contain"
                                // source={{uri:item.avatar}}
                                source={require('../images/image.png')}
                            />
                            {/* <View><Text style={{width:100}} numberOfLines={1} >{item.details}</Text></View> */}
                            <View><Text style={{ width: 100 }} numberOfLines={1} >sdlkfksdfj</Text></View>
                            {/* <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>{item.name}</Text></View> */}
                            <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>name name </Text></View>
                            {/* <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : {item.price}</Text></View> */}
                            <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : 89889080</Text></View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-22.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-23.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-24.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.projectDetails()}
                        style={{ flex: 1, marginBottom: 20 }}
                    >
                        <View >
                            <Image
                                style={{
                                    width: '100%',
                                    height: 115,
                                }}
                                resizeMode="contain"
                                // source={{uri:item.avatar}}
                                source={require('../images/image.png')}
                            />
                            {/* <View><Text style={{width:100}} numberOfLines={1} >{item.details}</Text></View> */}
                            <View><Text style={{ width: 100 }} numberOfLines={1} >sdlkfksdfj</Text></View>
                            {/* <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>{item.name}</Text></View> */}
                            <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>name name </Text></View>
                            {/* <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : {item.price}</Text></View> */}
                            <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : 89889080</Text></View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-22.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-23.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-24.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.projectDetails()}
                        style={{ flex: 1, marginBottom: 20 }}
                    >
                        <View >
                            <Image
                                style={{
                                    width: '100%',
                                    height: 115,
                                }}
                                resizeMode="contain"
                                // source={{uri:item.avatar}}
                                source={require('../images/image.png')}
                            />
                            {/* <View><Text style={{width:100}} numberOfLines={1} >{item.details}</Text></View> */}
                            <View><Text style={{ width: 100 }} numberOfLines={1} >sdlkfksdfj</Text></View>
                            {/* <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>{item.name}</Text></View> */}
                            <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>name name </Text></View>
                            {/* <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : {item.price}</Text></View> */}
                            <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR : 89889080</Text></View>
                            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-22.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-23.png')}
                                    />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Image
                                        style={{
                                            width: '100%',
                                            height: 30,
                                        }}
                                        resizeMode="contain"
                                        source={require('../images/icon-24.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>

                </View>
                {/* )}
                /> */}


            </ScrollView>
        )

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
        position: 'absolute',
        top: 80
    },
    TextInputArea: {
        width: width - 80,
        height: 55,
        textAlignVertical: 'center',
        color: '#1d1d1d',
        paddingLeft: 20,
        paddingHorizontal: 50,
        fontSize: 18,

    },
    TextInputIcon: {
        height: 31,
        width: 31,
        position: 'absolute',
        right: 10,
        top: 5,
        borderColor: "#fff",
        borderWidth: 1,
    },

});
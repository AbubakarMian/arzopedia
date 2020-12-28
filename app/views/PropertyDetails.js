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
    FlatList,
    ImageBackground,
    ScrollView, Platform, Alert, Picker
} from 'react-native';
import Header from '../includes/Header';
import { Constants } from '../views/Constant';
import HTML from "react-native-render-html";
var { width, height } = Dimensions.get('window');

import Spinner from 'react-native-loading-spinner-overlay';
const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class PropertyDetails extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            spinner: true,
            propertydetail: {},
            address: '',
            bath: '',
            bed: '',
            city: '',
            contact: '',
            details: '',
            id: '',
            price: '',
            sqm: '',
            type: '',
            name: '',
            user_id: '',
            avatar: []

        }
    }
    componentDidMount() {

        this.getproperty()

    }

    getproperty() {
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
        let propertydetailUrl = Constants.propert_detail + '?property_id=' + this.props.route.params.prop_id;
        return fetch(propertydetailUrl, postData)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ spinner: false });
                console.log('response Json propert_detail ', responseJson.response);
                if (responseJson.status === true) {
                    let arrAvatar = JSON.parse(responseJson.response.avatar)
                    console.log('arrAvatar', arrAvatar);
                    this.setState({
                        address: responseJson.response.address,
                        bath: responseJson.response.bath,
                        bed: responseJson.response.bed,
                        city: responseJson.response.city,
                        contact: responseJson.response.contact,
                        details: responseJson.response.details,
                        id: responseJson.response.id,
                        price: responseJson.response.price,
                        sqm: responseJson.response.sqm,
                        type: responseJson.response.type,
                        name: responseJson.response.name,
                        user_id: responseJson.response.user_id,
                        avatar: arrAvatar,
                    });
                } else {
                    // this.refs.PopUp.setModal(true , responseJson.error.message);
                    Alert.alert('Error', responseJson.error.message);
                }
            })
            .catch(error => {
                console.log(error);
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
                    <Header heading="Property Details" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <FlatList
                                data={this.state.avatar}
                                // style={{ flex: 1 }}
                                horizontal
                                renderItem={({ item, index }) => (
                                    <ScrollView>

                                        <Image
                                            style={{
                                                width: width,
                                                height: height / 3.5,
                                            }}
                                            resizeMode="contain"
                                            // source={require('../images/slider.jpg')}
                                            source={{ uri: item }}

                                        />
                                    </ScrollView>
                                )}
                            />

                            <View style={{ width: width - 30, borderBottomColor: "#ddd", borderBottomWidth: 3, marginTop: 5 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold' }}>
                                    {this.state.name}
                                </Text>
                                <Text style={{ paddingVertical: 5 }}>
                                    {this.state.address}
                                </Text>
                            </View>
                            <View style={{ color: '#43c6ac', alignSelf: 'flex-start', marginLeft: 15, marginTop: 10 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 18 }}>Details</Text>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 10 }}>
                                    <Text style={{ flex: 1 }}>Property ID</Text>
                                    <Text style={{ flex: 1 }}>Prop 00{this.state.id}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Type</Text>
                                    <Text style={{ flex: 1 }}> {this.state.type}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Price</Text>
                                    <Text style={{ flex: 1 }}>PKR:  {this.state.price}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Area</Text>
                                    <Text style={{ flex: 1 }}>SQM {this.state.sqm}</Text>
                                </View>
                            </View>
                            <View style={{ color: '#43c6ac', alignSelf: 'flex-start', marginLeft: 15, marginTop: 10 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 18 }}>Description</Text>
                                <View style={{ width: width - 30, paddingVertical: 10 }}>
                                    {/* <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                        </Text> */}
                                    <HTML source={{ html: this.state.details }} />
                                </View>
                            </View>
                            <TouchableHighlight
                                onPress={() => this.props.navigation.navigate('Emails',{user_id:this.state.user_id})}
                                // onPress={() => this.props.setUser()}
                                underlayColor='#1b1464'
                                style={{
                                    width: width - 30,
                                    backgroundColor: '#43c6ac',
                                    color: '#fff',
                                    alignItems: 'center',
                                    padding: 10,
                                    borderRadius: 5,
                                    marginTop: 10
                                }} >
                                <View >
                                    <Text style={{ color: '#fff', fontSize: 20 }} >Email</Text>
                                </View>
                            </TouchableHighlight>
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

});

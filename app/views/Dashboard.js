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
    FlatList,
    ScrollView, Platform, Alert, Picker
} from 'react-native';
import { connect } from 'react-redux';
import { SET_USER, LOGOUT_USER } from '../redux/constants/index';
import Header from '../includes/Header';
import HTML from "react-native-render-html";
import { Constants } from '../views/Constant';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
            lastScrollPos: height / 10,
            page: 1,
            spinner: false
        }

    }

    componentDidMount() {



        this.getCourseList(Constants.dashboard)
    }
    componentWillReceiveProps() {

        console.log(' componentWillReceiveProps componentWillReceiveProps')
    }

    getCourseList(propertylistUrl) {
        let postData = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Authorization:  this.props.user.access_token,
                'Authorization-secure':  this.props.user.access_token,
                'client-id': Constants.clientID
            },
        };
        return fetch(propertylistUrl, postData)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ spinner: false });
                console.log('response Json property List ', responseJson.response.data);
                
                this.setState({ spinner: false })
                if (responseJson.status === true) {
                    let array_list = this.state.list.concat(responseJson.response.data);
                    console.log('array_list array_list', array_list);
                    this.setState({
                        list: array_list
                    });
                } else {
                    // this.refs.PopUp.setModal(true , responseJson.error.message);
                    Alert.alert('Error', responseJson);
                }
            })
            .catch(error => {
                console.log(error);
            });

    }

    handleScroll = (event) => {
        let currentScrollPos = event.nativeEvent.contentOffset.y

        // console.log('currentScrollPos',currentScrollPos);
        // return;
        let sensitivity = height / 4;

        if (currentScrollPos < this.state.lastScrollPos && Math.abs(this.state.lastScrollPos - currentScrollPos) < sensitivity) {
            console.log('Event hit !!!!');
            // return
            this.setState({
                page: ++this.state.page,
                lastScrollPos: event.nativeEvent.contentOffset.y
            })
            let courseListUrl = Constants.dashboard + '?page=' + this.state.page + '&items_count=10';
            this.getCourseList(courseListUrl);
            console.log('here hit ')
        }
    }

    render() {
        console.log(' list list ',this.state.list);
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Search Results" navigation={this.props} />
                    <ScrollView
                        onScroll={this.handleScroll}
                    >

                        <FlatList
                            data={this.state.list}
                            numColumns={1}
                            // style={{ flex: 1 }}
                            renderItem={({ item, index }) => (
                                <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('PropertyDetails', { prop_id: item.id })}
                                        style={{
                                            flexDirection: 'row',
                                            borderRadius: 15,
                                            marginHorizontal: 10,
                                            padding: 20,
                                            marginVertical: 10,
                                            borderColor: "#ccc",
                                            borderWidth: 2,

                                        }}
                                    >
                                        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                            <Image
                                                style={{
                                                    width: '100%',
                                                    height: 100,
                                                }}
                                                resizeMode="contain"
                                                source={require('../images/image.png')}
                                            />
                                        </View>
                                        <View style={{ flex: 3, paddingLeft: 10, alignSelf: 'center' }}>

                                            {/* <HTML  source={{  html: item.details }}  renderers={{
                                                p: (_, children) => <Text numberOfLines={1}>  {children}</Text>,
                                            }} /> */}
                                            {/* color: '#43c6ac', */}
                                            <View style={{ borderBottomWidth: 1 }}>
                                                <Text
                                                    numberOfLines={2}
                                                    style={{ paddingVertical: 5, }}>
                                                    {item.address}
                                                </Text>
                                            </View>
                                            <View style={{ flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: 30,
                                                        }}
                                                        resizeMode="contain"
                                                        source={require('../images/icon-22.png')}
                                                    />
                                                    <Text style={{ textAlign: 'center' }}>{item.bed} Beds </Text>
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
                                                    <Text style={{ textAlign: 'center' }}>{item.bath} Baths </Text>
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
                                                    <Text style={{ textAlign: 'center' }}>{item.sqm} SQM</Text>
                                                </View>
                                                <View style={{ flex: 1 }}>
                                                    <Image
                                                        style={{
                                                            width: '100%',
                                                            height: 30,
                                                        }}
                                                        resizeMode="contain"
                                                        source={require('../images/icon-25.png')}
                                                    />
                                                    <Text style={{ textAlign: 'center' }}>Kitchen</Text>
                                                </View>
                                            </View>
                                        </View>

                                    </TouchableOpacity>
                                </View>
                            )}
                        />

                    </ScrollView>
                </ImageBackground>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        user: state.userReducer
    }
};
function mapDispatchToProps(dispatch) {
    return {
        setUser: (value) => dispatch({ type: SET_USER, value: value }),
        logoutUser: () => dispatch({ type: LOGOUT_USER })
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)


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

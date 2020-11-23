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
    ScrollView, Platform, Alert, Picker
} from 'react-native';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

const options = [
    { label: "BUY", value: "1" },
    { label: "RENT", value: "2" }
];
export default class HomeData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1
        }
    }
    render() {
            return (
                <ScrollView>
                    <View style={{ width: width - 30, marginVertical: 10 }}>
                        <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 20 }}>
                            Popular Projects
                                </Text>
                        <Text style={{}}>
                            Wapda Town, Lahore, Punjab
                                </Text>
                    </View>
                    <View style={{ flexDirection: 'row', borderBottomColor: "#ddd", borderBottomWidth: 3, alignSelf: 'center', width: width - 30 }}>
                        <TouchableOpacity
                            style={{ flex: 1, marginBottom: 20 }}
                            onPress={() => this.props.navigation.navigate('PropertyDetails')}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View><Text>Huzaifa Comfort</Text></View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, marginBottom: 20 }}
                            onPress={() => this.props.navigation.navigate('PropertyDetails')}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View><Text>Huzaifa Comfort</Text></View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ flex: 1, marginBottom: 20 }}
                            onPress={() => this.props.navigation.navigate('PropertyDetails')}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View><Text>Huzaifa Comfort</Text></View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: width - 30, marginVertical: 10 }}>
                        <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 20 }}>
                            Feature Listing Properties
                                </Text>
                        <Text style={{}}>
                            Wapda Town, Lahore, Punjab
                                </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: width - 30 }}>
                        <TouchableOpacity
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                    {/* new Section */}
                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: width - 30 }}>
                        <TouchableOpacity
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                            style={{ flex: 1, marginBottom: 20 }}
                        >
                            <View >
                                <Image
                                    style={{
                                        width: '100%',
                                        height: 115,
                                    }}
                                    resizeMode="contain"
                                    source={require('../images/image.png')}
                                />
                                <View><Text>Huzaifa Comfort is my new Home </Text></View>
                                <View><Text style={{ color: '#43c6ac', fontWeight: 'bold', }}>Huzaifa Comfort</Text></View>
                                <View style={{ borderBottomColor: "#ddd", borderBottomWidth: 3, }}><Text>PKR :45,000,000 </Text></View>
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
                    {/* end new section */}
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
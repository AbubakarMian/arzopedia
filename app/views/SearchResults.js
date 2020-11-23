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
// import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class SearchResults extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Search Results" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('PropertyDetails')}
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
                                        <Text style={{ color: '#000', fontWeight: '700', paddingTop: 2, fontsize: 18, borderBottomWidth: 2, borderBottomColor: '#000' }}>
                                            INDUSTRIAL PLOTS - THE ULTIMATE REAL ESTATE INVESTMENT!
                                    </Text>
                                        <Text style={{ color: '#43c6ac', paddingVertical: 5 }}>
                                            Wapda Town, Lahore, Punjab
                                    </Text>
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
                                                <Text style={{ textAlign: 'center' }}>Beds 5</Text>
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
                                                <Text style={{ textAlign: 'center' }}>Baths 4</Text>
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
                                                <Text style={{ textAlign: 'center' }}>1 Kanal</Text>
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
                            {/* new */}
                            <View style={{
                                flexDirection: 'row',
                                borderRadius: 15,
                                marginHorizontal: 10,
                                padding: 20,
                                marginVertical: 10,
                                borderColor: "#ccc",
                                borderWidth: 2,
                            }}>
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
                                <View style={{ flex: 3, paddingLeft: 10, alignSelf: 'center', }}>
                                    <Text style={{ color: '#000', fontWeight: '700', paddingTop: 2, fontsize: 18, borderBottomWidth: 2, borderBottomColor: '#000' }}>
                                        INDUSTRIAL PLOTS - THE ULTIMATE REAL ESTATE INVESTMENT!
                                    </Text>
                                    <Text style={{ color: '#43c6ac', paddingVertical: 5 }}>
                                        Wapda Town, Lahore, Punjab
                                    </Text>
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
                                            <Text style={{ textAlign: 'center' }}>Beds 5</Text>
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
                                            <Text style={{ textAlign: 'center' }}>Baths 4</Text>
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
                                            <Text style={{ textAlign: 'center' }}>1 Kanal</Text>
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
                            </View>
                            {/* new */}
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

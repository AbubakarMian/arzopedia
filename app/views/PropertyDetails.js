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

export default class PropertyDetails extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Property Details" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                style={{
                                    width: width,
                                    height: height / 3.5,
                                }}
                                resizeMode="contain"
                                source={require('../images/slider.jpg')}
                            />

                            <View style={{ width: width - 30, borderBottomColor: "#ddd", borderBottomWidth: 3, marginTop: 5 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold' }}>
                                    INDUSTRIAL PLOTS - THE ULTIMATE REAL ESTATE INVESTMENT!
                                </Text>
                                <Text style={{ paddingVertical: 5 }}>
                                    Wapda Town, Lahore, Punjab
                                </Text>
                            </View>
                            <View style={{ color: '#43c6ac', alignSelf: 'flex-start', marginLeft: 15, marginTop: 10 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 18 }}>Details</Text>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 10 }}>
                                    <Text style={{ flex: 1 }}>Property ID</Text>
                                    <Text style={{ flex: 1 }}>234234234t64</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Type</Text>
                                    <Text style={{ flex: 1 }}>Commercial Plot</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Price</Text>
                                    <Text style={{ flex: 1 }}>PKR: 42,303000</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: width - 30, borderColor: '#ddd', borderBottomWidth: 2, paddingVertical: 5 }}>
                                    <Text style={{ flex: 1 }}>Area</Text>
                                    <Text style={{ flex: 1 }}>1 Kanal</Text>
                                </View>
                            </View>
                            <View style={{ color: '#43c6ac', alignSelf: 'flex-start', marginLeft: 15, marginTop: 10 }}>
                                <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 18 }}>Description</Text>
                                <View style={{ width: width - 30, paddingVertical: 10 }}>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                        </Text>
                                </View>
                            </View>
                            <TouchableHighlight
                                 onPress={() => this.props.navigation.navigate('Emails')}
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

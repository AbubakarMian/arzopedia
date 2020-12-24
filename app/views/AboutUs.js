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

export default class AboutUs extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="About Us" navigation={this.props} />
                    <ScrollView>
                        <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                            
                            <View style={{ color: '#43c6ac', alignSelf: 'flex-start', marginLeft: 15, marginTop: 10 }}>
                                {/* <Text style={{ color: '#43c6ac', fontWeight: 'bold', fontSize: 18 }}>Description</Text> */}
                                <View style={{ width: width - 30, paddingVertical: 10 }}>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                    <Text>
                                        A contemporary gated and secure community, ‘Oasis Park Residencia’ aims to provide a luxurious, indulgent and overall comfortable environment to its dwellers. A place where the residents can kick up their heels and take a moment to enjoy a beautiful sunset, spend some quality time with family,
                                    </Text>
                                </View>
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

});

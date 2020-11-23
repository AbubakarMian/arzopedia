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

export default class SearchProperties extends React.Component {


    render() {
        return (
            <View style={styles.container}>
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
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="USER NAME"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="USER NAME"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="USER NAME"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                <View style={styles.TextBoxArea}>
                                    <TextInput
                                        underlineColorAndroid="transparent"
                                        onChangeText={text => this.setState({ email: text })}
                                        placeholder="USER NAME"
                                        placeholderTextColor="#1d1d1d"
                                        style={styles.TextInputArea}
                                    />
                                </View>
                                
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ email: text })}
                                            placeholder="USER NAME"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ email: text })}
                                            placeholder="USER NAME"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row' }}>
                                    <View style={[{ flex: 1, marginRight: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ email: text })}
                                            placeholder="USER NAME"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                    <View style={[{ flex: 1, marginLeft: 5 }, styles.TextBoxArea]}>
                                        <TextInput
                                            underlineColorAndroid="transparent"
                                            onChangeText={text => this.setState({ email: text })}
                                            placeholder="USER NAME"
                                            placeholderTextColor="#1d1d1d"
                                            style={styles.TextInputArea}
                                        />
                                    </View>
                                </View>
                                
                                <TouchableHighlight
                                    onPress={() => this.props.navigation.navigate('SearchResults')}
                                    // onPress={() => this.props.setUser()}
                                    underlayColor='#1b1464'
                                    style={[{ width: width - 66  }, styles.LoginTouch]} >
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
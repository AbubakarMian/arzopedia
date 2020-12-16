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
import HomeData from '../views/HomeData';
import HeaderHome from '../includes/HeaderHome';
import { Constants } from '../views/Constant';
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

const options = [
    { label: "BUY", value: "1" },
    { label: "RENT", value: "2" }
];
export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1,
           
        }
    }

 



    render() {
        return (
            <View style={styles.container}>
                <HeaderHome heading="Home" navigation={this.props} />
                <ImageBackground
                    style={styles.ImageBackground}
                >

                    <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }}>
                        <Image
                            style={{
                                width: width,
                                height: height / 3.5,
                                position: 'relative'
                            }}
                            resizeMode="contain"
                            source={require('../images/slider.jpg')}
                        />
                        <SwitchSelector
                            options={options}
                            initial={0}
                            selectedColor={"#fff"}
                            buttonColor={"#43c6ac"}
                            borderColor={"#43c6ac"}
                            textColor={"#43c6ac"}
                            borderRadius={5}
                            onPress={(value) => { this.setState({ tabIndex: value }) }}
                            style={{ position: 'absolute', width: width - 80, top: 30 }}
                        />
                        <View style={styles.TextBoxArea}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                onChangeText={text => this.setState({ email: text })}
                                placeholder="Search Properties"
                                placeholderTextColor="#A9A9A9"
                                style={styles.TextInputArea}
                            />
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('SearchProperties')}
                                style={styles.TextInputIcon}
                            >
                                <Image
                                    style={styles.TextInputIcon}
                                    source={require('../images/search.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        {/* {this.state.tabIndex == 1 ? */}
                            <HomeData />
                            {/* :
                            <View>
                                <Text>Rent</Text>
                            </View>} */}

                    </View>
                </ImageBackground>
            </View>
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
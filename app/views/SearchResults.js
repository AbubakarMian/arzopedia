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
import Header from '../includes/Header';
import HTML from "react-native-render-html";
// import styles from '../styleSheets/SignUpCss'
var { width, height } = Dimensions.get('window');

const isIos = Platform.OS === 'ios' ? '?ios' : '';

export default class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            propertyList: [],

        }
    }

    componentDidMount() {
        this.setState({
            propertyList: this.props.route.params.properties
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.ImageBackground}
                >
                    <Header heading="Search Results" navigation={this.props} />
                    <ScrollView>

                        <FlatList
                            data={this.state.propertyList}
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
                                            
                                            <HTML  source={{  html: item.details }}  renderers={{
                                                p: (_, children) => <Text numberOfLines={1}>  {children}</Text>,
                                            }} />
                                            <Text style={{ color: '#43c6ac', paddingVertical: 5 }}>
                                                {item.address}
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

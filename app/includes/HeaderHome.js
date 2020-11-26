import React from 'react';
import {
    View, Text, TouchableHighlight, TouchableOpacity,
    Dimensions, Button, StyleSheet, Image, ImageBackground, ScrollView, TextInput
} from 'react-native';
import styles from '../styleSheets/HeaderCss';

var { width, height } = Dimensions.get('window');
export const mylist = [];



export default class HeaderHome extends React.Component {

    render() {
        console.log('props !!!!!!!!',this.props.navigation.navigation)
        return (
            <View >
                <View style={{
                    flexDirection: 'row',
                    width: width,
                    paddingVertical: 20,
                    backgroundColor: '#43c6ac',
                }}>
                    <View style={{ flex: 0.5, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigation.openDrawer()}
                        >
                            <Image
                                style={{
                                    width: 25,
                                    height: 25,
                                }}
                                resizeMode="contain"
                                source={require('../images/menu.png')}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 2,
                        justifyContent: 'center', alignSelf: 'center', alignItems: 'center'
                    }}>
                        <Text style={{
                            textAlign: 'center',
                            color: '#fff',
                            fontWeight:'bold',
                            fontSize:18,
                        }}>
                            {this.props.heading}
                        </Text>
                    </View>
                    <View style={{paddingHorizontal:35}}></View>
                </View>
            </View>
        );
    }
}

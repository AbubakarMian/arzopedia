import React from 'react'
import {View, ImageBackground, Text, Dimensions, Image,Platform} from 'react-native'
import splashImg from '../images/splash.jpg'

const {width, height} = Dimensions.get('window')
const isAndroid = Platform.OS == 'android'
export default class SplashScreen extends React.Component {
  render () {
    return (
      <View style={{}}>
        <ImageBackground
        
          source={splashImg}
          resizeMode= 'cover'
          style={{
            
            width: isAndroid ? width : 'auto',
            height: '100%' ,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          </ImageBackground>
      </View>
    )
  }
}

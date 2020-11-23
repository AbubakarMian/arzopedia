import React from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity, Dimensions, Button, StyleSheet, Image, ImageBackground, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { connect } from 'react-redux';
import { Constants } from '../View/Constant'
import { SET_USER, LOGOUT_USER } from '../redux/constants/index';
// import ModalDropdown from 'react-native-modal-dropdown';
var { width, height } = Dimensions.get('window');
 class HeaderHome extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: 0, 
            access_token:Constants.autherizationKey
        }
    }
    
    static navigationOptions = {
        header: null,

    };
    logout(){

        console.log('here');
        this.props.setUser(this.state);
        this.props.navigation.navigate('SignIn')
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#1099ea',
                height: 60,
                alignItems: 'center',
            }}>
                <View style={{ flex: 1 , flexDirection:'row' }}>
                <TouchableOpacity
                         onPress={() =>this.logout()}
                        underlayColor='#000'
                        style={{alignItems:'flex-start' ,paddingLeft:20 }} >
                        <View >
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                                source={require('../images/logout.png')}
                            />
                            <Text style={{color:'#fff'}}>Logout</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={() => this.props.navigation.navigate('Settings')}
                        underlayColor='#000'
                        style={{alignItems:'flex-end' ,marginLeft:250}} >
                        <View
                        style={{alignSelf:'center'}}
                        >
                            <Image
                                style={{
                                    height: 30,
                                    width: 30,
                                }}
                                source={require('../images/settings.png')}
                            />
                        </View>
                        <Text style={{color:'#fff'}}>Settings</Text>
                    </TouchableOpacity>
                </View>
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
      setUser: (value) => dispatch({ type: SET_USER ,value:value}),
      logoutUser: () => dispatch({ type: LOGOUT_USER })
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(HeaderHome)

import * as React from 'react';
import { Button, View, Text, Image, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './views/Home';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import ForgetPassword from './views/ForgetPassword';
import AddProperties from './views/AddProperties';
import SearchProperties from './views/SearchProperties';
import SearchResults from './views/SearchResults';
import PropertyDetails from './views/PropertyDetails';
import Emails from './views/Emails';
import ContactUs from './views/ContactUs';
import PrivacyPolicy from './views/PrivacyPolicy';
import AboutUs from './views/AboutUs';
import { Icon } from 'native-base';

import { NavigationContainer } from '@react-navigation/native';
import { Form } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();
function CustomDrawerContent({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: '#43C6AC' }}>
      <View style={{ alignSelf: 'center', justifyContent: 'center', height: 150 }}>
        <Image
          style={{
            width: 230,
            height: 70,
            alignSelf: 'center', justifyContent: 'center'
          }}
          source={require('./images/whitelogo.png')}
        />
      </View>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('Home'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-28.png')}
          />
          <Text style={styles.BtnText}>Home</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('AddProperties'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-29.png')}
          />
          <Text style={styles.BtnText}>Add Properties</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('SearchProperties'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-28.png')}
          />
          <Text style={styles.BtnText}>Search Properties</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('SearchResults'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-28.png')}
          />
          <Text style={styles.BtnText}>Search Results</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('PropertyDetails'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-28.png')}
          />
          <Text style={styles.BtnText}>Property Details</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('Emails'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-28.png')}
          />
          <Text style={styles.BtnText}>Emails</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('ContactUs'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-32.png')}
          />
          <Text style={styles.BtnText}>Contact Us</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('AboutUs'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-31.png')}
          />
          <Text style={styles.BtnText}>About Us</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        onPress={() => { navigation.navigate('PrivacyPolicy'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-30.png')}
          />
          <Text style={styles.BtnText}>Privacy Policy</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#191654"
        // onPress={() => { navigation.navigate('PrivacyPolicy'); }}
        style={styles.TouchBtn}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 28,
              height: 28,
            }}
            source={require('./images/icon-33.png')}
          />
          <Text style={styles.BtnText}>Log out</Text>
        </View>
      </TouchableHighlight>

    </ScrollView>
  );
}

export default class AppNavigation extends React.Component {

  render() {

    return (
      <NavigationContainer>

        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawerContent {...props} />}>
             <Drawer.Screen name="AddProperties" component={AddProperties} />
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="ForgetPassword" component={ForgetPassword} />
          <Drawer.Screen name="SearchProperties" component={SearchProperties} />
          <Drawer.Screen name="SearchResults" component={SearchResults} />
          <Drawer.Screen name="PropertyDetails" component={PropertyDetails} />
          <Drawer.Screen name="Emails" component={Emails} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
          <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  TouchBtn: {
    backgroundColor: 'transparent',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 1,
  },
  BtnText: {
    color: '#fff',
    alignSelf: 'center',
    marginLeft: 25,
    fontSize: 18
  },
});
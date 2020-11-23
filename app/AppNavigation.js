import * as React from 'react';
import { Button, View,ScrollView,Text } from 'react-native';
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

import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default class AppNavigation extends React.Component {

  render() {

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"
        drawerStyle={{
          backgroundColor: '#c6cbef',
        }}
        >
          <ScrollView>
            
          <Drawer.Screen name="Home" component={Home} /> 
              <Text>Its home</Text>
         
           
          <Drawer.Screen name="SignIn" component={SignIn} />
          <Drawer.Screen name="SignUp" component={SignUp} />
          <Drawer.Screen name="ForgetPassword" component={ForgetPassword} />
          <Drawer.Screen name="AddProperties" component={AddProperties} />
          <Drawer.Screen name="SearchProperties" component={SearchProperties} />
          <Drawer.Screen name="SearchResults" component={SearchResults} />
          <Drawer.Screen name="PropertyDetails" component={PropertyDetails} />
          <Drawer.Screen name="Emails" component={Emails} />
          <Drawer.Screen name="ContactUs" component={ContactUs} />
          <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
          <Drawer.Screen name="AboutUs" component={AboutUs} />
          </ScrollView>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
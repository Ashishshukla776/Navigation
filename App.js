
 import * as React from 'react';
//import {View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Count from './Components/Count';
//import UseStateObject from './Components/UseStateObject';
//import UseStateArray from './Components/UseStateArray';
import Login from './Components/Login';
import AboutScreen from './Components/AboutScreen';

const Drawer=createDrawerNavigator();
function App() {
  

  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name='Home'
        component={Login}/>
        <Drawer.Screen name='About Us'
        component={AboutScreen}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splashscreen from '../../screen/splashscreen/Splashscreen';
import Home from '../../screen/home/Home';
import Bookdetail from '../../screen/bookdetail/Bookdetail';
const Stack = createNativeStackNavigator();
const Mystack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splashscreen" component={Splashscreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Bookdetail" component={Bookdetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Mystack;

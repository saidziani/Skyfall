import React from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'

import Signup from './components/Signup'
import Signin from './components/Signin'
import About from './components/About'
import Search from './components/Search'
import List from './components/List'
import Home from './components/Home'
import style from './Style'


import {TabNavigator, StackNavigator} from 'react-navigation'

import { YellowBox } from 'react-native';
YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);


const RootStack = StackNavigator(
    {
        Home: { screen: Home,},
        Signup: { screen: Signup,},
        Signin: {screen: Signin,},
        About: { screen: About,},
        Search: { screen: Search,},
        List: {screen: List,},
    },
    {
        initialRouteName: 'Home',
    }
);


export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}

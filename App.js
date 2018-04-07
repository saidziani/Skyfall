import React from 'react'
import {View, StyleSheet, StatusBar} from 'react-native'
import About from './components/About'
import Search from './components/Search'
import style from './Style'
import {TabNavigator} from 'react-navigation'

import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
]);

const Tabs = TabNavigator(
    {
        Search: {screen: Search},
        About: {screen: About}
    },
    {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
            indicatorStyle: {
                height: 3,
                backgroundColor: '#000'
            },
            style:{
                backgroundColor: style.black,
                borderTopWidth: 2,
                borderColor: '#000'
            }
        }
    }
)

export default class App extends React.Component {


  render() {
    return (
        <View style={{flex: 1}}>
            <StatusBar hidden={true}/>
            <Tabs />
        </View>
    );
  }
}

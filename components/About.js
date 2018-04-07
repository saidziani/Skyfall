import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'
import style from '../Style'

export default class About extends React.Component{

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{width:20, height:20}} />
        }
    }

    search () {
        this.props.navigation.navigate('Search')
    }

    render(){
        return(
            <View>
                <Text style={style.title}>À propos de moi</Text>
                <Text style={style.text}>Hey Saïd lorem ispsum turom borrm</Text>
                <Button color={style.white} onPress={() => this.search()} title="Search" />
            </View>
        )
    }
}

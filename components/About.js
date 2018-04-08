import React from 'react'
import {View, Text, StyleSheet, Image, Button, TouchableOpacity} from 'react-native'
import style from '../Style'

export default class About extends React.Component{

    static navigationOptions = {
        title: 'About me',
        //tabBarIcon: () => {
        //    return <Image source={require('./icons/home.png')} style={{width:20, height:20}} />
        //}
        headerLeft: null,
    }

    constructor (props){
        super(props)
        this.state = {
            email: this.props.navigation.state.params.email,
        }
    }

    search () {
        this.props.navigation.navigate('Search')
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.title}>Hello {this.state.email} ! welcome to my first awesome React Native app, fork this project here 'http://github.com/saidziani'</Text>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity onPress={() => this.search()}>
                        <Image source={require('./icons/start.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

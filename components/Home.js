import React from 'react'
import {Image, View, ActivityIndicator} from 'react-native'
import style from '../Style'


export default class Home extends React.Component{
    
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        setTimeout( () => {
            this.move();
        },500);
    }

    move (){
        this.props.navigation.navigate('Signin')
    }

    render(){
        return(
            <View style={{flex: 1, justifyContent: 'center',  alignItems: 'center'}}>
                <Image style={style.logo} source={require('./icons/twss-noir.png')}  />
                <ActivityIndicator color={style.black} size="large"/>
            </View>         
        )
    }
}




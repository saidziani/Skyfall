import React from 'react'
import {Text, Image, View, Button, AppRegistry, ActivityIndicator} from 'react-native'
import style from '../Style'
import Signup from './Signup'
import {StackNavigator} from 'react-navigation'


class Home extends React.Component{
    
    static navigationOptions = {
        header: null
    }

    componentDidMount(){
        setTimeout( () => {
            this.move();
        },500);
    }

    move (){
        this.props.navigation.navigate('Signup')
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

export default StackNavigator({
  Home: { screen: Home},
  Signup: { screen: Signup }
});




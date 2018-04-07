import React from 'react'
import {TextInput, Image, Button, View} from 'react-native'

import style from '../Style'

import {StackNavigator} from 'react-navigation'

import List from './List'

import PropTypes from 'prop-types'

class Search extends React.Component{

    static navigationOptions = {
        title:"Search City",
        tabBarIcon: () => {
            return <Image source={require('./icons/twit.png')} style={{width:20, height:20}} />
        }
    }

    constructor (props){
        super(props)
        this.state = {
            city: 'Algiers'
        }
    }


    submit(){
        this.props.navigation.navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({city: text})}
                    value={this.state.city}
                />
                <Button color={style.red} onPress={() => this.submit()} title="Submit" />
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}


export default StackNavigator({
    Search:{ screen: Search, navigationOptions },
    Result:{ screen: List, navigationOptions}
})
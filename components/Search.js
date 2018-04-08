import React from 'react'
import {TextInput, Image, Button, View} from 'react-native'

import style from '../Style'


export default class Search extends React.Component{

    static navigationOptions = {
        title:"Search City",
        //tabBarIcon: () => {
        //    return <Image source={require('./icons/search.png')} style={{width:20, height:20}} />
        //}
    }

    constructor (props){
        super(props)
        this.state = {
            city: 'Algiers'
        }
    }

    submit(){
        this.props.navigation.navigate('List', {city: this.state.city})
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({city: text})}
                    value={this.state.city}
                />
                <Button color={style.black} onPress={() => this.submit()} title="Submit" />
            </View>
        )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
}

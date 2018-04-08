import React from 'react'
import {Text, Image, View, Button, AppRegistry, TextInput} from 'react-native'
import style from '../Style'
import About from './About'


import {StackNavigator} from 'react-navigation'


class Signup extends React.Component{
    
    static navigationOptions = {
        title: "Signup",
        header: null
    }

    static confirmPassword = ''

    constructor (props){
        super(props)
        this.state = {
            name: '',
            email: '',
            password: ''
        }
    }

    submit(){
        this.props.navigation.navigate('About', {name: this.state.name, email: this.state.email})
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>Name</Text>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />

                <Text style={style.text}>Email</Text>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />

                <Text style={style.text}>Password</Text>
                <TextInput secureTextEntry={true} style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />

                <Text style={style.text}>Confirm Password</Text>
                <TextInput secureTextEntry={true} style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({confirmPassword: text})}
                    value={this.confirmPassword}
                />
                <Button color={style.black} onPress={() => this.submit()} title="Submit" />
            </View>

        )
    }
}


export default StackNavigator({
    Signup: { screen: Signup },
    About: { screen: About }
});
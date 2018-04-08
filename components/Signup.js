import React from 'react'
import {Text, View, Button, TextInput} from 'react-native'
import style from '../Style'
import About from './About'


export default class Signup extends React.Component{
    
    static navigationOptions = {
        title: "Signup",
    }

    static confirmPassword = ''

    constructor (props){
        super(props)
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    }

    signup(){
        this.props.navigation.navigate('About')
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>username</Text>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}
                />

                <Text style={style.text}>email</Text>
                <TextInput style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />

                <Text style={style.text}>password</Text>
                <TextInput secureTextEntry={true} style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}
                />

                <Text style={style.text}>confirm Password</Text>
                <TextInput secureTextEntry={true} style={style.input}
                    underlineColorAndroid = 'transparent'
                    onChangeText={(text) => this.setState({confirmPassword: text})}
                    value={this.confirmPassword}
                />
                <Button color={style.black} onPress={() => this.signup()} title="Register" />
            </View>

        )
    }
}
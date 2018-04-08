import React from 'react'
import {Text, View, Button, TextInput, TouchableOpacity, Image} from 'react-native'
import style from '../Style'


export default class Signin extends React.Component{

    static navigationOptions = {
        title: "Signin",
    }

    constructor (props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    signup(){
        this.props.navigation.navigate('Signup')
    }

    login(){
        this.props.navigation.navigate('About', {email: this.state.email})
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.text}>username or email</Text>
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
                <Button color={style.black} onPress={() => this.login()} title="Login" />
                <TouchableOpacity onPress={() => this.signup()}>
                    <Text style={style.text, {paddingTop:20, textAlign: 'center'}}>
                        Don't have an account ?
                    </Text>
                </TouchableOpacity>
            </View>

        )
    }
}
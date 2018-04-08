import React from 'react'
import {Text, Image, View, Button, AppRegistry, TextInput} from 'react-native'
import style from '../Style'
// import Home from './Home'

import {StackNavigator} from 'react-navigation'


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

    submit(){
        // if (this.confirmPassword === this.state.password){
        //     this.props.navigation.navigate('About', {name: this.state.name, email: this.state.email})
        // } else{
        this.props.navigation.navigate('About', {name: this.state.name, email: this.state.email})
        // }
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

// const App1 = StackNavigator({
//   Home: { screen: Home },
//   Signup: { screen: Signup },
// });

// export default Signup

import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'
import style from '../../Style'

import 'moment/locale/fr'
moment.locale('fr')
export default class Row extends React.Component{

    static propTypes = {
        day: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired
    }

    day(){
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text>{ day.toUpperCase() }</Text>
        )
    }

    date(){
        let date = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{ date }</Text>
        )
    }

    icon (size = 40) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image = ''
        switch (type){
            case 'clouds':
                image = require('./icons/cloud.png')
                break;
            case 'rain':
                image = require('./icons/rain.png')
                break;
            default:
                image = require('./icons/sun.png')
                break;
        }
        return(
            <Image source={image} style={{width: size, height: size}} />
        )
    }

    render (){
        return(
            <View style={localStyle.view}>
                {this.icon()}
                <Text>
                    {this.day()} {this.date()}
                </Text>


                <Text style={localStyle.temp}>
                    {Math.round(this.props.day.main.temp)}^C
                </Text>

            </View>

        )
    }
}

const localStyle  = StyleSheet.create({
    view: {
        backgroundColor: style.white,
        borderWidth: 1,
        borderBottomColor: style.gray,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    temp: {
        color: style.black,
        fontSize: 18
    }



})
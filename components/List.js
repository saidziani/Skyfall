import React from 'react'
import {Text, ActivityIndicator, ListView, Image} from 'react-native'

import style from '../Style'

import axios from 'axios'

import WeatherRow from './weather/Row'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: `Weather / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/search.png')} style={{width:20, height:20}} />
            }
        }

    }

    constructor (props){
        super(props)
        this.state = {
            city: this.props.navigation.state.params.city,
            weather: null
        }
        this.fetchWeather()
    }


    fetchWeather(){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&cnt=20&units=metric&appid=89663512909716c62367d9089f12de93`).then((response) => {
                this.setState({weather: response.data})
            })

    }

    render(){
        if (this.state.weather === null) {
            return(
                <ActivityIndicator color={style.red} size="large"/>
            )
        } else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.weather.list)}
                    renderRow={(row, j, i) => <WeatherRow day={row} index={parseInt(i, 10)} />}
                    //renderRow={(row) => <Text>{row.main.temp} </Text>}
                />
            )
        }
    }


}
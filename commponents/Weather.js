import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types';

const WeatherCases={
    Rain:{
        colors:['#00c6Fb', '#005BEA'],
        title:"It's raning man! O.M.G!!! is raining man!",
        subtitle:"하늘에서 씨꺼먼 남정네가 내려와 -_-;;;;;",
        icon:"weather-rainy"
    },

    Clear:{
        colors:['#FEF253', '#FF7300'],
        title:"햇볕은 쨍쨍 모래알은 반짝!",
        subtitle:"당신의 피부에 자외선 빔~!!",
        icon:"weather-sunny"
    },

    ThunderStorms:{
        colors:['#00ECBC', '#007ADF'],
        title:"Thunder, feel the thunder, Lightning and the thunder ",
        subtitle:"Imagine Dragons!! I like You!!!! holly-molly!!",
        icon:"weather-lightning"
    },

    Clouds: {
        colors: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "I know, fucking boring",
        icon: "weather-cloudy"
    },
    Snow: {
        colors: ["#7DE2FC", "#B9B6E5"],
        title: "Cold as balls",
        subtitle: "Do you want to build a snowman? Fuck no.",
        icon: "weather-snowy"
    },
    Drizzle: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain, but gay 🏳️‍🌈",
        icon: "weather-hail"
    },
    Haze: {
        colors: ["#89F7FE", "#66A6FF"],
        title: "Haze",
        subtitle: "Don't know what that is 💩",
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
    }
};

function Weather({WeatherName, temp}){
    return (
        <LinearGradient colors={WeatherCases[WeatherName].colors} style={styles.container}>
        <View style={styles.upper}>
            <MaterialCommunityIcons color={white} size={144} name={WeatherCases[WeatherName].icon}/>
            <Text style ={styles.temperature}> {temp} °C </Text>
        </View>
        <View style ={styles.lower}>
            <Text style={styles.title}>{WeatherCases[WeatherName].title}</Text>
            <Text style={styles.subtitle}>{WeatherCases[WeatherName].subtitle}</Text>
        </View>
        </LinearGradient>
    )
};

/*
class Weather extends Component {
    render(){
        return (
            <LinearGradient colors={["red", "green", "white", "green", "red"]} style={styles.container}>
            <View style={styles.upper}>
                <Ionicons name="ios-snow" size={130} color='white'/>
                <Text style ={styles.temperature}> 100°C</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>Awesome White X-mas!!</Text>
                <Text style={styles.subtitle}>solo chun-guk! couple zi-ok!!!</Text>
            </View>

            </LinearGradient>
        );
    }
}
*/
const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    upper :{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "transparent"
    },

    temperature :{
        fontSize : 48,
        color: 'yellow',

    },

    lower :{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-start",
        paddingLeft:25

    },
    title:{
        fontSize:30,
        backgroundColor:"transparent",
        color:"white",
        marginBottom: 10,
        fontWeight:"300"
    },

    subtitle:{
        fontSize:24,
        backgroundColor:"transparent",
        color:"pink",
        marginBottom: 100
    }
})

export default Weather;
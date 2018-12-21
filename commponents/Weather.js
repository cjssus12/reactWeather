import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo";

class Weather extends Component {
    render(){
        return (
            <LinearGradient colors={["green", "white"]} style={styles.container}>
            <View style={styles.upper}>
                <Text>날씨 아이콘</Text>
            </View>

            <View style={styles.lower}>
                <Text style={styles.title}>날씨 알리미</Text>
                <Text style={styles.subtitle}>날씨가 궁금해? 그럼 창밖을 봐!!</Text>
            </View>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    upper :{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
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
        color:"red",
        marginBottom: 100
    }
})

export default Weather;
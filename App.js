import React , {Component} from 'react';
import {StyleSheet, Text, View, Image, ActivityInicator} from 'react-native';
import Weather from './commponents/Weather'

class App extends Component {
  state = {
    isLoaded:false
  };

  render(){
    const {isLoaded}= this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? null : ( 
      <Weather/>
      )}   
      </View>
    )
  }
} 

const styles = StyleSheet.create({
  container : {
    flex:1,
    backgroundColor:"#fff"
  },

  loading: {
    flex:1,
    backgroundColor:"#FDF6aa",
    justifyContent:"flex-end",
    paddingLeft:25
  },

  loadingText:{
    fontSize:38,
    marginBottom:100
  }
})

export default App;
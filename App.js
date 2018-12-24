import React , {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import Weather from './commponents/Weather'

class App extends Component {
  state = {
    isLoaded:false,
    latitude:null,
    longtitude:null
  };

  componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(
      (position) =>{
        console.log(position);
        this.setState({
          latitude:position.coords.latitude,
          longtitude:position.coords.longitude,
          isLoaded:true
        });
        error => {
          console.log(error);
        }
      }
    )
  }
  render(){
    const {isLoaded}= this.state;
    return (
      <View style={styles.container}>
      <StatusBar hidden={false} />
        {isLoaded ? (<Weather/>) : ( 
          <View>
            <Text style={styles.loadingText}>날씨 정보를 불러오는 중입니다....</Text>
          </View>
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
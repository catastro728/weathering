import React from 'react';
import Loading from './Loading'
import * as Location from 'expo-location';
import { Alert, View } from 'react-native';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = 'c7ea5059800ee2477c4664db3a3272b1';

export default class extends React.Component {
  state = {
    isLoading: true,
    temp: 0
  }

  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`);
    console.log(data);
    this.setState({
      isLoading: false, 
      temp: data.main.temp, 
      humidity: data.main.humidity, 
      temp_max: data.main.temp_max,
      temp_min: data.main.temp_min,
      name: data.name,
    });
  }

  getLocation = async() => {
    try{
      Location.requestPermissionsAsync(); //ask permission
      //throw Error();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync(); //get lat, long
      console.log(latitude, longitude);
      this.getWeather(latitude, longitude);
    }
    catch(error)
    {
      Alert.alert("Need Permission");
    }
  }

  componentDidMount()
  {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, humidity, temp_max, temp_min} = this.state;

    return isLoading ?  (
      <Loading></Loading>
    ) : (
      <Weather temp={temp} humidity={humidity} temp_max={temp_max} temp_min={temp_min}></Weather> //Math.round()
    );
  }
}
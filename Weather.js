import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOption = {
    Clear: {
        iconName: "weather-sunny",
        bgColor: ['#56CCF2', '#2F80ED'],
        title: "Sunny",
        subtitle: "맑음",
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        bgColor: ['#0F2027', '#203A43', '#91EAE4'],
        title: "Thunderstorm",
        subtitle: "천둥번개",
    },
    Drizzle: {
        iconName: "weather-pouring",
        bgColor: ['#373B44', '#373B44', '#4286f4'],
        title: "Drizzle",
        subtitle: "이슬비",
    },
    Rain: {
        iconName: "weather-pouring",
        bgColor: ['#373B44', '#373B44', '#4286f4'],
        title: "Rain",
        subtitle: "비",
    },
    Snow: {
        iconName: "weather-snowy",
        bgColor: ['#D3CCE3', '#E9E4F0'],
        title: "Snow",
        subtitle: "눈",
    },
    Atmosphere: {
        iconName: "weather-fog",
        bgColor: ['#616161', '#9bc5c3'],
        title: "Atmosphere",
        subtitle: "???",
    },
    Clouds: {
        iconName: "weather-cloudy",
        bgColor: ['#757F9A', '#D7DDE8'],
        title: "Cloud",
        subtitle: "흐림",
    },
    Haze: {
        iconName: "weather-fog",
        bgColor: ['#616161', '#9bc5c3'],
        title: "Haze",
        subtitle: "안개",
    },
    Mist: {
        iconName: "weather-fog",
        bgColor: ['#616161', '#9bc5c3'],
        title: "Mist",
        subtitle: "안개",
    }
}

export default function Weather({ temp, humidity, temp_max, temp_min, name, condition }) {
    return (
        <LinearGradient
            colors={weatherOption[condition].bgColor}
            style={{ padding: 15, borderRadius: 5, flex: 1 }}>
            <StatusBar barStyle="lisght-content" />


            <View style={styles.containerLocation}>
                <Text style={styles.infomation}>{name}</Text>
            </View>


            <View style={styles.containerMain}>
                <MaterialCommunityIcons name={weatherOption[condition].iconName} size={92} color="white" />
                <Text style={styles.textTemp}>{temp} ℃</Text>
                <Text style={styles.infomation} >
                    <Text><Ionicons name="ios-water" />  {humidity} %</Text>
                    <Text>     <Ionicons name="md-arrow-dropup" size={20} />  {temp_max} ℃</Text>
                    <Text>     <Ionicons name="md-arrow-dropdown" size={20} />  {temp_min} ℃</Text>
                </Text>
            </View>


            <View style={{ ...styles.containerDesc, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOption[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOption[condition].subtitle}</Text>
            </View>


        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow",
        "Atmosphere", "Clear", "Clouds", "Haze", "Mist"]).isRequired,
};

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     justifyContent: "center",
    //     alignItems: "center",
    // },

    containerLocation: {
        flex: 4,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor:"yellow"
    },

    containerMain: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        //backgroundColor: "green"
    },

    containerDesc: {
        flex: 8,
        justifyContent: "center",
        alignItems: "center",
      //  backgroundColor:"red"
    },

    textTemp: {
        fontSize: 36,
        color: "white"
    },

    infomation: {
        color: "white",
        fontSize: 20,
        marginTop: 15
    },

    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "600",
        marginBottom: 10,

    },

    subTitle: {
        color: "white",
        fontSize: 22,
        fontWeight: "300",
    },

    textContainer: {
        alignItems: "flex-start",
        paddingLeft: 30,
    }
});
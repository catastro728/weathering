import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


export default function Weather({ temp, humidity, temp_max, temp_min, name, description, condition }) {
    return (
        <View style={styles.container}>
            <View style={styles.containerDesc}>
                <Text>{temp} ℃</Text>
                <Text>{humidity} %</Text>
                <Text>{temp_max} ℃</Text>
                <Text>{temp_min} ℃</Text>
                <Text>{name}</Text>
                <Text>{description}</Text>
                <Text>
                    <MaterialCommunityIcons name="weather-sunny" size={32} color="gray" />
                    {condition}
                </Text>
            </View>
            <View style={styles.containerDesc}>

            </View>
        </View>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
	temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", 
    "Atmosphere", "Clear", "Clouds", "Haze", "Mist"].isRequired)
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    containerDesc: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    textTemp: {
        font: 30,
    }
});
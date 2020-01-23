import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

export default function Weather({ temp, humidity, temp_max, temp_min, name, description, main }) {
    return (
        <View style={styles.container}>
            <Text>{temp} ℃</Text>
            <Text>{humidity} %</Text>
            <Text>{temp_max} ℃</Text>
            <Text>{temp_min} ℃</Text>
            <Text>{name}</Text>
            <Text>{description}</Text>
            <Text>{main}</Text>
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
    main: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

});
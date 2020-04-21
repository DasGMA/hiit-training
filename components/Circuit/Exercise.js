import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Exercise(props) {
    return (
        <View style={style.container}>
            <Text style={styles.text}>{props.exerciseName}</Text>
            <Text style={styles.time}>{props.exerciseTime}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {

    },
    time: {

    }
})
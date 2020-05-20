import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { timeConversion } from '../../Helpers/timeConversion';

export default function CountDownExercise(props) {
    const timeType = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.timeType
    );

    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.time}>
                    Duration: {timeConversion(props.exerciseDuration, timeType)}
                </Text>
                <Text style={styles.time}>
                    Rest: {timeConversion(props.breakDuration, timeType)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        flex: 1,
        padding: 10
    },
    time: {
        fontSize: 16
    }
})
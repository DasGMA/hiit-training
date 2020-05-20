import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CountDownExercise from './CountDownExercise';

export default function NextExercise() {
    const circuit = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );

    const exercise = Object.entries(circuit.exercises)[1];
    const exerciseName = Object.entries(circuit.exercises).length > 1 && exercise[0];

    if (Object.entries(circuit.exercises).length > 1) {
        return (
            <View style={styles.set}>
                <Text style={styles.setText}>Next exercise</Text>
                <Text style={styles.exerciseName}>{exerciseName}</Text>
                <CountDownExercise
                    exerciseDuration={exercise[1].exerciseDuration}
                    breakDuration={exercise[1].breakDuration}
                 />
            </View>
        )
    } else {
        return (
            <View style={styles.finish}>
                <Text style={styles.text}>Finish Line</Text>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({
    set: {
        flex: 1,
        width: '80%',
        alignItems: 'center'
    },
    setText: {
        fontSize: 30,
        padding: 10
    },
    exerciseName: {
        fontSize: 25
    },
    text: {
        fontSize: 40
    },
    finish: {
        flexDirection: 'column',
        flex: 1,
        paddingBottom: 5,
        paddingTop: 5,
        justifyContent: 'center',
    }
})
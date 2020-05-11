import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Exercise from '../Circuit/Exercise';

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
                <Text>{exerciseName}</Text>
                <Exercise
                    exerciseName={exercise[1].exerciseName}
                    exerciseDuration={exercise[1].exerciseDuration}
                    breakDuration={exercise[1].breakDuration}
                 />
            </View>
        )
    } else {
        return (
            <View style={styles.set}>
                <Text style={styles.setText}>Next exercise</Text>
                <Text>Finish Line</Text>
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
        fontSize: 20,
        padding: 10
    },
})
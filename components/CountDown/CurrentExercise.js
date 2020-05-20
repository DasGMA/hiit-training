import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import CountDownExercise from './CountDownExercise';

export default function CurrentExercise() {
    const circuit = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );
    
    const exercise = Object.entries(circuit.exercises)[0];

    return (
        <View style={styles.set}>
            <Text style={styles.setText}>Current exercise</Text>
            <Text style={styles.exerciseName}>{exercise[0]}</Text>
            <CountDownExercise
                exerciseDuration={exercise[1].exerciseDuration}
                breakDuration={exercise[1].breakDuration}
             />
        </View>
    )
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
    }
})
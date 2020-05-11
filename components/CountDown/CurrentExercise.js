import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Exercise from '../Circuit/Exercise';

export default function CurrentExercise() {
    const circuit = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );
    
    const exercise = Object.entries(circuit.exercises)[0];

    return (
        <View style={styles.set}>
            <Text style={styles.setText}>Current exercise</Text>
            <Text>{exercise[0]}</Text>
            <Exercise
                exerciseName={exercise[1].exerciseName}
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
        fontSize: 20,
        padding: 10
    },
})
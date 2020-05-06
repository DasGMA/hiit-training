import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Exercise from '../Circuit/Exercise';

export default function CurrentSet() {
    const circuit = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );
    
    const set = Object.entries(circuit)[0];
    const setExercises = Object.values(Object.values(set)[1].exercises) || []
    
    const exercises = () => setExercises.map(exercise => (
        <Exercise
            key={exercise.exerciseName}
            exerciseName={exercise.exerciseName}
            exerciseDuration={exercise.exerciseDuration}
        />
    ));

    return (
        <View style={styles.set}>
            <Text style={styles.setText}>Current Set</Text>
            <Text>{Object.keys(circuit)[0]}</Text>
            {exercises()}
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
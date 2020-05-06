import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Exercise from '../Circuit/Exercise';

export default function NextSet() {
    const circuit = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );

    const set = Object.entries(circuit).length > 1 ? Object.entries(circuit)[1] : undefined;
    const setExercises = set !== undefined ? (Object.values(Object.values(set)[1].exercises) || []) : [];
    const setName = Object.keys(circuit).length > 1 ? Object.keys(circuit)[1] : 'Finish line';
    
    const exercises = () => setExercises.map(exercise => (
        <Exercise
            key={exercise.exerciseName}
            exerciseName={exercise.exerciseName}
            exerciseDuration={exercise.exerciseDuration}
        />
    ));

    return (
        <View style={styles.set}>
            <Text style={styles.setText}>Next Set</Text>
            <Text>{setName}</Text>
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
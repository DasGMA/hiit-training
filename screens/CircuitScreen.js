import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExerciseList from '../components/Circuit/ExerciseList';
import AddNewSet from '../components/Circuit/AddNewSet';
import AddExerciseModal from '../components/Circuit/AddExerciseModal';

export default function CircuitScreen() {
    return (
        <View style={style.container}>
            <ExerciseList />
            <AddNewSet />
            <AddExerciseModal />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})
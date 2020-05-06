import React from 'react';
import { StyleSheet, View } from 'react-native';
import ExerciseList from '../components/Circuit/ExerciseList';
import AddExerciseModal from '../components/Circuit/AddExerciseModal';
import CountDown from '../components/CountDown/CountDown';
import AddNewExercise from '../components/Circuit/AddNewExercise';

export default function CircuitScreen() {
    return (
        <View style={style.container}>
            <ExerciseList />
            <AddNewExercise />
            <AddExerciseModal />
            <CountDown />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})
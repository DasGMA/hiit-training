import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddButton from './AddButton';
import { useDispatch } from 'react-redux';
import { addExerciseModal } from '../../Redux/Actions/CircuitActions/CircuitActions';
import StartCountdownButton from './StartCountDownButton';

export default function AddNewExercise() {
    const dispatch = useDispatch();
    const addExercise = () => dispatch(addExerciseModal());
    
    return (
        <View style={styles.container}>
            <AddButton 
                name='add-circle'
                size={30}
                bottomText='Add Exercise'
                onPress={addExercise}
            />
            <StartCountdownButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }
})
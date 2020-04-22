import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddButton from './AddButton';
import { useDispatch } from 'react-redux';
import { addExerciseSet } from '../../Redux/Actions/CircuitActions/CircuitActions';

export default function AddNewSet() {
    const dispatch = useDispatch();
    const addSet = () => dispatch(addExerciseSet());
    return (
        <View style={styles.container}>
            <AddButton 
                name='add-circle'
                size={30}
                bottomText='Add Set'
                onPress={addSet}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})
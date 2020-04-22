import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addExerciseModal, selectSet, addExercise } from '../../Redux/Actions/CircuitActions/CircuitActions';
import AddButton from './AddButton';

export default function AddExerciseModal() {
    const setName = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.selectedSet
    );
    const modalVisible = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.addExerciseModal
    );

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDuration, setExerciseDuration] = useState('');

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(addExerciseModal());
        dispatch(selectSet(''));
        setExerciseDuration('');
        setExerciseName('');
    }

    const exercise = {
        exerciseName,
        exerciseDuration
    }

    const saveExercise = () => {
        if (exerciseName === '' || exerciseDuration === '') return;
        dispatch(addExercise(setName, exercise));
        setExerciseDuration('');
        setExerciseName('');
        closeModal();
    }
    
    return (
        <Modal
            visible={modalVisible}
            animationType='slide'
            transparent={false}
            onRequestClose={closeModal}
        >
            <View style={styles.container}>
                <Text>Add exercise for {setName}</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder='Enter exercise'
                        onChangeText={(text) => setExerciseName(text)}
                        value={exerciseName}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput 
                        placeholder='Enter exercise duration'
                        onChangeText={(text) => setExerciseDuration(text)}
                        value={exerciseDuration}
                    />
                </View>
                <View style={styles.buttonsView}>
                    <AddButton
                        name='close-circle-outline'
                        bottomText='Cancel'
                        onPress={closeModal}
                        size={20}
                    />
                    <AddButton
                        name='save'
                        bottomText='Save'
                        size={20}
                        onPress={saveExercise}
                    />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#d3d3d3',
        justifyContent: 'center',
        flex: 1
    },
    inputContainer: {
        borderWidth: 1
    },
    buttonsView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        borderTopWidth: 1,
        paddingTop: 10
    }
})
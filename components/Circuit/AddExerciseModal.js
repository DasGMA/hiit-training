import React, { useState } from 'react';
import { View, StyleSheet, Text, Modal, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addExerciseModal, addExercise } from '../../Redux/Actions/CircuitActions/CircuitActions';
import AddButton from './AddButton';

export default function AddExerciseModal() {
    const modalVisible = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.addExerciseModal
    );
    const timeType = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.timeType
    );

    const [exerciseName, setExerciseName] = useState('');
    const [exerciseDuration, setExerciseDuration] = useState('');
    const [breakDuration, setBreakDuration] = useState('');

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(addExerciseModal());
        setExerciseDuration('');
        setExerciseName('');
        setBreakDuration('');
    }

    const exercise = {
        exerciseName,
        exerciseDuration: parseInt(exerciseDuration),
        breakDuration: parseInt(breakDuration)
    }

    const saveExercise = () => {
        if (exerciseName === '' || 
            exerciseDuration === '' ||
            breakDuration === '') return;

        dispatch(addExercise(exercise));
        setExerciseDuration('');
        setExerciseName('');
        setBreakDuration('');
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
                <Text style={styles.setName}>Add exercise</Text>
                <View style={styles.inputs}>
                    <View style={{...styles.inputContainer, flex: 1, marginRight: 5}}>
                        <Text>Exercise name</Text>
                        <TextInput 
                            placeholder='Enter exercise'
                            onChangeText={(text) => setExerciseName(text)}
                            value={exerciseName}
                            placeholderTextColor='#000'
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={{...styles.inputContainer, marginRight: 5}}>
                        <Text>Duration</Text>
                        <TextInput 
                            placeholder={`0 ${timeType}`}
                            keyboardType='numeric'
                            onChangeText={(text) => setExerciseDuration(text)}
                            value={exerciseDuration}
                            placeholderTextColor='#000'
                            style={styles.inputStyle}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text>Rest time</Text>
                        <TextInput 
                            placeholder={`0 ${timeType}`}
                            keyboardType='numeric'
                            onChangeText={(text) => setBreakDuration(text)}
                            value={breakDuration}
                            placeholderTextColor='#000'
                            style={styles.inputStyle}
                        />
                    </View>
                </View>
                <View style={styles.buttonsView}>
                    <AddButton
                        name='close-circle-outline'
                        bottomText='Cancel'
                        onPress={closeModal}
                        size={30}
                        color='red'
                    />
                    <AddButton
                        name='save'
                        bottomText='Save'
                        size={30}
                        onPress={saveExercise}
                        color='green'
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
        flex: 1
    },
    setName: {
        fontSize: 30,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    inputs: {
        flexDirection: 'row'
    },
    inputContainer: {
        
    },
    inputStyle: {
        padding: 5,
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
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AddButton from './AddButton';
import Exercise from './Exercise';
import { deleteExerciseSet, addExerciseModal, selectSet } from '../../Redux/Actions/CircuitActions/CircuitActions';

export default function ExerciseSet(props) {
    const set = Object.values(props.set[1].exercises) || [];
    const setDuration = props.set[1].setDuration;

    const dispatch = useDispatch();
    console.log(props.set)
    const exercises = () => set.map(exercise => (
        <Exercise
            key={exercise.exerciseName}
            exerciseName={exercise.exerciseName}
            exerciseDuration={exercise.exerciseDuration}
        />
        ));

    const removeSet = () => {
        const objectKey = props.set[0];
        dispatch(deleteExerciseSet(objectKey));
    }

    const activateAddExerciseModal = () => {
        dispatch(addExerciseModal());
        dispatch(selectSet(props.set[0]));
    }

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>{props.set[0]}</Text>
                <AddButton 
                    name='remove-circle-outline'
                    size={20}
                    onPress={removeSet}
                />
            </View>
            <View>
                {exercises()}
            </View>
            <View style={styles.bottomRow}>
                <AddButton 
                    name='add'
                    size={25}
                    rightText='Add exercise'
                    onPress={activateAddExerciseModal}
                />
                <Text>Set duration: {setDuration}s</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    textView: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        fontSize: 20
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
})
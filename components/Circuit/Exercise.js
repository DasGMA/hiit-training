import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { timeConversion } from '../../Helpers/timeConversion';
import AddButton from './AddButton';
import { exerciseMenuModal, setExerciseMenuCoordinates, setIndex, setExerciseName, setExerciseDuration, setBreakDuration } from '../../Redux/Actions/CircuitActions/CircuitActions';
import ExerciseMenuModal from './ExerciseMenuModal';

export default function Exercise(props) {
    const {timeType, circuit} = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );

    const dispatch = useDispatch();
    const onPress = (event) => {
        const {pageX, pageY} = event.nativeEvent;
        const index = circuit.orderByName.indexOf(props.exerciseName);

        dispatch(exerciseMenuModal());
        dispatch(setExerciseMenuCoordinates({pageX, pageY}));
        dispatch(setIndex(index));
        dispatch(setExerciseName(props.exerciseName));
        dispatch(setExerciseDuration(props.exerciseDuration.toString()));
        dispatch(setBreakDuration(props.breakDuration.toString()));
    }


    return (
        <>
        <View style={{alignItems: 'flex-end'}}>
            <AddButton 
                name='more'
                size={20}
                onPress={(event) => onPress(event)}
            />
        </View>
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>{props.index + 1}.</Text>
            <Text style={styles.text}>{props.exerciseName}</Text>
            <View style={styles.info}>
                <Text style={styles.time}>
                    Duration: {timeConversion(props.exerciseDuration, timeType)}
                </Text>
                <Text style={styles.time}>
                    Rest: {timeConversion(props.breakDuration, timeType)}
                </Text>
            </View>
        </View>
        <ExerciseMenuModal 
            exerciseName={props.exerciseName}
            exerciseDuration={props.exerciseDuration}
            breakDuration={props.breakDuration}
        />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        alignItems: 'center',
        height: 100
    },
    info: {
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 20,
        flex: 1,
        padding: 10
    },
    time: {
        fontSize: 16
    }
})
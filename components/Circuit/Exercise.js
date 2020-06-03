import React from 'react';
import { View, Text, StyleSheet, ShadowPropTypesIOS } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { timeConversion } from '../../Helpers/timeConversion';
import AddButton from './AddButton';
import { exerciseMenuModal, setExerciseMenuCoordinates } from '../../Redux/Actions/CircuitActions/CircuitActions';
import ExerciseMenuModal from './ExerciseMenuModal';

export default function Exercise(props) {
    const timeType = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.timeType
    );

    const dispatch = useDispatch();
    const onPress = (event) => {
        const {pageX, pageY} = event.nativeEvent;
        dispatch(exerciseMenuModal());
        dispatch(setExerciseMenuCoordinates({pageX, pageY}));
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
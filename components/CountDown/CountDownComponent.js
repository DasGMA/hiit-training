import React, { useEffect } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {timeConversion} from '../../Helpers/timeConversion';
import { reduceExerciseTime, deleteExerciseCountdown, resetCountdown } from '../../Redux/Actions/CountdownActions/CountdownActions';
import {delay} from '../../Helpers/delay';
import { resetCircuit } from '../../Redux/Actions/CircuitActions/CircuitActions';

export default function CountDownComponent() {
    const { timeType } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );
    const countdownStart = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.startCountdown
    );
    const { circuit } = useSelector(
        (state) => state.CountdownReducer.CountdownReducers
    );
    
    const exercises = Object.entries(circuit.exercises);
    const dispatch = useDispatch();

    const circDuration = () => {
        return Object.values(circuit.exercises).reduce((acc, exercise) => {
            return acc + exercise.exerciseDuration + exercise.breakDuration;
        }, 0);
    }

    const total = timeType === 'seconds' ? circDuration() : circDuration() * 60;

    const countdown = (exerciseName) => {
        let exerciseTime = exercises[0][1].exerciseDuration;
        let interval = {};
        interval[exerciseName] = setInterval(count, 1000);
        
        function count() {
            if (countdownStart === true) {
                exerciseTime --;
                dispatch(reduceExerciseTime(exerciseName))
            }
            if (exerciseTime === 0) clearInterval(interval[exerciseName]);
        }
    }

    const main = async() => {
        let i = 0;
        while (i < exercises.length) {
            countdown(exercises[i][0]);
            await delay(
                (exercises[i][1].exerciseDuration + exercises[i][1].breakDuration) * 1000
            );
            dispatch(deleteExerciseCountdown(exercises[i][0]));
            i ++;
        }
    }

    useEffect(() => {
        total === 0 && dispatch(resetCountdown());
    }, [total])

    useEffect(() => {
        countdownStart === true && main()
    }, [countdownStart])

    return (
        <View>
            <Text style={styles.text}>{timeConversion(total, 'seconds')}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 90
    }
})
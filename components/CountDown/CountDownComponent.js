import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {timeConversion} from '../../Helpers/timeConversion';
import { reduceExerciseTime } from '../../Redux/Actions/CountdownActions/CountdownActions';
import {delay} from '../../Helpers/delay';

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
    
    const set = Object.entries(circuit)[0];
    const exercises = Object.keys(set[1].exercises);
    const duration = Object.values(set[1].exercises);
    const dispatch = useDispatch();

    const circDuration = () => {
        return Object.values(circuit).reduce((acc, set) => {
            return acc + set.setDuration;
        }, 0);
    }

    const total = timeType === 'seconds' ? circDuration() : circDuration() * 60;
    

    const countdown = (setName, exerciseName, index) => {
        let exerciseTime = duration[index].exerciseDuration;
        let interval = {};
        interval[exerciseName] = setInterval(count, 1000);

        function count() {
            if (countdownStart === true) {
                exerciseTime --;
                dispatch(reduceExerciseTime(setName, exerciseName))
            }
            if (exerciseTime === 0) clearInterval(interval[exerciseName]);
        }
    }

    const main = async() => {
        let index = 0;
        let setIndex = 0;
        while (index < exercises.length) {
            countdown(set[setIndex], exercises[index], index);
            await delay(duration[index].exerciseDuration * 1000);
            index ++
            if (circuit[set[setIndex]].setDuration === 0) {
                index = 0;
            }
        }
    }



    useEffect(() => {
        main()
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
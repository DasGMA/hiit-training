import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCircuitDuration, setTotalDuration } from '../../Redux/Actions/CircuitActions/CircuitActions';
import { timeConversion }  from '../../Helpers/timeConversion';

export default function CircuitDuration() {
    const { circuitDuration, circuitCount, circuit, totalDuration, timeType } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );
    
    const dispatch = useDispatch();
    
    const circDuration = () => {
        return Object.values(circuit.exercises).reduce((acc, exercise) => {
            return acc + exercise.exerciseDuration + exercise.breakDuration;
        }, 0);
    }

    useEffect(() => {
        const cDuration = circDuration();
        dispatch(setTotalDuration(circuitCount * circuitDuration));
        dispatch(setCircuitDuration(cDuration));
    }, [circuit, circuitDuration, circuitCount])

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{timeConversion(totalDuration, timeType)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingRight: 20
    },
    text: {
        fontSize: 20
    }
})
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCircuitDuration, setTotalDuration } from '../../Redux/Actions/CircuitActions/CircuitActions';

export default function CircuitDuration() {
    const { circuitDuration, circuitCount, circuit, totalDuration } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );
    
    const dispatch = useDispatch();

    const circDuration = () => {
        return Object.values(circuit).reduce((acc, set) => {
            return acc + set.setDuration;
        }, 0);
    }

    useEffect(() => {
        const cDuration = circDuration();
        dispatch(setTotalDuration(circuitCount * circuitDuration));
        dispatch(setCircuitDuration(cDuration));
    }, [circuit, circuitDuration, circuitCount])


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Duration: {totalDuration}s</Text>
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
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCountdownModal, resetCircuit } from '../../Redux/Actions/CircuitActions/CircuitActions';
import { setCountdownComponent } from '../../Redux/Actions/CountdownActions/CountdownActions';

export default function StartCountdownButton() {
    const {
        circuit,
        totalDuration,
        circuitDuration,
        breakDurationBetweenCircuit,
        circuitCount
    } = useSelector(
            (state) => state.CircuitReducer.CircuitReducers
        );

    const dispatch = useDispatch();

    const circuitInfo = {
        circuit,
        totalDuration,
        circuitDuration,
        breakDurationBetweenCircuit,
        circuitCount
    }
    
    const countDownModal = () => {
        dispatch(setCountdownComponent(circuitInfo));
        dispatch(setCountdownModal());
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={countDownModal}
        >
            <Text style={styles.text}>NEXT</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        backgroundColor: 'green',
        width: 60,
        height: 60
    },
    text: {
        fontSize: 15,
        color: '#fafafa'
    }
})
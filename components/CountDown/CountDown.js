import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCountdownModal } from '../../Redux/Actions/CircuitActions/CircuitActions';
import CountDownComponent from './CountDownComponent';
import CurrentExercise from './CurrentExercise';
import NextExercise from './NextExercise';
import { startCountdown, resetCountdown } from '../../Redux/Actions/CountdownActions/CountdownActions';

export default function CountDown() {
    const { countdownModal, totalDuration, timeType, circuit } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );

    const countdownStart = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.startCountdown
    );
    const {orderByName} = useSelector(
        (state) => state.CountdownReducer.CountdownReducers.circuit
    );

    const dispatch = useDispatch();

    const onClose = () => {
        dispatch(setCountdownModal());
        dispatch(resetCountdown());
    }

    const startCount = () => dispatch(startCountdown());

    return (
        <Modal
            visible={countdownModal}
            transparent={false}
            onRequestClose={onClose}
            animationType='slide'
        >
           <View style={styles.container}>
           {orderByName.length > 0 ? 
                <>
                    <CurrentExercise />
                    <CountDownComponent />
                    <NextExercise />
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                            style={{...styles.button, backgroundColor: 'red'}}
                            onPress={onClose}
                        >
                            <Text style={styles.text}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{...styles.button, backgroundColor: 'green'}}
                            onPress={startCount}
                        >
                            <Text style={styles.text}>{countdownStart ? 'Pause' : 'Start'}</Text>
                        </TouchableOpacity>
                    </View> 
                </> : 
                    <View>
                        <Text>FINISHED</Text>
                        <Text>Congratulations!!!</Text>
                        <Text>You have finished your HIIT training session.</Text>
                            {circuit.orderByName.map((e, i) => <Text key={i}>{i+1}. {e}</Text>)}
                        <Button title='Cancel' color='red'/><Button title='Save to history' color='green'/>
                    </View>
                
            }
            </View>

        </Modal>
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
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        padding: 20

    },
    text: {
        fontSize: 20,
        color: '#fff'
    }
})
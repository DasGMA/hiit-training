import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setCountdownModal } from '../../Redux/Actions/CircuitActions/CircuitActions';
import { countDown } from '../../Helpers/timeConversion';
import CountDownComponent from './CountDownComponent';
import CurrentExercise from './CurrentExercise';
import NextExercise from './NextExercise';
import { startCountdown, resetCountdown } from '../../Redux/Actions/CountdownActions/CountdownActions';

export default function CountDown() {
    const { countdownModal, totalDuration, timeType } = useSelector(
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
                        <TouchableOpacity onPress={onClose}>
                            <Text>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => dispatch(startCountdown())}>
                            <Text>{countdownStart ? 'Pause' : 'Start'}</Text>
                        </TouchableOpacity>
                    </View> 
                </> : 
                <Text>FINISHED</Text>
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
        width: '80%',
        justifyContent: 'space-between',
        padding: 10,
    }
})
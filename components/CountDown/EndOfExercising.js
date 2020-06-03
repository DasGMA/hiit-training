import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import emojis from '../CountDown/Emojis';

export default function EndOfExercising(props) {
    const { countdownModal, totalDuration, timeType, circuit } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers
    );
    
    return (
        <View>
            <Text>FINISHED</Text>
            <Text>Congratulations!!!</Text>
            <Text>You have finished your HIIT training session.</Text>
                {circuit.orderByName.map((e, i) => <Text key={i}>{i+1}. {e}</Text>)}
            <Text>How was your session?</Text>
                {Object.values(emojis).map((e, i) => <Text>{e}</Text>)}
            <Button
                onPress={props.cancel}
                title='Cancel' 
                color='red'
            />
            <Button 
                title='Save to history' 
                color='green'
            />
        </View>
    )
}
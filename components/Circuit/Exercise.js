import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Exercise(props) {
    return (
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.text}>{props.exerciseName}</Text>
                <Text style={styles.time}>Duration: {props.exerciseDuration}s</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingBottom: 5,
        paddingTop: 5
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd'
    },
    text: {
        fontSize: 16
    },
    time: {

    }
})
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AddButton from './AddButton';

export default function ExerciseSet(props) {
    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>Exercise set {props.exerciseNumber}</Text>
            </View>
            <View style={styles.bottomRow}>
                <AddButton 
                    name='add'
                    size={25}
                    rightText='Add exercise'
                />
                <Text>Set duration: 0</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    textView: {
        borderBottomWidth: 1,
        borderBottomColor: '#dddddd',
        marginBottom: 10
    },
    text: {
        fontSize: 20
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
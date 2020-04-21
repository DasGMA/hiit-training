import React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import ExerciseList from '../components/Circuit/ExerciseList';
import AddNewSet from '../components/Circuit/AddNewSet';

export default function CircuitScreen() {
    return (
        <View style={style.container}>
            <ExerciseList />
            <AddNewSet />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    }
})
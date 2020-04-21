import React, {useRef} from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ExerciseSet from "./ExerciseSet";
import { useSelector } from "react-redux";
import AddNewSet from "./AddNewSet";

export default function ExerciseList() {
    const circuit = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.circuit
    );

    const listRef = useRef()

    const exercises = () => {
        return Object.entries(circuit).map((exercise, index) => (
            <ExerciseSet key={index} exerciseNumber={index + 1} />
        ));
    };

    const scrollToEnd = () => listRef.current.scrollToEnd();

    return (
            <ScrollView ref={listRef} onContentSizeChange={scrollToEnd}>
                {exercises()}
            </ScrollView>
        )
}

const styles = StyleSheet.create({
    
});

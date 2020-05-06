import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import Exercise from "./Exercise";

export default function ExerciseList() {
    const circuit = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.circuit
    );

    const listRef = useRef();

    const exercises = () => {
        return Object.entries(circuit.exercises).map((exercise, index) => (
            console.log(exercise),
            <Exercise
                key={index}
                index={index}
                exerciseName={exercise[1].exerciseName}
                exerciseDuration={exercise[1].exerciseDuration}
                breakDuration={exercise[1].breakDuration}
            />
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

import React, {useRef} from "react";
import { View, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ExerciseSet from "./ExerciseSet";
import { useSelector } from "react-redux";

export default function ExerciseList() {
    const circuit = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.circuit
    );

    const listRef = useRef();

    const exercises = () => {
        return Object.entries(circuit).map((set, index) => (
            <ExerciseSet 
                key={index} 
                set={set}
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

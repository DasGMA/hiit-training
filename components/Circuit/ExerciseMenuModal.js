import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    Dimensions,
} from "react-native";
import {
    exerciseMenuModal,
    setExerciseMenuCoordinates,
    deleteExercise,
    addExerciseModal,
    setEditExercise,
	setExerciseDuration,
	setExerciseName,
	setBreakDuration
} from "../../Redux/Actions/CircuitActions/CircuitActions";

const { width } = Dimensions.get("screen");

export default function ExerciseMenuModal(props) {
    const visible = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.exerciseMenuModal
    );
    const { pageX, pageY } = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.exerciseMenuCoordinates
    );

    const dispatch = useDispatch();

    const closeExerciseMenu = () => {
        dispatch(exerciseMenuModal());
        dispatch(setExerciseMenuCoordinates({ pageX: 0, pageY: 0 }));
    };

    const exerciseDelete = () => {
		dispatch(deleteExercise(props.exerciseName));
		dispatch(setExerciseDuration(''));
		dispatch(setExerciseName(''));
		dispatch(setBreakDuration(''));
        closeExerciseMenu();
	};

    const exerciseEdit = () => {
        dispatch(setEditExercise(true));
        dispatch(addExerciseModal());
        closeExerciseMenu();
	};

    const renderButtons = (
        <>
            <TouchableOpacity onPress={exerciseEdit}>
                <Text style={styles.text}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.text}>Add to favourites</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={exerciseDelete}>
                <Text style={styles.text}>Delete</Text>
            </TouchableOpacity>
        </>
    );

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={() => closeExerciseMenu()}
        >
            <TouchableWithoutFeedback onPress={() => closeExerciseMenu()}>
                <View style={styles.overlay}>
                    <View
                        style={{
                            ...styles.container,
                            top: pageY - 20,
                            left: pageX - styles.container.width,
                        }}
                    >
                        {renderButtons}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(26, 26, 26, 0.5)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        position: "absolute",
        justifyContent: "center",
        width: width * 0.5,
        padding: 10,
        backgroundColor: "rgba(26, 26, 26, 0.95)",
        borderRadius: 3,
    },
    text: {
        color: "#fafafa",
        lineHeight: 30,
    },
});

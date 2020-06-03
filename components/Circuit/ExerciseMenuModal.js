import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import {View, Text, Modal, TouchableOpacity, TouchableWithoutFeedback, StyleSheet, Dimensions} from 'react-native';
import { exerciseMenuModal, setExerciseMenuCoordinates } from '../../Redux/Actions/CircuitActions/CircuitActions';

const {width} = Dimensions.get('screen');

export default function ExerciseMenuModal() {
    const exerciseMenu = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.exerciseMenuModal
    );
    const {pageX, pageY} = useSelector(
        (state) => state.CircuitReducer.CircuitReducers.exerciseMenuCoordinates
    );
    
    const dispatch = useDispatch();

    const closeExerciseMenu = () =>  {
        dispatch(exerciseMenuModal());
        dispatch(setExerciseMenuCoordinates({pageX: 0, pageY: 0}));
    }

    return (
        <Modal
			animationType='fade'
			transparent={true}
			visible={exerciseMenu}
			onRequestClose={() => closeExerciseMenu()}
			>
			<TouchableWithoutFeedback onPress={() => closeExerciseMenu()}>
				<View style={styles.overlay}>
					<View style={{...styles.container, top: pageY, left: pageX - styles.container.width}}>
					<Text style={styles.text}>Edit</Text>
                    <Text style={styles.text}>Add to favourites</Text>
                    <Text style={styles.text}>Delete</Text>
                    </View>
				</View>
			</TouchableWithoutFeedback>
		</Modal>
    )

}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(26, 26, 26, 0.5)',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		position: 'absolute',
		justifyContent: 'center',
		width: width * 0.5,
		padding: 10,
		backgroundColor: 'rgba(26, 26, 26, 0.95)',
        borderRadius: 3,
        zIndex: 99999
	},
	text: {
		color: '#fafafa'
	},
	
});
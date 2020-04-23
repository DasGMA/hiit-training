export const ADD_EXERCISE_SET = 'ADD_EXERCISE_SET';
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const DELETE_EXERCISE_SET = 'DELETE_EXERCISE_SET';
export const ADD_EXERCISE_MODAL = 'ADD_EXERCISE_MODAL';
export const SELECT_SET = 'SELECT_SET';
export const SET_CIRCUIT_DURATION = 'SET_CIRCUIT_DURATION';
export const SET_TOTAL_DURATION = 'SET_TOTAL_DURATION';

export const addExerciseSet = () => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    const circuitLength = Object.entries(circuit).length;
    const objectKey = `Set ${circuitLength + 1}`;
    
    dispatch({
        type: ADD_EXERCISE_SET,
        payload:  {[objectKey]: {setDuration: 0, exercises: {}}}
    });

};

export const deleteExerciseSet = (objectKey) => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    const {[objectKey]: deletion, ...rest} = circuit;
    let newCircuit = {};
    for (let i = 0; i < Object.entries(rest).length; i ++) {
        newCircuit[`Set ${i + 1}`] = Object.entries(rest)[i][1];
    };

    dispatch({
        type: DELETE_EXERCISE_SET,
        payload: newCircuit
    });
};

export const addExercise = (objectKey, exercise) => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    let newCircuit = {
        ...circuit,
        [objectKey]: {
            ...circuit[objectKey],
            setDuration: parseInt(circuit[objectKey].setDuration) + parseInt(exercise.exerciseDuration),
            exercises: {
                ...circuit[objectKey].exercises,
                [exercise.exerciseName]: {
                    ...circuit[objectKey].exercises[exercise.exerciseName], ...exercise
                }
            }
        }
    };

    const orderedCircuit = Object.keys(newCircuit).sort().reduce((acc, key) => {
        acc[key] = newCircuit[key];
        return acc;
    }, {});
    
    dispatch({
        type: ADD_EXERCISE,
        payload: orderedCircuit
    });
};

export const deleteExercise = (objectKey) => (dispatch, getState) => {
    
}

export const selectSet = (setName) => dispatch => {
    dispatch({
        type: SELECT_SET,
        payload: setName
    });
};

export const addExerciseModal = () => dispatch => {
    dispatch({
        type: ADD_EXERCISE_MODAL
    });
};

export const setCircuitDuration = (circuitDuration) => dispatch => {
    dispatch({
        type: SET_CIRCUIT_DURATION,
        payload: circuitDuration
    });
};

export const setTotalDuration = (totalDuration) => dispatch=> {
    dispatch({
        type: SET_TOTAL_DURATION,
        payload: totalDuration
    });
};
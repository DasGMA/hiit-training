export const ADD_EXERCISE_SET = 'ADD_EXERCISE_SET';
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const SET_EXERCISE_NAME = 'SET_EXERCISE_NAME';
export const SET_EXERCISE_DURATION = 'SET_EXERCISE_DURATION';
export const DELETE_EXERCISE_SET = 'DELETE_EXERCISE_SET';
export const ADD_EXERCISE_MODAL = 'ADD_EXERCISE_MODAL';
export const SELECT_SET = 'SELECT_SET';

export const addExerciseSet = () => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    const circuitLength = Object.entries(circuit).length;
    const objectKey = `Set ${circuitLength + 1}`;
    
    dispatch({
        type: ADD_EXERCISE_SET,
        payload:  {[objectKey]: {}}
    })

};

export const deleteExerciseSet = (objectKey) => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    const {[objectKey]: deletion, ...rest} = circuit;
    let newCircuit = {};
    for (let i = 0; i < Object.entries(rest).length; i ++) {
        newCircuit[`Set ${i + 1}`] = Object.entries(rest)[i][1];
    }

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
            [exercise.exerciseName]: {
                ...circuit[objectKey][exercise.exerciseName], ...exercise
            }
        }
    };

    const orderedCircuit = Object.keys(newCircuit).sort().reduce((acc, key) => {
        acc[key] = newCircuit[key];
        return acc;
    }, {})
    
    dispatch({
        type: ADD_EXERCISE,
        payload: orderedCircuit
    })
};

export const selectSet = (setName) => dispatch => {
    dispatch({
        type: SELECT_SET,
        payload: setName
    });
};

export const addExerciseModal = () => dispatch => {
    dispatch({
        type: ADD_EXERCISE_MODAL
    })
}

export const setExerciseName = (name) => dispatch => {
    dispatch({
        type: SET_EXERCISE_NAME,
        payload: name
    });
};

export const setExerciseDuration = (duration) => dispatch => {
    dispatch({
        type: SET_EXERCISE_DURATION,
        payload: duration
    });
};

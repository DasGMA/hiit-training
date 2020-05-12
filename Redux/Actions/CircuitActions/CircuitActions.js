
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const ADD_EXERCISE_MODAL = 'ADD_EXERCISE_MODAL';
export const SET_CIRCUIT_DURATION = 'SET_CIRCUIT_DURATION';
export const SET_TOTAL_DURATION = 'SET_TOTAL_DURATION';
export const COUNTDOWN_MODAL = 'COUNTDOWN_MODAL';
export const RESET_CIRCUIT = 'RESET_CIRCUIT';

export const deleteExercise = (exerciseName) => (dispatch, getState) => {
    const {exercises, orderByName} = getState().CircuitReducer.CircuitReducers.circuit;
    const {[exerciseName]: deletion, ...rest} = exercises;
    orderByName.splice(orderByName.indexOf(exerciseName), 1);
    
    dispatch({
        type: DELETE_EXERCISE,
        payload: {
            rest,
            orderByName
        }
    });
};

export const addExercise = (exercise) => (dispatch, getState) => {
    const {exercises} = getState().CircuitReducer.CircuitReducers.circuit;
    const {exerciseName, ...rest} = exercise;
    
    if (Object.keys(exercises).includes(exerciseName)) return;
    const newCircuit = {
            ...exercises,
                [exerciseName]: {
                    ...exercises[exerciseName], ...exercise
                },
            };
    
    dispatch({
        type: ADD_EXERCISE,
        payload: {
            newCircuit,
            exerciseName
        }
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

export const setCountdownModal = () => dispatch => {
    dispatch({
        type: COUNTDOWN_MODAL
    });
};

export const resetCircuit = () => dispatch => {
    dispatch({
        type: RESET_CIRCUIT
    })
}

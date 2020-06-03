
export const ADD_EXERCISE = 'ADD_EXERCISE';
export const DELETE_EXERCISE = 'DELETE_EXERCISE';
export const ADD_EXERCISE_MODAL = 'ADD_EXERCISE_MODAL';
export const SET_CIRCUIT_DURATION = 'SET_CIRCUIT_DURATION';
export const SET_TOTAL_DURATION = 'SET_TOTAL_DURATION';
export const COUNTDOWN_MODAL = 'COUNTDOWN_MODAL';
export const RESET_CIRCUIT = 'RESET_CIRCUIT';
export const EXERCISE_MENU_MODAL = 'EXERCISE_MENU_MODAL';
export const SET_EXERCISE_MENU_COORDINATES = 'SET_EXERCISE_MENU_COORDINATES';
export const SET_EXERCISE_NAME = 'SET_EXERCISE_NAME';
export const SET_EXERCISE_DURATION = 'SET_EXERCISE_DURATION';
export const SET_BREAK_DURATION = 'SET_BREAK_DURATION';
export const EDIT_EXERCISE = 'EDIT_EXERCISE';
export const SET_EDIT_EXERCISE = 'SET_EDIT_EXERCISE';
export const SET_INDEX = 'SET_INDEX';

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
    
    dispatch({
        type: ADD_EXERCISE,
        payload: exercise
    });
};

export const setEditExercise = (value) => dispatch => {
    dispatch({
        type: SET_EDIT_EXERCISE,
        payload: value
    })
}

export const editExercise = (index, exercise) => (dispatch, getState) => {
    let {exercises, orderByName} = getState().CircuitReducer.CircuitReducers.circuit;
    const oldName = orderByName[index];
    orderByName[index] = exercise.exerciseName;
    delete exercises[oldName];
    exercises[exercise.exerciseName] = exercise;

    const orderedExercises = () => {
        let obj = {};
        for (const name of orderByName) {
            if (!obj[name]) {
                obj[name] = exercises[name]
            }
        }

        return obj;
    }

    dispatch({
        type: EDIT_EXERCISE,
        payload: {
            exercises: orderedExercises(),
            orderByName
        }
    })
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
};

export const exerciseMenuModal = () => dispatch => {
    dispatch({
        type: EXERCISE_MENU_MODAL
    })
};

export const setExerciseMenuCoordinates = (coordinates) => dispatch => {
    dispatch({
        type: SET_EXERCISE_MENU_COORDINATES,
        payload: coordinates
    })
};

export const setExerciseName = (exerciseName) => dispatch => {
    dispatch({
        type: SET_EXERCISE_NAME,
        payload: exerciseName
    })
};

export const setExerciseDuration = (exerciseDuration) => dispatch => {
    dispatch({
        type: SET_EXERCISE_DURATION,
        payload: exerciseDuration
    })
};

export const setBreakDuration = (breakDuration) => dispatch => {
    dispatch({
        type: SET_BREAK_DURATION,
        payload: breakDuration
    })
};

export const setIndex = (index) => dispatch => {
    dispatch({
        type: SET_INDEX,
        payload: index
    })
};
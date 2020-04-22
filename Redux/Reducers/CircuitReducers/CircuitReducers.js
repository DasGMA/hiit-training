import {
    ADD_EXERCISE_SET,
    ADD_EXERCISE,
    SET_EXERCISE_DURATION,
    SET_EXERCISE_NAME,
    DELETE_EXERCISE_SET,
    ADD_EXERCISE_MODAL,
    SELECT_SET
} from '../../Actions/CircuitActions/CircuitActions';

const initialState = {
    circuitCount: 1,
    circuitDuration: 0,
    totalDuration: 0,
    breakDuration: 0,
    breakDurationBetweenCircuit: 0,
    addExerciseModal: false,
    selectedSet: '',
    circuit: {
        'Set 1': {},
        'Set 2': {},
        'Set 3': {},
        'Set 4': {},
        'Set 5': {}
    }
}

const CircuitReducers = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_EXERCISE_SET:
            return {
                ...state,
                circuit: {...state.circuit, ...payload}
            };
        case DELETE_EXERCISE_SET:
            return {
                ...state,
                circuit: payload
            };
        case SELECT_SET:
            return {
                ...state,
                selectedSet: payload
            };
        case ADD_EXERCISE_MODAL:
            return {
                ...state,
                addExerciseModal: !state.addExerciseModal
            };
        case ADD_EXERCISE:
            return {
                ...state,
                circuit: payload
            };
        case SET_EXERCISE_DURATION:
            return {
                ...state,
                exerciseDuration: payload
            };
        case SET_EXERCISE_NAME:
            return {
                ...state,
                exerciseName: payload
            };
        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
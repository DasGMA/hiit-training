import {
    ADD_EXERCISE,
    ADD_EXERCISE_MODAL,
    SET_CIRCUIT_DURATION,
    SET_TOTAL_DURATION,
    COUNTDOWN_MODAL,
    DELETE_EXERCISE
} from '../../Actions/CircuitActions/CircuitActions';

const initialState = {
    countdownModal: false,
    circuitCount: 1,
    totalDuration: 0,
    timeType: 'seconds',
    breakDurationBetweenCircuit: 0,
    addExerciseModal: false,
    circuit: {
        exercises: {}
    }
}

const CircuitReducers = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_EXERCISE_MODAL:
            return {
                ...state,
                addExerciseModal: !state.addExerciseModal
            };
        case ADD_EXERCISE:
            return {
                ...state,
                circuit: {
                    ...state.circuit,
                    exercises: payload
                }
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                circuit: {
                    ...state.circuit,
                    exercises: payload
                }
            };
        case SET_CIRCUIT_DURATION:
            return {
                ...state,
                circuitDuration: payload
            };
        case SET_TOTAL_DURATION:
            return {
                ...state,
                totalDuration: payload
            };
        case COUNTDOWN_MODAL:
            return {
                ...state,
                countdownModal: !state.countdownModal
            };

        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
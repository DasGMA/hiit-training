import {
    ADD_EXERCISE_SET,
    ADD_EXERCISE,
    DELETE_EXERCISE_SET,
    ADD_EXERCISE_MODAL,
    SELECT_SET,
    SET_CIRCUIT_DURATION,
    SET_TOTAL_DURATION
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
        'Set 1': {
            setDuration: 0,
            exercises: {}
        },
        'Set 2': {
            setDuration: 0,
            exercises: {}
        },
        'Set 3': {
            setDuration: 0,
            exercises: {}
        },
        'Set 4': {
            setDuration: 0,
            exercises: {}
        }
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

        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
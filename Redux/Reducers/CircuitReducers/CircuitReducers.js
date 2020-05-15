import {
    ADD_EXERCISE,
    ADD_EXERCISE_MODAL,
    SET_CIRCUIT_DURATION,
    SET_TOTAL_DURATION,
    COUNTDOWN_MODAL,
    DELETE_EXERCISE,
    RESET_CIRCUIT
} from '../../Actions/CircuitActions/CircuitActions';

const initialState = {
    countdownModal: false,
    circuitCount: 1,
    totalDuration: 0,
    timeType: 'seconds',
    breakDurationBetweenCircuit: 0,
    addExerciseModal: false,
    circuit: {
        exercises: {},
        orderByName: []
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
                    exercises: {
                        ...state.circuit.exercises,
                        [payload.exerciseName]: payload
                    },
                    orderByName: [
                        ...state.circuit.orderByName, payload.exerciseName
                    ]
                }
            };
        case DELETE_EXERCISE:
            return {
                ...state,
                circuit: {
                    ...state.circuit,
                    exercises: payload.rest,
                    orderByName: payload.orderByName
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
        case RESET_CIRCUIT:
            return {
                ...state,
                countdownModal: false,
                circuitCount: 1,
                totalDuration: 0,
                timeType: 'seconds',
                breakDurationBetweenCircuit: 0,
                addExerciseModal: false,
                circuit: {
                    exercises: {},
                    orderByName: []
                }
            }

        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
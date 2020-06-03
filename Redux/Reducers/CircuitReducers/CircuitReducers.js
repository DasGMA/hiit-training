import {
    ADD_EXERCISE,
    ADD_EXERCISE_MODAL,
    SET_CIRCUIT_DURATION,
    SET_TOTAL_DURATION,
    COUNTDOWN_MODAL,
    DELETE_EXERCISE,
    RESET_CIRCUIT,
    EXERCISE_MENU_MODAL,
    SET_EXERCISE_MENU_COORDINATES,
    SET_BREAK_DURATION,
    SET_EXERCISE_DURATION,
    SET_EXERCISE_NAME
} from '../../Actions/CircuitActions/CircuitActions';

const initialState = {
    exerciseName: '',
    exerciseDuration: '',
    breakDuration: '',
    countdownModal: false,
    exerciseMenuModal: false,
    exerciseMenuCoordinates: {
        pageX: 0,
        pageY: 0
    },
    circuitCount: 1,
    totalDuration: 0,
    timeType: 'sec',
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
        case EXERCISE_MENU_MODAL:
            return {
                ...state,
                exerciseMenuModal: !state.exerciseMenuModal
            };
        case SET_EXERCISE_MENU_COORDINATES:
            return {
                ...state,
                exerciseMenuCoordinates: payload
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
                exerciseName: '',
                exerciseDuration: '',
                breakDuration: '',
                countdownModal: false,
                exerciseMenuModal: false,
                exerciseMenuCoordinates: {
                    pageX: 0,
                    pageY: 0
                },
                circuitCount: 1,
                totalDuration: 0,
                timeType: 'sec',
                breakDurationBetweenCircuit: 0,
                addExerciseModal: false,
                circuit: {
                    exercises: {},
                    orderByName: []
                }
            }
        case SET_BREAK_DURATION:
            return {
                ...state,
                breakDuration: payload
            }
        case SET_EXERCISE_DURATION:
            return {
                ...state,
                exerciseDuration: payload
            }
        case SET_EXERCISE_NAME:
            return {
                ...state,
                exerciseName: payload
            }

        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
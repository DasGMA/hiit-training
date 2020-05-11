import {
    START_COUNTDOWN,
    SET_COUNTDOWN_COMPONENT,
    REDUCE_EXERCISE_TIME,
    DELETE_EXERCISE_COUNTDOWN,
    RESET_COUNTDOWN
} from '../../Actions/CountdownActions/CountdownActions';

const initialState = {
    startCountdown: false,
    circuitCount: 0,
    circuitDuration: 0,
    totalDuration: 0,
    breakDuration: 0,
    breakDurationBetweenCircuit: 0,
    circuit: {
        exercises: {},
        orderByName: []
    },
}

const CountdownReducers = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case START_COUNTDOWN:
            return {
                ...state,
                startCountdown: !state.startCountdown
            };
        case SET_COUNTDOWN_COMPONENT:
            return {
                ...state,
                circuit: payload.circuit,
                totalDuration: payload.totalDuration,
                circuitDuration: payload.circuitDuration,
                breakDuration: payload.breakDuration,
                breakDurationBetweenCircuit: payload.breakDurationBetweenCircuit,
                circuitCount: payload.circuitCount
            }
        case REDUCE_EXERCISE_TIME:
            return {
                ...state,
                circuit: {
                    ...state.circuit,
                    exercises: payload
                }
            }
        case DELETE_EXERCISE_COUNTDOWN:
            return {
                ...state,
                circuit: {
                    ...state.circuit,
                    exercises: payload.rest,
                    orderByName: payload.orderByName
                }
            }
        case RESET_COUNTDOWN:
            return {
                ...state,
                startCountdown: false,
                circuitCount: 0,
                circuitDuration: 0,
                totalDuration: 0,
                breakDuration: 0,
                breakDurationBetweenCircuit: 0,
                circuit: {
                    exercises: {},
                    orderByName: []
                },
            }
            
        default:
            return {
                ...state
            }
    }
}

export default CountdownReducers;
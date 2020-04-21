import {
    ADD_EXERCISE_SET
} from '../../Actions/CircuitActions/CircuitActions';

const initialState = {
    circuitCount: 1,
    circuitDuration: 0,
    totalDuration: 0,
    breakDuration: 0,
    breakDurationBetweenCircuit: 0,
    circuit: {
        'Exercise 1': {},
        'Exercise 2': {},
        'Exercise 3': {},
        'Exercise 4': {},
        'Exercise 5': {},
        'Exercise 6': {}
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
        default:
            return {
                ...state
            }
    }
}

export default CircuitReducers;
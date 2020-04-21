export const ADD_EXERCISE_SET = 'ADD_EXERCISE_SET';

export const addExerciseSet = () => (dispatch, getState) => {
    const circuit = getState().CircuitReducer.CircuitReducers.circuit;
    const circuitLength = Object.entries(circuit).length;
    const objectKey = `Exercise ${circuitLength + 1}`;

    dispatch({
        type: ADD_EXERCISE_SET,
        payload:  {[objectKey]: {}}
    })

}
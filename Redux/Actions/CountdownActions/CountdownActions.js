export const START_COUNTDOWN = 'START_COUNTDOWN';
export const SET_COUNTDOWN_COMPONENT = 'SET_COUNTDOWN_COMPONENT';
export const REDUCE_EXERCISE_TIME = 'REDUCE_EXERCISE_TIME';

export const startCountdown = () => dispatch => {
    dispatch({
        type: START_COUNTDOWN
    });
};

export const setCountdownComponent = (circuitObject) => dispatch => {
    const {
        circuit, 
        circuitDuration, 
        totalDuration, 
        breakDuration, 
        breakDurationBetweenCircuit,
        circuitCount
    } = circuitObject;

    dispatch({
        type: SET_COUNTDOWN_COMPONENT,
        payload: {
            circuit, 
            circuitDuration, 
            totalDuration, 
            breakDuration, 
            breakDurationBetweenCircuit,
            circuitCount
        }
    })
}
 
export const reduceExerciseTime = (setName, exerciseName) => (dispatch, getState) => {
    const circuit = getState().CountdownReducer.CountdownReducers.circuit;
    let newTime;

    // if (circuit[setName].exercises[exerciseName].exerciseDuration === 0) {
    //     delete circuit[setName].exercises[exerciseName]
    //     console.log('Deleted exercise')
    //     newTime = circuit;
    // } else 
    // if (circuit[setName].setDuration === 0) {
    //     const {[setName]: deletion, ...rest} = circuit;
    //     console.log('Deleted set')
    //     //console.log({rest})
    //     newTime = rest;

    // } else {
        newTime = {
            ...circuit,
            [setName]: {
                ...circuit[setName], 
                exercises: {
                    ...circuit[setName].exercises,
                    [exerciseName]: {
                        ...circuit[setName].exercises[exerciseName],
                        exerciseDuration: circuit[setName].exercises[exerciseName].exerciseDuration - 1
                    }
                },
                setDuration: parseInt(circuit[setName].setDuration) - 1
            }
        }
    //}
    
    const orderedCircuit = Object.keys(newTime).sort().reduce((acc, key) => {
        acc[key] = newTime[key];
        return acc;
    }, {});
    //console.log(orderedCircuit)

    dispatch({
        type: REDUCE_EXERCISE_TIME,
        payload: orderedCircuit
    })
}


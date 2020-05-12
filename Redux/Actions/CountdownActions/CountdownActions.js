export const START_COUNTDOWN = 'START_COUNTDOWN';
export const SET_COUNTDOWN_COMPONENT = 'SET_COUNTDOWN_COMPONENT';
export const REDUCE_EXERCISE_TIME = 'REDUCE_EXERCISE_TIME';
export const DELETE_EXERCISE_COUNTDOWN = 'DELETE_EXERCISE_COUNTDOWN';
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN';

export const startCountdown = () => dispatch => {
    dispatch({
        type: START_COUNTDOWN
    });
};

export const setCountdownComponent = (circuitObject) => dispatch => {
console.log({'From countdown':circuitObject})
    const {
        circuit, 
        circuitDuration, 
        totalDuration, 
        breakDurationBetweenCircuit,
        circuitCount
    } = circuitObject;

    dispatch({
        type: SET_COUNTDOWN_COMPONENT,
        payload: {
            circuit, 
            circuitDuration, 
            totalDuration, 
            breakDurationBetweenCircuit,
            circuitCount
        }
    })
}
 
export const reduceExerciseTime = (exerciseName) => async(dispatch, getState) => {
    const {exercises, orderByName} = getState().CountdownReducer.CountdownReducers.circuit;
    try {
        const newTime = {
            ...exercises,
            [exerciseName]: {
                ...exercises[exerciseName],
                exerciseDuration: exercises[exerciseName].exerciseDuration - 1
            }
        }

        const orderedExercises = () => {
            let obj = {};
            for (const name of orderByName) {
                if (!obj[name]) {
                    obj[name] = newTime[name]
                }
            }

            return obj;
        }

        dispatch({
            type: REDUCE_EXERCISE_TIME,
            payload: orderedExercises()
        })
    }
    catch (e) {console.log(e)}
}

export const deleteExerciseCountdown = (exerciseName) => (dispatch, getState) => {
    const {exercises, orderByName} = getState().CountdownReducer.CountdownReducers.circuit;
    const {[exerciseName]: deleting, ...rest} = exercises;
    orderByName.splice(orderByName.indexOf(exerciseName), 1);
    
    dispatch({
        type: DELETE_EXERCISE_COUNTDOWN,
        payload: {
            rest,
            orderByName
        }
    });
};

export const resetCountdown = () => dispatch => {
    dispatch({
        type: RESET_COUNTDOWN
    })
}

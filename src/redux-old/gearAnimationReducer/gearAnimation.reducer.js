import GearAnimationActionTypes from './gearAnimation.actions.types';
import { gearSpeed } from '../../globalSettings';

const INITIAL_ANIMATION_STATE = {
    gearTickTimes : [0, 0],
    gearsAnimating : [false, false],
    theta : [0,0],
    direction : [1,1],
}

export const gearAnimationReducer = ( state = INITIAL_ANIMATION_STATE, action) => {
    
    switch(action.type){

    case GearAnimationActionTypes.PAUSE_ANIMATING :
        const pauseGearsAnimating = [...state.gearsAnimating];
        pauseGearsAnimating[action.payload.idx] = false;
        return {
            ...state,
            gearsAnimating : pauseGearsAnimating,
        }
    case GearAnimationActionTypes.START_ANIMATING :
        const startGearsAnimating = [...state.gearsAnimating];
        startGearsAnimating[action.payload.idx] = true;
        return {
            ...state,
            gearsAnimating : startGearsAnimating,
            direction : [action.payload.dir, 1],
        }    

    case GearAnimationActionTypes.INCREMENT_THETA :
        const newTheta = [...state.theta];
        const thetaToUpdate = [...state.theta][action.payload.idx];
        // console.log(action.payload.idx);
        // console.log(state);
        // console.log(state.direction[action.payload.idx]);
        const updatedTheta = thetaToUpdate + (gearSpeed * state.direction[action.payload.idx]);
        // 
        newTheta[action.payload.idx] = updatedTheta;
        return {
            ...state,
            theta: newTheta,
        }

    default :
        return {
            ...state
        }    
    }
}
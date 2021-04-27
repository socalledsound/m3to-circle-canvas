import { combineReducers } from 'redux';
import { mouseReducer } from './mouseReducer/mouseReducer';
// import { resizeCanvasReducer } from './resizeCanvas/resizeCanvas.reducer';
// import { gearAnimationReducer } from './gearAnimationReducer/gearAnimation.reducer';
// import { imageButtonsReducer } from './imageButtonReducer/imageButtons.reducer';

export const rootReducer = combineReducers({
    mouse : mouseReducer,
    // resizecanvas : resizeCanvasReducer,
    // gearsAnimation : gearAnimationReducer,
    // imageButtonsSlice : imageButtonsReducer,
})
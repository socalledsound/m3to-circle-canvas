import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from '../../redux/store';
// import { initTimer } from '../../redux/masterClock/masterClock.actions'
// import Voice from '../../redux/granular/granular-objects/Voice'
// import { getFrame } from '../../utils'
// import { updateVoice } from '../../redux/granular/granular.actions'
// import { getRandom } from '../../utils'
// import { getWaveformPoints,  drawCanvasLinePath } from '../../utils'
import { updateMousePos, storeMouseRef } from '../redux/mouse/mouse.actions'
import { MainDrawLoop } from './MainDrawLoop'
import Canvas from './Canvas'
// import IntroScreen from '../intro-page/IntroPage'
// import ControlsPage from '../controls-page/ControlsPage'
// import MoreAbout from '../more-about/MoreAbout'
// import globalSettings from '../../globalSettings'
// const { baseMutationValue } = globalSettings

import styled from 'styled-components'

const CanvasContainer = styled.div`
overflow: hidden
`;

class MainCanvasPage extends Component {

    state = {
        started : true,
        count : 0,
    }

    componentDidMount() {



      }

      draw(ctx, frameCount){
            MainDrawLoop(ctx, frameCount, )
      }

      mouseUp = (x, y) => {
        // const { resetSoundCircleControlStates, storeMouseRef } = this.props;
        const { storeMouseRef } = this.props;
        
        // resetSoundCircleControlStates();
        storeMouseRef({x : x, y: y});
    }



    render(){
        
        // const { initTimer, loaded, timerStarted, controlsOpen, voices, moreAboutOpen } = this.props;
        // console.log(moreAboutOpen);
        return (
            <CanvasContainer
                onMouseMove={(e) => updateMousePos(e.clientX, e.clientY)}
                onMouseUp={(e) => this.mouseUp(e.clientX, e.clientY)}
            >
                <Canvas draw={this.draw}/>
            </CanvasContainer>
        )
    }  
}



const mapStateToProps = state => ({
    // soundCircles : state.soundCircles,
    // soundFileData : state.granular.soundFileDatas,
    // voices : state.granular.voices,
    // loaded : state.granular.loaded,
    // timerStarted : state.granular.timerStarted,
    // controlsOpen : state.controls.controlsOpen,
    // voiceSettings : state.controls.voiceSettings,
    // masterSettings : state.controls.masterSettings,
    // pausedVoices : state.controls.pausedVoices,
    // moreAboutOpen : state.moreAbout.moreAboutOpen,
  })
  const mapDispatchToProps = dispatch => ({
    // addSoundFileDataToRedux : () => dispatch(addSoundFileDataToRedux()),
    updateMousePos : (x, y) => dispatch(updateMousePos(x, y)),
    storeMouseRef : (mousePos) => dispatch(storeMouseRef(mousePos)),
    // initTimer : () => dispatch(initTimer()),
    // updateVoice : (idx, voice) =>  dispatch(updateVoice(idx, voice)),
    // resetSoundCircleControlStates : () => dispatch(resetSoundCircleControlStates()),
})


export default connect(mapStateToProps, mapDispatchToProps)(MainCanvasPage)
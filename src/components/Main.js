import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from '../../redux/store';
// import { initTimer } from '../../redux/masterClock/masterClock.actions'
// import Voice from '../../redux/granular/granular-objects/Voice'
// import { getFrame } from '../../utils'
// import { updateVoice } from '../../redux/granular/granular.actions'
// import { getRandom } from '../../utils'
// import { getWaveformPoints,  drawCanvasLinePath } from '../../utils'
// import { updateMousePos, storeMouseRef } from '../../redux/mouse/mouse.actions'
import Canvas from './Canvas'
// import IntroScreen from '../intro-page/IntroPage'
// import ControlsPage from '../controls-page/ControlsPage'
// import MoreAbout from '../more-about/MoreAbout'
// import globalSettings from '../../globalSettings'
// const { baseMutationValue } = globalSettings

class MainCanvasPage extends Component {

    state = {
        started : true,
        count : 0,
    }

    componentDidMount() {



      }

      //draw loop -- gets called from window.requestAnimation in Canvas
      draw = (ctx, frameCount) => {

        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // const { count } = this.state;
        // const { voices, soundFileData, updateVoice, loaded, voiceSettings, masterSettings, pausedVoices } = this.props;      

        // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        // //if soundfile data is loaded then we should have voices
        // // voices are created in AudioEngine (for now)
        // if(loaded){
        //     if(voices.length > 0 && count === 0){
        //         voices.forEach((voice, i) => {
  
        //            if(voice.active){
        //                voice.updatePaused(pausedVoices);
        //                // if(voice.id === 0){
        //                //     voice.paused = false
        //                // } 
                       
   
        //                if(!voice.paused || voice.waiting){
        //                 //    console.log(voice.id);
        //                    voice.update(voiceSettings.filter(item => item.id === i)[0]);
        //                    // voice.drawLine(ctx);
        //                    voice.render(ctx);
        //                 //    const idToReplace = voice.id;

        //                }

        //             //    this value should be controlled by the mutation slider
        //             //    changes the bufnum/waveform/sound
        //                const coin = Math.random();
        //             //    console.log(masterSettings.mutation);
        //                const mutationCutoff = 1 - (baseMutationValue * (1/masterSettings.mutation));
        //             //    console.log(mutationCutoff);
        //             // const mutationCutoffFixed = 0.8;
        //                if(coin > mutationCutoff){
        //                 //    console.log('triggered');
        //                    const bufnum = Math.floor(Math.random() * soundFileData.length);
        //                 //    console.log(bufnum);
        //                    const newData = soundFileData[bufnum];
        //                    const newVoice = new Voice(voice.id, bufnum, newData, voice.paused);
        //                     updateVoice(voice.id, newVoice)
        //                }


        //            }
   
                      
                  
                  
        //        })
        //    }
   

   
        //}

       
      }



    render(){
        
        // const { initTimer, loaded, timerStarted, controlsOpen, voices, moreAboutOpen } = this.props;
        // console.log(moreAboutOpen);
        return (
            <div>
                <Canvas draw={this.draw}/>
                {/* { timerStarted ? 
                 <Canvas draw={this.draw}/>
                    :
                <IntroScreen initTimer={initTimer} loaded={loaded}/>
                }
                {
                    controlsOpen && 
                        <ControlsPage controlsOpen={controlsOpen} voices={voices}/>
                }
                {
                    moreAboutOpen && 
                        <MoreAbout />
                } */}


            </div>
           
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
    // updateMousePos : (x, y) => dispatch(updateMousePos(x, y)),
    // storeMouseRef : (mousePos) => dispatch(storeMouseRef(mousePos)),
    // initTimer : () => dispatch(initTimer()),
    // updateVoice : (idx, voice) =>  dispatch(updateVoice(idx, voice)),
    // resetSoundCircleControlStates : () => dispatch(resetSoundCircleControlStates()),
})


export default connect(mapStateToProps, mapDispatchToProps)(MainCanvasPage)
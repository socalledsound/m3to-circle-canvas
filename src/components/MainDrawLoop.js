//draw loop -- gets called from window.requestAnimation in Canvas
export const MainDrawLoop = (ctx, frameCount, ...rest) => {

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


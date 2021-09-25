/*import React, { useContext, useState } from 'react';
//import TimerContext from '../context/TimerContext';
//import Timer from './Timer';


export interface IAppProps {
}
let timer: NodeJS.Timeout 

const App = (props: IAppProps) =>{

  //const timerContext = useContext(TimerContext)
  
  /*const [ hours, setHours ] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [seconds, setSeconds] = useState('0')
  const [isStart, setIsStart] = useState(false)
  
  const textColor = (hours === '0' && minutes === '0' && parseInt(seconds) < 10 && seconds !== '0')? 'red-text': '' 
  const hour: ITimerInputProps = ({label: 'Hr', count: hours, max: 99, callback: setHours,color: textColor })
  const minute: ITimerInputProps = ({label: 'Min', count: minutes, max: 59, callback: setMinutes,color: textColor })
  const second: ITimerInputProps = ({label: 'Sec', count: seconds, max: 59, callback: setSeconds,color: textColor })

  *

  const countDown = () =>{
    
    let time = (parseInt(hours) * 3600) + (parseInt(minutes) * 60) + parseInt(seconds)
    setIsStart(true)
    timer = setInterval(
      ()=>{
        
        if(time > 0 ){
          time--
          //console.log(time);
          
        let hr = Math.floor(time / 3600)
        let mins = Math.floor((time - (hr * 3600))/ 60)
        let sec = (time - (hr * 3600 + mins * 60))

        console.log(`${hr}:${mins}:${sec}`);
        

        setHours(()=>`${Math.floor(hr)}`)
        setMinutes(()=>`${Math.floor(mins)}`)
        setSeconds(()=>`${Math.floor(sec)}`)
        }
        else if (time === 0){
          clearInterval(timer)
          setIsStart(false)
          const audio = new Audio('https://orangefreesounds.com/wp-content/uploads/2021/02/Alarm-clock-bell-ringing-sound-effect.mp3')
          audio.play()
        }
        
        
      }
      ,1000)
  }

  const reset = ()=>{
    clearInterval(timer) 
    setIsStart(false)
    setHours('0')
    setMinutes('0')
    setSeconds('0')
  }
  const pause = ()=>{
    clearInterval(timer) 
    setIsStart(false)
  }

  return (
    <div >
      
      <Timer  />
      
      <div>

        {/*context<ScrollPicker />

        {/*<div className={'timer-display'} >
        <TimerInput {...hour} />
        <div >{':'}</div>
        <TimerInput {...minute} />
        <div >{':'}</div>
        <TimerInput {...second} />
        </div>*
      </div>
      <div >
        {
          (!isStart)?
          <button type={'button'} onClick={countDown} >{'Start'}</button> :
          <button type={'button'} onClick={()=>pause()}>{'Stop'}</button>
        }
        <button type={'button'} onClick={()=>reset()}>{'Reset'}</button>
        
      </div> 
      
    </div>
  );
}

export default App
*/

export {}
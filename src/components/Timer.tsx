import React, { useState } from 'react'
import ValueInput from './ValueInput'

interface CountDownTimer{
  hour: string,
  minute: string,
  second: string
}

const defaultTime: CountDownTimer = {
  hour: '00',
  minute: '00',
  second: '00'
}

let interval: NodeJS.Timer

const Timer = () => {
  const [timer, setTimer] = useState(defaultTime)
  const [isStart, setIsStart] = useState(false)

  const _setTimer = (name: string, value: string) =>{
    setTimer(state => ({...state, [name]: value}))
  }

  const countDown = () =>{
    
    let time = (parseInt(timer.hour) * 3600) + (parseInt(timer.minute) * 60) + parseInt(timer.second)
    
    interval = setInterval(
      ()=>{
        
        if(time > 0 ){
          setIsStart(()=>true)
          time--
          
        let hour = Math.floor(time / 3600)
        let minute = Math.floor((time - (hour * 3600))/ 60)
        setTimer({hour: hour.toString(), minute: minute.toString(), second: (time - (hour * 3600 + minute * 60)).toString() })
        console.log(`run:${isStart}`);
        }
        else if (time === 0 ){
          console.log(isStart);
          
          clearInterval(interval)
          setIsStart(false)
          const audio = new Audio('https://orangefreesounds.com/wp-content/uploads/2021/02/Alarm-clock-bell-ringing-sound-effect.mp3')
          audio.play()
        }
        
        
      }
      ,1000)
  }

  const resetTimer = ()=>{
    clearInterval(interval) 
    setIsStart(false)
    setTimer(defaultTime)
  }

  const pauseTimer = ()=>{
    clearInterval(interval) 
    setIsStart(false)
  }
  
  
  return (
    <div>
      <div > 
        <ValueInput {...{label: 'hour', value: timer.hour, callback: _setTimer, max: 100}}     />
        <div >{':'}</div>
        <ValueInput {...{label: 'minute', value: timer.minute, max:59, callback: _setTimer}}     />
        <div >{':'}</div>
        <ValueInput {...{label: 'second', value: timer.second, max:59, callback: _setTimer}}     />
      </div>
      <div > 
        {
          (!isStart)?
          <button type={'button'} onClick={countDown} >{'Start'}</button> :
          <button type={'button'} onClick={()=>pauseTimer()}>{'Stop'}</button>
        }
        <button type={'button'} onClick={()=>resetTimer()}>{'Reset'}</button>
      </div>
    </div>
  )
}

export default Timer

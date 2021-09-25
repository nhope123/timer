import React, { createContext, FC, useState } from 'react'

export interface Timer{
  hour?: string,
  minute?: string,
  second?: string
} 

interface TimerContextValues{
  timer?: Timer,
  setTimer: (name: string, value: string) => void
}


export const zeroDefaultTimer:Timer = { hour: '00', minute: '00', second: '00' }


const TimerContext = createContext<TimerContextValues>(null as never)

const TimerContextProvider: FC = (props) => {
  const [countdownTimer, setCountdownTimer] = useState<Timer >(zeroDefaultTimer)

  const _setCountdownTimer = (name: string, value: string) =>{
    setCountdownTimer(state =>({...state, [name]: value }))
  }

  return (
    <TimerContext.Provider 
      value={{
        timer: countdownTimer,
        setTimer: _setCountdownTimer,
        }}>
      {props.children}
    </TimerContext.Provider >
  )
}

export default  TimerContext
export const Provider = TimerContextProvider
export const Consumer = TimerContext.Consumer
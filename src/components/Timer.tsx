import React, { useContext } from 'react'
import TimerContext from '../context/TimerContext'
import ScrollPicker from './ScrollPicker'

const timeValueGenerator = (value: number): string[] =>{
  let result: string[] = []
  for(let x = 0; x < value; x++){
    result.push(
      (x < 10)? `0${x}`: `${x}`
    )
  }
  return result
}

const hour =  timeValueGenerator(100)
//const minutes =  timeValueGenerator(60)
//const seconds =  timeValueGenerator(60)



const Timer = () => {
  const {timer, setTimer} = useContext(TimerContext)

  const getValue = (name:string, value: string ) =>{
    console.log(`name: ${name}, value:${value}`);
    setTimer(name,value)
  }
console.log(timer?.hour);

  const hourProps = {label: 'hour',value: {'hour': timer?.hour}, options:{'hour':hour}, callback: ()=>getValue }
  return (
    <div>
      <div >
        <ScrollPicker {...hourProps} />
      </div>
      <div ></div>
    </div>
  )
}

export default Timer

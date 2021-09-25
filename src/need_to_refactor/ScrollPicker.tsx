import React, {FC, useState} from 'react'
import Picker from 'react-mobile-picker-scroll'

const timeValueGenerator = (value: number): string[] =>{
  let result: string[] = []
  for(let x = 0; x < value; x++){
    result.push(
      (x < 10)? `0${x}`: `${x}`
    )
  }
  return result
}

const defaultTime = { hr: '00', min: '00', sec: '00' }
const hours =  timeValueGenerator(100)
const minutes =  timeValueGenerator(60)
const seconds =  timeValueGenerator(60)

const options = {
  hr:  timeValueGenerator(100),
  min: timeValueGenerator(60),
  sec: timeValueGenerator(60)
}

const ScrollPicker:FC = () => {
  const [timer, setTimer] = useState(defaultTime)
  const handleChange = (name:string, value:string) =>{
    setTimer((state) =>({
      ...state, [name]: value
    }))
  }
  return (
    <div>
      <Picker {...{valueGroups:timer, optionGroups: options}} onChange={ handleChange } />
    </div>
  )
}

export default ScrollPicker

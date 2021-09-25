import {FC} from 'react'
import Picker from 'react-mobile-picker-scroll'

interface ScrollPickerProps{
  label: string,
  value: object,
  options: object,
  callback: any
}

const ScrollPicker:FC<ScrollPickerProps> = (props) => {  

  return (
    <div>
      <div >{props.label}</div>
      <Picker {...{
        valueGroups: props.value , 
        optionGroups: props.options,
        onChange: ()=>props.callback
        }} 
      />
      
    </div>
  )
}

export default ScrollPicker

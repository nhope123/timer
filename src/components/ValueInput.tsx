import {FC, useState} from 'react'

interface ValueInputProps{
  label: string,
  value: string,
  max: number,
  callback: any,
}

const ValueInput:FC<ValueInputProps> = (props) => {
  const [inputValue, setInputValue] = useState('0')
  const [isInputActive, setIsInputActive] = useState(false)

  const submitInput = (input: string) =>{
    props.callback(props.label, input)
    setIsInputActive(false)
  }

  const switchComponent = () =>{    
    setInputValue(()=>parseInt(props.value).toString())
    setIsInputActive(true)
  }  

  return (
    <div>
      <div >{props.label[0].toUpperCase() + props.label.slice(1) }</div>
      <div >
        {
          (isInputActive)?
            <input 
              type="number" 
              min={0}
              max={props.max}
              tabIndex={0} 
              onChange={e => setInputValue(e.target.value)} 
              value={inputValue} 
              onBlur={e => submitInput(e.target.value)} 
              autoFocus 
            />:
            <h1 
              tabIndex={0} 
              onClick={switchComponent} 
            >
              {(parseInt(props.value) < 10)? `0${parseInt(props.value)}`: props.value}
            </h1>
        }
      </div>
      
    </div>
  )
}

export default ValueInput

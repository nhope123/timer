import React,{ useState } from 'react';
import './timerInput.css';

export interface ITimerInputProps {
  label: string,
  count: string,
  max: number,
  callback: (num:string)=>void,
  color: string
}

const TimerInput = (props: ITimerInputProps) => {

  const [time, setTime] = useState(props.count)
  const [isDisplay, setIsDisplay] = useState(true)

  const updateTimer = async() =>{
    await props.callback(time)
    setIsDisplay(!isDisplay)

  }
  return (
    <div className={'timer-input'} >
      <div >{props.label}</div>
      {
        (!isDisplay)?
        (<div>
          <input type="number" value={time} tabIndex={0} max={props.max} min={0} 
                onChange={event =>setTime(event.target.value)} 
                onBlur={updateTimer} autoFocus />
        </div>) :
        <div onClick={()=>setIsDisplay(!isDisplay)} className={`${props.color}`} >{(parseInt(props.count) < 10)? ('0' + props.count): props.count}</div>
      }
    </div>
  );
}
export default TimerInput 
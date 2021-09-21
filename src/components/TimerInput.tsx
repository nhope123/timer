import React,{ useState } from 'react';

export interface ITimerInputProps {
  label: string,
  count: string,
  max: number,
  callback: (num:string)=>void
}

const TimerInput = (props: ITimerInputProps) => {

  const [time, setTime] = useState(props.count)
  const [isDisplay, setIsDisplay] = useState(true)

  const updateTimer = async() =>{
    await props.callback(time)
    setIsDisplay(!isDisplay)

  }
  return (
    <div>
      <div >{props.label}</div>
      {
        (!isDisplay)?
        (<div>
          <input type="number" value={time} tabIndex={0} max={props.max} min={0} 
                onChange={event =>setTime(event.target.value)} 
                onBlur={updateTimer}  />
        </div>) :
        <div onClick={()=>setIsDisplay(!isDisplay)} >{props.count}</div>
      }
    </div>
  );
}
export default TimerInput 
import React, { useState } from 'react';
import TimerInput,{ ITimerInputProps } from './TimerInput';

export interface IAppProps {
}

const App = (props: IAppProps) =>{
  const [ hours, setHours ] = useState('0')
  const [minutes, setMinutes] = useState('0')
  const [seconds, setSeconds] = useState('0')

  const hour: ITimerInputProps = ({label: 'Hours', count: hours, max: 99, callback: setHours })
  const minute: ITimerInputProps = ({label: 'Minutes', count: minutes, max: 59, callback: setMinutes })
  const second: ITimerInputProps = ({label: 'Seconds', count: seconds, max: 59, callback: setSeconds })

  return (
    <div >
      <div>
        <div >
        <TimerInput {...hour} />
        <div >{':'}</div>
        <TimerInput {...minute} />
        <div >{':'}</div>
        <TimerInput {...second} />
        </div>
      </div>
      <div >
        <button>{'Start'}</button>
        <button>{'Pause'}</button>
      </div>
      
    </div>
  );
}

export default App

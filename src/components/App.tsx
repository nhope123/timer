import {FC} from 'react'
import {Provider as TimerProvider} from '../context/TimerContext'
import Timer from './Timer'



const AppWrapper:FC = (props) =>{
  return(
    <TimerProvider >
      <App />
    </TimerProvider>
  )
}



const App = () => {
  return (
    <div>
      <Timer />
    </div>
  )
}

export default AppWrapper

import React from 'react'
import { displayIcon, iconClass} from '../../utils/RegisterStepCounterUtils'
import './registerstepcounter.css'

interface RegisterStepCounterProps {
    step: number;
    changeStep() :void
    }

export const RegisterStepCounter:React.FC<RegisterStepCounterProps> = ({step, changeStep}) => {
  return (
    <div className='reg-step-counter-container'>
        <div className={iconClass(step)} onClick={changeStep}>
            {displayIcon(step)}
        </div>
        <span className='reg-step-number'> Step {step} of 6</span>
    </div>
  )
}

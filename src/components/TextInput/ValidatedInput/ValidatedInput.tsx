import React, {useState, useEffect} from 'react'
import { StyledInputBox, StyledInputLabel } from './StyledInput'
import './validatedinput.css'
import { theme } from '../../../Theme'
import { ValidatedInputState } from '../../../utils/GlobalInterfaces'
import { determineValidatedStyles } from '../../../features/auth/register/utils/TextInputUtils'


interface ValidatedInputProps {
    name: string
    label: string
    errorMessage: string
    validator(value:string):boolean
    changeValue(e:React.ChangeEvent<HTMLInputElement>):void
    attributes?:Record<string, string | number | boolean>
}
export const ValidatedInput:React.FC<ValidatedInputProps> = (
    {name, label, errorMessage, validator, changeValue, attributes}
) => {

  const [state, setState] = useState<ValidatedInputState>({
    active: false,
    valid: true,
    typedIn: false,
    labelActive: false,
    labelColor: "light_gray",
    value: ""
  })

  const focus = (e:React.FocusEvent<HTMLInputElement>):void => {
    setState({...state, active: !state?.active})
  }

  const updateValue = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setState({...state, typedIn: true, value: e.target.value})
    changeValue(e)
   }

   useEffect(() => { 

          setState(determineValidatedStyles(state, validator))

   }, [state.active, state.typedIn, state.value,state.labelActive, state.labelColor ])

  

  return (
    <div className='validated-input-container'>
        <StyledInputBox active={state.active} valid={state.valid} theme={theme}>
            <StyledInputLabel color={state.labelColor} active={state.labelActive} valid={state.valid} theme={theme}>{label}</StyledInputLabel>
            <input className='validated-input-box'
            onFocus={focus}
            onBlur={focus}
            onChange={updateValue}
            {...attributes}/>
        </StyledInputBox>
        {!state.valid ? <span className='validated-input-error'>{errorMessage}</span> : <></>}
    </div>
  )
}

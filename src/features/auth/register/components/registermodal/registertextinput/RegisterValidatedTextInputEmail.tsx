import React, {useState} from 'react'
import { ValidatedTextInput } from '../../../../../../components/TextInput/ValidatedInput/ValidatedTextInput'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../../../../../redux/Store'
import { updateRegister } from '../../../../../../redux/slices/RegisterSlice'
import { validateEmail } from '../../../../../../services/Validators'
import './registervalidatedtextinput.css'

interface RegisterValidatedTextInputEmailProps {
  value:string
}
export const RegisterValidatedTextInputEmail:React.FC<RegisterValidatedTextInputEmailProps> = ({value}) => {
  const [emailValid, setEmailValid] = useState<boolean>(true)

  const dispatch:AppDispatch = useDispatch()
  
  const updateValue = (e:React.ChangeEvent<HTMLInputElement>): void => {
    if(e.target.name === 'email') {
      dispatch(updateRegister({name:e.target.name, value:e.target.value}))
      
      let valid = validateEmail(e.target.value)

      setEmailValid(valid)

      dispatch(updateRegister({name: 'emailValid', value: valid}))
      
    }
  }
  return (
    <div className='register-validated-text-input-container'>
        <div className='register-validated-text-input-content'>
                   <ValidatedTextInput valid={emailValid} name="email" label = "Email" changeValue={updateValue} data={value} />
                  {emailValid ? <></> : <span className='register-validated-text-input-error'>Please enter your Email</span>}
                </div>
    </div>
  )
}

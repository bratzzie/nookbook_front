import React, {useState, useEffect} from 'react'
import './registerstepone.css'
import { TextInput } from '../../../../../components/TextInput/TextInput'
import { ValidatedInput } from '../../../../../components/TextInput/ValidatedInput/ValidatedInput'
import { validateName } from '../../../../../services/Validators'

interface RegisterStepOneState{
    name: string
    username: string
    email: string
}
export const RegisterStepOne:React.FC = () => {
    const [state, setState] = useState<RegisterStepOneState>({
        name: '',
        username: '',
        email: ''
    })

    const updateUser = (e:React.ChangeEvent<HTMLInputElement>) : void => {
        setState({...state, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        console.log("State: ", state)
    }, [state])

  return (
    <div className='reg-step-one-container'>
        <div className="reg-step-one-content">
            <ValidatedInput name="name" label="Name" errorMessage="Please enter your name" changeValue={updateUser} validator={validateName}/>
            <ValidatedInput name="username" label="Username" errorMessage="Please enter your username" changeValue={updateUser} validator={() => true}/>
            <ValidatedInput name="email" label="Email" errorMessage="Please enter a valid email" changeValue={updateUser} validator={() => true}/>
           </div>
    </div>
  )
}

import React from 'react'
import './home.css'
import '../assets/global.css'
import { Modal } from '../components/Modal/Modal'
import { RegisterModal } from '../features/auth/register/components/registermodal/RegisterModal'

export const Home:React.FC = () => {
  return (
    <div className='home-container bg-color'>
        <RegisterModal/>
    </div>
  )
}
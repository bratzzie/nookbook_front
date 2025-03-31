import React from 'react'
import './modal.css'

interface ModalProps {
  children: React.ReactNode
}

export const Modal:React.FC<ModalProps> = (props:ModalProps) => {
  return (
    <div className='modal-overlay'>
      <div className="modal-container">
        {props.children}
        </div>
    </div>
  )
}

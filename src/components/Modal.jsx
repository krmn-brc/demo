import React from 'react'
import { MdClose } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { modalAction } from '../redux/modalSlice';



const Modal = ({title, content}) => {
   const dispatch = useDispatch()
   
  return (
    <div className='z-50 fixed bg-sky-500/50 top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center'>
        <div className="w-1/3 bg-white shadow-xl rounded-md p-4">
            <div className="border-b py-3 flex items-center justify-between">
                 <h3 className="text-2xl">{title}</h3>
                 <MdClose size={24} onClick={() => dispatch(modalAction())} />
            </div>
             {content}
        </div>
    </div>
  )
}

export default Modal
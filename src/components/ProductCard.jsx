import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import {  CiEdit } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/productSlice';

import { useNavigate } from 'react-router-dom';
import { modalAction } from '../redux/modalSlice';

const ProductCard = ({product}) => {
    const [openEdit, setOpenEdit] = useState(false)
    const dispatch = useDispatch()
    const navigation = useNavigate()
    const updateAction = () => {
      navigation(`/?update=${product.id}`); 
      setOpenEdit(!openEdit);
      dispatch(modalAction())
    }

  return (
        <div className='w-[300px] h-[350px] relative m-2 rounded-md shadow-lg'>
           <img src={product?.url} className='w-full h-full rounded-md' alt={product.name} />
           <div className="absolute left-0 bottom-0 bg-sky-500/[40] w-full text-white">
                <div> Ürün Adı: {product?.name}</div>
                <div> Fiyat: {product?.price}</div>
           </div>
           <div onClick={() => setOpenEdit(!openEdit)} className="absolute bg-black top-0 right-1  px-4 mt-2 rounded-md cursor-pointer ">
               <BsThreeDots color='white' size={24} />
           </div>
           {
               openEdit && (
                 <div className="bg-black border rounded-lg border-white text-white absolute w-40 top-8 right-2 p-2 tex-sm">
                     <div onClick={() => updateAction()} className="cursor-pointer hover:text-gray-300 flex justify-between items-center mt-2 ">Güncelle <CiEdit  color='yellow' size={15} /> </div>
                     <div onClick={() => {dispatch(deleteProduct(product.id)); setOpenEdit(!openEdit)}} className="cursor-pointer hover:text-gray-300 flex justify-between items-center mt-2 ">Sil <FaRegTrashAlt  color='red' size={15} /> </div>
                 </div>
               )
           }
        </div>

  )
}

export default ProductCard
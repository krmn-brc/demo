import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'
import { addProduct } from '../redux/productSlice'
import { modalAction } from '../redux/modalSlice'


const Products = () => {
  const { modal } = useSelector(state => state.modal)
  const { product } = useSelector(state => state.product)
  const dispatch = useDispatch();


  const  [productInfo, setProductInfo] = useState({name:'', price:'', url:''})

   const onChangeAction = (event, type) =>{

     if(type === "url"){
       setProductInfo(prev => ({...prev, [event.target.name]:URL.createObjectURL(event.target.files[0])}))
      }else{
          setProductInfo(prev => ({...prev, [event.target.name]:event.target.value}))
      }

   }
   const btnAction = () => {
      dispatch(addProduct(productInfo));
      dispatch(modalAction())
   }
   
  const content = (
    <>
      <Input placeholder={"Ürün adı"} name={"name"} id={"name"} type={"text"} onChange={(e) => onChangeAction(e, "name")} />
      <Input placeholder={"Fiyat"} name={"price"} id={"price"} type={"text"} onChange={(e) => onChangeAction(e, "price")} />
      <Input placeholder={"Resim seç"} name={"url"} id={"url"} type={"file"} onChange={(e) => onChangeAction(e, "url")} />

      <div className='border-t py-3 flex items-center justify-between'>
        <Button  text={"Kaydet"} action={btnAction} />
      </div>

    </>
  )
 
  return (
    <div className='w-5/6 m-auto '>
      {modal && <Modal content={content} title={"Ürün oluştur"} action={btnAction} />}
       <div className='flex gap-4 flex-wrap justify-start'>
            { product?.map((p, i) => <ProductCard key={i} product={p} />)}
       </div>
    </div>
  )
}

export default Products
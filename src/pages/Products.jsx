import React, { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../components/Modal'
import Input from '../components/Input'
import Button from '../components/Button'
import { addProduct, editProduct } from '../redux/productSlice'
import { modalAction } from '../redux/modalSlice'
import { useLocation, useNavigate } from 'react-router-dom'


const Products = () => {
  const { modal } = useSelector(state => state.modal)
  const { product, keyWord } = useSelector(state => state.product)
  const dispatch = useDispatch();
  const location = useLocation();
  const loc = location?.search.split('=')[1];
  const navigate = useNavigate()
  const inputRef = useRef(null)



  const  [productInfo, setProductInfo] = useState({name:'', price:'', url:''})

   const onChangeAction = (event, type) =>{

     if(type === "url"){
       setProductInfo(prev => ({...prev, [event.target.name]:URL.createObjectURL(event.target.files[0])}))
      }else{
          setProductInfo(prev => ({...prev, [event.target.name]:event.target.value}))
      }

   }

   useEffect(() => {
    if(loc)
     setProductInfo({...product.find(p => p.id === loc)})
 
   

 },[loc])


   const btnAction = () => {
      dispatch(addProduct({...productInfo, id: product.length +1}));
      dispatch(modalAction())
      
     
   }
   const btnUpdateAction = () => {
        
        dispatch(editProduct({...productInfo, id:loc}))
        dispatch(modalAction())
        navigate("/")
   }
   
   const filterProduct = product.filter(x => x.name.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
  const content = (
    <>
      <Input ref={inputRef} value={productInfo?.name } placeholder={"Ürün adı"} name={"name"} id={"name"} type={"text"} onChange={(e) => onChangeAction(e, "name")} />
      <Input ref={inputRef}  value={productInfo?.price} placeholder={"Fiyat"} name={"price"} id={"price"} type={"text"} onChange={(e) => onChangeAction(e, "price")} />
      <Input  placeholder={"Resim seç"} name={"url"} id={"url"} type={"file"} onChange={(e) => onChangeAction(e, "url")} />

      <div className='border-t py-3 flex items-center justify-between'>
        <Button  text={!loc ? "Yeni Ürün Ekle" : "Güncelle"} action={loc ? btnUpdateAction : btnAction} />
      </div>

    </>
  )
 
  return (
    <div className='w-5/6 m-auto '>
      {modal && <Modal content={content} title={loc ? "Ürün Güncelleme": "Ürün Ekleme"} action={btnAction} />}
       <div className='flex gap-4 flex-wrap justify-start'>
            { filterProduct?.map((p, i) => <ProductCard key={i} product={p} />)}
       </div>
    </div>
  )
}

export default Products
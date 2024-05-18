import React from 'react'
import { MdPostAdd } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { modalAction } from '../redux/modalSlice';
import { searchProduct, sortingProduct } from '../redux/productSlice';

const Header = () => {
   const dispatch = useDispatch();

  return (
    <div className='flex items-center shadow-lg justify-between bg-indigo-700 text-white px-4 py-4 '>
         <div className='text-2xl w-15'>REACT UYGULAMA</div>
         <div className='flex items-center gap-5'>
             <div className='text-black'>
                 <select onChange={(e) => dispatch(sortingProduct(e.target.value))} className='h-10 rounded-lg'  name="" id="">
                    <option selected disabled defaultValue="">Sırala</option>
                    <option value="asc">ARTAN</option>
                    <option value="desc">AZALAN</option>
                 </select>
             </div>
              <div>
                 <input onChange={e => dispatch(searchProduct(e.target.value))} className='h-10 rounded-lg px-3 text-black' type="text" placeholder='Ara...' />
              </div>
              <div onClick={() => dispatch(modalAction())} className='bg-indigo-900 cursor-pointer w-10 h-10 rounded-full flex justify-center items-center'>
                 <MdPostAdd size={24} />
              </div>
         </div>
          
    </div>
  )
}

export default Header
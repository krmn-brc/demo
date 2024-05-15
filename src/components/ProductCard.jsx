import React from 'react'

const ProductCard = ({product}) => {
  return (
        <div className='w-[200px] h-[200px] relative m-2 rounded-md shadow-lg'>
           <img src={product?.url} className='w-full h-full rounded-md' alt={product.name} />
           <div className="absolute left-0 bottom-0 bg-sky-500/[40] w-full text-white">
                <div> Ürün Adı: {product?.name}</div>
                <div> Fiyat: {product?.price}</div>
           </div>
        </div>

  )
}

export default ProductCard
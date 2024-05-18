import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
     name:'product',
     initialState:{
          product:[],
          keyWord:''
     },
     reducers:{
          addProduct:(state, action) => {
               state.product = [...state.product, action.payload]
          },
          sortingProduct:(state, action) => {
                state.product = [...state.product.sort((a, b) => action.payload == 'asc' ? a.price - b.price : action.payload == 'desc' ? b.price - a.price : null)] 
          },
          editProduct:(state, action) => {
                state.product = [...state.product.map(p => Number(p.id )=== Number(action.payload.id )? ({...p, ...action.payload}) : p)] 
          },
          deleteProduct:(state, action) => {
                state.product = [...state.product.filter(p => p.id !== action.payload)] 
          },
          searchProduct:(state, action) => {
                state.keyWord = action.payload
          }
     }
})

export const { addProduct, editProduct, deleteProduct, sortingProduct, searchProduct } = productSlice.actions
export default productSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice'
import modalReducer from './modalSlice'

export default configureStore({
  reducer: {
     product:productReducer,
     modal:modalReducer
  }
})
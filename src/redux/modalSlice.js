import { createSlice } from "@reduxjs/toolkit";



const modalSlice = createSlice({
     name:'modal',
     initialState:{
        modal:false
     },
     reducers :{
         modalAction:state => {
               state.modal = !state.modal;
         }
     }
})

export const { modalAction } =  modalSlice.actions
export default modalSlice.reducer
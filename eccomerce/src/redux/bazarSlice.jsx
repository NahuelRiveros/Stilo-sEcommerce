import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData:[],
    userInfo:null,
}
// CARRITO DE COMPRAS CON REDUX
export const bazarSlice =createSlice({
  name: 'counter',
  initialState,
  reducers:{
    addToCart:(state, action)=>{
        const item = state.productData.find((item)=>item.id === action.payload.id);
        
        if(item){
          item.cantidad += action.payload.cantidad;
        }else {

          state.productData.push(action.payload)
        }
    },
    deleteItem:(state,action)=>{
      state.productData= state.productData.filter(
        (item)=> item.id !== action.payload
      )
    },
    resetCart:(state)=>{
      state.productData= []
    },
    incrementCantidad: (state,action)=>{
      const item = state.productData.find(
        (item)=> item.id === action.payload.id
      )
      if (item){
        item.cantidad++;
      }

    },
    descreaseCantidad: (state, action)=>{
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item.cantidad === 1){
        item.cantidad = 1
      }else {
        item.cantidad--;
      }
    },
    // =================== USER Logeado ================
    addUser: (state, action)=>{
      state.userInfo= action.payload
    },
    removeUser: (state, action)=>{
      state.userInfo=null
    }
    // =================== USER Logeado ================
  }
})

export const { addToCart,deleteItem,incrementCantidad,descreaseCantidad,resetCart, addUser, removeUser} = bazarSlice.actions;
export default bazarSlice.reducer;
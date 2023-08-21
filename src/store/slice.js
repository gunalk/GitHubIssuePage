import {createSlice} from "@reduxjs/toolkit"
 
const initialState={
    currentpage:1,


    
}

export const Reducer=createSlice({
  name:'user',
  initialState,
  reducers:{
     pageChange:(state,action)=>{
        state.currentpage=action.payload
     }
   
  }
})


export const{pageChange}=Reducer.actions
export default Reducer.reducer
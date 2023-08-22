import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";



const initialState={
    totalItems:localStorage.getItem("totalItems")?JSON.parse(localStorage.getItem("totalItems")):0
    
}

const cartSlice=createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value){
            state.totalItems=value.payload;
        },
        addToCart(state,value){
            state.totalItems+=value.payload;
            toast.success("Item added to cart");
        },
        removeFromCart(state,value){
            state.totalItems-=value.payload;
            toast.remove("Item removed from the cart");
        },
        resetCart(state,value){
            state.totalItems=0;
            toast.success("All items are removed from the cart");
        }

        


    
    }
})
export const {setTotalItems}=cartSlice.actions;
export default cartSlice.reducer
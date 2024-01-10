import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: { list: JSON.parse(localStorage.getItem("cartItems")) || [], 
    total: JSON.parse(localStorage.getItem("cartTotal")) || 0  },
    reducers: {
        addToCart(state, action) {
            console.log(state.list, 'state')
            console.log(action, 'action')
            const check = state.list.findIndex(book => book.id === action.payload.id)
            if (check !== -1) {
                console.log(state.list)
                state.list[check].quantity += action.payload.quantity 
            } else {
                state.list.push(action.payload)
            }
            
            state.total = state.list.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.list))
            localStorage.setItem('cartTotal', JSON.stringify(state.total))
        },
        updateQuantity(state, action) {
            const check = state.list.findIndex(book => book.id === action.payload.id)
            if (check !== -1) {
                state.list[check].quantity = action.payload.quantity 
                localStorage.setItem('cartItems', JSON.stringify(state.list))
            }
            state.total = state.list.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
            localStorage.setItem('cartTotal', JSON.stringify(state.total))


        },
        removeItem(state, action) {
            state.list = state.list.filter(book => book.id !== action.payload.id)
            state.total = state.list.reduce((sum, book) => sum + +book?.price * book?.quantity, 0)
            localStorage.setItem('cartItems', JSON.stringify(state.list))
            localStorage.setItem('cartTotal', JSON.stringify(state.total))

        },
        clearCart(state, action) {
            state.list = []
            localStorage.setItem('cartItems', JSON.stringify(state.list))
            localStorage.setItem('cartTotal', JSON.stringify(0))

        }
    }
})

const { actions, reducer } = cartSlice

export const { addToCart, updateQuantity, removeItem, clearCart } = actions

export default reducer
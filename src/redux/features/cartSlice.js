import { createSlice } from "@reduxjs/toolkit";
import { menuItemsData } from "../../components/common/Menu/data";
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: menuItemsData,
        totalAmount: 0,
        totalCount: 0,
        filterType: 'Default',
        type: 'Default',
    },
    reducers: {
        getCartTotal: (state) => {
            let {totalCount, totalAmount} = state.items.reduce((cartTotal, cartItem) => {
                const {price, quantity} = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalCount += quantity;
                cartTotal.totalAmount += itemTotal;
                return cartTotal;
            },
            {
                totalAmount: 0,
                totalCount: 0,
            }
            );
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount;
        },
        increase: (state, action) => {
            state.items = state.items.map((item) => {
                if(item.id === action.payload)
                {
                    return {...item, quantity: item.quantity + 1};
                }
                return item;
            });
        },
        decrease: (state, action) => {
            state.items = state.items.map((item) => {
                if(item.id === action.payload)
                {
                    return {...item, quantity: item.quantity - 1};
                }
                return item;
            });
        },
        changefilterType: (state, action) => {
            if(state.filterType===action.payload)
            {
                state.filterType = 'Default';
            }
            else
            {
                state.filterType = action.payload;
            }
        },
        setType: (state, action) => {
            if(state.type === action.payload)
            {
                state.type = 'Default';
            }
            else
            {
                state.type = action.payload;
            }
        }, 
        purchasedone: (state) => {
            state.items = state.items.map((item) => {
                if(item.quantity > 0)
                {
                    return {...item, priority: item.quantity + item.priority, quantity: 0};
                }
                return item;
            });
            state.totalAmount = 0;
            state.totalCount = 0;
        }
    }
})

export const {getCartTotal, increase, decrease, changefilterType, setType, purchasedone} = cartSlice.actions;

export default cartSlice.reducer;
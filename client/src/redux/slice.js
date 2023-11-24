import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from 'redux';

const initialState = {
    productData: [],
    productDataV2: [],
    userInfo: null,
};

export const bazarSlice = createSlice({
    name: "bazar",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const index = state.productData.findIndex(
                (item) => item._id === action.payload._id
            );

            if(index !== -1) {
                // L'élément existe déjà, mettez à jour la quantité
                state.productData[index].quantity += action.payload.quantity;
            } else {
                // L'élément n'existe pas, ajoutez-le au tableau
                state.productData.push(action.payload);
            }
        },
        deleteItem: (state, action) => {
            state.productData = state.productData.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCart: (state) => {
            state.productData = [];
        },
        increamentQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.productData.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        // =================== User Start here =====================
        addUser: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUser: (state) => {
            state.userInfo = null;
        },
        // =================== User End here =====================
    },
});

// -----------------------------------------------------------------------------------------------------------------

export const bazarSliceV2 = createSlice({
    name: "bazarV2",
    initialState,
    reducers: {
        addToCartV2: (state, action) => {
            const index = state.productDataV2.findIndex(
                (item) => item._id === action.payload._id
            );

            if(index !== -1) {
                // L'élément existe déjà, mettez à jour la quantité
                state.productDataV2[index].quantity += action.payload.quantity;
            } else {
                // L'élément n'existe pas, ajoutez-le au tableau
                state.productDataV2.push(action.payload);
            }
        },
        deleteItemV2: (state, action) => {
            state.productDataV2 = state.productDataV2.filter(
                (item) => item._id !== action.payload
            );
        },
        resetCartV2: (state) => {
            state.productDataV2 = [];
        },
        increamentQuantityV2: (state, action) => {
            const item = state.productDataV2.find(
                (item) => item._id === action.payload._id
            );
            if (item) {
                item.quantity++;
            }
        },
        decrementQuantityV2: (state, action) => {
            const item = state.productDataV2.find(
                (item) => item._id === action.payload._id
            );
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        // =================== User Start here =====================
        addUserV2: (state, action) => {
            state.userInfo = action.payload;
        },
        removeUserV2: (state) => {
            state.userInfo = null;
        },
        // =================== User End here =====================
    },
});





export const rootReducer = combineReducers({
    bazar: bazarSlice.reducer,
    bazarV2: bazarSliceV2.reducer,
});

export const {
    addToCart,
    deleteItem,
    resetCart,
    increamentQuantity,
    decrementQuantity,
    addUser,
    removeUser,
} = bazarSlice.actions;

export const {
    addToCartV2,
    deleteItemV2,
    resetCartV2,
    increamentQuantityV2,
    decrementQuantityV2,
    addUserV2,
    removeUserV2,
} = bazarSliceV2.actions;

export default rootReducer;
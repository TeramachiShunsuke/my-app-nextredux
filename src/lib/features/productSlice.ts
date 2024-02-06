import { createSlice } from '@reduxjs/toolkit'
import { Product } from '@/types/product'
import { RootState } from '@/lib/store'

interface ProductState {
    entities: Array<Product>,
    status: 'idle' | 'loading' | 'succeeded' | 'failed'
}
const initialState: ProductState = {
        entities: [],
        status: 'idle'
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    productAdd :(state,action) => {
        state.entities.push(action.payload)
    },
    productDelete: (state, action) => {
        state.entities = state.entities.filter((product) => product.ID !== action.payload)
    },
    productFindByID: () => {},
    productUpdate: () => {},
    productLoading: (state,) => {},
  },
})

export const { productAdd, productDelete, productFindByID, productUpdate } = productSlice.actions

// // The function below is called a thunk and allows us to perform async logic. It
// // can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// // will call the thunk with the `dispatch` function as the first argument. Async
// // code can then be executed and other actions can be dispatched
// export const incrementAsync = (amount) => (dispatch) => {
//   setTimeout(() => {
//     dispatch(incrementByAmount(amount))
//   }, 1000)
// }

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.product.value)`
// export const selectProduct = (state: RootState) => state.product.value

export default productSlice.reducer

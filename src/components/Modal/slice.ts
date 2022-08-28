import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
    visible: boolean
}

const initialState: ModalState = {
    visible: false
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toogleVisible: (state, action: PayloadAction<boolean>) => {
            state.visible = action.payload
        }
    }
})

export const { toogleVisible } = modalSlice.actions

export default modalSlice.reducer
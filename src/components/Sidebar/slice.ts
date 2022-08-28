import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
    opened: boolean
}

const initialState: SidebarState = {
    opened: false,
}

export const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleOpened: (state, action: PayloadAction<boolean>) => {
            state.opened = action.payload
        }
    }
})

export const { toggleOpened } = sidebarSlice.actions

export default sidebarSlice.reducer
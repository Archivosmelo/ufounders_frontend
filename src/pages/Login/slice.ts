import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'src/constants/types'

interface LoginState {
    username?: string,
    email?: string
}

const initialState: LoginState = {
    username: undefined,
    email: undefined
}

export const loginSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.email = action.payload.email
            state.username = action.payload.username
        },
        logout: (state) => {
            state = {
                username: undefined,
                email: undefined,
            }
        },
    }
})

export const { setUser, logout } = loginSlice.actions

export default loginSlice.reducer
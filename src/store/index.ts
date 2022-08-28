import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import modalReducer from 'src/components/Modal/slice'
import clientsReducer from 'src/pages/Clients/slice'
import { clientsApi } from 'src/pages/Clients/api'
import loginReducer from 'src/pages/Login/slice'
import { loginApi } from 'src/pages/Login/api'
import { authApi } from 'src/components/Auth/api'
import sidebarReducer from 'src/components/Sidebar/slice'

export const store = configureStore({
    reducer: {
        clients: clientsReducer,
        [clientsApi.reducerPath]: clientsApi.reducer,
        modal: modalReducer,
        login: loginReducer,
        [loginApi.reducerPath]: loginApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        sidebar: sidebarReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(clientsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
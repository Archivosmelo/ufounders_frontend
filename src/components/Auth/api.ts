import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({

    reducerPath: 'authApi',

    baseQuery: fetchBaseQuery({

        baseUrl: `${process.env.REACT_APP_BACKEND_API_URL}`,

        prepareHeaders: (headers) => {
            const token = localStorage.getItem(`${process.env.REACT_APP_STORAGE_KEY}`)
            if (token) headers.set('authorization', `Bearer ${token}`)
            return headers
        },

    }),

    endpoints: (builder) => ({

        checkPrivate: builder.query({
            query: (token) => ({
                url: '/auth/private',
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }),
        }),

    }),
})

export const { useCheckPrivateQuery } = authApi

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const regApi = createApi({
    reducerPath: 'regApi',
    baseQuery: fetchBaseQuery({ baseUrl: ' https://contact-app.mmsdev.site/api/v1' }),
    endpoints: (builder) => ({
      registeration: builder.mutation({
        query: (userInfo) => ({
            url:'/register',
            method:'POST',
            body:userInfo
        }),
        invalidatesTags:['regApi']
      }),
      login: builder.mutation({
        query: (userInfo) => ({
            url: '/login',
            method: 'POST',
            body: userInfo
        }),
        invalidatesTags: ['regApi']
    }),
    }),
  })
  export const{useRegisterationMutation,useLoginMutation}=regApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const api = createApi({
     baseQuery: fetchBaseQuery({ baseUrl: 'https://api.realdevsquad.com/' }),
     endpoints: (builder) => ({
          getMembers: builder.query({
               query: () => 'members',
          }),
     }), 
});
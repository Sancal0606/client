import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import exp from "constants";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL}),
    reducerPath: "api",
    tagTypes: [],
    endpoints: (build) => ({})
})

export const {} = api
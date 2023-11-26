import { createApi } from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from './axiosBaseQuery';

const carsAPI = createApi({
  reducerPath: 'cars',
  baseQuery: axiosBaseQuery(),
  endpoints: builder => ({
    getCars: builder.query({
      query: ({totalHits = 1, limit = 1, page = 1 }) => {
        const queryParams = new URLSearchParams();
        queryParams.append('totalHits', totalHits);
        queryParams.append('limit', limit);
        queryParams.append('page', page);
        return {
          url: `/cars?${queryParams.toString()}`,
        };
      },
    })
  }),
});

export default carsAPI;
export const {
  useGetCarsQuery,
} = carsAPI;
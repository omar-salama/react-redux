import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IUser } from '../../types/index';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  reducerPath: 'userApi',
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<IUser[], string | void>({
      query: (name) => (name ? `/user/search?name=${name}` : 'user'),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ _id }) => ({ type: 'Users' as const, id: _id })),
              { type: 'Users', id: 'LIST' },
            ]
          : [{ type: 'Users', id: 'LIST' }],
    }),
    getUserById: build.query<IUser, string>({
      query: (userId) => `user/${userId}`,
      providesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
    addUser: build.mutation<IUser, FormData>({
      query(body) {
        return {
          url: 'user',
          method: 'POST',
          body,
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }],
    }),
    updateUser: build.mutation<IUser, { _id: string; body: FormData }>({
      query({ _id, body }) {
        return {
          url: `user/${_id}`,
          method: 'PUT',
          body,
        };
      },
      invalidatesTags: (result, error, { _id }) => [{ type: 'Users', id: _id }],
    }),
    deleteUser: build.mutation<{ success: boolean; id: string }, string>({
      query(id) {
        return {
          url: `user/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: (result, error, id) => [{ type: 'Users', id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = api;

export const useGetUsersQuerySubscription =
  api.endpoints.getUsers.useQuerySubscription;

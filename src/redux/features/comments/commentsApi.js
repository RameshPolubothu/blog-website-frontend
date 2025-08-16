// commentApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://blog-website-backend-ebon.vercel.app/api/comments',
    credentials: 'include',
  }),
  tagTypes: ['Comments'], // Define the tag types
  endpoints: (builder) => ({
    postComment: builder.mutation({
      query: (commentData) => ({
        url: '/post-comment',
        method: 'POST',
        body: commentData,
      }),
      invalidatesTags: (result, error, { postId }) => [{ type: 'Comments', id: postId }],
    }),
    getComments: builder.query({
      query: () => ({
        url: '/total-comments',
      })
    }),
    deleteComment: builder.mutation({
      query : (id) =>({
          url:`/${id}`,
          method: 'DELETE',
          credentials: 'include',
       })
    })
  }),
});

export const { usePostCommentMutation, useGetCommentsQuery,useDeleteCommentMutation} = commentApi;

export default commentApi;

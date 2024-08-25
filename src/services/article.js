import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',https://article-extractor-and-summarizer.p.rapidapi.com/summarize

        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', '06e4932cddmsh588460329b0512cp11ec6cjsn9707be0280b1');
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;

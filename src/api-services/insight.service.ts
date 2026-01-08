import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/constants";
import { secondsToMilliSeconds } from "@/lib";
import { InsightModel } from "@/models/insight.model";

export const InsightService = createApi({
  reducerPath: "insights",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/insights`,
    timeout: secondsToMilliSeconds(3000),
  }),
  tagTypes: ['insights'],
  endpoints: (build) => ({
    getInsights: build.query<InsightModel, "">({
      query: () => ({
        url: ``,
      }),
      providesTags: ['insights']
    }),
  }),
});

export const { useGetInsightsQuery } = InsightService;

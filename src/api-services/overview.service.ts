import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/constants";
import { secondsToMilliSeconds } from "@/lib";
import { OverviewModel } from "@/models/overview.model";

export const OverviewService = createApi({
  reducerPath: "overview",
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_BASE_URL}/overview`,
    timeout: secondsToMilliSeconds(3000),
  }),
  tagTypes: ["overview"],
  endpoints: (build) => ({
    getOverview: build.query<OverviewModel, "">({
      query: () => ({
        url: ``,
      }),
      providesTags: ["overview"],
    }),
  }),
});

export const { useGetOverviewQuery } = OverviewService;

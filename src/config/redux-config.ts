import { InsightService } from "@/api-services/insight.service";
import { OverviewService } from "@/api-services/overview.service";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import loaderSliceReducer from "../features/loaderSlice";

export const reduxStore = configureStore({
  reducer: {
    [OverviewService.reducerPath]: OverviewService.reducer,
    [InsightService.reducerPath]: InsightService.reducer,
    loaderReducer: loaderSliceReducer,
  },
  middleware: (getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat([
        OverviewService.middleware,
        InsightService.middleware
    ])
  }
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export type AppDispatch = typeof reduxStore.dispatch;

setupListeners(reduxStore.dispatch);
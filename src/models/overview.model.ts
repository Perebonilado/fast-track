import { IStatus } from "@/@modules/section-overview/StatusBar";

export interface OverviewModel {
  status: IStatus;
  currentIndex: number;
  benchmark: {
    diff: number;
    metric: string;
  };
  score: number;
}

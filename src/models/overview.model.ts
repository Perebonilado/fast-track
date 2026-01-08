import { Stat } from "@/@modules/section-overview/StatusBar";

export interface OverviewModel {
  status: Stat;
  currentIndex: number;
  benchmark: {
    diff: number;
    metric: string;
  };
  score: number;
}

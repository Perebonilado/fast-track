import { Trend } from "@/@modules/deep-dive-insight/InsightBlock";

export interface InsightModel {
  insightBlocks: {
    title: string;
    description: string;
    value: number;
    trend: Trend;
  }[];
  chart: number[];
}

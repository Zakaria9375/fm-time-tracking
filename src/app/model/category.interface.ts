import { TimeFrame } from "./timeframe.interface";


interface TimeFrames {
  daily: TimeFrame;
  weekly: TimeFrame;
  monthly: TimeFrame;
}

export interface Category {
  title: string;
  timeframes: TimeFrames;
}

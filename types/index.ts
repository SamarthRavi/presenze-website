export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  active?: boolean;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  decimals?: number;
}

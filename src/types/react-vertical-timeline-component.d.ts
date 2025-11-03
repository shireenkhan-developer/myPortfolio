declare module 'react-vertical-timeline-component' {
  import { ReactNode } from 'react';
  
  export interface VerticalTimelineProps {
    children?: ReactNode;
    animate?: boolean;
    className?: string;
    layout?: '1-column' | '2-columns';
    lineColor?: string;
  }
  
  export interface VerticalTimelineElementProps {
    children?: ReactNode;
    className?: string;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    date?: string | ReactNode;
    dateClassName?: string;
    icon?: ReactNode;
    iconStyle?: React.CSSProperties;
    iconClassName?: string;
    textClassName?: string;
    visible?: boolean;
  }
  
  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}


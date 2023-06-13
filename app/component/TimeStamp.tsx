import React from 'react';
import { DateUtil } from '@/utils/date';

interface Props {
  date: string;
  className?: string;
}

const TimeStamp: React.FC<Props> = ({ date, className = '' }) => {
  return (
    <time dateTime={date} className={`text-xs text-stone-500 ${className}`}>
      {DateUtil.convertDateFormat(date)}
    </time>
  );
};

export default TimeStamp;

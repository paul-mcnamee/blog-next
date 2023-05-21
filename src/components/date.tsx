import * as dateFns from 'date-fns';
import * as React from 'react';

interface DateProps {
  dateString: number;
}

export default function Date({ dateString }: DateProps) {
  const date = dateFns.parseISO(dateString.toString());
  return (
    <time dateTime={dateString.toString()}>
      {dateFns.format(date, 'LLLL d, yyyy')}
    </time>
  );
}

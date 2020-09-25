import React from 'react';
import { MonthNav } from './MonthNav';

export const CalendarView = ({
  dateObject,
  setDateObject,
  weekdaysName,
  daysInMonth,
}) => (
  <div className='calendar'>
    <section className='calendar__container'>
      <MonthNav 
        dateObject={dateObject}
        setDateObject={setDateObject}
      />
      <hr className='calendar__hr calendar__hr--up'/>
      <section className='calendar__main'>
        {daysInMonth}
        <hr className='calendar__hr calendar__hr--down'/>
        <ul className='calendar__weekdays'>
          {weekdaysName}
        </ul>
        <hr className='calendar__hr'/>
      </section>
    </section>
  </div>
);


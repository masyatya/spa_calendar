import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { CalendarView } from './CalendarView';
import { setDate, setIsPopupShowing } from '../../store/dateOfMeeting';

export const Calendar = () => {
  const dispatch = useDispatch();
  const [dateObject, setDateObject] = useState(moment());
  const prevMonthDay = +moment(dateObject).subtract(1, 'month').endOf('month').format('DD')

  const weekdaysName = moment.weekdays();

  const weekdaysShortName = moment.weekdaysShort().map(day => (
    <li key={day} className='calendar__weekday'>
      <p>
        {day[0]}
      </p>
    </li>
  ));

  const firstDayOfMonth = () => +moment(dateObject).startOf("month").format("d");
  const daysInMonth = () => +dateObject.daysInMonth();
  const currentMonth = () => dateObject.format('MMMM');
  const currentDate = () => dateObject.format('MM YYYY');
  const currentDateDay = () => +dateObject.format('D');

  const blanksBegin = [];
  for(let day = prevMonthDay; day > prevMonthDay - firstDayOfMonth(); day--) {
    blanksBegin.push(
      <li key={day*1000} className='calendar__day empty'>
        <p 
          className='calendar__link calendar__link--empty'
          onClick={() => setDateObject(moment(dateObject).subtract(1, 'month'))}
        >
          {day}
        </p>
      </li>
    );
  }

  blanksBegin.reverse();

  const daysInMonthArray = [];
  for (let d = 1; d <= daysInMonth(); d++) {
    const day = ('0' + d).slice(-2);
    let className = 'calendar__day';
    if(moment().format('MM YYYY') === currentDate()) {
      className += (d === currentDateDay() ? ' calendar__day--current' : '')
    }
    daysInMonthArray.push(
      <li key={day} className={className}>
        <p 
          className='calendar__link'
          onClick={() => {
            let weekdayNum = (+day + firstDayOfMonth()) % 7;
            if(weekdayNum !== 0) {
              weekdayNum--;
            } else {
              weekdayNum = 6;
            }
            dispatch(setDate(currentMonth(), day+'th ' + weekdaysName[weekdayNum]));
            dispatch(setIsPopupShowing());
          }}
        >
          {day}
        </p>
      </li>
    );
  }

  const blanksEnd = [];
  const lengthBlanksEnd = 7 - ((daysInMonth() - (7 - firstDayOfMonth())) % 7);
  if (lengthBlanksEnd !== 7) {
    for (let i = 1; i <= lengthBlanksEnd; i++) {
      const day = '0' + i;
      blanksEnd.push(
      <li key={i*50} className='calendar__day'>
        <p 
          className='calendar__link calendar__link--empty'
          onClick={() => setDateObject(moment(dateObject).add(1, 'month'))}
        >
          {day}
        </p>
      </li>
      )
    }
  }

  const totalSlots = [...blanksBegin, ...daysInMonthArray, ...blanksEnd];
  const rows = [];
  let cells = [];

  totalSlots.forEach((row, i) => {
    if (i % 7 !== 0 || i === 0) {
      cells.push(row); 
    } else {
      rows.push(cells); 
      cells = [];
      cells.push(row);
    }
    if (i === totalSlots.length - 1) { 
      rows.push(cells);
    }
  });

  const daysInMonthUl = rows.map((week, i) => (
    <ul key={i*100} className='calendar__list'>{week}</ul>
  ));

  return (
    <CalendarView 
      dateObject={dateObject}
      setDateObject={setDateObject}
      weekdaysName={weekdaysShortName}
      daysInMonth={daysInMonthUl}
    />
  )
}
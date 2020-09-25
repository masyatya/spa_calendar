import React from 'react';
import moment from 'moment';

export const MonthNav = ({ dateObject, setDateObject}) => {
  const month = dateObject.format('MMMM');
  const year = dateObject.format('Y');

  const handleChangeMonth = (month, dir) => {
    let monthNo = moment.months().indexOf(month);
    let newDateObject = Object.assign({}, dateObject);
    if (dir === 'back') {
      newDateObject = moment(newDateObject).set('month', monthNo - 1);
    } else if (dir === 'forth') {
      newDateObject = moment(newDateObject).set('month', monthNo + 1);
    }
    setDateObject(newDateObject);
  };

  return (
    <div className='calendar__header'>
      <div className='calendar__arrow'>
        <span 
          onClick={() => handleChangeMonth(month, 'back')}
          className='calendar__link calendar__link-arrow'
        >
          &#8249;
        </span>
      </div>
      <div className='calendar__month-year'>
        <div className='calendar__month'>{month}</div>
        <div className='calendar__year'>{year}</div>
      </div>
      <div className='calendar__arrow'>
        <span 
          onClick={() => handleChangeMonth(month, 'forth')}
          className='calendar__link calendar__link-arrow'
        >
          &#8250;
        </span>
      </div>
    </div>
  )
}


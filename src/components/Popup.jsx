import React from 'react';
import classnames from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { setIsPopupShowing } from '../store/dateOfMeeting';
import * as selectors from '../store';

export const Popup = () => {
  const dispatch = useDispatch();
  const month = useSelector(selectors.getMonth);
  const day = useSelector(selectors.getDay);
  const isPopupShowing = useSelector(selectors.getIsPopupShowing);

  return (
    <>
      <section className={classnames({ popup: true, active: isPopupShowing })}>
        <div 
          className='popup__overlay' 
          onClick={() => dispatch(setIsPopupShowing())}
        >
        </div>
        <div className='popup__content'>
          <div className='popup__month-container'>
            <p className='popup__month'>Month</p>
            <input type='text' value={month} className='popup__input' readOnly/>
          </div>
          <div className='popup__day-container'>
            <p className='popup__day'>Day</p>
            <input type='text' value={day} className='popup__input' readOnly/>
          </div>
          <button 
            className='popup__button' 
            onClick={() => dispatch(setIsPopupShowing())}
          >
            &#10005;
          </button>
        </div>
      </section>
    </>
  )
}
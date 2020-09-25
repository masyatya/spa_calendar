import { createStore, combineReducers } from 'redux';
import dateOfMeetingReducer from './dateOfMeeting';
import * as selectorsDate from './dateOfMeeting';

export const getMonth = state => selectorsDate.getMonth(state.dateOfMeeting);
export const getDay = state => selectorsDate.getDay(state.dateOfMeeting);
export const getIsPopupShowing = state => selectorsDate.getIsPopupShowing(state.dateOfMeeting);

const rootReducer = combineReducers({
  dateOfMeeting: dateOfMeetingReducer,
})

const store = createStore(rootReducer);

export default store;
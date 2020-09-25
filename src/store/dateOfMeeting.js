const SET_DATE = 'SET_DATE';
const SET_POPUP_SHOWING = 'SET_POPUP_SHOWING';

export const setDate = (month, day) => ({ type: SET_DATE, month, day});
export const setIsPopupShowing = () => ({ type: SET_POPUP_SHOWING });

export const getMonth = state => state.month;
export const getDay = state => state.day; 
export const getIsPopupShowing = state => state.isPopupShowing;

const initialState = {
  month: '',
  day: '',
  isPopupShowing: false,
};

const dateOfMeetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATE:
      return {
        ...state,
        month: action.month,
        day: action.day,
      };
    case SET_POPUP_SHOWING:
      return {
        ...state,
        isPopupShowing: !state.isPopupShowing,
      }
    default:
      return state;
  }
}

export default dateOfMeetingReducer;
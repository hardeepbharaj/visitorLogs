/* eslint-disable no-case-declarations */
import { SUBMIT_FORM } from './constants';

const initialState = {
  logs: [
    {
      name: 'hardeep',
      email: 'xyz@gmail.com',
      typeOfVisit: 'Meeting',
      personToVisit: 'sdf',
      dateOfEntry: '12/06/2021',
      timeOfEntry: 'sdf',
      timeOfExit: 'sdff',
    },
  ],
};

const homepageReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_FORM:
      const { logs = [] } = state;
      logs.unshift(payload);

      return {
        ...state,
        logs,
      };

    default:
      return { ...state };
  }
};

export default homepageReducer;

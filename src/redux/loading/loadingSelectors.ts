import {createSelector} from '@reduxjs/toolkit';

import {RootState} from '../rootReducer';

const loadingSelector = (state: RootState) => state.loading;

const usersRequestState = createSelector(
  loadingSelector,
  state => state.users || {},
);

export default {
  usersRequestState,
};

import {combineReducers} from '@reduxjs/toolkit';

import users from './users/users';
import loading from './loading/loading';

const rootReducer = combineReducers({
  users,
  loading,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import asyncUsersActions from './usersActions';
import {User} from '../../api/UsersApi/UsersTypes';

let initialState: User[] = [];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      asyncUsersActions.loadUsers.fulfilled,
      (state, action: PayloadAction<User[]>) => {
        return action.payload;
      },
    );
  },
});

export const usersActions = {
  ...usersSlice.actions,
  ...asyncUsersActions,
};

export default usersSlice.reducer;

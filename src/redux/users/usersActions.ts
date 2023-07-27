import {createAsyncThunk} from '@reduxjs/toolkit';
import UsersApi from '../../api/UsersApi/Users';
import {User} from '../../api/UsersApi/UsersTypes';
import {
  setDataInStorage,
  setCacheTime,
  AsyncStorageKeys,
} from '../../utils/helpers/asyncStorageUtils';

export const loadUsers = createAsyncThunk<User[], void, {rejectValue: string}>(
  'users/getUsers',
  async (_, {rejectWithValue}) => {
    try {
      // Fetch data from the server
      const response: User[] = await UsersApi.getUsers();

      // Update the cache with the fetched data and cache time
      await setDataInStorage(AsyncStorageKeys.USERS, response);
      await setCacheTime(AsyncStorageKeys.USERS);
      return response;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('An unknown error occurred.');
      }
    }
  },
);

const asyncUsersActions = {
  loadUsers,
};

export default asyncUsersActions;

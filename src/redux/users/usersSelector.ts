import {RootState} from '../rootReducer';
import {User} from '../../api/UsersApi/UsersTypes';

const users = (state: RootState): User[] => state.users;

const userSelectors = {
  users,
};

export default userSelectors;

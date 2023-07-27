import {usersApiAxios} from '../Apis';
import {ROUTE_USERS_ACTIVITY} from './routes';
import {User} from './UsersTypes';

class UsersApi {
  getUsers = async (): Promise<User[]> => {
    const response = await usersApiAxios.get(ROUTE_USERS_ACTIVITY);
    return response.data;
  };
}
export default new UsersApi();

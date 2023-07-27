import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum UserScreens {
  INDEX = 'UserScreen',
}

export type UserStackParamList = {
  [UserScreens.INDEX]: undefined;
};

export type UserScreenProps<T extends UserScreens> = {
  navigation: StackNavigationProp<UserStackParamList, T>;
  route: RouteProp<UserStackParamList, T>;
};

export default UserScreens;

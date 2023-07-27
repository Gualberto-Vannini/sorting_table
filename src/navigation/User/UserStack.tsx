import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import User from '../../screens/User/index';
import UserScreens, {UserStackParamList} from './User';
import {StackNavigationOptions} from '@react-navigation/stack';

const Stack = createStackNavigator<UserStackParamList>();

const options: StackNavigationOptions = {
  animationEnabled: true,
  headerShown: false,
};

function UserStack() {
  return (
    <Stack.Navigator initialRouteName={UserScreens.INDEX}>
      <Stack.Screen
        name={UserScreens.INDEX}
        component={User}
        options={options}
      />
    </Stack.Navigator>
  );
}
export default UserStack;

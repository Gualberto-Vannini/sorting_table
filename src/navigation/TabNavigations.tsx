import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import * as React from 'react';

import UserStack from './User/UserStack';
import ProfileStack from './Profile/ProfileStack';

import UserIcon from './User/user.svg';
import ProfileIcon from './Profile/profile.svg';
import Theme from '../theme/index';
const Tab = createBottomTabNavigator();

type TabBarIconProps = {
  color: string;
};

type TabBarIconComponent = React.FC<TabBarIconProps>;

export default () => {
  const UserTabBarIcon: TabBarIconComponent = ({color}) => (
    <UserIcon fill={color} />
  );
  const ProfileTabBarIcon: TabBarIconComponent = ({color}) => (
    <ProfileIcon fill={color} />
  );
  const tabBarOptions: BottomTabNavigationOptions = {
    tabBarStyle: {position: 'absolute'},
    tabBarActiveTintColor: Theme.colors.green[100],
    tabBarInactiveTintColor: Theme.colors.black[50],
  };

  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name={'User'}
        component={UserStack}
        options={{
          tabBarIcon: ({color}) => <UserTabBarIcon color={color} />,
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({color}) => <ProfileTabBarIcon color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

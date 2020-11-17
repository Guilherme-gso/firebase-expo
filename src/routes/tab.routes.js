import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Collection from '../pages/Collection';
import { Feather } from '@expo/vector-icons';
import theme from '../theme';

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator tabBarOptions={{
      showLabel: false,
      style: {
        height: 60,
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        borderTopWidth: 0,
      },
      labelStyle: {
        fontFamily: theme.fonts.regular,
        fontSize: 18,
        paddingBottom: 5,
      },
      activeTintColor: '#fff',
      inactiveTintColor: '#ccc',
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: () => {
            <Feather 
              name="bookmark"
              color={'#fff'}
              size={20}
            />
          },
        }}
       />
      <Tab.Screen 
        name="Collection" 
        component={Collection}
        options={{
          tabBarIcon: () => {
            <Feather 
              name="user"
              color={'#fff'}
              size={20}
            />
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
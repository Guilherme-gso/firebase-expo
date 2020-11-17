import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Register from '../pages/Register';
import Item from '../pages/Item';
import theme from '../theme';
import Home from '../pages/Home';
import Collection from '../pages/Collection';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen options={{ headerTitle: 'Início'}} name="Home" component={Home} />
      <Stack.Screen options={{ headerTitle: ''}} name="Collection" component={Collection} />
      <Stack.Screen options={{ headerTitle: ''}} name="Register" component={Register} />
      <Stack.Screen options={{ headerTitle: ''}} name="Item" component={Item} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
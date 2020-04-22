import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './auth.navigator';
import { SocialNavigator } from './social.navigator';
import { MessagingNavigator } from './messaging.navigator';
import { DashboardsNavigator } from './dashboards.navigator';
import { LayoutsScreen } from '../scenes/layouts/layouts.component';

const Stack = createStackNavigator();

export const LayoutsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Layouts' component={LayoutsScreen}/>
    <Stack.Screen name='Auth' component={AuthNavigator}/>
    <Stack.Screen name='Social' component={SocialNavigator}/>
    <Stack.Screen name='Messaging' component={MessagingNavigator}/>
    <Stack.Screen name='Dashboards' component={DashboardsNavigator}/>
  </Stack.Navigator>
);

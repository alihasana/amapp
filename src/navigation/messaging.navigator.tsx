import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat2Screen } from '../scenes/messaging/chat-2.component';

import { Profile7Screen } from '../scenes/social/profile-7.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const MessagingNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Chat2' component={Chat2Screen}/>
    <Stack.Screen name='Profile7' component={Profile7Screen}/>
  </Stack.Navigator>
);

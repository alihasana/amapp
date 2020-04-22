import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SignIn2Screen } from '../scenes/auth/sign-in-2.component';
import { ForgotPasswordScreen } from '../scenes/auth/forgot-password.component';
import { ChangePasswordScreen } from '../scenes/auth/change-password.component';
import { ChangeProfileScreen } from '../scenes/auth/change-profile.component';
import { ProfileScreen } from '../scenes/auth/profile.component';
import { HomeNavigator } from './home.navigator';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='SignIn2' component={SignIn2Screen}/>
    <Stack.Screen name='ForgotPassword' component={ForgotPasswordScreen}/>
    <Stack.Screen name='ChangePassword' component={ChangePasswordScreen}/>
    <Stack.Screen name='ChangeProfile' component={ChangeProfileScreen}/>
    <Stack.Screen name='Profile' component={ProfileScreen}/>
    <Stack.Screen name='AppNavigator' component={HomeNavigator}/>
    
  </Stack.Navigator>
);

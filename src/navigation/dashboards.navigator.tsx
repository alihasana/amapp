import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { DashboardScreen } from '../scenes/dashboards/dashboards.component';
import { DashboardsListScreen } from '../scenes/dashboards/dashboards-list.component';
import { ProjectTasks1Screen } from '../scenes/dashboards/projecttasks.component';
import { ProjectTasks2Screen } from '../scenes/dashboards/projecttasks2.component';
import { SettingsScreen } from '../scenes/dashboards/settings.component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const DashboardsMenuNavigator = (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <DashboardScreen {...props}/>}>
    <TopTab.Screen name='DashboardList' component={DashboardsListScreen}/>
  </TopTab.Navigator>
);

export const DashboardsNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name='Dashboards' component={DashboardsMenuNavigator}/>
    <Stack.Screen name='ProjectTasks1' component={ProjectTasks1Screen}/>
    <Stack.Screen name='ProjectTasks2' component={ProjectTasks2Screen}/>
    <Stack.Screen name='Settings' component={SettingsScreen}/>
  </Stack.Navigator>
);

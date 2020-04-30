import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Tab, TabBar } from '@ui-kitten/components';
import { ProjectTasksListScreen } from './projecttask.component';

const ProjectTasksTabBar = ({ navigation, state }): React.ReactElement => {

  const onTabSelect = (index: number): void => {
    navigation.navigate(state.routeNames[index]);
  };

  const renderTab = (route: string): React.ReactElement => (
    <Tab
      key={route}
      title={route.toUpperCase()}
    />
  );

  return (
    <TabBar
      selectedIndex={state.index}
      onSelect={onTabSelect}>
      {state.routeNames.map(renderTab)}
    </TabBar>
  );
};

const TopTab = createMaterialTopTabNavigator();

export default (): React.ReactElement => (
  <TopTab.Navigator tabBar={(props) => <ProjectTasksTabBar {...props} />}>
    <TopTab.Screen name='A faire' component={ProjectTasksListScreen}/>
    <TopTab.Screen name='En cours' component={ProjectTasksListScreen}/>
    <TopTab.Screen name='Terminée' component={ProjectTasksListScreen}/>
  </TopTab.Navigator>
);

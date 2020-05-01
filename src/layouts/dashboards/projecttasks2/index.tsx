import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Button, Card, List, Text } from '@ui-kitten/components';
import { ActivityIcon, ClockIcon } from './extra/icons';
import { ProjectTask } from './extra/data';

const projectTasks: ProjectTask[] = [
  ProjectTask.workoutForWomen(),
  ProjectTask.groupWorkout(),
  ProjectTask.gymnastics(),
  ProjectTask.groupWorkout(),
  ProjectTask.gymnastics(),
  ProjectTask.workoutForWomen(),
];

export default (): React.ReactElement => {

  const renderItemHeader = (info: ListRenderItemInfo<ProjectTask>): React.ReactElement => (
    <ImageBackground
      style={styles.itemHeader}
      source={info.item.image}
    />
  );

  const renderItem = (info: ListRenderItemInfo<ProjectTask>): React.ReactElement => (
    <Card
      style={styles.item}
      header={() => renderItemHeader(info)}>
      <Text category='h4'>{info.item.title}</Text>
      <View style={styles.itemFooter}>
        <Button
          style={styles.activityButton}
          appearance='ghost'
          size='tiny'
          icon={ClockIcon}>
          {info.item.formattedDuration}
        </Button>
        <Button
          style={styles.activityButton}
          appearance='ghost'
          size='tiny'
          status='danger'
          icon={ActivityIcon}>
          {info.item.formattedKcal}
        </Button>
      </View>
    </Card>
  );

  return (
    <List
      style={styles.list}
      data={projectTasks}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  item: {
    borderRadius: 0,
    marginVertical: 8,
  },
  itemHeader: {
    height: 160,
  },
  itemFooter: {
    flexDirection: 'row',
    marginTop: 16,
    marginHorizontal: -4,
  },
  activityButton: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
});

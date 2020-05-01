import React from 'react';
import { ListRenderItemInfo, StyleSheet } from 'react-native';
import { List, Text } from '@ui-kitten/components';
import { ProjectTaskCard } from './extra/training-card.component';
import { ProjectTask } from './extra/data';
import dataJson from './extra/data.json';

// const ProjectTasksOld: ProjectTask[] = [
//   ProjectTask.chestToDo(),
//   ProjectTask.workoutToDo(),
//   ProjectTask.personalizedToDo(),
//   ProjectTask.toto1(),
//   ProjectTask.toto2(),
//   ProjectTask.toto3(),
//   ProjectTask.bicepsInProgress(),
//   ProjectTask.chestInProgress(),
//   ProjectTask.personalizedInProgress(),
//   ProjectTask.bicepsCompleted(),
//   ProjectTask.workoutCompleted(),
//   ProjectTask.chestCompleted(),
// ];

const ProjectTasks: ProjectTask[] = ProjectTask.projectTaskList(dataJson);

export const ProjectTasksListScreen = ({ route }): React.ReactElement => {

  const displayProjectTasks: ProjectTask[] = ProjectTasks.filter(projectTask => projectTask.getLevel === route.name);
  const renderHeader = (): React.ReactElement => (
    <React.Fragment>
      <Text
        style={styles.headerTitle}
        appearance='hint'
        category='h1'>
        Tâches
      </Text>
    </React.Fragment>
  );

  // const renderHorizontalProjectTaskItem = (info: ListRenderItemInfo<ProjectTask>): React.ReactElement => (
  //   <ProjectTaskCard
  //     style={styles.horizontalItem}
  //     ProjectTask={info.item}
  //   />
  // );

  const renderVerticalProjectTaskItem = (info: ListRenderItemInfo<ProjectTask>): React.ReactElement => (
    <ProjectTaskCard
      style={styles.verticalItem}
      projectTask={info.item}
    />
  );

  return (
    <List
    contentContainerStyle={styles.list}
        // horizontal={false}
        // showsHorizontalScrollIndicator={false}
        data={displayProjectTasks}
        renderItem={renderVerticalProjectTaskItem}
        ListHeaderComponent={renderHeader}
      // contentContainerStyle={styles.list}
      // data={displayProjectTasks}
      // renderItem={renderHorizontalProjectTaskItem}
      // ListHeaderComponent={renderHeader}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingVertical: 24,
  },
  headerTitle: {
    marginHorizontal: 16,
    // height: 10+"!important",
    // display: "flex",
    // flexDirection: "column"
  },
  horizontalList: {
    marginVertical: 16,
    paddingHorizontal: 8,
  },
  verticalItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  // horizontalItem: {
  //   width: 256,
  //   // height: 256+"!important",
  //   marginHorizontal: 8,
  // },
});

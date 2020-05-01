import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from './image-overlay.component';
import { ClockIcon } from './icons';
import { ProjectTask } from './data';

export interface ProjectTaskCardProps extends Omit<CardProps, 'children'> {
  projectTask: ProjectTask;
}

export type ProjectTaskCardElement = React.ReactElement<ProjectTaskCardProps>;

export const ProjectTaskCard = (props: ProjectTaskCardProps): CardElement => {

  const { style, projectTask, ...cardProps } = props;


  const onCardPress = (): void => {
    if (this.projectTask.getLevel === 'A faire') {
      this.projectTask.setLevel = 'En cours';
    } else if (this.projectTask.getLevel === 'En cours') {
      this.projectTask.setLevel = 'Terminée';
    }
  };

  return (
    <Card
      {...cardProps}
      style={[styles.container, style]}
      onPress={onCardPress}>
      <ImageOverlay
        style={styles.image}
        source={projectTask.image}>
        <Text
          style={styles.level}
          category='s1'
          status='control'>
          {projectTask.formattedLevel}
        </Text>
        <Text
          style={styles.title}
          category='h2'
          status='control'>
          {projectTask.title}
        </Text>
        <Text
          style={styles.title}
          category='h6'>
          {projectTask.description}
        </Text>
        <Button
          style={styles.durationButton}
          size='tiny'
          icon={ClockIcon}>
          {projectTask.formattedDuration}
        </Button>
      </ImageOverlay>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    height: 200,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  level: {
    zIndex: 1,
  },
  title: {
    zIndex: 1,
  },
  durationButton: {
    position: 'absolute',
    left: 16,
    bottom: 16,
    borderRadius: 16,
    paddingHorizontal: 0,
  },
});

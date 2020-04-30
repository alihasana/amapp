import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, CardElement, CardProps, Text } from '@ui-kitten/components';
import { ImageOverlay } from './image-overlay.component';
import { ClockIcon } from './icons';
import { ProjectTask } from './data';

export interface ProjectTaskCardProps extends Omit<CardProps, 'children'> {
  ProjectTask: ProjectTask;
}

export type ProjectTaskCardElement = React.ReactElement<ProjectTaskCardProps>;

export const ProjectTaskCard = (props: ProjectTaskCardProps): CardElement => {

  const { style, ProjectTask, ...cardProps } = props;

  return (
    <Card
      {...cardProps}
      style={[styles.container, style]}>
      <ImageOverlay
        style={styles.image}
        source={ProjectTask.image}>
        <Text
          style={styles.level}
          category='s1'
          status='control'>
          {ProjectTask.formattedLevel}
        </Text>
        <Text
          style={styles.title}
          category='h2'
          status='control'>
          {ProjectTask.title}
        </Text>
        <Button
          style={styles.durationButton}
          size='tiny'
          icon={ClockIcon}>
          {ProjectTask.formattedDuration}
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

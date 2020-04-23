import { ImageSourcePropType } from 'react-native';

export enum TrainingLevel {
  TO_DO = 'A faire',
  IN_PROGRESS = 'En cours',
  COMPLETED = 'Terminée',
}

export class Training {

  constructor(readonly title: string,
              readonly duration: number,
              readonly level: TrainingLevel,
              readonly image: ImageSourcePropType) {
  }

  get formattedLevel(): string {
    return `${this.level} Test`;
  }

  get formattedDuration(): string {
    return `${this.duration} min`;
  }

  static chestToDo(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.TO_DO,
      require('../assets/image-training-1.jpg'),
    );
  }

  static workoutToDo(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.TO_DO,
      require('../assets/image-training-2.jpg'),
    );
  }

  static personalizedToDo(): Training {
    return new Training(
      'Personalized Training',
      55,
      TrainingLevel.TO_DO,
      require('../assets/image-training-3.jpg'),
    );
  }

  static chestInProgress(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.IN_PROGRESS,
      require('../assets/image-training-4.jpg'),
    );
  }

  static bicepsInProgress(): Training {
    return new Training(
      'Biceps',
      55,
      TrainingLevel.IN_PROGRESS,
      require('../assets/image-training-5.jpg'),
    );
  }

  static personalizedInProgress(): Training {
    return new Training(
      'Personalized Training',
      55,
      TrainingLevel.IN_PROGRESS,
      require('../assets/image-training-1.jpg'),
    );
  }

  static chestCompleted(): Training {
    return new Training(
      'Chest',
      55,
      TrainingLevel.COMPLETED,
      require('../assets/image-training-2.jpg'),
    );
  }

  static bicepsCompleted(): Training {
    return new Training(
      'Biceps',
      55,
      TrainingLevel.COMPLETED,
      require('../assets/image-training-3.jpg'),
    );
  }

  static workoutCompleted(): Training {
    return new Training(
      'Workout',
      55,
      TrainingLevel.COMPLETED,
      require('../assets/image-training-4.jpg'),
    );
  }
}

import { LayoutItem } from '../../model/layout-item.model';

export interface DashboardData extends LayoutItem {
  route: string;
}

export const data: DashboardData[] = [
  {
    title: 'Répondre aux besoins des familles rurales',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    route: 'ProjectTasks1',
  },
  {
    title: 'Informatique pour tous',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    route: 'ProjectTasks2',
  },
  {
    title: 'Soutient scolaire',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' +
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    route: 'Settings',
  },
];

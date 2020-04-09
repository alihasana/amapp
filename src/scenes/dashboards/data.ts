import { LayoutItem } from '../../model/layout-item.model';

export interface DashboardData extends LayoutItem {
  route: string;
}

export const data: DashboardData[] = [
  {
    title: 'Répondre aux besoins des familles rurales',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' + 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n' + 
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    image: require('../../assets/images/image-layout-training-1.jpg'),
    route: 'Trainings1',
  },
  {
    title: 'Trainings',
    description: 'Option 2',
    image: require('../../assets/images/image-layout-training-2.jpg'),
    route: 'Trainings2',
  },
  {
    title: 'Settings',
    description: 'Option 1',
    image: require('../../assets/images/image-layout-settings.jpg'),
    route: 'Settings',
  },
];

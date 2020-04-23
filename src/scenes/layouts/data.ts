import React from 'react';
import { ImageStyle } from 'react-native';
import { ThemedIcon } from '../../components/themed-icon.component';
import {
  AssetAuthDarkIcon,
  AssetAuthIcon,
  AssetSocialDarkIcon,
  AssetSocialIcon,
} from '../../components/icons';
import { MenuItem } from '../../model/menu-item.model';

export interface LayoutData extends MenuItem {
  route: string;
}

export const data: LayoutData[] = [
  {
    title: 'Profil',
    route: 'Profile',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetAuthIcon, dark: AssetAuthDarkIcon },
      );
    },
  },
  {
    title: 'Associations',
    route: 'Social',
    icon: (style: ImageStyle) => {
      return React.createElement(
        ThemedIcon,
        { ...style, light: AssetSocialIcon, dark: AssetSocialDarkIcon },
      );
    },
  },
];

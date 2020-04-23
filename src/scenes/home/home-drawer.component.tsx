import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Divider,
  Drawer,
  DrawerElement,
  DrawerHeaderElement,
  DrawerHeaderFooter,
  DrawerHeaderFooterElement,
  Layout,
  MenuItemType,
  Text,
} from '@ui-kitten/components';
import { BookIcon, GithubIcon, CloseIcon } from '../../components/icons';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { WebBrowserService } from '../../services/web-browser.service';
import { AppInfoService } from '../../services/app-info.service';

const DATA: MenuItemType[] = [
  { title: 'Déconnexion', icon: CloseIcon },
];

export const HomeDrawer = ({ navigation }): DrawerElement => {

  const onItemSelect = (index: number): void => {
    switch (index) {
      case 0: {
        navigation.toggleDrawer();
        navigation.navigate('SignIn2');
        return;
      }
    }
  };

  const renderHeader = (): DrawerHeaderElement => (
    <Layout
      style={styles.header}
      level='2'>
      <View style={styles.profileContainer}>
        <Avatar
          size='giant'
          source={require('../../assets/images/image-app-icon.png')}
        />
        <Text
          style={styles.profileName}
          category='h6'>
          Association Manager
        </Text>
      </View>
    </Layout>
  );

  return (
    <SafeAreaLayout
      style={styles.safeArea}
      insets='top'>
      <Drawer
        header={renderHeader}
        data={DATA}
        onSelect={onItemSelect}
      />
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    height: 128,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginHorizontal: 16,
  },
});

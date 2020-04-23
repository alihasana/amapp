import React from 'react';
import { Tab, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, GridIcon, ListIcon } from '../../components/icons';

export const MessagingScreen = ({ navigation, state }): React.ReactElement => {

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout insets='top'>
      <TopNavigation
        title='Messagerie'
        leftControl={renderBackAction()}
      />
    </SafeAreaLayout>
  );
};

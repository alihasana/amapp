import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Divider, TopNavigation, TopNavigationAction, Avatar, Layout, Text } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../../components/safe-area-layout.component';
import { Setting } from './extra/settings-section.component';
import { ArrowIosBackIcon } from '../../../components/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const onChangePasswordButtonPress = (): void => {
    navigation && navigation.navigate('ChangePassword');
  };

  const onChangeProfileButtonPress = (): void => {
    navigation && navigation.navigate('ChangeProfile');
  };

  const renderBackAction = (): React.ReactElement => (
    <TopNavigationAction
      icon={ArrowIosBackIcon}
      onPress={navigation.goBack}
    />
  );

  return (
    <SafeAreaLayout
      style={styles.container}
      insets='top'>
      <TopNavigation
        title='Profil'
        leftControl={renderBackAction()}
      />
      <Divider/>
      <KeyboardAvoidingView>
        <Layout style={styles.container}>
          <View style={styles.headerContainer}>
            <Avatar
              size='giant'
              source={require('../../../assets/images/avatar-nesly.png')}
            />
            <Text
              style={styles.signInLabel}
              category='s1'
              status='control'>
              <span style={{color: '#000', fontWeight: 'bold'}}>Nom : </span>Nesly{' '}PETIT{' '}BERT{'\n'}
              <span style={{color: '#000', fontWeight: 'bold'}}>Inscris le : </span>11 mars 2020{'\n'}
              <span style={{color: '#000', fontWeight: 'bold'}}>Téléphone de contact : </span>+33789658978{'\n'}
              <span style={{color: '#000', fontWeight: 'bold'}}>E-mail : </span>petitbert.nesly@gmail.com{'\n'}{'\n'}
              <span style={{color: '#000', fontWeight: 'bold'}}>Adresse : </span>{'\n'}
              12 rue de l'ancienne gare militaire{'\n'}
              91120 Palaiseau
            </Text>
            <Text>
                {' '}
            </Text>
          </View>
          <View
        // style={{
        //   borderBottomColor: 'black',
        //   borderBottomWidth: 1,
        // }}
        />
          <Setting
            style={styles.setting}
            hint='Modifier mon profil'
            onPress={onChangeProfileButtonPress}
          />
          <Setting
            style={styles.setting}
            hint='Modifier mon mot de passe'
            onPress={onChangePasswordButtonPress}
          />
        </Layout>
      </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#01D0FB',
    padding: 10,
  },
  signInLabel: {
    marginTop: 16,
  },
  container: {
    flex: 1,
  },
  profile: {
    padding: 16,
  },
  setting: {
    padding: 16,
  },
  section: {
    paddingTop: 32,
  },
});

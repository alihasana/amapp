import React from 'react';
import { View } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { EyeIcon, EyeOffIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  const [lastPassword, setLastPassword] = React.useState<string>();
  const [newPassword, setNewPassword] = React.useState<string>();
  const [confirmPassword, setConfirmPassword] = React.useState<string>();
  const [passwordVisible, setPasswordVisible] = React.useState<boolean>(false);

  const styles = useStyleSheet(themedStyles);  
  
  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
  };



  const onPasswordIconPress = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Modification de mon mot de passe...!
        </Text>
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
        <Input
          style={styles.passwordInput}
          placeholder='Mot de passe actuel'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={lastPassword}
          secureTextEntry={!passwordVisible}
          onChangeText={setLastPassword}
          onIconPress={onPasswordIconPress}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Nouveau mot de passe'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={newPassword}
          secureTextEntry={!passwordVisible}
          onChangeText={setNewPassword}
          onIconPress={onPasswordIconPress}
        />
        <Input
          style={styles.passwordInput}
          placeholder='Confirmation'
          icon={passwordVisible ? EyeIcon : EyeOffIcon}
          value={confirmPassword}
          secureTextEntry={!passwordVisible}
          onChangeText={setConfirmPassword}
          onIconPress={onPasswordIconPress}
        />
      </Layout>
      <Button
        style={styles.signInButton}
        size='giant' onPress={onResetPasswordButtonPress}>
        Enregistrer les modifications
      </Button>
    </KeyboardAvoidingView>
  );
};

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-1',
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
    backgroundColor: '#01D0FB',
  },
  formContainer: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  signInLabel: {
    marginTop: 16,
  },
  signInButton: {
    marginVertical: 12,
    marginHorizontal: 16,
    backgroundColor: '#01D0FB',
    borderColor: "#01D0FB",
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  passwordInput: {
    marginTop: 16,
  },
  forgotPasswordButton: {
    paddingHorizontal: 0,
  },
});


import React from 'react';
import { View } from 'react-native';
import { Button, Input, Layout, StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { PersonIcon, PhoneIcon, AddressIcon } from './extra/icons';
import { KeyboardAvoidingView } from './extra/3rd-party';

export default ({ navigation }): React.ReactElement => {

  // const [email, setEmail] = React.useState<string>();

  const styles = useStyleSheet(themedStyles);  
  
  const onResetPasswordButtonPress = (): void => {
    navigation && navigation.goBack();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={styles.signInLabel}
          category='s1'
          status='control'>
          Modification de mon profil...!
        </Text>
      </View>
      <Layout
        style={styles.formContainer}
        level='1'>
          <View>
            <Text>
              Nesly{' '}PETIT{' '}BERT
            </Text>
          </View>
          <View>
            <Text>
              {' '}
            </Text>
            <Text>
              Date d'inscription : 11 mars 2020
            </Text>
          </View>
          <View>
            <Text>
                {' '}
            </Text>
          </View>
          <Input
            icon={PersonIcon}
            placeholder='Adresse email'
            value='petitbert.nesly@gmail.com'
          />
          <Input
            icon={PhoneIcon}
            placeholder='Téléphone'
            value='+33789658978'
          />
        <Input
          icon={AddressIcon}
          placeholder='Adresse 1'
          value="12 rue de l'ancienne gare militaire"
        />
        <Input
          icon={AddressIcon}
          placeholder='Adresse 2'
          value="91120 Palaiseau"
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


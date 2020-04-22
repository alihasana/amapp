import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import { Avatar, Button, Card, Layout, List, Text } from '@ui-kitten/components';
import { ProfileSocial } from './extra/profile-social.component';
import { HeartIcon } from './extra/icons';
import { Association, Profile } from './extra/data';

const profile: Profile = Profile.humanis();

const posts: Association[] = [
  Association.byHumanis(),
  Association.byRestoDuCoeur(),
  Association.byCroixRouge(),
];

export default ({ navigation }): React.ReactElement => {

  const appAssociationButtonPress = (): void => {
    navigation && navigation.navigate('Profile7');
  };

  const renderItemHeader = (info: ListRenderItemInfo<Association>): React.ReactElement => (
    <ImageBackground
      style={styles.postHeader}
      source={info.item.image}
    />
  );

  const renderItem = (info: ListRenderItemInfo<Association>): React.ReactElement => (
    <Card
      style={styles.post}
      header={() => renderItemHeader(info)}
      onPress={appAssociationButtonPress}>
      <View style={styles.postBody}>
        <View style={styles.postAuthorContainer}>
          <Text
            category='s2'>
            {info.item.author.fullName}
          </Text>
          <Text
            appearance='hint'
            category='c1'>
            inscrit le {info.item.date}
          </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <List
      style={styles.list}
      contentContainerStyle={styles.listContent}
      data={posts}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  header: {
    flexDirection: 'row',
    marginHorizontal: -16,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginBottom: 8,
  },
  profileAvatar: {
    marginHorizontal: 8,
  },
  profileDetailsContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  profileSocialsContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },
  profileSocialContainer: {
    flex: 1,
  },
  followButton: {
    marginVertical: 16,
  },
  post: {
    margin: 8,
  },
  postHeader: {
    height: 220,
  },
  postBody: {
    flexDirection: 'row',
    marginHorizontal: -8,
  },
  postAuthorContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  iconButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  },
});


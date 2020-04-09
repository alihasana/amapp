import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Input, Layout, List, StyleService, useStyleSheet } from '@ui-kitten/components';
import { MessageItem } from './extra/message-item.component';
import { SearchIcon } from './extra/icons';
import { Message } from './extra/data';

const initialMessages: Message[] = [
  Message.howAreYou(),
  Message.canYouSend(),
  Message.noProblem(),
];

export default ({ navigation }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);
  const [searchQuery, setSearchQuery] = React.useState<string>();

  // Start affichage conditionnel pour personnaliser le message affiché en fonction du contact choisit :
  const onItemPress = (index: number): void => {
    if(index == 1){
      navigation && navigation.navigate('Chat3'); // Shirai Subary
    }else if(index == 2){
      navigation && navigation.navigate('Chat1'); // Kari Granleese
    }else{
      navigation && navigation.navigate('Chat2'); // Dushane Daniel
    }
  };
  // End affichage conditionnel pour personnaliser le message affiché en fonction du contact choisit.

  const renderItem = (info: ListRenderItemInfo<Message>): React.ReactElement => (
    <MessageItem
      style={styles.item}
      message={info.item}
      onPress={onItemPress}
    />
  );

  const renderHeader = (): React.ReactElement => (
    <Layout
      style={styles.header}
      level='1'>
      <Input
        placeholder='Search'
        value={searchQuery}
        icon={SearchIcon}
      />
    </Layout>
  );

  return (
    <List
      style={styles.list}
      data={initialMessages}
      renderItem={renderItem}
      ListHeaderComponent={renderHeader}
    />
  );
};

const themedStyles = StyleService.create({
  list: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  item: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'background-basic-color-3',
  },
});

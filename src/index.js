import * as React from 'react';
import {Searchbar, Appbar} from 'react-native-paper';
import {
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {Styles, Colors} from '_styles';

const App = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View styles={Styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        networkActivityIndicatorVisible={true}
        backgroundColor={Colors.PRIMARY_DARK}
      />
      <Appbar.Header>
        <Appbar.BackAction />
        <Appbar.Content title="Title" subtitle="Subtitle" />
        <Appbar.Action icon="magnify" />
        <Appbar.Action icon="dots-vertical" />
      </Appbar.Header>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
};

export default App;

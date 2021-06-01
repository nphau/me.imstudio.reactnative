import {AppRegistry} from 'react-native';
import App from './src';
import {Colors, fontConfig} from './src/styles';

import {name as appName} from './app.json';
import {
  DefaultTheme,
  configureFonts,
  Provider as PaperProvider,
} from 'react-native-paper';
import * as React from 'react';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.PRIMARY,
    accent: Colors.ACCENT,
  },
  fonts: configureFonts(fontConfig),
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

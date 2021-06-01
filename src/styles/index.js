import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Mixins from './mixins';
import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
  container: {
    ...Typography.FONT_REGULAR,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Typography, Spacing, Colors, Mixins};

import ThemeStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphrodite from 'react-with-styles-interface-aphrodite';
import {css, withStyles, withStylesPropTypes} from 'react-with-styles';
import Theme from './Theme';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';

ThemeStyleSheet.registerInterface(aphroditeInterface);
ThemeStyleSheet.registerTheme(Theme);

export {css, withStyles, withStylesPropTypes, ThemeStyleSheet};
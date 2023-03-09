import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

globalStyle('h1', {
  fontSize: themeVars.fontSizes['5'],
  lineHeight: themeVars.lineHeights.heading,
});

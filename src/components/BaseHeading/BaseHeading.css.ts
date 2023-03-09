import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

// @TODO: local style
globalStyle('h1', {
  fontSize: themeVars.fontSizes['5'],
  lineHeight: themeVars.lineHeights.heading,
});

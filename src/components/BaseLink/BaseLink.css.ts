import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

globalStyle('a', {
  fontWeight: themeVars.fontWeights.medium,
  color: themeVars.colors.accent,
  textDecoration: 'inherit',
});
globalStyle('a:hover', {
  color: themeVars.colors.highlight,
});

import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

// @TODO: local style
globalStyle('.card', {
  padding: themeVars.space['4'],
});

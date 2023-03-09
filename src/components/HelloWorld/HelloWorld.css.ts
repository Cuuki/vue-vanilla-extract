import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

globalStyle('.card', {
  padding: themeVars.space['4'],
});

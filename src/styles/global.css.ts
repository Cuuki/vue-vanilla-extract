import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from './theme.css';

globalStyle('#app', {
  color: themeVars.color.text,
  fontFamily: themeVars.font.body,
  fontSmooth: 'always',
  marginTop: themeVars.space['8'],
  textAlign: 'center',
});

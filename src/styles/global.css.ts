import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';
import { lightThemeTokens, darkThemeTokens, themeVars } from './theme.css';

createGlobalTheme(':root', themeVars, darkThemeTokens);
globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: assignVars(themeVars, lightThemeTokens),
    },
  },
});

globalStyle('html', {
  fontFamily: themeVars.fonts.body,
  fontSize: '100%',
  lineHeight: themeVars.lineHeights.body,
  fontWeight: themeVars.fontWeights.body,
  colorScheme: 'light dark',
  color: themeVars.colors.text,
  fontSynthesis: 'none',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  margin: 0,
  display: 'flex',
  placeItems: 'center',
  minWidth: themeVars.sizes['0'],
  minHeight: '100vh',
  fontSize: themeVars.fontSizes['1'],
});

globalStyle('#app', {
  maxWidth: themeVars.sizes['2'],
  margin: '0 auto',
  padding: themeVars.space['4'],
  textAlign: 'center',
});

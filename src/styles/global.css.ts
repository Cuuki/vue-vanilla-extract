import {
  assignVars,
  createGlobalTheme,
  globalStyle,
} from '@vanilla-extract/css';
import {
  contractTokens,
  fontSizeScale,
  radiusScale,
  sizeScale,
  spaceScale,
  themeVars,
} from './theme.css';

const themeTokens = {
  colors: {
    primary: '#35495E',
    text: 'rgba(255, 255, 255, 0.87)',
    background: '#242424',
    accent: '#646cff',
    highlight: '#535bf2',
  },
  fonts: {
    body: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
  },
  fontSizes: fontSizeScale,
  fontWeights: {
    body: '400',
    medium: '500',
  },
  lineHeights: {
    body: '1.5',
    heading: '1.1',
  },
  space: spaceScale,
  sizes: sizeScale,
  radii: radiusScale,
} satisfies typeof contractTokens;

createGlobalTheme(':root', themeVars, themeTokens);

globalStyle(':root', {
  '@media': {
    '(prefers-color-scheme: light)': {
      vars: assignVars(themeVars, {
        ...themeTokens,
        colors: {
          ...themeTokens.colors,
          primary: '#41B883',
          text: '#213547',
          background: '#ffffff',
          highlight: '#747bff',
        },
      }),
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
  minWidth: '320px',
  minHeight: '100vh',
});

globalStyle('a', {});
globalStyle('a:hover', {
  '@media': {
    '(prefers-color-scheme: light)': {},
  },
});

globalStyle('h1', {});

globalStyle('button', {
  '@media': {
    '(prefers-color-scheme: light)': {},
  },
});
globalStyle('button:focus, button:focus-visible', {});

globalStyle('.card', {});

globalStyle('#app', {});

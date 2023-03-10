import type { RecordAs } from '../types/utility';
import { createGlobalThemeContract } from '@vanilla-extract/css';

export const REM_BASE_SIZE = 16;

export const spaceScale = {
  '0': '0.25rem',
  '1': '0.5rem',
  '2': '1rem',
  '3': '1.5rem',
  '4': '2rem',
  '5': '2.5rem',
  '6': '3rem',
  '7': '3.5rem',
  '8': '4rem',
};

export const fontSizeScale = {
  '0': '0.875rem',
  '1': '1rem',
  '2': '1.25rem',
  '3': '1.5rem',
  '4': '2rem',
  '5': '3rem',
};

export const sizeScale = {
  '0': '20ren',
  '1': '40rem',
  '2': '80rem',
};

export const radiusScale = {
  '0': '0.25rem',
  '1': '0.5rem',
};

const convertScaleToContractTokens = <T extends Record<string, string>>(
  scale: T,
  cssVarPrefix: string
): Record<keyof typeof scale, string> =>
  Object.keys(scale).reduce(
    (previousValue, key) => ({
      ...previousValue,
      [key]: `${cssVarPrefix}-${key}`,
    }),
    {} as Record<keyof typeof scale, string>
  );

// Inspiration: https://theme-ui.com/theming
export const contractTokens = {
  colors: {
    primary: 'color-primary',
    text: 'color-text',
    background: 'color-background',
    accent: 'color-accent',
    highlight: 'color-highlight',
    muted: 'color-muted',
  },
  fonts: {
    body: 'font-body',
  },
  fontSizes: convertScaleToContractTokens(fontSizeScale, 'font-size'),
  fontWeights: {
    body: 'font-weight-body',
    medium: 'font-weight-medium',
  },
  lineHeights: {
    body: 'line-height-body',
    heading: 'line-height-heading',
  },
  space: convertScaleToContractTokens(spaceScale, 'space'),
  sizes: convertScaleToContractTokens(sizeScale, 'size'),
  radii: convertScaleToContractTokens(radiusScale, 'radius'),
};

export const darkThemeTokens: RecordAs<typeof contractTokens, string> = {
  colors: {
    primary: '#35495E',
    text: 'rgba(255, 255, 255, 0.87)',
    background: '#242424',
    accent: '#646cff',
    highlight: '#535bf2',
    muted: '#888888',
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
};

export const lightThemeTokens: RecordAs<typeof contractTokens, string> = {
  ...darkThemeTokens,
  colors: {
    ...darkThemeTokens.colors,
    primary: '#41B883',
    text: '#213547',
    background: '#ffffff',
    highlight: '#747bff',
  },
};

export const themeVars = createGlobalThemeContract(contractTokens);

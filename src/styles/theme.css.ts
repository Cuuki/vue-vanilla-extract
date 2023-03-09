import type { RecordAs } from '../types/utility';
import { createGlobalThemeContract } from '@vanilla-extract/css';

export const spaceScale = {
  '0': '4px',
  '1': '8px',
  '2': '16px',
  '3': '24px',
  '4': '32px',
  '5': '40px',
  '6': '48px',
  '7': '56px',
  '8': '64px',
};

export const fontSizeScale = {
  '0': '14px',
  '1': '16px',
  '2': '20px',
  '3': '24px',
  '4': '32px',
  '5': '48px',
};

export const sizeScale = {
  '0': '320px',
  '1': '640px',
  '2': '1280px',
};

export const radiusScale = {
  '0': '4px',
  '1': '8px',
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
// @TODO: REM conversion
export const darkThemeTokens: RecordAs<typeof contractTokens, string> = {
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

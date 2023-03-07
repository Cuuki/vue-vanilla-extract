import { createGlobalThemeContract, styleVariants } from '@vanilla-extract/css';

type Scale = Record<number, number>;

export const spaceScale: Scale = {
  0: 4,
  1: 8,
  2: 16,
  3: 24,
  4: 32,
  5: 40,
  6: 48,
  7: 56,
  8: 64,
};

export const fontSizeScale: Scale = {
  0: 12,
  1: 14,
  2: 16,
  3: 20,
  4: 24,
  5: 32,
  6: 48,
  7: 64,
};

export const sizeScale: Scale = {
  0: 320,
  1: 640,
  2: 1280,
};

export const radiusScale: Scale = {
  0: 4,
  1: 8,
};

const convertScaleToContractTokens = (scale: Record<number, number>) =>
  Object.keys(scale).reduce(
    (previousValue, key) => ({
      ...previousValue,
      [key]: `space-${key}`,
    }),
    {}
  );

// Inspiration: https://theme-ui.com/theming
// @TODO: REM conversion
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
  fontSizes: convertScaleToContractTokens(fontSizeScale),
  fontWeights: {
    body: 'font-weight-body',
    medium: 'font-weight-medium',
  },
  lineHeights: {
    body: 'line-height-body',
    heading: 'line-height-heading',
  },
  space: convertScaleToContractTokens(spaceScale),
  sizes: convertScaleToContractTokens(sizeScale),
  radii: convertScaleToContractTokens(radiusScale),
};
export const themeVars = createGlobalThemeContract(contractTokens);

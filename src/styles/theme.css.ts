import { createGlobalTheme, styleVariants } from '@vanilla-extract/css';

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

export const marginVariants = styleVariants(spaceScale, (space) => ({
  margin: space,
}));

export const themeVars = createGlobalTheme(':root', {
  color: {
    brand: '#42b983',
    text: '#2c3e50',
  },
  font: {
    body: 'Avenir, Helvetica, Arial, sans-serif',
  },
  space: spaceScale,
});

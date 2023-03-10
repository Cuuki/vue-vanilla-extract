import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles/theme.css';

export const DEFAULT_VARIANT_LEVEL = '2';
export const headingRecipe = recipe({
  base: {
    lineHeight: themeVars.lineHeights.heading,
  },
  variants: {
    level: {
      '1': { fontSize: themeVars.fontSizes['5'] },
      '2': { fontSize: themeVars.fontSizes['4'] },
      '3': { fontSize: themeVars.fontSizes['3'] },
      '4': { fontSize: themeVars.fontSizes['2'] },
      '5': { fontSize: themeVars.fontSizes['1'] },
      '6': { fontSize: themeVars.fontSizes['0'] },
    },
  },
  defaultVariants: {
    level: DEFAULT_VARIANT_LEVEL,
  },
});

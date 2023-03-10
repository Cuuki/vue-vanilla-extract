import type { StyleRule } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeVars } from '../../styles/theme.css';

const focusStyle: StyleRule = {
  outline: `${themeVars.space['0']} auto ${themeVars.colors.accent}`,
};

export const DEFAULT_VARIANT_COLOR = 'primary';
export const DEFAULT_VARIANT_SIZE = 'md';

export const buttonRecipe = recipe({
  base: {
    border: '1px solid transparent',
    fontSize: themeVars.fontSizes['1'],
    fontWeight: themeVars.fontWeights.medium,
    fontFamily: themeVars.fonts.body,
    cursor: 'pointer',
    transition: 'border-color 0.25s',
    ':hover': {
      borderColor: themeVars.colors.accent,
    },
    ':focus': focusStyle,
    ':focus-visible': focusStyle,
  },
  variants: {
    color: {
      primary: {
        backgroundColor: themeVars.colors.primary,
        color: themeVars.colors.text,
      },
      text: {
        backgroundColor: themeVars.colors.text,
        color: themeVars.colors.background,
      },
    },
    size: {
      sm: {
        padding: `${themeVars.space['0']} ${themeVars.space['1']}`,
        borderRadius: themeVars.radii['0'],
      },
      md: {
        padding: `${themeVars.space['1']} ${themeVars.space['2']}`,
        borderRadius: themeVars.radii['1'],
      },
    },
  },
  defaultVariants: {
    color: DEFAULT_VARIANT_COLOR,
    size: DEFAULT_VARIANT_SIZE,
  },
});

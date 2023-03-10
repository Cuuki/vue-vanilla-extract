import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const linkClasses = style({
  fontWeight: themeVars.fontWeights.medium,
  color: themeVars.colors.accent,
  textDecoration: 'inherit',
  ':hover': {
    color: themeVars.colors.highlight,
  },
});

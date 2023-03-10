import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const cardClasses = style({
  padding: themeVars.space['4'],
});

export const readDocsTextClasses = style({
  color: themeVars.colors.muted
})

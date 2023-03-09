import { style } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

export const messageStyle = style({
  color: themeVars.colors.primary,
});
export const headingStyle = style({
  margin: `${themeVars.space['5']} 0 0`,
});
export const listStyle = style({
  padding: 0,
  listStyleType: 'none',
});
export const listItemStyle = style({
  display: 'inline-block',
  margin: `0 ${themeVars.space['1']}`,
});
export const linkStyle = style({
  color: themeVars.colors.primary,
});

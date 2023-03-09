import { globalStyle } from '@vanilla-extract/css';
import { themeVars } from '../../styles/theme.css';

// @TODO: local style with variants
globalStyle('button', {
  borderRadius: themeVars.radii['1'],
  border: '1px solid transparent',
  padding: `${themeVars.space['1']} ${themeVars.space['2']}`,
  fontSize: themeVars.fontSizes['1'],
  fontWeight: themeVars.fontWeights.medium,
  fontFamily: themeVars.fonts.body,
  backgroundColor: themeVars.colors.primary,
  cursor: 'pointer',
  transition: 'border-color 0.25s',
});
globalStyle('button:hover', {
  borderColor: themeVars.colors.accent,
});
globalStyle('button:focus,button:focus-visible', {
  outline: `${themeVars.space['0']} auto ${themeVars.colors.accent}`,
});

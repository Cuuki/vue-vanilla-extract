import { style } from '@vanilla-extract/css';

export const logoClasses = style({
  height: '6em',
  padding: '1.5em',
  willChange: 'filter',
  transition: 'filter 300ms',
  ':hover': {
    filter: 'drop-shadow(0 0 2em #646cffaa)',
  },
});

export const logoVueClasses = style({
  ':hover': {
    filter: 'drop-shadow(0 0 2em #42b883aa)',
  },
});

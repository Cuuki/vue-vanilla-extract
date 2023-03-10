import type { MarginProperty } from '../types/variants';
import { styleVariants } from '@vanilla-extract/css';
import { spaceScale } from './theme.css';

const marginVariantFactory =
  (property: MarginProperty) =>
  (space: (typeof spaceScale)[keyof typeof spaceScale]) => ({
    [property]: space,
  });

export const mbVariantClasses = styleVariants(spaceScale, (space) =>
  marginVariantFactory('marginBottom')(space)
);

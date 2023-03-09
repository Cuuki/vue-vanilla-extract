import { styleVariants } from '@vanilla-extract/css';
import { fontSizeScale, radiusScale, sizeScale, spaceScale } from './theme.css';

export const marginVariants = styleVariants(spaceScale, (space) => ({
  margin: space,
}));

export const paddingVariants = styleVariants(spaceScale, (space) => ({
  padding: space,
}));

export const fontSizeVariants = styleVariants(fontSizeScale, (fontSize) => ({
  fontSize,
}));

// @TODO: BaseContainer
export const maxWidthVariants = styleVariants(sizeScale, (size) => ({
  maxWidth: size,
}));

// @TODO: BaseButton
export const radiusVariants = styleVariants(radiusScale, (radius) => ({
  borderRadius: radius,
}));

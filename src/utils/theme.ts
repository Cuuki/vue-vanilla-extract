import { SpaceScaleVariant } from '../types/theme';
import { spaceScale } from '../styles/theme.css';

export const isSpaceScaleVariant = (
  variant: unknown
): variant is SpaceScaleVariant =>
  Object.keys(spaceScale).some((spaceVariant) => spaceVariant === variant);

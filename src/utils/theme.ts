import { SpaceScaleVariant } from '../types/theme';
import { REM_BASE_SIZE, spaceScale } from '../styles/theme.css';

export const isSpaceScaleVariant = (
  variant: unknown
): variant is SpaceScaleVariant =>
  Object.keys(spaceScale).some((spaceVariant) => spaceVariant === variant);

export const remToPxUnitless = (rem: string) => parseFloat(rem) * REM_BASE_SIZE;
export const remToPx = (rem: string) => `${remToPxUnitless(rem)}px`;

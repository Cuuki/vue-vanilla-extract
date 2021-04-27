import { spaceScale } from '@/styles/theme.css';

export type SpaceScaleVariant = keyof typeof spaceScale;
export const isSpaceScaleVariant = (variant: unknown): variant is SpaceScaleVariant =>
  Object.keys(spaceScale).some((spaceVariant) => spaceVariant === variant);

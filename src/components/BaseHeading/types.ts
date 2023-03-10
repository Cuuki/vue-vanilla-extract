import type { RecipeVariants } from '@vanilla-extract/recipes';
import { headingRecipe } from './BaseHeading.css';

export type BaseHeadingVariants = NonNullable<
  RecipeVariants<typeof headingRecipe>
>;

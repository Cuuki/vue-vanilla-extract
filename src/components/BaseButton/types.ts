import type { RecipeVariants } from '@vanilla-extract/recipes';
import { buttonRecipe } from './BaseButton.css';

export type BaseButtonVariants = NonNullable<
  RecipeVariants<typeof buttonRecipe>
>;

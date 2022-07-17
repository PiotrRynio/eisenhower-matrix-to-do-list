import { DefaultTheme, Interpolation, ThemedStyledProps, ThemeProps } from 'styled-components';
import { Color, TypographyVariant } from '../themeValues';

export interface LabelProps {
  color?: Color;
}

export type TypographyMixinsProps = LabelProps;

export type TypographyMixins = Record<
  TypographyVariant,
  ReadonlyArray<Interpolation<ThemeProps<DefaultTheme> | ThemedStyledProps<LabelProps, DefaultTheme>>>
>;

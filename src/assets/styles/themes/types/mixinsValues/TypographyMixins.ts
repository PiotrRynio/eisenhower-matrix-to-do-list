import { DefaultTheme, Interpolation, ThemedStyledProps, ThemeProps } from 'styled-components';
import { Color } from '../themeValues';

export interface LabelProps {
  color?: Color;
}

export type TypographyMixinsProps = LabelProps;

export type TypographyVariant = 'body1' | 'label' | 'title' | 'sectionTitle' | 'button';

export type TypographyMixins = Record<
  TypographyVariant,
  ReadonlyArray<Interpolation<ThemeProps<DefaultTheme> | ThemedStyledProps<LabelProps, DefaultTheme>>>
>;

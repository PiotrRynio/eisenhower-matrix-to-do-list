import { css, DefaultTheme, Interpolation, ThemedStyledProps, ThemeProps } from 'styled-components';
import { Color } from '../../types';

export interface LabelProps {
  color?: Color;
}

export type TypographyMixinsProps = LabelProps;

export type TypographyVariant = 'body1' | 'small' | 'title' | 'sectionTitle' | 'button';

export type TypographyMixins = Record<
  TypographyVariant,
  ReadonlyArray<Interpolation<ThemeProps<DefaultTheme> | ThemedStyledProps<LabelProps, DefaultTheme>>>
>;

export const typography: TypographyMixins = {
  body1: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    line-height: ${({ theme }) => theme.lineHeights.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  `,
  small: css<LabelProps>`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    line-height: ${({ theme }) => theme.lineHeights.xs};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme, color }) => color || theme.colors.primaryText};
  `,
  button: css`
    font-size: ${({ theme }) => theme.fontSizes.sm};
    line-height: ${({ theme }) => theme.lineHeights.sm};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primary};
  `,
  title: css`
    font-size: ${({ theme }) => theme.fontSizes['3xl']};
    line-height: ${({ theme }) => theme.lineHeights['3xl']};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  `,

  sectionTitle: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    line-height: ${({ theme }) => theme.lineHeights.lg};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    font-family: ${({ theme }) => theme.fontFamilies.primary};
    color: ${({ theme }) => theme.colors.primaryText};
  `,
};

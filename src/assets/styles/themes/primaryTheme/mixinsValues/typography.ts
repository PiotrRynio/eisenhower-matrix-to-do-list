import { css } from 'styled-components';
import { PaginationProps, SubtitleProps, TypographyMixins } from '../../types/mixinsValues/TypographyMixins';

export const typography: TypographyMixins = {
  body1: css`
    font-size: ${({ theme }) => theme.typographies.body1.fontSize};
    line-height: ${({ theme }) => theme.typographies.body1.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.body1.fontWeight};
    font-family: ${({ theme }) => theme.typographies.body1.fontFamily};
    color: ${({ theme }) => theme.typographies.body1.color};
  `,
  body2: css`
    font-size: ${({ theme }) => theme.typographies.body2.fontSize};
    line-height: ${({ theme }) => theme.typographies.body2.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.body2.fontWeight};
    font-family: ${({ theme }) => theme.typographies.body2.fontFamily};
    color: ${({ theme }) => theme.typographies.body2.color};
  `,
  small: css`
    font-size: ${({ theme }) => theme.typographies.small.fontSize};
    line-height: ${({ theme }) => theme.typographies.small.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.small.fontWeight};
    font-family: ${({ theme }) => theme.typographies.small.fontFamily};
    color: ${({ theme }) => theme.typographies.small.color};
  `,
  itemTitle: css`
    font-size: ${({ theme }) => theme.typographies.itemTitle.fontSize};
    line-height: ${({ theme }) => theme.typographies.itemTitle.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.itemTitle.fontWeight};
    font-family: ${({ theme }) => theme.typographies.itemTitle.fontFamily};
    color: ${({ theme }) => theme.typographies.itemTitle.color};
  `,
  title: css`
    font-size: ${({ theme }) => theme.typographies.title.fontSize};
    line-height: ${({ theme }) => theme.typographies.title.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.title.fontWeight};
    font-family: ${({ theme }) => theme.typographies.title.fontFamily};
    color: ${({ theme }) => theme.typographies.title.color};
  `,
  subtitle: css<SubtitleProps>`
    font-size: ${({ theme }) => theme.typographies.subtitle.fontSize};
    line-height: ${({ theme }) => theme.typographies.subtitle.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.subtitle.fontWeight};
    font-family: ${({ theme }) => theme.typographies.subtitle.fontFamily};
    color: ${({ theme, isSecondaryColor }) =>
      isSecondaryColor ? theme.colors.secondaryText : theme.typographies.subtitle.color};
  `,
  pagination: css<PaginationProps>`
    font-size: ${({ theme }) => theme.typographies.pagination.fontSize};
    line-height: ${({ theme }) => theme.typographies.pagination.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.pagination.fontWeight};
    font-family: ${({ theme }) => theme.typographies.pagination.fontFamily};
    color: ${({ theme }) => theme.typographies.pagination.color};
    color: ${({ theme, isInactive }) => (isInactive ? theme.colors.disabled : theme.typographies.pagination.color)};
    cursor: ${({ isInactive }) => (isInactive ? 'default' : 'pointer')};

    ${({ theme, isInactive }) =>
      isInactive &&
      css`
        color: ${theme.colors.disabled};
        cursor: auto;
      `}
  `,
};

import { css } from 'styled-components';
import { LabelProps, TypographyMixins } from '../../types/mixinsValues/TypographyMixins';

export const typography: TypographyMixins = {
  body1: css`
    font-size: ${({ theme }) => theme.typographies.body1.fontSize};
    line-height: ${({ theme }) => theme.typographies.body1.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.body1.fontWeight};
    font-family: ${({ theme }) => theme.typographies.body1.fontFamily};
    color: ${({ theme }) => theme.typographies.body1.color};
  `,
  label: css<LabelProps>`
    font-size: ${({ theme }) => theme.typographies.label.fontSize};
    line-height: ${({ theme }) => theme.typographies.label.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.label.fontWeight};
    font-family: ${({ theme }) => theme.typographies.label.fontFamily};
    color: ${({ theme, color }) => color || theme.typographies.label.color};
  `,
  title: css`
    font-size: ${({ theme }) => theme.typographies.title.fontSize};
    line-height: ${({ theme }) => theme.typographies.title.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.title.fontWeight};
    font-family: ${({ theme }) => theme.typographies.title.fontFamily};
    color: ${({ theme }) => theme.typographies.title.color};
  `,

  listTitle: css`
    font-size: ${({ theme }) => theme.typographies.listTitle.fontSize};
    line-height: ${({ theme }) => theme.typographies.listTitle.lineHeight};
    font-weight: ${({ theme }) => theme.typographies.listTitle.fontWeight};
    font-family: ${({ theme }) => theme.typographies.listTitle.fontFamily};
    color: ${({ theme }) => theme.typographies.listTitle.color};
  `,
};

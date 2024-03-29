import React, { ReactNode } from 'react';
import {
  Body1Typography,
  LabelTypography,
  ListTitleTypography,
  StyledTypographyProps,
  TitleTypography,
} from './Typography.styles';
import { TypographyMixinsProps } from 'assets/styles/themes/common/mixinsValues/typography';

type TypographyVariant = 'body1' | 'small' | 'title' | 'listTitle';

type TypographyProps = {
  children: ReactNode;
  variant: TypographyVariant;
} & StyledTypographyProps &
  TypographyMixinsProps;

export const Typography = (props: TypographyProps) => {
  const TypographyVariant = TYPOGRAPHY_VARIANT_MAP[props.variant];

  return <TypographyVariant {...props}>{props.children}</TypographyVariant>;
};

const TYPOGRAPHY_VARIANT_MAP: {
  [id: string]: (props: TypographyProps) => JSX.Element;
} = {
  body1: Body1Typography,
  small: LabelTypography,
  title: TitleTypography,
  listTitle: ListTitleTypography,
};

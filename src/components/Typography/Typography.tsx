import React, { ReactNode } from 'react';
import { TypographyMixinsProps } from 'assets/styles/themes/types/mixinsValues/TypographyMixins';
import {
  Body1Typography,
  LabelTypography,
  ListTitleTypography,
  StyledTypographyProps,
  TitleTypography,
} from './Typography.styles';

type TypographyVariant = 'body1' | 'label' | 'title' | 'listTitle';

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
  label: LabelTypography,
  title: TitleTypography,
  listTitle: ListTitleTypography,
};

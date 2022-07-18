import styled from 'styled-components';

export type StyledTypographyProps = {
  display?: 'inline-block' | 'block';
  textAlign?: 'left' | 'center' | 'right' | 'justify';
};

export const Body1Typography = styled.p<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.body1};
  display: ${({ display }) => display || 'inline-block'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export const LabelTypography = styled.p<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.label};
  display: ${({ display }) => display || 'inline-block'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export const TitleTypography = styled.h2<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.title};
  display: ${({ display }) => display || 'inline-block'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

export const ListTitleTypography = styled.h4<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.sectionTitle};
  display: ${({ display }) => display || 'inline-block'};
  text-align: ${({ textAlign }) => textAlign || 'left'};
`;

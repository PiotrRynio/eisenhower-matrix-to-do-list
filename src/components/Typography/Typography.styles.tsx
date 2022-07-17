import styled from 'styled-components';

type StyledTypographyProps = { display?: string };

export const Body1Typography = styled.p<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.body1};
  display: ${({ display }) => display || 'inline-block'};
`;

export const LabelTypography = styled.p<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.label};
  display: ${({ display }) => display || 'inline-block'};
`;

export const TitleTypography = styled.h2<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.title};
  display: ${({ display }) => display || 'inline-block'};
`;

export const ListTitleTypography = styled.h4<StyledTypographyProps>`
  ${({ theme }) => theme.mixins.typography.listTitle};
  display: ${({ display }) => display || 'inline-block'};
`;

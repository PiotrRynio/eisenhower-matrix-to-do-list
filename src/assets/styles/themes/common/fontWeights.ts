export type FontWeight = 'regular' | 'bold';

export type FontWeights = Record<FontWeight, string>;

export const fontWeights: FontWeights = {
  regular: '400',
  bold: '700',
};

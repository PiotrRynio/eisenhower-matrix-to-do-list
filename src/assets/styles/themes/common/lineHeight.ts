export type LineHeight = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type LineHeights = Record<LineHeight, string>;

export const lineHeights: LineHeights = {
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '28px',
  '2xl': '32px',
  '3xl': '36px',
};

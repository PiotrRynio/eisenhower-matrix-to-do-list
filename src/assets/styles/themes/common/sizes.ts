type Size = 'default' | 'md';
type Value = 'topBarHeight' | 'selectBoxHeight' | 'selectBoxWidth';

type SizesValues = Partial<Record<Size, string>> & Record<'default', string>;

export type Sizes = Record<Value, SizesValues>;

export const sizes: Sizes = {
  topBarHeight: { default: '58px', md: '72px' },
  selectBoxHeight: { default: '36px' },
  selectBoxWidth: { default: '220px' },
};

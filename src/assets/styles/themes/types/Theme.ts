import { Breakpoints, FontSizes, FontWeights, LineHeights, CommonMixins, Sizes } from '../common';
import { Colors, FontFamilies } from './themeValues';
import { ThemeMixins } from '../primaryTheme/themeValues';

export interface Theme {
  breakpoints: Breakpoints;
  colors: Colors;
  fontFamilies: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  sizes: Sizes;
  commonMixins: CommonMixins;
  themeMixins: ThemeMixins;
}

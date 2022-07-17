import { fontSizes, fontWeights, lineHeights } from '../../common';
import { fontFamilies } from './fontFamilies';
import { Typographies } from '../../types';
import { colors } from './colors';

export const typographies: Typographies = {
  body1: {
    fontSize: fontSizes.md,
    lineHeight: lineHeights.md,
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  label: {
    fontSize: fontSizes.sm,
    lineHeight: lineHeights.sm,
    fontWeight: fontWeights.regular,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  title: {
    fontSize: fontSizes.xl,
    lineHeight: lineHeights.xl,
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },

  listTitle: {
    fontSize: fontSizes.lg,
    lineHeight: lineHeights.lg,
    fontWeight: fontWeights.bold,
    fontFamily: fontFamilies.primary,
    color: colors.primaryText,
  },
};

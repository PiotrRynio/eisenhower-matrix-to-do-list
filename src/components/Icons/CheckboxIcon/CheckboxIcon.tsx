import { useTheme } from 'styled-components';
import { IconProps } from '../IconProps';

type CheckboxIconProps = { ariaHidden?: boolean; isChecked?: boolean } & IconProps;

export const CheckboxIcon = ({
  width = 15,
  height = 12,
  ariaLabel = 'checkbox',
  ariaHidden,
  isChecked,
}: CheckboxIconProps) => {
  const { colors } = useTheme();

  return (
    <svg width={width} height={height} aria-hidden={ariaHidden} viewBox="0 0 15 11" fill="none">
      {ariaHidden && <title>{ariaLabel}</title>}
      <path d="M1 4.5L5 9L14 1" strokeWidth="2" stroke={isChecked ? colors.primary : 'none'} />
    </svg>
  );
};

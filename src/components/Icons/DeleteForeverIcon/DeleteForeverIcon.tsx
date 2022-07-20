import { useTheme } from 'styled-components';
import { IconProps } from '../IconProps';

export const DeleteForeverIcon = ({ width = 14, height = 18, ariaLabel = 'delete forever' }: IconProps) => {
  const { colors } = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 14 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <path
        d="M9.12 7.47L7 9.59L4.87 7.47L3.46 8.88L5.59 11L3.47 13.12L4.88 14.53L7 12.41L9.12 14.53L10.53 13.12L8.41 11L10.53 8.88L9.12 7.47ZM10.5 1L9.5 0H4.5L3.5 1H0V3H14V1H10.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z"
        fill={colors.idleIcon}
      />
    </svg>
  );
};

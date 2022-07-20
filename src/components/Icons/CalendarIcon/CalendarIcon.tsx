import { useTheme } from 'styled-components';
import { IconProps } from '../IconProps';

export const CalendarIcon = ({ width = 18, height = 20, ariaLabel = 'calendar' }: IconProps) => {
  const { colors } = useTheme();
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>
      <path
        d="M16 2H15V0H13V2H5V0H3V2H2C0.89 2 0.00999999 2.9 0.00999999 4L0 18C0 19.1 0.89 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2ZM16 18H2V8H16V18ZM16 6H2V4H16V6ZM9 11H14V16H9V11Z"
        fill={colors.hardBorder}
      />
    </svg>
  );
};

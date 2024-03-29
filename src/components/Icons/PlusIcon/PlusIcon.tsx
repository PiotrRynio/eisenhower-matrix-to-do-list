import { useTheme } from 'styled-components';
import { IconProps } from '../IconProps';

export const PlusIcon = ({ width = 20, height = 20, ariaLabel = 'plus' }: IconProps) => {
  const { colors } = useTheme();

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={ariaLabel}
    >
      <title>{ariaLabel}</title>

      <path
        d="M11 5H9V9H5V11H9V15H11V11H15V9H11V5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
        fill={colors.hardBorder}
      />
    </svg>
  );
};

import { IconProps } from '../IconProps';
import { useTheme } from 'styled-components';

type FlagIconProps = IconProps & {
  priority?: 'doIt' | 'scheduleIt' | 'delegateIt' | 'deleteIt';
};

export const PriorityFlagIcon = ({ priority = 'deleteIt', width = 15, height = 17, ariaLabel }: FlagIconProps) => {
  const theme = useTheme();

  const priorityLabel = {
    doIt: 'do it flag',
    scheduleIt: 'schedule it flag',
    delegateIt: 'delegate it flag',
    deleteIt: 'delete it flag',
  };

  const isDeleteItPriority = priority === 'deleteIt';
  const color = theme.colors[`${priority}Priority`];
  const label = ariaLabel || priorityLabel[priority];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={label || 'priority flag'}
    >
      <title>{label}</title>

      {isDeleteItPriority ? (
        <path d="M9 2L8 0H0V17H2V10H7L8 12H15V2H9ZM13 10H9L8 8H2V2H7L8 4H13V10Z" fill={color} />
      ) : (
        <path d="M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z" fill={color} />
      )}
    </svg>
  );
};

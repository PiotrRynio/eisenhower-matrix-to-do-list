import { IconProps } from '../IconProps';
import { useTheme } from 'styled-components';
import { TaskListsIds } from 'types/TaskListsIds';

type FlagIconProps = IconProps & {
  priority?: TaskListsIds;
};

export const PriorityFlagIcon = ({
  priority = 'NOT_URGENT_AND_NOT_IMPORTANT',
  width = 15,
  height = 17,
  ariaLabel = 'priority flag',
}: FlagIconProps) => {
  const theme = useTheme();

  const prioritiesOptions = {
    URGENT_AND_IMPORTANT: { label: 'URGENT AND IMPORTANT', color: theme.colors.urgentAndImportantPriority },
    IMPORTANT_AND_NOT_URGENT: { label: 'URGENT AND IMPORTANT', color: theme.colors.importantAndNotUrgentPriority },
    URGENT_AND_NOT_IMPORTANT: { label: 'URGENT AND IMPORTANT', color: theme.colors.urgentAndNotImportantPriority },
    NOT_URGENT_AND_NOT_IMPORTANT: {
      label: 'URGENT AND IMPORTANT',
      color: theme.colors.notUrgentAndNotImportantPriority,
    },
  };

  const isTheLowestItPriority = priority === 'NOT_URGENT_AND_NOT_IMPORTANT';
  const color = prioritiesOptions[priority].color;
  const label = ariaLabel || prioritiesOptions[priority].label;

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

      {isTheLowestItPriority ? (
        <path d="M9 2L8 0H0V17H2V10H7L8 12H15V2H9ZM13 10H9L8 8H2V2H7L8 4H13V10Z" fill={color} />
      ) : (
        <path d="M9.4 2L9 0H0V17H2V10H7.6L8 12H15V2H9.4Z" fill={color} />
      )}
    </svg>
  );
};

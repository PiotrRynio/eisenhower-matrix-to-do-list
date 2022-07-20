export type Color =
  | 'primary'
  | 'primaryHovered'
  | 'primaryOpposed'
  | 'primaryOpposedHovered'
  | 'primaryText'
  | 'linkText'
  | 'disabled'
  | 'idleIcon'
  | 'background'
  | 'backgroundHovered'
  | 'transparent'
  | 'border'
  | 'urgentAndImportantPriority'
  | 'importantAndNotUrgentPriority'
  | 'urgentAndNotImportantPriority'
  | 'notUrgentAndNotImportantPriority';

export type Colors = Record<Color, string>;

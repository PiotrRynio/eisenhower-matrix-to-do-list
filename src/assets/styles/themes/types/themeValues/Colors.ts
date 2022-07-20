export type Color =
  | 'primary'
  | 'primaryHovered'
  | 'primaryOpposed'
  | 'primaryOpposedHovered'
  | 'primaryText'
  | 'linkText'
  | 'disabled'
  | 'background'
  | 'backgroundHovered'
  | 'softBorder'
  | 'hardBorder'
  | 'transparent'
  | 'error'
  | 'urgentAndImportantPriority'
  | 'importantAndNotUrgentPriority'
  | 'urgentAndNotImportantPriority'
  | 'notUrgentAndNotImportantPriority';

export type Colors = Record<Color, string>;

export type Color =
  | 'primary'
  | 'primaryHovered'
  | 'primaryOpposed'
  | 'primaryOpposedHovered'
  | 'primaryText'
  | 'linkText'
  | 'disabled'
  | 'hardBorder'
  | 'background'
  | 'backgroundHovered'
  | 'transparent'
  | 'softBorder'
  | 'urgentAndImportantPriority'
  | 'importantAndNotUrgentPriority'
  | 'urgentAndNotImportantPriority'
  | 'notUrgentAndNotImportantPriority';

export type Colors = Record<Color, string>;

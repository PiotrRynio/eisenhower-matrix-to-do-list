export type Color =
  | 'primary'
  | 'primaryHovered'
  | 'primaryOpposed'
  | 'primaryOpposedHovered'
  | 'primaryText'
  | 'linkText'
  | 'disabled'
  | 'idle'
  | 'background'
  | 'backgroundHovered'
  | 'transparent'
  | 'border'
  | 'urgentAndImportantPriority'
  | 'importantAndNotUrgentPriority'
  | 'urgentAndNotImportantPriority'
  | 'notUrgentAndNotImportantPriority';

export type Colors = Record<Color, string>;

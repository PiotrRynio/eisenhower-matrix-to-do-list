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
  | 'doItPriority'
  | 'scheduleItPriority'
  | 'delegateItPriority'
  | 'deleteItPriority';

export type Colors = Record<Color, string>;

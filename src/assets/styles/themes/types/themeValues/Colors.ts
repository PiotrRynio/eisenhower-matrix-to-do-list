export type Color =
  | 'primary'
  | 'primaryOpposed'
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

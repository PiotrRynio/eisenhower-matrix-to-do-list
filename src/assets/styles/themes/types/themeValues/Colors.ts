export type Color =
  | 'primary'
  | 'primaryText'
  | 'linkText'
  | 'disabled'
  | 'background'
  | 'transparent'
  | 'border'
  | 'doItPriority'
  | 'scheduleItPriority'
  | 'delegateItPriority'
  | 'deleteItPriority';

export type Colors = Record<Color, string>;

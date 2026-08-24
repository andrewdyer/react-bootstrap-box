import classnames from 'classnames';

import type { Position, PositionEdge } from '../../types';

export interface PositionProps {
  position?: Position;
  top?: PositionEdge;
  start?: PositionEdge;
  bottom?: PositionEdge;
  end?: PositionEdge;
}

const generatePositionClassNames = ({
  position,
  top,
  start,
  bottom,
  end,
}: PositionProps): string => {
  return classnames({
    [`position-${position}`]: position,
    [`top-${top}`]: top,
    [`start-${start}`]: start,
    [`bottom-${bottom}`]: bottom,
    [`end-${end}`]: end,
  });
};

export default generatePositionClassNames;

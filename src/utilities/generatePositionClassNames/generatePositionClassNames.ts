import classnames from 'classnames';

import type { TBoxPosition, TBoxPositionEdge } from '../../types';

export interface PositionProps {
  position?: TBoxPosition;
  top?: TBoxPositionEdge;
  start?: TBoxPositionEdge;
  bottom?: TBoxPositionEdge;
  end?: TBoxPositionEdge;
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

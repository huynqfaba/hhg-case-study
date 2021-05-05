import React from 'react';
import styled from '@emotion/styled';

import {
  space,
  layout,
  position,
  compose,
  system,
  variant,
  SpaceProps,
  LayoutProps,
  PositionProps,
} from 'styled-system';

interface Props extends SpaceProps, LayoutProps, PositionProps {
  icon: any;
  size: 'micro' | 'tiny' | 'small' | 'medium' | 'large';
  fill?: string;
  stroke?: string;
}

const IconStyled = styled.span<SpaceProps & LayoutProps & PositionProps>`
  svg {
    ${variant({
      prop: 'size',
      variants: {
        micro: {
          height: '10px',
          width: '10x',
        },
        tiny: {
          height: '12px',
          width: '12x',
        },
        small: {
          height: '24px',
          width: '24px',
        },
        medium: {
          height: '32px',
          width: '32px',
        },
        large: {
          height: '40px',
          width: '40px',
        },
      },
    })}
  }

  path {
    ${system({
      fill: {
        property: 'fill',
        scale: 'colors',
      },
      stroke: {
        property: 'stroke',
        scale: 'colors',
      },
    })}
  }
  ${compose(space, layout, position)};
`;

export function IconWrapper(props: Props) {
  return <IconStyled {...props}>{React.createElement(props.icon)}</IconStyled>;
}

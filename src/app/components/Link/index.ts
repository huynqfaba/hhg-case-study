import { Link as RouterLink } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  compose,
  color,
  fontWeight,
  space,
  layout,
  ColorProps,
  SpaceProps,
  FontWeightProps,
  LayoutProps,
} from 'styled-system';

export const Link = styled(RouterLink)<
  ColorProps & SpaceProps & FontWeightProps & LayoutProps
>`
  text-decoration: none;
  color: #000;
  :hover {
    text-decoration: none;
    color: #000;
  }

  ${compose(color, fontWeight, space, layout)};
`;

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
import theme from 'styles/theme';

export const Link = styled(RouterLink)<
  ColorProps & SpaceProps & FontWeightProps & LayoutProps
>`
  text-decoration: none;
  color: ${theme.colors.black};
  :hover {
    text-decoration: none;
    color: ${theme.colors.black};
  }

  ${compose(color, fontWeight, space, layout)};
`;

import styled from '@emotion/styled';
import {
  compose,
  flexbox,
  color,
  fontWeight,
  space,
  layout,
  ColorProps,
  SpaceProps,
  FontWeightProps,
  LayoutProps,
  FlexboxProps,
} from 'styled-system';
import theme from 'styles/theme';

export const Box = styled.div<
  ColorProps & SpaceProps & FontWeightProps & LayoutProps
>`
  padding-top: ${theme.space.s};
  padding-right: ${theme.space.m};
  padding-bottom: ${theme.space.s};
  padding-left: ${theme.space.m};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(21, 21, 21, 0.02);
  background: #fdfeff;
  ${compose(color, fontWeight, space, layout)};
`;

export const Flex = styled.div<
  ColorProps & SpaceProps & FontWeightProps & LayoutProps & FlexboxProps
>`
  display: flex;
  ${compose(color, fontWeight, space, layout, flexbox)};
`;

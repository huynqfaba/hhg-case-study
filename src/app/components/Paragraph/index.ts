import styled from '@emotion/styled';
import {
  color,
  space,
  ColorProps,
  FontWeightProps,
  SpaceProps,
  FontSizeProps,
  fontSize,
  variant,
  fontWeight,
  layout,
  LayoutProps,
} from 'styled-system';
import theme from 'styles/theme';

const Span = styled.span<
  ColorProps & FontSizeProps & SpaceProps & FontWeightProps & LayoutProps
>`
  font-weight: ${theme.fontWeight.regular};
  ${variant({
    prop: 'variant',
    variants: {
      body: {
        fontWeight: 'regular',
      },
      bodyBold: {
        fontWeight: 'bold',
      },
      bodyItalic: {
        fontStyle: 'italic',
      },
      small: {
        fontSize: 'small',
        fontWeight: 'regular',
      },
      smallBold: {
        fontSize: 'small',
        fontWeight: 'bold',
      },
    },
  })}
  ${color};
  ${space};
  ${fontSize};
  ${fontWeight};
  ${layout};
`;

export { Span };

import styled from '@emotion/styled';
import {
  compose,
  layout,
  color,
  space,
  ColorProps,
  SpaceProps,
  LayoutProps,
} from 'styled-system';

export const Button = styled.button<ColorProps & SpaceProps & LayoutProps>(
  {
    padding: '6px 15px;',
    borderRadius: '5px',
    fontWeight: 'bold',
    lineHeight: '14px',
    outline: 'none',
    border: '0',
    color: '#fff',
    '&:focus': {
      outline: 'none',
    },
    height: '32px',
    '&:disabled': {
      opacity: '0.5',
    },
  },

  compose(color, space, layout),
);

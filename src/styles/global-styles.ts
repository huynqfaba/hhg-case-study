import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    line-height: 1.5;
    background: #E5E5E5;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
  
  p,
  label {
    line-height: 1.5em;
  }

  input, select, button {
    font-family: inherit;
    font-size: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  
  li{
    list-style-type: none;
  }

  .modal-center {
    &.first-modal-layer {
      z-index: 1040;
    }

    &.fade .modal-dialog {
      transform: translate(-50%, calc(-50% - 50px));
    }

    &.show .modal-dialog {
      transform: translate(-50%, -50%);
    }

    .modal-dialog {
      position: absolute;
      float: left;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin: 0;
    }
  }
`;

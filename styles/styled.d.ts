import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
      titleSize: string;
    };

    paddings: {
      xsmall: string;
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };

    margins: {
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };

    interval: {
      small: string;
      base: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      xxxlarge: string;
    };

    verticalInterval: {
      base: string;
    };

    colors: {
      theme: string;
      black: string;
      white: string;
      lightGray: string;
      gray: string;
      disabled: string;
      border: string;
      hoverGreen: string;
      activeGreen: string;
    };

    deviceSizes: {};
  }
}

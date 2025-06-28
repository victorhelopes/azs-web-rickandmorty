import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    iconSizes: {
      xsmall: number;
      small: number;
      base: number;
      large: number;
      xlarge: number;
    };

    colors: {
      primary: string;
      white: string;
      black: string;
      gray: string;
    };
  }
}

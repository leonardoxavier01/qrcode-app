import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      white: string;
    };

    box: {
      borderColor: string;
      borderRadius: string;
      boxShadow: string;
    };
  }
}

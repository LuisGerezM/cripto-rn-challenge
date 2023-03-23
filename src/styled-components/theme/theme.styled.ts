import {DefaultTheme} from 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      black: string;
      blueGray: string;
      darkBlue: string;
      green: string;
      grey: string;
      navyBlue: string;
      red: string;
      skyBlue: string;
      white: string;
      yellow: string;
    };
    fontSizes: {
      title: string;
      subTitle: string;
      text: string;
    };
    fontWeights: {
      heavy: number;
      bold: number;
      light: number;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    black: '#000000',
    blueGray: '#385674',
    darkBlue: '#26272E',
    green: '#0f8131',
    grey: '#7E7E7E',
    navyBlue: '#50717B',
    red: '#CF3A3A',
    skyBlue: '#8ECCCC',
    white: '#fafafa',
    yellow: '#fad24c',
  },
  fontSizes: {
    title: '25px',
    subTitle: '20px',
    text: '15px',
  },
  fontWeights: {
    heavy: 900,
    bold: 400,
    light: 300,
  },
};

import {DefaultTheme} from 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };
    fontSizeType: {
      [key: string]: string;
    };
    fontWeights: {
      [key: string]: number;
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
    greyBGInput: '#fafbfc',
    navyBlue: '#50717B',
    red: '#CF3A3A',
    skyBlue: '#8ECCCC',
    white: '#fafafa',
    yellow: '#fad34d',
  },
  fontSizeType: {
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

import {StylesProps} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import styled from 'styled-components/native';

const Alert = styled.View<StylesProps>`
  width: 80%;
  margin: 35px auto;
  background-color: ${({backgroundColor, theme}) =>
    backgroundColor || theme.colors.red};
  padding: ${({padding}) => padding || '20px 15px'};
  border-radius: 8px;
`;

export {Alert};

import styled from 'styled-components/native';

export interface StylesProps {
  color?: string;
  loading?: boolean;
  fontSizeType?: string;
  fontWeight?: string;
}

const NavigationButton = styled.TouchableOpacity<StylesProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 25px;
`;

export {NavigationButton};

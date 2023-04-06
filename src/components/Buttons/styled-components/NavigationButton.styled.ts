import styled from 'styled-components/native';

export interface NavigationProps {
  color?: string;
  loading?: boolean;
  fontSize?: string;
  fontWeight?: string;
}

const NavigationButton = styled.TouchableOpacity<NavigationProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-top: 25px;
`;

export {NavigationButton};

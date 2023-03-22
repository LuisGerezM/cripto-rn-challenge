import styled from 'styled-components/native';

const WrapHeader = styled.View`
  height: 130px;
  background-color: ${props => props.theme.colors.blueGray};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
`;

export {WrapHeader};

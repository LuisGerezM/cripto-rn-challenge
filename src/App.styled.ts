import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.white};
  display: flex;
  flex: 1;
  align-items: center;
`;

export {Container};

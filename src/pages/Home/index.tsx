import * as React from 'react';
import {CryptoList} from './components';
import {Container} from './styled-components/Home.styled';

const Home = (): JSX.Element => {
  return (
    <Container>
      <CryptoList />
    </Container>
  );
};
export default Home;

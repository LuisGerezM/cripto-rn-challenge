import * as React from 'react';

import CryptoList from './components/CrytpoList/CryptoList';
import {Container} from './styled-components/Home';

const Home = (): JSX.Element => {
  return (
    <Container>
      <CryptoList />
    </Container>
  );
};
export default Home;

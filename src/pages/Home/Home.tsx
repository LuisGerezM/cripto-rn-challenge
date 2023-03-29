import * as React from 'react';

import CriptoList from './components/CritpoList/CriptoList';
import {Container} from './styled-components/Home';

const Home = (): JSX.Element => {
  return (
    <Container>
      <CriptoList />
    </Container>
  );
};
export default Home;

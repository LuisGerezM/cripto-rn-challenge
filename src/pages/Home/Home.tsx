import * as React from 'react';

import {Container} from 'src/App.styled';
import CriptoList from './components/CritpoList/CriptoList';

const Home = (): JSX.Element => {
  return (
    <Container>
      <CriptoList />
    </Container>
  );
};
export default Home;

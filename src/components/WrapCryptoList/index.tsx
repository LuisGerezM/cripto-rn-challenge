import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

interface WrapCryptoList {
  children: ReactNode;
}

const WrapCryptoList = ({children}: WrapCryptoList): JSX.Element => {
  return <WrapList>{children}</WrapList>;
};
export default WrapCryptoList;

const WrapList = styled.ScrollView`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
  margin-bottom: 30px;
`;

import React, {ReactNode} from 'react';
import {WrapList} from './styled-components/WrapCryptoList.styled';

interface WrapCryptoList {
  children: ReactNode;
}

const WrapCryptoList = ({children}: WrapCryptoList): JSX.Element => (
  <WrapList>{children}</WrapList>
);

export default WrapCryptoList;

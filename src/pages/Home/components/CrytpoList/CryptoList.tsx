import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mockCryptosData} from 'src/bd-mock/cryptoData.mock';
import MessageAsAlert from 'src/components/Alert/MessageAsAlert';
import ButtonToNavigate from 'src/components/Buttons/ButtonToNavigate/ButtonToNavigate';
import {routes} from 'src/models/routes.models';
import CryptoCard from 'src/pages/Home/components/CryptoCard/CryptoCard';
import {cryptoSchema} from 'src/schema/crypto.schema';
import styled from 'styled-components/native';

const WrapCryptoList = styled.ScrollView`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

const CryptoList = (): JSX.Element => {
  return (
    <WrapCryptoList>
      {!mockCryptosData.length ? (
        <MessageAsAlert text={cryptoSchema.dontCrypto} fontSize="subTitle" />
      ) : (
        mockCryptosData.map(crypto => (
          <CryptoCard key={crypto.symbol} crypto={crypto} />
        ))
      )}
      <ButtonToNavigate
        text="Add a Cryptocurency"
        to={routes.ADD_CIRPTO_CURRENCY}>
        <MaterialIcons name="add" size={20} />
      </ButtonToNavigate>
    </WrapCryptoList>
  );
};
export default CryptoList;

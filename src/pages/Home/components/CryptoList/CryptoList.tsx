import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ButtonToNavigate, MessageAsAlert, SpinnerLoader} from 'src/components';
import {routes} from 'src/models';
import {useCryptoList} from '../../hooks';
import {CryptoCard} from '../CryptoCard';
import styled from 'styled-components/native';

const WrapCryptoList = styled.ScrollView`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

const CryptoList = (): JSX.Element => {
  const {lodingPersonalCryptos, cryptoData, errorMessage} = useCryptoList();

  if (lodingPersonalCryptos) {
    return <SpinnerLoader text="Cargando..." />;
  }

  return (
    <WrapCryptoList>
      {!cryptoData.length ? (
        <MessageAsAlert
          text={
            errorMessage || "You don't have crypto. Please select some crypto"
          }
          fontSize="subTitle"
        />
      ) : (
        cryptoData.map(crypto => (
          <CryptoCard key={crypto.symbol} crypto={crypto} />
        ))
      )}
      <ButtonToNavigate
        text="Add a Cryptocurency"
        to={routes.ADD_CRYPTO_CURRENCY}>
        <MaterialIcons name="add" size={20} />
      </ButtonToNavigate>
    </WrapCryptoList>
  );
};
export default CryptoList;

import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MessageAsAlert from 'src/components/Alert/MessageAsAlert';
import ButtonToNavigate from 'src/components/Buttons/ButtonToNavigate/ButtonToNavigate';
import {SpinnerLoader} from 'src/components/Spinner/SpinnerLoader';
import {routes} from 'src/models/routes.models';
import CryptoCard from 'src/pages/Home/components/CryptoCard/CryptoCard';
import styled from 'styled-components/native';
import {useCryptoList} from '../../hooks/useCryptoList';

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

import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ButtonToNavigate,
  CryptoCard,
  MessageAsAlert,
  SpinnerLoader,
  WrapCryptoList,
} from 'src/components';
import {routes} from 'src/models';
import {useCryptoList} from '../../hooks/useCryptoList';

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

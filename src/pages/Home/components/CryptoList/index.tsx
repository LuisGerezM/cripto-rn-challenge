import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  ButtonToNavigate,
  CryptoCard,
  MessageAsAlert,
  WrapCryptoList,
} from 'src/components';
import {Crypto, routes} from 'src/models';
import {useCryptoList} from '../../hooks/useCryptoList';

const CryptoList = (): JSX.Element => {
  const {cryptoData} = useCryptoList();

  return (
    <WrapCryptoList>
      {!cryptoData.length ? (
        <MessageAsAlert
          text={"You don't have crypto. Please select some crypto"}
          fontSize="subTitle"
        />
      ) : (
        cryptoData.map((crypto: Crypto) => (
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

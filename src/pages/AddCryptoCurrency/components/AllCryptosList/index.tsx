import React from 'react';
import {
  Button,
  CryptoCard,
  MessageAsAlert,
  SpinnerLoader,
  WrapCryptoList,
} from 'src/components';
import useAllCryptoList from '../../hooks/useAllCryptoList';

const AllCryptoList = () => {
  const {
    messageError,
    allCryptos,
    handlePress,
    loadingAllCryptos,
    handleAddPages,
  } = useAllCryptoList();

  return (
    <WrapCryptoList>
      {messageError ? (
        <MessageAsAlert text={messageError} />
      ) : (
        <>
          {allCryptos?.map((crypto, idx) => (
            <CryptoCard key={idx} crypto={crypto}>
              <Button
                onPress={() => handlePress(crypto)}
                backgroundColor="skyBlue"
                borderColor="grey"
                width="25%"
                buttonColor="darkBlue"
              />
            </CryptoCard>
          ))}
          {loadingAllCryptos ? (
            <SpinnerLoader text="Loading cryptos..." />
          ) : (
            <Button
              onPress={handleAddPages}
              backgroundColor="blueGray"
              borderColor="blueGray"
              width="100%"
              buttonColor="white"
              textBtn="More items"
            />
          )}
        </>
      )}
    </WrapCryptoList>
  );
};
export default AllCryptoList;

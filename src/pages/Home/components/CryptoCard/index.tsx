import React from 'react';
import {ImageComponent, SpinnerLoader} from 'src/components';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import {useCryptoCard} from '../../hooks/useCryptoCard';
import {
  Crypto,
  WrapNameAndIconCrypto,
  WrapNameAndSymbol,
  WrapPriceAndPercentCrypto,
  WrapStatusPercent,
} from './styled-components/CryptoCard.styled';

interface CryptoCard {
  crypto: {
    name: string;
    symbol: string;
    price_usd: number;
    percent_24: number;
    icon: string;
  };
}

const CryptoCard = ({crypto}: CryptoCard) => {
  const {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum} =
    useCryptoCard();

  return (
    <Crypto>
      <WrapNameAndIconCrypto>
        {loadImg && <SpinnerLoader />}
        <ImageComponent
          src={{uri: crypto.icon}}
          loadImg={loadImg}
          handleLoadingImg={handleLoadingImg}
          width="32px"
          height="32px"
        />
        <WrapNameAndSymbol>
          <TextComponent fontSizeType="text" fontWeight="bold" color="darkBlue">
            {crypto.name}
          </TextComponent>
          <TextComponent
            fontSizeType="text"
            fontWeight="light"
            color="grey"
            textAlign="left">
            {crypto.symbol}
          </TextComponent>
        </WrapNameAndSymbol>
      </WrapNameAndIconCrypto>
      <WrapPriceAndPercentCrypto>
        <TextComponent fontSizeType="text" fontWeight="bold" color="darkBlue">
          ${crypto.price_usd}
        </TextComponent>
        <WrapStatusPercent>
          {loadImg && <SpinnerLoader color={defaultTheme.colors.blueGray} />}
          <ImageComponent
            src={sourceByPercent(crypto.percent_24)}
            loadImg={loadImg}
            handleLoadingImg={handleLoadingImg}
            width="15px"
            height="15px"
          />
          <TextComponent
            fontSizeType="text"
            fontWeight="light"
            color={crypto.percent_24 > 0 ? 'green' : 'red'}>
            {convertNegativeNum(crypto.percent_24)}%
          </TextComponent>
        </WrapStatusPercent>
      </WrapPriceAndPercentCrypto>
    </Crypto>
  );
};
export default CryptoCard;

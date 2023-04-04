import React, {ReactNode} from 'react';
import {ImageComponent, SpinnerLoader} from 'src/components';
import {useCryptoCard} from 'src/hooks/useCryptoCard';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import {
  Card,
  WrapNameAndIconCrypto,
  WrapNameAndSymbol,
  WrapPriceAndPercentCrypto,
  WrapStatusPercent,
} from './styled-components/Card.styled';

interface CryptoCard {
  crypto: {
    name: string;
    symbol: string;
    price_usd: number;
    percent_24: number;
    icon: string;
  };
  children?: ReactNode;
}

const CryptoCard = ({crypto, children}: CryptoCard) => {
  const {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum} =
    useCryptoCard();

  return (
    <Card>
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
      {children}
    </Card>
  );
};
export default CryptoCard;

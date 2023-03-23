import React from 'react';
import {View} from 'react-native';
import ImageComponent from 'src/components/Images/ImageComponent';
import {SpinnerLoader} from 'src/components/Spinner/SpinnerLoader';
import {useCriptoCard} from 'src/pages/Home/hooks/useCriptoCard';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import {
  Cripto,
  WrapNameAndIconCripto,
  WrapPriceAndPercentCripto,
  WrapStatusPercent,
} from './styled-components/CriptoCard.styled';

interface CriptoC {
  cripto: {
    name: string;
    symbol: string;
    price_usd: number;
    percent_24: number;
    icon: string;
  };
}

const CriptoCard = ({cripto}: CriptoC) => {
  const {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum} =
    useCriptoCard();

  return (
    <Cripto>
      <WrapNameAndIconCripto>
        {loadImg && <SpinnerLoader color={defaultTheme.colors.blueGray} />}
        <ImageComponent
          src={{uri: cripto.icon}}
          loadImg={loadImg}
          handleLoadingImg={handleLoadingImg}
        />
        <View>
          <TextComponent fontSize="subTitle" fontWeight="bold" color="darkBlue">
            {cripto.name}
          </TextComponent>
          <TextComponent fontSize="text" fontWeight="light" color="grey">
            {cripto.symbol}
          </TextComponent>
        </View>
      </WrapNameAndIconCripto>
      <WrapPriceAndPercentCripto>
        <TextComponent fontSize="subTitle" fontWeight="bold" color="darkBlue">
          ${cripto.price_usd}
        </TextComponent>
        <WrapStatusPercent>
          {loadImg && <SpinnerLoader color={defaultTheme.colors.blueGray} />}
          <ImageComponent
            src={sourceByPercent(cripto.percent_24)}
            loadImg={loadImg}
            handleLoadingImg={handleLoadingImg}
            width="15px"
            height="15px"
          />
          <TextComponent
            fontSize="text"
            fontWeight="light"
            color={cripto.percent_24 > 0 ? 'green' : 'red'}>
            {convertNegativeNum(cripto.percent_24)}%
          </TextComponent>
        </WrapStatusPercent>
      </WrapPriceAndPercentCripto>
    </Cripto>
  );
};
export default CriptoCard;

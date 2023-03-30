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

interface CriptoCard {
  cripto: {
    name: string;
    symbol: string;
    price_usd: number;
    percent: number;
    icon: string;
  };
}

const CriptoCard = ({cripto}: CriptoCard) => {
  const {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum} =
    useCriptoCard();

  return (
    <Cripto>
      <WrapNameAndIconCripto>
        {loadImg && <SpinnerLoader />}
        <ImageComponent
          src={{uri: cripto.icon}}
          loadImg={loadImg}
          handleLoadingImg={handleLoadingImg}
          width="32px"
          height="32px"
        />
        <View style={{marginLeft: 5}}>
          <TextComponent fontSizeType="text" fontWeight="bold" color="darkBlue">
            {cripto.name}
          </TextComponent>
          <TextComponent
            fontSizeType="text"
            fontWeight="light"
            color="grey"
            textAlign="left">
            {cripto.symbol}
          </TextComponent>
        </View>
      </WrapNameAndIconCripto>
      <WrapPriceAndPercentCripto>
        <TextComponent fontSizeType="text" fontWeight="bold" color="darkBlue">
          ${cripto.price_usd}
        </TextComponent>
        <WrapStatusPercent>
          {loadImg && <SpinnerLoader color={defaultTheme.colors.blueGray} />}
          <ImageComponent
            src={sourceByPercent(cripto.percent)}
            loadImg={loadImg}
            handleLoadingImg={handleLoadingImg}
            width="15px"
            height="15px"
          />
          <TextComponent
            fontSizeType="text"
            fontWeight="light"
            color={cripto.percent > 0 ? 'green' : 'red'}>
            {convertNegativeNum(cripto.percent)}%
          </TextComponent>
        </WrapStatusPercent>
      </WrapPriceAndPercentCripto>
    </Cripto>
  );
};
export default CriptoCard;

import React from 'react';
import {useImageLoading} from 'src/hooks';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import ImageComponent from '../Images';
import SpinnerLoader from '../Spinner';
import {WrapHeader} from './styled-components/Header.styled';

const Header = (): JSX.Element => {
  const {loadImg, handleLoadingImg} = useImageLoading();

  return (
    <WrapHeader>
      <TextComponent fontSizeType="title" fontWeight="heavy" color="white">
        CryptoTracker Pro
      </TextComponent>
      {loadImg && <SpinnerLoader color={defaultTheme.colors.white} />}
      <ImageComponent
        src={require('../../assets/icons/user.png')}
        loadImg={loadImg}
        handleLoadingImg={handleLoadingImg}
      />
    </WrapHeader>
  );
};

export default Header;

import React from 'react';
import {useSpinnerLoading} from 'src/hooks/useSpinnerLoading';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import ImageComponent from '../Images/ImageComponent';
import {SpinnerLoader} from '../Spinner/SpinnerLoader';
import {WrapHeader} from './styled-components/Header.styled';

const Header = (): JSX.Element => {
  const {loadImg, handleLoadingImg} = useSpinnerLoading();

  return (
    <WrapHeader>
      <TextComponent fontSize="title" fontWeight="heavy" color="white">
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

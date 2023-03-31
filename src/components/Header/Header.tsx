import React from 'react';
import {useImageLoading} from 'src/hooks';
import {defaultTheme, TextComponent} from 'src/styled-components';
import {ImageComponent} from '../Images';
import {SpinnerLoader} from '../Spinner';
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

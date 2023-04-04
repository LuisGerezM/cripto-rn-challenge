import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import {WrapSpinnerLoad} from './styled-components/SpinnerLoader.styled';

interface SpinnerProps {
  color?: string;
  text?: string;
  fontSizeType?: string;
}

const SpinnerLoader = ({
  color = defaultTheme.colors.blueGray,
  text = '',
  fontSizeType = 'text',
}: SpinnerProps): JSX.Element => {
  return (
    <WrapSpinnerLoad>
      {text && (
        <TextComponent
          fontSizeType={fontSizeType}
          fontWeight="bold"
          color="darkBlue">
          {text}
        </TextComponent>
      )}
      <ActivityIndicator size="large" color={color} />
    </WrapSpinnerLoad>
  );
};

export default SpinnerLoader;

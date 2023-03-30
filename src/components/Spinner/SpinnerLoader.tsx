import React from 'react';
import {ActivityIndicator} from 'react-native';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {defaultTheme} from 'src/styled-components/theme/theme.styled';
import styled from 'styled-components/native';

interface SpinnerProps {
  color?: string;
  text?: string;
}

export const SpinnerLoader = ({
  color = defaultTheme.colors.blueGray,
  text = '',
}: SpinnerProps): JSX.Element => {
  return (
    <WrapSpinnerLoad>
      {text && (
        <TextComponent fontSizeType="text" fontWeight="bold" color="darkBlue">
          {text}{' '}
        </TextComponent>
      )}
      <ActivityIndicator size="large" color={color} />
    </WrapSpinnerLoad>
  );
};

const WrapSpinnerLoad = styled.View`
  margin: 15px 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

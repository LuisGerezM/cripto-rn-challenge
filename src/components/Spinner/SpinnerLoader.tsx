import React from 'react';
import {ActivityIndicator} from 'react-native';
import styled from 'styled-components/native';

interface SpinnerProps {
  color: string;
}

export const SpinnerLoader = ({color}: SpinnerProps): JSX.Element => {
  return (
    <WrapSpinnerLoad>
      <ActivityIndicator size="large" color={color} />
    </WrapSpinnerLoad>
  );
};

const WrapSpinnerLoad = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
`;

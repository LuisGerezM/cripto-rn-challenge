import React, {ReactNode} from 'react';
import {
  CustomButton,
  TextComponent,
} from 'src/styled-components/globalStyles/GlobalStyles.styled';

interface Button {
  backgroundColor: string;
  borderColor: string;
  width: string;
  disabled?: boolean;
  buttonColor?: string;
  textBtn?: string;
  children?: ReactNode;
  onPress: () => void;
}

const Button = ({
  onPress,
  backgroundColor,
  borderColor,
  width,
  disabled = false,
  buttonColor,
  textBtn = 'Add',
  children,
}: Button) => {
  return (
    <CustomButton
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      disabled={disabled}>
      <TextComponent fontSizeType="text" fontWeight="bold" color={buttonColor}>
        {children}
        {textBtn}
      </TextComponent>
    </CustomButton>
  );
};
export default Button;

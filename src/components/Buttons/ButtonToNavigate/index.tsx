import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {NavigationButton} from '../styled-components/NavigationButton.styled';

interface ButtonToNav {
  children?: JSX.Element | [];
  text?: string;
  to: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const ButtonToNavigate = ({
  children,
  fontSize = 'text',
  fontWeight = 'bold',
  color = 'blueGray',
  text = '',
  to,
}: ButtonToNav) => {
  const navigation = useNavigation();

  const handlerAddPressed = () => {
    navigation.navigate(to);
  };

  return (
    <NavigationButton onPress={handlerAddPressed}>
      {children}
      <TextComponent
        fontSizeType={fontSize}
        fontWeight={fontWeight}
        color={color}>
        {text}
      </TextComponent>
    </NavigationButton>
  );
};

export default ButtonToNavigate;

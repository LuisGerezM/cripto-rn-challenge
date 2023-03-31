import React from 'react';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {Alert} from '../styled-components/MessageAsAlert.styled';

interface MsgAlert {
  text: string;
  backgroundColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}

const MessageAsAlert = ({
  text,
  backgroundColor,
  padding,
  fontSize = 'title',
  fontWeight = 'heavy',
  color = 'white',
}: MsgAlert) => {
  return (
    <Alert backgroundColor={backgroundColor} padding={padding}>
      <TextComponent
        fontSizeType={fontSize}
        fontWeight={fontWeight}
        color={color}>
        {text}
      </TextComponent>
    </Alert>
  );
};
export default MessageAsAlert;

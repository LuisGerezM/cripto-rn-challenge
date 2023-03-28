import React from 'react';
import {TextComponent} from 'src/styled-components/globalStyles/GlobalStyles.styled';
import {Alert} from './styled-components/MessageAsAlert.styled';

interface MsgAlert {
  text: string;
  backgroundColor: string;
  padding: string;
  fontSizeType: string;
  fontWeight: string;
  color: string;
}

const MessageAsAlert = ({
  text,
  backgroundColor,
  padding,
  fontSizeType = 'title',
  fontWeight = 'heavy',
  color = 'white',
}: MsgAlert) => {
  return (
    <Alert backgroundColor={backgroundColor} padding={padding}>
      <TextComponent
        fontSizeType={fontSizeType}
        fontWeight={fontWeight}
        color={color}>
        {text}
      </TextComponent>
    </Alert>
  );
};
export default MessageAsAlert;

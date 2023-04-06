import styled, {css, DefaultTheme} from 'styled-components/native';

export interface ImageProps {
  loading?: boolean;
  height?: string;
  width?: string;
  padding?: string;
}

export interface FontProps {
  color: string;
  fontSizeType: string;
  fontWeight: string;
  textAlign?: string;
  theme: DefaultTheme;
}

export interface StylesProps {
  height?: string;
  width?: string;
  backgroundColor?: string;
  padding?: string;
  borderColor?: string;
  borderRadius?: string;
  disabled?: string;
  hasText?: boolean;
  theme: DefaultTheme;
}

const TextComponent = styled.Text<FontProps>`
  font-size: ${({fontSizeType, theme}: FontProps) =>
    theme.fontSizeType[fontSizeType]};
  font-weight: ${({fontWeight, theme}: FontProps) =>
    theme.fontWeights[fontWeight]};
  color: ${({color, theme}: FontProps) => theme.colors[color]};
  text-align: ${props => props.textAlign || 'center'};
`;

const ImageIcon = styled.Image<ImageProps>`
  width: ${({width}) => width || '50px'};
  height: ${({height}) => height || '50px'};
  ${({loading}) =>
    loading &&
    css`
      display: none;
    `}
`;

const Input = styled.TextInput`
  margin-top: 15px;
  padding: 15px 0 15px 10px;
  background-color: ${({theme}: StylesProps) => theme.colors.greyBGInput};
  width: ${({width}: StylesProps) => width || '100%'};
  border-radius: ${({borderRadius}: StylesProps) => borderRadius || '5px'};
  border: ${({theme, borderColor, hasText}: StylesProps) =>
    `1px solid ${(hasText && theme.colors[borderColor]) || theme.colors.grey}`};

  opacity: ${({hasText}) => (hasText ? '1' : '0.7')};
`;

const CustomButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 15px 0;
  width: ${({width}: StylesProps) => width || '85%'};
  background-color: ${({backgroundColor, theme}: StylesProps) =>
    theme.colors[backgroundColor]};
  border-radius: ${({borderRadius}: StylesProps) => borderRadius || '8px'};
  border: ${({theme, borderColor}: StylesProps) =>
    `1px solid ${theme.colors[borderColor] || theme.colors.blueGray}`};

  opacity: ${({disabled}) => (disabled ? '0.4' : '1')};
`;

export {TextComponent, ImageIcon, Input, CustomButton};

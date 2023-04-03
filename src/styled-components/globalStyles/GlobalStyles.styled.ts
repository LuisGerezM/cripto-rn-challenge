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
  padding-left: 10px;
  background-color: ${({theme}: StylesProps) => theme.colors.greyBGInput};
  width: ${({width}: StylesProps) => width || '100%'};
  border-radius: ${({borderRadius}: StylesProps) => borderRadius || '8px'};
  border: ${({theme, borderColor}: StylesProps) =>
    `1px solid ${theme.colors[borderColor] || theme.colors.grey}`};
`;

const CustomButton = styled.TouchableOpacity`
  padding: 10px;
  margin: 15px 0;
  width: ${({width}: StylesProps) => width || '85%'};
  background-color: ${({backgroundColor, theme, disabled}: StylesProps) =>
    (disabled && 'gray') ||
    theme.colors[backgroundColor] ||
    theme.colors.blueGray};
  border-radius: ${({borderRadius}: StylesProps) => borderRadius || '8px'};
  border: ${({theme, borderColor}: StylesProps) =>
    `1px solid ${theme.colors[borderColor] || theme.colors.blueGray}`};
`;

export {TextComponent, ImageIcon, Input, CustomButton};

import styled, {css, DefaultTheme} from 'styled-components/native';

export interface StylesProps {
  color: string;
  loading?: boolean;
  fontSizeType: string;
  fontWeight: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  padding?: string;
  textAlign?: string;
  theme: DefaultTheme;
}

const TextComponent = styled.Text<StylesProps>`
  font-size: ${({fontSizeType, theme}: StylesProps) =>
    theme.fontSizeType[fontSizeType]};
  font-weight: ${({fontWeight, theme}: StylesProps) =>
    theme.fontWeights[fontWeight]};
  color: ${({color, theme}: StylesProps) => theme.colors[color]};
  text-align: ${props => props.textAlign || 'center'};
`;

const ImageIcon = styled.Image<StylesProps>`
  width: ${({width}) => width || '50px'};
  height: ${({height}) => height || '50px'};
  ${({loading}) =>
    loading &&
    css`
      display: none;
    `}
`;

export {TextComponent, ImageIcon};

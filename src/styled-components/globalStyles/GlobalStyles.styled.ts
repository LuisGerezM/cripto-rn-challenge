import styled, {css} from 'styled-components/native';

export interface StylesProps {
  color?: string;
  loading?: boolean;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  padding?: string;
  textAlign?: string;
}

const TextComponent = styled.Text<StylesProps>`
  font-size: ${props => props.theme.fontSizes[props.fontSize]};
  font-weight: ${props => props.theme.fontWeights[props.fontWeight]};
  color: ${props => props.theme.colors[props.color]};
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

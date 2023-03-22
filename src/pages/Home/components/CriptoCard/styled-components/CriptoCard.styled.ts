import styled from 'styled-components/native';

const Cripto = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const WrapNameAndIconCripto = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const WrapPriceAndPercentCripto = styled.View`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
`;

const WrapStatusPercent = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export {
  Cripto,
  WrapNameAndIconCripto,
  WrapPriceAndPercentCripto,
  WrapStatusPercent,
};

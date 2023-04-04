import styled from 'styled-components/native';

const Card = styled.View`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
`;

const WrapNameAndIconCrypto = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
`;

const WrapNameAndSymbol = styled.View`
  margin-left: 8px;
`;

const WrapPriceAndPercentCrypto = styled.View`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const WrapStatusPercent = styled.View`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

export {
  Card,
  WrapNameAndIconCrypto,
  WrapPriceAndPercentCrypto,
  WrapStatusPercent,
  WrapNameAndSymbol,
};

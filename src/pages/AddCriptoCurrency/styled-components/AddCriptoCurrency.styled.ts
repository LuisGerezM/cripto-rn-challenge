import styled from 'styled-components/native';

const WrapAddCripto = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const WrapButtonBack = styled.View`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 85%;
  height: 200px;
  padding-top: 20px;
`;

const WrapForm = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 85%;

  height: 400px;
  padding-top: 20px;
`;

type WrapAddButton = {
  isLoading: string;
};

const WrapAddButton = styled.View<WrapAddButton>`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: ${({isLoading}) =>
    isLoading ? 'space-between' : 'flex-end'};
  width: 100%;
`;

export {WrapAddCripto, WrapButtonBack, WrapForm, WrapAddButton};

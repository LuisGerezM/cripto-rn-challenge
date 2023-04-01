import styled from 'styled-components/native';

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

export {WrapForm, WrapAddButton};

import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MessageAsAlert from 'src/components/Alert/MessageAsAlert';
import ButtonToNavigate from 'src/components/Buttons/ButtonToNavigate/ButtonToNavigate';
import {SpinnerLoader} from 'src/components/Spinner/SpinnerLoader';
import {routes} from 'src/models/routes.models';
import CriptoCard from 'src/pages/Home/components/CriptoCard/CriptoCard';
import styled from 'styled-components/native';
import {useCriptoList} from '../../hooks/useCriptoList';

const WrapCriptoList = styled.ScrollView`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

const CriptoList = (): JSX.Element => {
  const {lodingPersonalCriptos, criptoData, errorMessage} = useCriptoList();

  if (lodingPersonalCriptos) {
    return <SpinnerLoader text="Cargando..." />;
  }

  return (
    <WrapCriptoList>
      {!criptoData.length ? (
        <MessageAsAlert
          text={errorMessage || 'Aún no tienes criptomonedas'}
          fontSize="subTitle"
        />
      ) : (
        criptoData.map(cripto => (
          <CriptoCard key={cripto.symbol} cripto={cripto} />
        ))
      )}
      <ButtonToNavigate
        text="Add a Criptocurency"
        to={routes.ADD_CRIPTO_CURRENCY}>
        <MaterialIcons name="add" size={20} />
      </ButtonToNavigate>
    </WrapCriptoList>
  );
};
export default CriptoList;

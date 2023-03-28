import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {mockCriptosData} from 'src/bd-mock/criptoData.mock';
import MessageAsAlert from 'src/components/Alert/MessageAsAlert';
import ButtonToNavigate from 'src/components/Buttons/ButtonToNavigate/ButtonToNavigate';
import {routes} from 'src/models/routes.models';
import CriptoCard from 'src/pages/Home/components/CriptoCard/CriptoCard';
import {criptoSchema} from 'src/schema/cripto.schema';
import styled from 'styled-components/native';

const WrapCriptoList = styled.ScrollView`
  width: 100%;
  padding: 0 15px;
  margin-top: 15px;
`;

const CriptoList = (): JSX.Element => {
  return (
    <WrapCriptoList>
      {!mockCriptosData.length ? (
        <MessageAsAlert text={criptoSchema.dontCripto} fontSize="subTitle" />
      ) : (
        mockCriptosData.map(cripto => (
          <CriptoCard key={cripto.symbol} cripto={cripto} />
        ))
      )}
      <ButtonToNavigate
        text="Add a Criptocurency"
        to={routes.ADDCRIPTOCURRENCY}>
        <MaterialIcons name="add" size={20} />
      </ButtonToNavigate>
    </WrapCriptoList>
  );
};
export default CriptoList;

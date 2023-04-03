import React from 'react';
import {ScrollView} from 'react-native';
import {ButtonToNavigate} from 'src/components';
import {routes} from 'src/models';
import {Form} from './components';
import AllCryptoList from './components/AllCryptosList';
import {
  WrapAddCripto,
  WrapButtonBack,
} from './styled-components/AddCriptoCurrency.styled';

const AddCriptoCurrency = (): JSX.Element => {
  return (
    <ScrollView>
      <WrapAddCripto>
        <WrapButtonBack>
          <ButtonToNavigate text="< Back to list" to={routes.HOME} />
        </WrapButtonBack>
        <Form />
        <AllCryptoList />
      </WrapAddCripto>
    </ScrollView>
  );
};
export default AddCriptoCurrency;

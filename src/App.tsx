/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ThemeProvider} from 'styled-components/native';
import {routes} from './models/routes.models';
import {defaultTheme} from './styled-components/theme/theme.styled';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import AddCriptoCurrency from './pages/AddCriptoCurrency/AddCriptoCurrency';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        {/* <Stack.Navigator initialRouteName={routes.HOME}> */}
        <Stack.Navigator initialRouteName={routes.ADD_CRIPTO_CURRENCY}>
          <Stack.Screen
            name={routes.HOME}
            component={Home}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name={routes.ADD_CRIPTO_CURRENCY}
            component={AddCriptoCurrency}
            options={{
              headerBackTitleVisible: false,
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;

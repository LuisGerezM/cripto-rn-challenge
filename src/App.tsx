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
import {routes} from './models';
import {Header} from './components';
import {defaultTheme} from './styled-components/theme/theme.styled';
import {AddCryptoCurrency, Home} from './pages';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={routes.HOME}>
          <Stack.Screen
            name={routes.HOME}
            component={Home}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name={routes.ADD_CRYPTO_CURRENCY}
            component={AddCryptoCurrency}
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

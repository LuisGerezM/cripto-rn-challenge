/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from 'styled-components/native';
import {Header, SpinnerLoader} from './components';
import {routes} from './models';
import {AddCryptoCurrency, Home} from './pages';
import {store} from './redux/store';
import {defaultTheme} from './styled-components/theme/theme.styled';

const Stack = createNativeStackNavigator();

const persistor = persistStore(store);

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <PersistGate
        loading={
          <View>
            <SpinnerLoader />
          </View>
        }
        persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
};

export default App;

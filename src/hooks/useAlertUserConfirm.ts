import {Alert} from 'react-native';

export interface AlertUserConfirm {
  title: string;
  message: string;
}

export const useAlertUserConfirm = () => {
  const showAlertUserConfirm = async ({title, message}: AlertUserConfirm) =>
    new Promise(resolve => {
      Alert.alert(title, message, [
        {
          text: 'aceptar',
          onPress: () => {
            resolve(true);
          },
        },
        {text: 'Cancelar', onPress: () => resolve(false)},
      ]);
    });

  return {showAlertUserConfirm};
};

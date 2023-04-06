import {Alert} from 'react-native';

export interface AlertUserFeedback {
  title: string;
  message: string;
}

export const useAlertUserFeedback = () => {
  const showAlertUserFeedback = ({title, message}: AlertUserFeedback) =>
    Alert.alert(title, message, [{text: 'Ok', onPress: () => true}]);

  return {showAlertUserFeedback};
};

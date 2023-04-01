import {messageByHttpCode} from 'src/schema';

interface ErrorType {
  error: string | {};
  errorObj: string | {[key: string]: string} | {[key: string]: number};
  error_code: number;
  error_message: string;
}

export const errorType = (error: ErrorType, showAlertUserFeedback: any) => {
  let errorObj: ErrorType = error;

  const messageError: string = errorObj?.error_code
    ? `${errorObj.error_code} - ${errorObj.error_message}.
  ${messageByHttpCode[errorObj.error_code] || 500}`
    : 'There is been a problem; Try again later';

  showAlertUserFeedback({
    title: 'Error',
    message: messageError,
  });
};

interface MessagesByHttpCode {
  404?: string;
}

const messagesByHttpCode: MessagesByHttpCode = {
  404: "We can't find the resource",
};

interface ErrorType {
  error: string | {};
  errorObj: string | {};
  error_code: number;
  error_message: string;
}

export const errorType = (error: ErrorType, showAlertUserFeedback: any) => {
  console.log(error, typeof error);

  let errorObj: ErrorType = error;

  if (typeof error === 'string') {
    console.log('aqui pase');
    errorObj = JSON.parse(errorObj);
  }
  console.log(errorObj, typeof errorObj, errorObj.error_code);

  const messageError: string = errorObj?.error_code
    ? `${errorObj.error_code} - ${errorObj.error_message}.
${messagesByHttpCode[errorObj.error_code] || ''}`
    : 'There is been a problem; Try again later';

  showAlertUserFeedback({
    title: 'Error',
    message: messageError,
  });
};

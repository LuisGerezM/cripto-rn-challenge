interface MessageByHttpCode {
  [key: number]: string;
}

const messageByHttpCode: MessageByHttpCode = {
  400: 'Check param value for field id',
  401: 'Authentication fail',
  403: 'Authorization fail',
  404: "We can't find the resource",
  429: 'You must wait a few minutes',
  500: 'There is been a problem; Try again later',
};

export default messageByHttpCode;

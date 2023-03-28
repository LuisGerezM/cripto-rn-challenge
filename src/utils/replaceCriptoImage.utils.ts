import {API_CRIPTO_IMAGE_URL} from '@env';

export const replaceCriptoImage = (id: string) =>
  API_CRIPTO_IMAGE_URL.replace('ID_CRIPTO', id);

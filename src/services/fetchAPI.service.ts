export interface ApiFetchInterface {
  url: string;
  method?: string;
  body?: string;
  headers?: {};
  signal?: AbortSignal;
}

export default async function fetchAPI({
  url,
  method = 'GET',
  body = '',
  headers,
  signal,
}: ApiFetchInterface) {
  const response = await fetch(url, {
    signal,
    method,
    body,
    headers,
  });

  return response.json();
}

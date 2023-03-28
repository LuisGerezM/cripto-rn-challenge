import {useState} from 'react';

export const useImageLoading = () => {
  const [loadImg, setLoadImg] = useState<boolean>(true);

  const handleLoadingImg = (value: boolean) => setLoadImg(value);

  return {loadImg, handleLoadingImg};
};

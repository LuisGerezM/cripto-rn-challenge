import {useImageLoading} from './useImageLoading';

export const useCryptoCard = () => {
  const {loadImg, handleLoadingImg} = useImageLoading();

  const sourceByPercent = (percent: number) =>
    percent > 0
      ? require('src/assets/icons/arrowRightTop-24.png')
      : require('src/assets/icons/arrayLeftBottom-24.png');

  const convertNegativeNum = (num: number): number =>
    num > 0 ? num : Math.abs(num);

  return {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum};
};

import {useImageLoading} from 'src/hooks/useImageLoading';

export const useCriptoCard = () => {
  const {loadImg, handleLoadingImg} = useImageLoading();

  const sourceByPercent = (percent: number) =>
    percent > 0
      ? require('../../../assets/icons/arrowRightTop-24.png')
      : require('../../../assets/icons/arrayLeftBottom-24.png');

  const convertNegativeNum = (num: number): number =>
    num > 0 ? num : Math.abs(num);

  return {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum};
};

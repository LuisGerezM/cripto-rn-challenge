import {useSpinnerLoading} from 'src/hooks/useSpinnerLoading';

export const useCryptoCard = () => {
  const {loadImg, handleLoadingImg} = useSpinnerLoading();

  const sourceByPercent = (percent: number) =>
    percent > 0
      ? require('../../../assets/icons/arrowRightTop-24.png')
      : require('../../../assets/icons/arrayLeftBottom-24.png');

  const convertNegativeNum = (num: number): number =>
    num > 0 ? num : Math.abs(num);

  return {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum};
};
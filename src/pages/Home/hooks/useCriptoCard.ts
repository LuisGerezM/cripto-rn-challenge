import {useSpinnerLoading} from 'src/hooks/useSpinnerLoading';

export const useCriptoCard = () => {
  const {loadImg, handleLoadingImg} = useSpinnerLoading();

  const sourceByPercent = (percent: number) =>
    percent > 0
      ? require('../../../assets/icons/arrowRigthTop-24.png')
      : require('../../../assets/icons/arrayLeftBottom-24.png');

  const convertNegativeNum = (num: number): number =>
    num > 0 ? num : num * -1;

  return {loadImg, handleLoadingImg, sourceByPercent, convertNegativeNum};
};

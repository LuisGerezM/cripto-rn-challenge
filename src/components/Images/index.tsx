import React from 'react';
import {ImageIcon} from 'src/styled-components/globalStyles/GlobalStyles.styled';

interface Image {
  src?: string | {uri: string};
  width?: string;
  height?: string;
  loadImg?: boolean;
  handleLoadingImg: (value: boolean) => void;
}

const ImageComponent = ({
  src,
  width,
  height,
  loadImg,
  handleLoadingImg,
}: Image): JSX.Element => {
  return (
    <>
      <ImageIcon
        source={src}
        onLoad={() => handleLoadingImg(false)}
        loading={loadImg}
        width={width}
        height={height}
      />
    </>
  );
};
export default ImageComponent;

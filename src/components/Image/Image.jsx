import React from "react";

const Image = ({ src, alt, imgClassName, figureClassName, style }) => {
  return (
    <figure className={figureClassName} style={style}>
      <img src={src} alt={alt} className={imgClassName} />
    </figure>
  );
};

export default Image;

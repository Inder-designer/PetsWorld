import React, { useState } from "react";

const ImgPreview = ({ file }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };

  return (
    <div>
      <img src={preview} alt="preview" width="120px" height="120px" />
    </div>
  );
};

export default ImgPreview;

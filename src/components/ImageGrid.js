import React from "react";
import "./ImageGrid.css";

function ImageGrid() {
  const images = Array.from(
    { length: 35 },
    (_, index) => `/images/img${index + 1}.jpg`
  );

  return (
    <div className="container-fluid px-4 my-5">
      <div className="gallery-grid">
        {images.map((img, i) => (
          <img key={i} src={img} alt={`img-${i}`} className="gallery-img" />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;

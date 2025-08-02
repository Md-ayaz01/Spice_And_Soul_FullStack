'use client';

import React from 'react';

const images = [
  "https://tse1.explicit.bing.net/th/id/OIP.F48Ta-u-I74gaRY18l_8sAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://tse2.mm.bing.net/th/id/OIP.ez26De4eUA5DkN5cCdrk8QHaJ4?pid=ImgDet&w=202&h=269&c=7&dpr=2&o=7&rm=3",
  "https://tse4.mm.bing.net/th/id/OIP.TQ5mG5SzC5lBEqUDfsC23wHaE6?rs=1&pid=ImgDetMain&o=7&rm=3",
];

const Gallery = () => (
  <section className="gallery text-center my-5">
    <h2 className="fw-bold mb-3">Explore Our Gallery</h2>
    <p className="text-muted mb-4">
      A glimpse into the ambience, our delicious dishes, and the memories made at Spice & Soul.
    </p>
    <div className="gallery-grid d-flex justify-content-center flex-wrap gap-4">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Gallery ${index}`}
          className="gallery-img rounded shadow"
          style={{ maxWidth: '300px', height: 'auto' }}
        />
      ))}
    </div>
  </section>
);

export default Gallery;

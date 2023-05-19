import React from "react";

const PhotoGallerys = () => {
  const images = [
    "https://i.ibb.co/r0RFRDD/01-Baby-Lion-offwhite-690x690.webp",
    "https://example.com/image2.jpg",
    "https://example.com/image3.jpg",
    // Add more image URLs here
  ];

  return (
    <section className="py-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-40 object-fill"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallerys;

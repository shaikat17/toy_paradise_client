import React from 'react';

const PhotoGallery = () => {
  const photos = [
    { id: 1, src: 'https://i.ibb.co/hyNtVDJ/il-1140x-N-4549285087-1125.webp', title: 'Hoop William Cloth Baby Doll' },
    { id: 2, src: 'https://i.ibb.co/v4f9Vsj/il-1140x-N-4888460633-2x54.webp', title: 'Beret Hat for Fashion Royalty' },
    { id: 3, src: 'https://i.ibb.co/0ysJLhz/il-1140x-N-4942420865-9pg6.jpg', title: 'Teddiursa Pokemon Plushies' },
    { id: 3, src: 'https://i.ibb.co/xF75DTS/616k3-Rmy3-GL-AC-SL1500.jpg', title: 'Black & White Tuxedo Cat' },
  ];

  return (
    <>
    <h1 className='text-3xl text-center font-black mb-3 p-1'><span className='border-b-4 border-red-500'>Photo</span> <span className="border-b-4 border-[#56BC97]">Gallery</span></h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-3">
      {photos.map((photo) => (
        <div key={photo.id} className="relative">
          <img src={photo.src} alt={photo.title} className="w-full h-auto" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg">{photo.title}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PhotoGallery;

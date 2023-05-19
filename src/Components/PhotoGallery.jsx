import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const PhotoGallery = () => {
  const images = [
    {
      original: "https://i.ibb.co/r0RFRDD/01-Baby-Lion-offwhite-690x690.webp",
      thumbnail: "https://i.ibb.co/r0RFRDD/01-Baby-Lion-offwhite-690x690.webp",
    },
    {
      original:
        "https://i.ibb.co/fdx0Bb4/yvnny3wzptlg2ljqvzi3-a516cbba-ce55-42e6-af70-02853bcc31c4.jpg",
      thumbnail:
        "https://i.ibb.co/fdx0Bb4/yvnny3wzptlg2ljqvzi3-a516cbba-ce55-42e6-af70-02853bcc31c4.jpg",
    },
    {
      original: "https://i.ibb.co/HKXbnj7/61h-Dnwr5z9-L-AC-SL1020.jpg",
      thumbnail: "https://i.ibb.co/HKXbnj7/61h-Dnwr5z9-L-AC-SL1020.jpg",
    },
    {
      original: "https://i.ibb.co/st8MrxF/51-P73-OWOLk-L-AC-SL1000.jpg",
      thumbnail: "https://i.ibb.co/st8MrxF/51-P73-OWOLk-L-AC-SL1000.jpg",
    },
    {
      original: "https://i.ibb.co/RvwHs1p/716x86-SDXDL-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/RvwHs1p/716x86-SDXDL-AC-SL1500.jpg",
    },
    {
      original: "https://i.ibb.co/DQzZbnB/61-Zvnbbbfd-L-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/DQzZbnB/61-Zvnbbbfd-L-AC-SL1500.jpg",
    },
    {
      original: "https://i.ibb.co/q5XNyz0/71kkh-S-jt-EL-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/q5XNyz0/71kkh-S-jt-EL-AC-SL1500.jpg",
    },
    {
      original: "https://i.ibb.co/8PMyRC5/61f-AXij-ISCL-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/8PMyRC5/61f-AXij-ISCL-AC-SL1500.jpg",
    },
    {
      original: "https://i.ibb.co/6bj639d/71c3j-MIiz-NL-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/6bj639d/71c3j-MIiz-NL-AC-SL1500.jpg",
    },
    {
      original: "https://i.ibb.co/ZNPqRRK/61z-FECx-Dt4-L-AC-SL1500.jpg",
      thumbnail: "https://i.ibb.co/ZNPqRRK/61z-FECx-Dt4-L-AC-SL1500.jpg",
    },
  ];

  return (
    <div className="overflow-hidden flex flex-col items-center mx-auto p-3 mt-5 mb-20">
      <h1 className="mb-5 text-3xl font-black">
        <span className="border-b-4 border-[#56BC97]">
          Choose Best From the Best Collection
        </span>
      </h1>
      <ImageGallery items={images} showBullets={true} autoPlay={true} />
    </div>
  );
};

export default PhotoGallery;

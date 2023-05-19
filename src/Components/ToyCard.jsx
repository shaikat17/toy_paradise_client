import React from 'react';

const ToyCard = ({ toy }) => {
    return (
        <div className="card h-[520px] bg-base-100 shadow-xl">
  <figure className='h-1/2'><img className='h-full' src={toy?.toyPhotoUrl} alt="Shoes" /></figure>
  <div className="card-body h-1/2">
    <h2 className="card-title border-b-2 border-green-400 pb-2">{toy?.toyName}</h2>
    <div className='grid grid-cols-2 w-full place-content-between gap-2'><p className='flex gap-2 items-center font-light'><span className='bg-[#D2EBF0] p-1 rounded font-normal w-20'>Category: </span>{toy?.category}</p>
    <p className='flex gap-2 items-center font-light'><span className='bg-[#D2EBF0] p-1 rounded font-normal w-20'>Price: </span>{toy?.toyPrice}</p>
    <p className='flex gap-2 items-center font-light'><span className='bg-[#D2EBF0] p-1 rounded font-normal w-20'>Quantity: </span>{toy?.quantity}</p>
    <p className='flex gap-2 items-center font-light'><span className='bg-[#D2EBF0] p-1 rounded font-normal w-20'>Seller: </span>{toy?.userName}</p>
    </div>
    <div className="card-actions justify-end mt-4">
      <button className="btn border-none bg-[#56BC97]">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ToyCard;
import { Rating } from "@smastrom/react-rating";

const HomeProductCard = ({ toyPhotoUrl, toyName, toyPrice, toyRating }) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-[350px]">
      <div className="h-2/5 pt-2">
          <img src={toyPhotoUrl} alt={toyName} className="h-full mx-auto" />
      </div>
      <div className="p-4 h-3/5 space-y-4">
        <h3 className="text-xl font-medium mb-2">{toyName}</h3>
        <div className="text-sm mb-2">
                    <span className="rounded bg-[#56BC97] p-1 mr-2">
                      Price:
                    </span>
                    {toyPrice} Taka
                  </div>
        <div className="flex items-center mb-2">
        <Rating
                    style={{ maxWidth: 100 }}
                    value={Number(toyRating)}
                  />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HomeProductCard;

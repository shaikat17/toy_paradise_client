import { Rating } from "@smastrom/react-rating";
import { NavLink } from "react-router-dom";

const HomeProductCard = ({ _id, toyPhotoUrl, toyName, toyPrice, toyRating }) => {
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
       <div>
       <NavLink className="bg-[#56BC97] p-2 rounded text-white" to={`/toy-details/${_id}`}>
                  View Details 
                </NavLink>
       </div>
      </div>
    </div>
  );
};

export default HomeProductCard;

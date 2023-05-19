import { Rating } from "@smastrom/react-rating";
import { NavLink, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context/AppAuthContext";
import Swal from "sweetalert2";

const HomeProductCard = ({
  _id,
  toyPhotoUrl,
  toyName,
  toyPrice,
  toyRating,
}) => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  const handleView = (id) => {
    // to={`/toy-details/${_id}`}
    // console.log(id);
    if (user) {
      navigate(`/toy-details/${_id}`);
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Opps!! You have to log in first to view details.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className="shadow-lg rounded-lg overflow-hidden h-[350px]">
      <div className="h-2/5 pt-2">
        <img src={toyPhotoUrl} alt={toyName} className="h-full mx-auto" />
      </div>
      <div className="p-4 h-3/5 space-y-4">
        <h3 className="text-xl font-medium mb-2">{toyName}</h3>
        <div className="text-sm mb-2">
          <span className="rounded bg-[#56BC97] p-1 mr-2">Price:</span>
          {toyPrice} Taka
        </div>
        <div className="flex items-center mb-2">
          <Rating style={{ maxWidth: 100 }} value={Number(toyRating)} />
        </div>
        <div>
          <button
            className="bg-[#56BC97] p-2 rounded text-white"
            onClick={() => handleView(_id)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeProductCard;

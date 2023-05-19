import { useEffect, useState } from "react";
import ToyCard from "../Components/ToyCard";
import { useGlobalContext } from "../context/AppAuthContext";
import { ColorRing } from "react-loader-spinner";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import Swal from "sweetalert2";
import { changeTitle } from "../utils/dynamicTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  const { dataLoading, setDataLoading } = useGlobalContext();

  const navigate = useNavigate();
  const { user } = useGlobalContext();

  useEffect(() => {
    setDataLoading(true);
    fetch("https://toy-paradise-server.vercel.app/all-toys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setDataLoading(false);
      });
  }, []);

  const handleView = (id) => {
    // to={`/toy-details/${_id}`}
    // console.log(id);
    if (user) {
      navigate(`/toy-details/${id}`);
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

  // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  if (dataLoading) {
    // console.log("priv", loading);
    return (
      <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }

  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th>Doll Image & Name</th>
          <th>Ratings</th>
          <th>Price & Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        {toys.map((toy) => {
          return (
            <tr key={toy._id}>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-square w-14 h-14">
                      <img src={toy?.toyPhotoUrl} alt={toy?.toyName} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{toy?.toyName}</div>
                    <div className="text-sm my-1 space-x-2">
                      <span className="rounded bg-[#56BC97] p-1">
                        {toy?.category}
                      </span>
                      <span className="rounded bg-[#56BC97] p-1">Seller:</span>{" "}
                      {toy?.userName}
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <Rating
                  style={{ maxWidth: 150 }}
                  value={Number(toy?.toyRating)}
                />
              </td>
              <td>
                <div className="text-sm mb-2">
                  <span className="rounded bg-[#56BC97] p-1 mr-2">Price:</span>
                  {toy?.toyPrice} Taka
                </div>
                <div className="text-sm mt-2">
                  <span className="rounded bg-[#56BC97] p-1 mr-2">
                    Quantity:
                  </span>
                  {toy?.quantity}
                </div>
              </td>
              <th className="space-x-5 flex">
                <button
                  className="bg-[#56BC97] p-2 rounded text-white"
                  onClick={() => handleView(toy?._id)}
                >
                  View Details
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllToys;

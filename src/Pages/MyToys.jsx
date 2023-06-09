import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useGlobalContext } from "../context/AppAuthContext";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { ColorRing } from "react-loader-spinner";
import { changeTitle } from "../utils/dynamicTitle";

const MyToys = () => {
  const { user } = useGlobalContext();
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || user?.email
  );
  const [myToys, setMyToys] = useState([]);
  const [srtValue, setSrtValue] = useState("");

  const { dataLoading, setDataLoading } = useGlobalContext();

  // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  useEffect(() => {
    // console.log(userEmail)
    setDataLoading(true);
    fetch(
      `https://toy-paradise-server.vercel.app/user-toys/?email=${userEmail}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setDataLoading(false);
      });
  }, []);

  const handleSort = (e) => {
    setSrtValue(e.target.value);
    setDataLoading(true);
    fetch(
      `https://toy-paradise-server.vercel.app/user-toys/?email=${userEmail}&sort=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setMyToys(data);
        setDataLoading(false);
      });
  };

  const deleteProduct = (id) => {
    // e.preventDefault()
    // console.log(id)

    Swal.fire({
      title: "Are you want to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setDataLoading(true);
        fetch(`https://toy-paradise-server.vercel.app/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setMyToys((prev) => prev.filter((toy) => toy._id !== id));
              setDataLoading(false);
            }
          });
      }
    });
  };

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
    <div className="w-full">
      <h1 className="text-center text-4xl font-black my-3">
        My <span className="border-b-4 border-[#56BC97]">Toys</span>
      </h1>
      <div className="flex items-center space-x-4 my-3 p-2">
        <label htmlFor="option" className="font-bold">
          Sort Toys:
        </label>
        <select
          id="option"
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="category"
          value={srtValue}
          onChange={handleSort}
          required
        >
          <option value="">Sort Toys with Price</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>
      <div className="overflow-x-auto">
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
          {!myToys.length > 0 && (
            <tr>
              <td className="text-2xl text-center font-black my-5">
                No Data Found
              </td>
            </tr>
          )}
          {/* row 1 */}
          {myToys.map((toy) => {
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
                      <div className="text-sm my-1">
                        <span className="rounded bg-[#56BC97] p-1">
                          {toy?.category}
                        </span>
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
                    <span className="rounded bg-[#56BC97] p-1 mr-2">
                      Price:
                    </span>
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
                  <NavLink to={`/edit-toy/${toy._id}`}>
                    <FaPencilAlt color="#56BC97" size={"1.5rem"} />
                  </NavLink>
                  <button onClick={() => deleteProduct(toy._id)}>
                    <FaTrash color="#56BC97" size={"1.5rem"} />
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default MyToys;

import React, { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import { useGlobalContext } from "../context/AppAuthContext";
import { FaPencilAlt, FaTrash } from "react-icons/fa";

const MyToys = () => {
  const { user } = useGlobalContext();
  const [userEmail, setUserEmail] = useState(
    localStorage.getItem("userEmail") || user?.email
  );
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/user-toys/?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);
  return (
    <div className="overflow-x-auto w-full">
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
                <th className="space-x-5">
                  <button><FaPencilAlt color="#56BC97" size={"1.5rem"} /></button>
                  <button><FaTrash color="#56BC97" size={"1.5rem"} /></button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

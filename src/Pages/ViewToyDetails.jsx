import React, { useEffect, useState } from "react";
import { ScrollRestoration, useLocation, useParams } from "react-router-dom";
import { useGlobalContext } from "../context/AppAuthContext";
import { Rating } from "@smastrom/react-rating";
import { ColorRing } from "react-loader-spinner";
import { changeTitle } from "../utils/dynamicTitle";

const ViewToyDetails = () => {
  const [toy, setToy] = useState({});
  const { id } = useParams();
  const { dataLoading, setDataLoading } = useGlobalContext();

  // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  const getToy = () => {
    setDataLoading(true);
    fetch(`https://toy-paradise-server.vercel.app/single-toy/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setToy(data);
        setDataLoading(false);
      });
  };

  useEffect(() => {
    getToy();
  }, []);

  return (
    <>
      <h1 className="text-center text-3xl font-black py-3">
        <span className="border-b-4 border-[#56BC97]">Toy</span> Details
      </h1>
      { dataLoading ? <div className="flex items-center justify-center">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          </div> : <div className="card lg:card-side bg-base-100 shadow-xl items-center mb-4">
        <div className="w-full md:w-2/5 p-4">
          <img className="w-80" src={toy?.toyPhotoUrl} alt={toy?.toyName} />
        </div>
        <div className="card-body w-full md:w-3/5 ">
          <h2 className="card-title text-2xl font-bold">
            <span className="border-b-4 border-[#56BC97]">Name:</span>{" "}
            {toy?.toyName}
          </h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              Ratings:
              <Rating
                style={{ maxWidth: 150 }}
                value={Number(toy?.toyRating)}
              />
            </div>
            <div className="flex items-center gap-3">
            <p><span className="rounded bg-[#56BC97] p-1 mr-2">
                Category:
              </span>
              {toy?.category}</p>
              <p><span className="rounded bg-[#56BC97] p-1 mr-2 ">
                Seller:
              </span>
              {toy?.userName}</p>
            </div>
            <div className="flex items-center gap-3">
            <p><span className="rounded bg-[#56BC97] p-1 mr-2 ">
                Price:
              </span>
              {toy?.toyPrice}</p>
              <p><span className="rounded bg-[#56BC97] p-1 mr-2 ">
                Quantity:
              </span>
              {toy?.quantity}</p>
            </div>
            <div>
            <p><span className="rounded bg-[#56BC97] p-1 mr-2 ">
                Seller Email:
              </span>
              {toy?.userEmail}</p>
            </div>
            <div>
            <span className="rounded bg-[#56BC97] p-1 mr-2 ">
                Description:
              </span> {toy?.description}
            </div>
            </div>
        </div>
      </div>}
      <ScrollRestoration />
    </>
  );
};

export default ViewToyDetails;

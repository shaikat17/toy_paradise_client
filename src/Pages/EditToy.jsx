import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const EditToy = () => {
  const [toy, setToy] = useState({});
  const { id } = useParams();

  const getToy = () => {
    fetch(`http://localhost:3000/single-toy/${id}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }

  useEffect(() => {
    getToy()
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;

    const quantity = form.quantity.value;
    const toyPrice = form.toyPrice.value;
    const description = form.description.value;

    const data = { toyPrice, quantity, description };

    console.log(data);

    fetch(`http://localhost:3000/edit-toy/${toy._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          getToy();
        }
      });

    form.reset();
  };
  return (
    <section className="p-5 mb-14">
      <h1>Edit {toy?.toyName}</h1>
      <form onSubmit={handleForm}>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-3">
          <input
            className="border-b-2 border-[#56BC97] w-full max-w-xs px-2 py-3"
            type="text"
            name="toyPrice"
            placeholder="Toy Price"
            defaultValue={toy?.toyPrice}
          />
          <input
            className="border-b-2 border-[#56BC97] w-full max-w-xs px-2 py-3"
            type="text"
            name="quantity"
            placeholder="Toy Quantity"
            defaultValue={toy?.quantity}
          />
          <textarea
            className="border-b-2 border-[#56BC97] w-full max-w-xs px-2 py-3"
            name="description"
            rows="6"
            defaultValue={toy?.description}
          ></textarea>
        </div>
        <button className="float-right bg-[#56BC97] p-2 mt-5 mr-10 text-white rounded">
          Update
        </button>
      </form>
    </section>
  );
};

export default EditToy;

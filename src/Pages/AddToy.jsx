import Swal from "sweetalert2";
import { useGlobalContext } from "../context/AppAuthContext";
import { useLocation } from "react-router-dom";
import { changeTitle } from "../utils/dynamicTitle";

const AddToy = () => {
  const { user } = useGlobalContext()

  // title Change
  const { pathname } = useLocation();
  changeTitle(pathname);

  const formHandle = (e) => {
    e.preventDefault();
    const form = e.target;

    const toyPhotoUrl = form.toyPhotoUrl.value;
    const toyName = form.toyName.value;
    const userName = form.userName.value;
    const userEmail = form.userEmail.value;
    const category = form.category.value;
    const toyPrice = form.toyPrice.value;
    const toyRating = form.toyRating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    // save user email at localStorage
    localStorage.setItem("userEmail", userEmail)

    const data = {
      toyPhotoUrl,
      toyName,
      userName,
      userEmail,
      category,
      toyPrice,
      toyRating,
      quantity,
      description,
    };

    form.reset()

    fetch("https://toy-paradise-server.vercel.app/add-toy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Event Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Opps!! Something went wrong.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <section className="grid place-items-center my-3">
      <h1 className="text-4xl font-bold mb-5">
        Add a <span className="border-b-4 border-[#56BC97]">Toy</span>
      </h1>
      <form onSubmit={formHandle}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
          <input
            type="text"
            placeholder="Enter Toy Photo Url"
            name="toyPhotoUrl"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <input
            type="text"
            placeholder="Enter Toy Name"
            name="toyName"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <input
            type="text"
            placeholder="Your Name"
            name="userName"
            defaultValue={user?.displayName}
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <input
            type="text"
            placeholder="Enter Your Registered Email"
            name="userEmail"
            defaultValue={localStorage.getItem("userEmail") || user?.email}
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <div className="flex items-center space-x-4">
            <label htmlFor="option" className="font-bold">
              Select a Category:
            </label>
            <select
              id="option"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="category"
              required
            >
              <option value="">Choose a Category</option>
              <option value="Baby Doll">Baby Doll</option>
              <option value="Fashion Doll">Fashion Doll</option>
              <option value="Character Doll">Character Doll</option>
              <option value="Animal Doll">Animal Doll</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Enter Toy Price"
            name="toyPrice"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <input
            type="text"
            placeholder="Rating (1 to 5)"
            name="toyRating"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <input
            type="text"
            placeholder="Quantity"
            name="quantity"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs"
            required
          />
          <textarea
            placeholder="Description"
            className="border-b-2 px-3 py-2 border-x-2 rounded-md w-full max-w-xs text-black"
            name="description" rows="6"
            required
          ></textarea>
        </div>
        <button className="btn float-right mt-4">Submit</button>
      </form>
    </section>
  );
};

export default AddToy;

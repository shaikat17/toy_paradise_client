import { FaGlobe, FaLock, FaTags, FaUndo } from "react-icons/fa";

const FeatureSection = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 px-2 py-4 md:grid-cols-4 gap-6">
      <div className="hover:bg-[#D2EBF0] hover:transition-all hover:ease-in-out hover:duration-300 shadow-md p-6 rounded-lg flex flex-col items-center">
        <span>
          <FaGlobe size={"3rem"} color="#56BC97" />
        </span>
        <h3 className="text-lg font-semibold my-2">Worldwide Delivery</h3>
        <p className="text-gray-600 text-center">
          Shop with us from anywhere in the world. We offer fast and reliable
          worldwide delivery to bring joy to children everywhere.
        </p>
      </div>
      <div className="hover:bg-[#D2EBF0] hover:transition-all hover:ease-in-out hover:duration-300 shadow-md p-6 rounded-lg flex flex-col items-center">
        <FaLock size={"3rem"} color="#56BC97" />
        <h3 className="text-lg font-semibold my-2">Secure Payments</h3>
        <p className="text-gray-600 text-center">
          Your safety is our top priority. Enjoy peace of mind with our secure
          payment options, ensuring your personal information is always
          protected.
        </p>
      </div>
      <div className="hover:bg-[#D2EBF0] hover:transition-all hover:ease-in-out hover:duration-300 shadow-md p-6 rounded-lg flex flex-col items-center">
        <FaTags size={"3rem"} color="#56BC97" />
        <h3 className="text-lg font-semibold my-2">Attractive Prices</h3>
        <p className="text-gray-600 text-center">
          We offer competitive and attractive prices on our wide range of toys.
          Find the perfect toy for your child without breaking the bank.
        </p>
      </div>
      <div className="hover:bg-[#D2EBF0] hover:transition-all hover:ease-in-out hover:duration-300 shadow-md p-6 rounded-lg flex flex-col items-center">
        <FaUndo size={"3rem"} color="#56BC97" />
        <h3 className="text-lg font-semibold my-2">Simple Returns</h3>
        <p className="text-gray-600 text-center">
          Customer satisfaction is our priority. If you're not completely
          satisfied with your purchase, we make returns hassle-free and
          straightforward.
        </p>
      </div>
    </div>
  );
};

export default FeatureSection;

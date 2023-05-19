import heart from "../assets/icons/heart.png";
import footer from "../assets/footer.jpg";
import { Link } from "react-router-dom";
import { AiFillClockCircle, AiFillPhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import {
  FaEnvelope,
  FaCcVisa,
  FaCcStripe,
  FaCcMastercard,
  FaCcPaypal,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import bkash from "../assets/icons/bkashLogo.svg";
import nagad from "../assets/icons/nagadLogo.svg";
import rocket from "../assets/icons/rocketLogo.svg";

const Footer = () => {
  return (
    <section
      className="h-fit bg-cover bg-no-repeat pt-20 pb-10 px-2"
      style={{ backgroundImage: `url(${footer})` }}
    >
      <div className="flex flex-col items-center w-full">
        <img className="w-32" src={heart} alt="" />
        <div className="w-full flex flex-col items-center md:items-start md:justify-around md:flex-row gap-3">
          <div className="flex flex-col space-y-3">
            <h1 className="mb-5 font-black text-xl">Information</h1>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              About Us
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Contacts
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              FAQ
            </Link>
            <Link to="/blog" className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Blog
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="mb-5 font-black text-xl">Extras</h1>
            <Link to="/userdetails" className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              My Account
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Wishlist
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Order Tracking
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Terms & Conditions
            </Link>
            <Link className="hover:translate-x-2 hover:transition hover:ease-in-out hover:duration-300">
              Privacy Policy
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h1 className="mb-5 font-black text-xl">Contact Information</h1>
            <p className="flex items-center gap-2 mb-3">
              <AiFillClockCircle size={"1.2rem"} /> Mon. - Sun.: 09:00 - 18:30
            </p>
            <p className="flex items-center gap-2 mb-3">
              <MdLocationOn size={"1.5rem"} /> 164 7th Avenue, Seattle, WA 9801
            </p>
            <p className="flex items-center gap-2 mb-3">
              <AiFillPhone size={"1.5rem"} /> +1.888.292.7171
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope size={"1.2rem"} /> toy-paradise@mail.com
            </p>
          </div>
          <div className="flex flex-col p-3">
            <h1 className="mb-5 font-black text-xl">Payment Options</h1>
            <div className="flex flex-wrap gap-4 p-2">
              <FaCcVisa size={"2rem"} color="#F45050" />
              <FaCcStripe size={"2rem"} color="#F45050" />
              <FaCcMastercard size={"2rem"} color="#F45050" />
              <FaCcPaypal size={"2rem"} color="#F45050" />
              <img className="w-16" src={bkash} alt="bkash" />
              <img className="w-14" src={nagad} alt="nagad" />
              <img className="w-10" src={rocket} alt="rocket" />
            </div>
          </div>
        </div>
      </div>
     <div className="flex justify-between mt-48 pt-">
      <div className="flex text-white gap-3">
        <FaFacebook size={"1.5rem"} />
        <FaTwitter size={"1.5rem"} />
        <FaLinkedin size={"1.5rem"} />
        <FaInstagram size={"1.5rem"} />
      </div>
      <div className="text-base font-light text-white">© 2023 Toy Paradise</div>
     </div>
    </section>
  );
};

export default Footer;

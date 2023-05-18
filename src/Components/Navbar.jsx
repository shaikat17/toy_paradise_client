import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../context/AppAuthContext";

const Navbar = () => {
  const { logOut, user } = useGlobalContext();

  const handleSingOut = () => {
    logOut().then((res) => console.log("logout"));
    localStorage.removeItem('userEmail')
  };
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/all-toys"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  All Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/my-toys"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-toy"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  Add A Toy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  Blog
                </NavLink>
              </li>
              {user ? (
                <li>
                  <button
                    className="uppercase font-medium bg-transparent"
                    onClick={handleSingOut}
                  >
                    Log Out
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive
                        ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                        : "bg-transparent ml-2 uppercase font-medium"
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">Toy <span className="border-b-2 border-[#56BC97]">Paradise</span></NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                    : "bg-transparent ml-2 uppercase font-medium"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all-toys"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                    : "bg-transparent ml-2 uppercase font-medium"
                }
              >
                All Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/my-toys"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                    : "bg-transparent ml-2 uppercase font-medium"
                }
              >
                My Toys
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/add-toy"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                    : "bg-transparent ml-2 uppercase font-medium"
                }
              >
                Add A Toy
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                    : "bg-transparent ml-2 uppercase font-medium"
                }
              >
                Blog
              </NavLink>
            </li>
            {user ? (
              <li>
                <button
                  className="uppercase font-medium bg-transparent"
                  onClick={handleSingOut}
                >
                  Log Out
                </button>
              </li>
            ) : (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-transparent ml-2 uppercase text-[#56BC97] font-medium"
                      : "bg-transparent ml-2 uppercase font-medium"
                  }
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <NavLink to="/userdetails">
              <img
                className="h-14 w-14 rounded-full"
                src={user?.photoURL}
                alt={user?.displayName}
                title={user?.displayName}
              />
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

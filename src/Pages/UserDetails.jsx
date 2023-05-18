import React, { useState } from "react";
// import { toast } from 'react-toastify';
import { getAuth } from "firebase/auth";
import { useGlobalContext } from "../context/AppAuthContext";
import Swal from "sweetalert2";

function UserDetails() {
    const { updateUserProfile, setLoading, updateUserEmail } = useGlobalContext()

    const auth = getAuth()

    const user = auth.currentUser

    const [userName, setUserName] = useState(user?.displayName)
    const [userEmail, setUserEmail] = useState(user?.email)
    const [photoUrl, setPhotoUrl] = useState(user?.photoURL)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(userEmail)
        updateUserProfile( user, userName, photoUrl)
        .then(() => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Profile Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
            // toast.success('Profile Update Successful.')
            // console.log('updated')
            setLoading(false)
        })
        .catch(err => console.log(err))

        // save email to local storage
        localStorage.setItem('userEmail', userEmail)
        
    }
  return (
    <div className="shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-2/4">
      <div className="p-3">
        <div className="flex items-center mb-4">
          <img src={user.photoURL} alt="User" className="w-20 h-20 rounded-full mr-4" />
          <div>
            <h2 className="text-xl font-bold">{user.displayName}</h2>
            <p className="text-base">Software Engineer</p>
          </div>
        </div>
        <p className="text-base mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit, eros ut gravida blandit, erat neque consequat ipsum, sit amet facilisis augue mi vel nisl. Nam sed augue ac metus elementum tincidunt in vel ipsum.
        </p>
        <div className="flex items-center justify-between">
          <div>
            <p className=" font-bold text-sm">Email:</p>
            <p className=" text-base">{user.email}</p>
          </div>
          <div>
            <p className=" font-bold text-sm">Phone:</p>
            <p className=" text-base">+1 (555) 555-5555</p>
          </div>
        </div>
      </div>
      </div>
      <div className="p-3 md:w-2/4">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="user-name" className="block text-sm font-medium">
                User Name
              </label>
              <div className="mt-1">
                <input
                  id="user-name"
                  name="user-name"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-[#56BC97] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your user name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="userEmail" className="block text-sm font-medium">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="userEmail"
                  name="userEmail"
                  type="text"
                  required
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-[#56BC97] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your user name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="photo-url" className="block text-sm font-medium ">
                Photo URL
              </label>
              <div className="mt-1">
                <input
                  id="photo-url"
                  name="photo-url"
                  type="text"
                  autoComplete="given-name"
                  required
                  value={photoUrl}
                  onChange={(e) => setPhotoUrl(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-[#56BC97] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your photo url"
                />
              </div>
            </div>
    
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.293 6.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0L10 4.586l1.293-1.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0L10 9.414l-1.293 1.293a1 1 0 0 1-1.414 0L3.293 8.121z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                Update Details
              </button>
            </div>
          </form></div>
    </div>
  );
}

export default UserDetails;
import { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../context/AppAuthContext';
import { changeTitle } from '../utils/dynamicTitle';

const Register = () => {
    const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState('')

  const { createUser, logOut, updateUserProfile } = useGlobalContext()

  const navigate = useNavigate()
// title Change
const { pathname } = useLocation();
changeTitle(pathname);

  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    if (password.length < 6) {
      setError("Your Password should be more than or equal to 6 characters");
      return;
    }
    createUser(email, password)
    .then(result => {
      const loggedUser = result.user
      // console.log(loggedUser)
      localStorage.setItem('userEmail', email)
      updateUserProfile(loggedUser, userName, photoUrl)
      .then(updateResult => console.log(updateResult))
      .catch(err => console.log(err))
      logOut()
      navigate("/login")
    })
    .catch(err => console.log(err))
  };

  return (
    <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
      {error && <p className="text-red-600">{error}</p>}
        <h2 className={` mt-6 text-center text-3xl font-extrabold `}><span className='border-b-2 border-[#56BC97] capitalize'>Create an account</span></h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
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
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-[#56BC97]"
                  placeholder="Enter your user name"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email-address" className="block text-sm font-medium">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email-address"
                  name="email-address"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-[#56BC97] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div>
              <label htmlFor="photo-url" className="block text-sm font-medium">
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
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-[#56BC97] rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>
    
            <div className="flex items-center">
              <p>Already have an account?</p>{" "}
              <NavLink
                className="bg-[#56BC97] text-white ml-2 p-1 rounded"
                to="/login"
              >
                Login
              </NavLink>
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
                Create account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
    
};

export default Register;
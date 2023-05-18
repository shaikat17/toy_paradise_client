
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";


  const handleSubmit = (event) => {
    event.preventDefault();

    setError("");
    // console.log(`Email: ${email} Password: ${password}`);
    if (password.length < 6) {
      setError("Your Password should be more than or equal to 6 characters");
      return;
    }

    signin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Please Check Your Email Or Password");
      });
  };

  // google Signin
  const handleGoogleSignin = () => {
    // setLoading(true)
    signWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
        // setLoading(false)
      })
      .catch((error) => console.log(error));
  };

  // github signin
  const handleGithubSignin = () => {
    // setLoading(true)
    signWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        // console.log(loggedUser);
        navigate(from, { replace: true });
        // setLoading(false)
      })
      .catch((error) => console.log(error));
  };

  const handleResetPassword = () => {
    setError('')
    if(email.length < 1) {
      setError('Please Enter Your Email To Reset Password')
      return
    }
    resetPassword(email)
    .then(() => {
      toast.info('Please Check Your Email')
    })
    .catch((error) => {
      console.log(err)
    });
  
  }

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center">
//         <ColorRing
//           visible={true}
//           height="80"
//           width="80"
//           ariaLabel="blocks-loading"
//           wrapperStyle={{}}
//           wrapperClass="blocks-wrapper"
//           colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
//         />
//       </div>
//     );
//   }

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          {error && <p className="text-red-600">{error}</p>}
          <h2 className={`mt-6 text-center text-3xl font-extrabold`}>
          <span className='border-b-2 border-[#56BC97] capitalize'>Sign in to your account</span>
          </h2>
        </div>
        <div className="flex flex-col gap-y-2">
          <NavLink
            className="flex justify-around w-full border border-[#56BC97] p-2 items-center"
            onClick={handleGoogleSignin}
          >
            <FcGoogle /> Sign In with Google
          </NavLink>
          <NavLink
            className="flex justify-around w-full border border-[#56BC97] p-2 items-center"
            onClick={handleGithubSignin}
          >
            <FaGithub /> Sign In with Github
          </NavLink>
        </div>
        <p className="text-center">Or</p>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm ">
            <div>
              <label htmlFor="email-address">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p>Don't have an account?</p>
              <NavLink
                className="bg-[#56BC97] text-white ml-2 p-1 rounded"
                to="/register"
              >
                Register
              </NavLink>
            </div>

            <div className="text-sm">
              <NavLink onClick={handleResetPassword}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Reset your password?
              </NavLink>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group     focus:visible"
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
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
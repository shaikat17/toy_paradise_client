import { ColorRing } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useGlobalContext } from "../context/AppAuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading, setLoading } = useGlobalContext();
  const location = useLocation();
  // console.log(loading);

  // useEffect(() => {
  //   setLoading(false)
  // },[user])

  if (loading ) {
    // console.log("priv", loading);
    return (
      <div className="flex items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
      </div>
    );
  }
  // console.log(user)

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
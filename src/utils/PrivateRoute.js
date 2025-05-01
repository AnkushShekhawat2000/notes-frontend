import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;



// import React from "react";
// import { Navigate, useNavigate } from "react-router-dom";
// import jwtDecode from "jwt-decode";

// const PrivateRoute = ({ children }) => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     try {
//       const { exp } = jwtDecode(token);
//       if (Date.now() >= exp * 1000) {
//         localStorage.removeItem("token");
//         return <Navigate to="/login" />;
//       }
//     } catch (err) {
//       localStorage.removeItem("token");
//       return <Navigate to="/login" />;
//     }
//     return children;
//   } else {
//     return <Navigate to="/login" />;
//   }
// };

// export default PrivateRoute;

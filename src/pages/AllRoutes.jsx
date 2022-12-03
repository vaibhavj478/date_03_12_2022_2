import React from "react";

import { Route, Routes } from "react-router-dom";
import Category from "./Category";
import Login from "./Login";
import MyProfile from "./MyProfile";
import SignUp from "./SignUp";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={`/signup`} element={<SignUp />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/myProfile`} element={<MyProfile />} />
        <Route path={`/category`} element={<Category />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;

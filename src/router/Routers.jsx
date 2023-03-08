import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../Home/Home";

export const Routers = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/Home' element={<Home />} />
    </Routes>
  );
};

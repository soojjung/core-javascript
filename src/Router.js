import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmutableObject from "./immutable_object";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImmutableObject />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

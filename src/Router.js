import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmutableObject from "./immutable_object";
import ImmutableObjectImmer from "./immutable_object/immer";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImmutableObject />} />
        <Route path="/immer" element={<ImmutableObjectImmer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

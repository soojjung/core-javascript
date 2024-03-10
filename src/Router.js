import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmutableObject from "./immutable_object";
import ImmutableObjectImmer from "./immutable_object/immer";
import Trip from "./trip";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImmutableObject />} />
        <Route path="/immer" element={<ImmutableObjectImmer />} />
        <Route path="/trip" element={<Trip />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

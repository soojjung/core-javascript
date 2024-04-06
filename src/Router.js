import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ImmutableObject from "./immutable_object";
import ImmutableObjectImmer from "./immutable_object/immer";
import Trip from "./trip";
import Async from "./async";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/immutable-object" element={<ImmutableObject />} />
        <Route
          path="/immutable-object/immer"
          element={<ImmutableObjectImmer />}
        />
        <Route path="/trip" element={<Trip />} />
        <Route path="/async" element={<Async />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

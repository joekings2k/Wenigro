import { useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "pages/HomePage/Index";

function App() {
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" index element={<Home />} />
      </Route>
    )
  );
  return (
    <div className="app">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;

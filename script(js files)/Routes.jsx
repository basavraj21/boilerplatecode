import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Instructions from "pages/Instructions";
import DefaultDesign from "pages/DefaultDesign";
import OnclickofAddtoCart from "pages/OnclickofAddtoCart";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "instructions",
      element: <Instructions />,
    },
    {
      path: "defaultdesign",
      element: <DefaultDesign />,
    },
    {
      path: "onclickofaddtocart",
      element: <OnclickofAddtoCart />,
    },
  ]);

  return element;
};

export default ProjectRoutes;

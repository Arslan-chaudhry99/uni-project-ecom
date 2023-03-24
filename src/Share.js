import { Outlet } from "react-router";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React from "react";
const Share = () => {
           return <>
                      <Nav />
                      <Outlet />
                      <Footer />

           </>;
};

export default Share;

import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RouterAtom } from "../../atoms/RouterAtom";
import { SideBarAtom } from "../../atoms/SideBarState";
import Main from "../Ecommerce/Main";
import Navigation from "../Home/Navigation";
import Profile from "../Home/Profile";
import SideBar from "../Home/SideBar";
import Table from "../Home/Table";

const Home2 = () => {
  const [isOpen, setIsOpen] = useRecoilState(SideBarAtom);
  const [routes, setRoutes] = useRecoilState(RouterAtom);
  const getRoutes = () => {
    if (routes === "ecommerce") {
      return <Main />;
    } else if (routes === "employee") {
      return <Table />;
    } else if (routes === "profile") {
      return <Profile />;
    }
  };

  return (
    <div>
      <div className="flex h-[100vh] relative w-full items-center">
        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } border-r-[1.5px] ease-in-out w-[20%] h-[100vh] `}
        >
          <SideBar />
        </div>
        <div
          className={`${
            isOpen ? "w-[80%]" : "w-full"
          } h-[100vh] overflow-scroll scrollbar-hide   `}
        >
          <div className=" border-b sticky z-50 top-0 w-full ">
            <Navigation />
          </div>
          {getRoutes()}
        </div>
      </div>
    </div>
  );
};

export default Home2;

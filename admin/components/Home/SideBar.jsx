import Image from "next/image";
import React, { useState } from "react";
import {
  FaCalendar,
  FaCartArrowDown,
  FaGamepad,
  FaProductHunt,
  FaShopify,
  FaStickyNote,
  FaUserTie,
} from "react-icons/fa";
import { useRecoilState } from "recoil";
import { RouterAtom } from "../../atoms/RouterAtom";
const SideBar = () => {
  const [click, setClick] = useRecoilState(RouterAtom);
  return (
    <div>
      <div className="w-full">
        <div className="w-full border-b-[1.5px] flex items-center ">
          <div className="w-[120px] h-[65px] relative">
            <Image
              src={require("../../public/logo.png")}
              alt="my logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div className="w-full  uppercase px-5  flex items-center   h-[40px] text-black/50 ">
          DashBoard
        </div>
        <div
          onClick={() => setClick("ecommerce")}
          className={`w-full ml-4 ${
            click === "ecommerce" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 flex gap-3 items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaShopify size={20} /> E-commerce
        </div>
        <div className="w-full  uppercase px-5  flex items-center   h-[40px] text-black/50 ">
          Pages
        </div>
        <div
          onClick={() => setClick("orders")}
          className={`w-full ml-4 ${
            click === "orders" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 gap-3 flex items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaCartArrowDown size={20} /> Orders
        </div>
        <div
          onClick={() => setClick("products")}
          className={`w-full ml-4 ${
            click === "products" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 flex gap-3 items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaProductHunt size={20} /> Products
        </div>
        <div
          onClick={() => setClick("employee")}
          className={`w-full ml-4 ${
            click === "employee" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 flex items-center gap-3 w-[250px] rounded-md    h-[40px]  `}
        >
          <FaUserTie size={20} fill="black" /> Employee
        </div>
        <div
          onClick={() => setClick("profile")}
          className={`w-full ml-4 ${
            click === "profile" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 flex items-center gap-3 w-[250px] rounded-md    h-[40px]  `}
        >
          <FaUserTie size={20} fill="black" /> Profile
        </div>
        <div className="w-full  uppercase px-5  flex items-center   h-[40px] text-black/50 ">
          App
        </div>
        <div
          onClick={() => setClick("calender")}
          className={`w-full ml-4 ${
            click === "calender" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 gap-3 flex items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaCalendar size={20} /> Calender
        </div>
        <div
          onClick={() => setClick("todos")}
          className={`w-full ml-4 ${
            click === "todos" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 gap-3 flex items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaStickyNote size={20} /> Todos
        </div>
        <div className="w-full  uppercase px-5  flex items-center   h-[40px] text-black/50 ">
          Games
        </div>
        <div
          onClick={() => setClick("tic")}
          className={`w-full ml-4 ${
            click === "tic" ? "bg-blue-400 text-white" : "text-black/70"
          } cursor-pointer px-5 gap-3 flex items-center w-[250px] rounded-md    h-[40px]  `}
        >
          <FaGamepad size={20} /> Tic-Tak-Toe
        </div>
      </div>
    </div>
  );
};

export default SideBar;

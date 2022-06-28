import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  MdAssessment,
  MdChat,
  MdMenu,
  MdNotifications,
  MdSearch,
  MdSupervisedUserCircle,
} from "react-icons/md";
import { useRecoilState } from "recoil";
import { SideBarAtom } from "../../atoms/SideBarState";
import { auth } from "../firebase";
const Navigation = () => {
  const [isOpen, setIsOpen] = useRecoilState(SideBarAtom);
  const [sOpen, setSOpen] = useState(false);
  const history = useRouter();
  return (
    <div className="w-full">
      <div className="w-full  bg-white z-50 h-[60px] flex px-5 items-center justify-between">
        <div className="flex  h-[50px] items-center w-auto gap-2">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className=" text-blue-400 cursor-pointer"
          >
            <MdMenu size={30} />
          </div>
          <input
            type="text"
            placeholder="Search...."
            className={`outline-none ${
              sOpen ? "flex" : "hidden"
            } px-4 scroll-smooth rounded-md duration-1000 border-[1px] border-blue-400 text-[16px]`}
          />
          <div
            onClick={() => setSOpen(!sOpen)}
            className=" text-blue-400 cursor-pointer"
          >
            <MdSearch size={30} />
          </div>
        </div>
        <div className="flex  h-[50px] text-blue-400 gap-5 items-center w-auto">
          <div className="cursor-pointer">
            <MdAssessment size={30} />
          </div>
          <div className="cursor-pointer">
            <MdNotifications size={30} />
          </div>
          <div className="cursor-pointer">
            <MdChat size={30} />
          </div>
          <div
            onClick={() => history.push("/login")}
            className=" flex h-[50px] items-center"
          >
            <div className="cursor-pointer">
              {!auth?.currentUser?.photoURL ? (
                <MdSupervisedUserCircle size={50} />
              ) : (
                <div className="w-[40px] relative h-[40px]">
                  <Image
                    src={auth?.currentUser?.photoURL}
                    alt={auth?.currentUser.uid}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              )}
            </div>
            {auth?.currentUser?.displayName ?? "Log In"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

import React from "react";
import { AiOutlineHome, AiTwotoneDollar } from "react-icons/ai";
import { MdAddLocation, MdWorkOutline } from "react-icons/md";
import {
  FiExternalLink,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiShoppingBag,
} from "react-icons/fi";
import { CgDollar } from "react-icons/cg";
import ProfileCard from "./ProfileCard";
import BasicChart from "../Charts/BasicChart";
import Table from "../Charts/Table";

const Profile = () => {
  const skills = [
    "Javascript",
    "Sass",
    "React",
    "Redux",
    "Next.js",
    "Material UI",
    "UI/UX",
  ];
  return (
    <div className="bg-blue-50 p-4">
      <div className=" w-full flex  font-serif mb-2 text-[28px]">
        Profile Page
      </div>
      <div className="w-full flex   justify-center">
        <div className="w-full flex-row justify-between flex">
          <div className="w-[30%] gap-4 flex flex-col">
            <ProfileCard />
            <div className="h-[150px] p-4 bg-white flex-col w-full shadow-md rounded-lg">
              <span className="text-[18px]">Skills</span>
              <div className="flex mt-4 flex-wrap gap-1">
                <div className="px-2 py-1 bg-blue-600 rounded-lg text-white text-sm">
                  HTML
                </div>
                {skills.map((items, index) => (
                  <div
                    key={items}
                    className="px-2 py-1 bg-black/10 rounded-lg  text-sm"
                  >
                    {items}
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[170px] p-4 bg-white flex-col w-full shadow-md rounded-lg">
              <span className="text-[18px]">About</span>
              <div className="flex mt-4 flex-col  gap-2">
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <AiOutlineHome size={20} />
                  <span className="">
                    Lives in
                    <a href="" className=" ml-1 text-blue-600 hover:underline">
                      Kathmandu,Nepal
                    </a>
                  </span>
                </div>
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <MdWorkOutline size={20} />
                  <span className="">
                    Works at
                    <a href="" className=" ml-1 text-blue-600 hover:underline">
                      Ultimodeal Ecommerce
                    </a>
                  </span>
                </div>
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <MdAddLocation size={20} />
                  <span className="">
                    Lives in
                    <a href="" className=" ml-1 text-blue-600 hover:underline">
                      Kathmandu
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[190px] p-4 bg-white flex-col w-full shadow-md rounded-lg">
              <span className="text-[18px]">About</span>
              <div className="flex mt-4 flex-col  gap-2">
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <FiExternalLink size={20} />

                  <a href="" className=" ml-1 text-blue-600 hover:underline">
                    myportfolio.com
                  </a>
                </div>
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <FiTwitter size={20} />

                  <a href="" className=" ml-1 text-blue-600 hover:underline">
                    Twitter
                  </a>
                </div>
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <FiFacebook size={20} />

                  <a href="" className=" ml-1 text-blue-600 hover:underline">
                    Facebook
                  </a>
                </div>
                <div className="font-[400] gap-2 h-[20px]  items-center text-[14px] w-full flex ">
                  <FiInstagram size={20} />

                  <a href="" className=" ml-1 text-blue-600 hover:underline">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[68%] flex flex-col gap-4">
            <div className="w-[full] bg-white h-[380px]">
              <BasicChart />
            </div>
            <div className="w-full h-[120px] gap-4 flex items-center">
              <div className="h-[120px] w-[32%] p-4 relative rounded-lg shadow-md bg-white">
                <div className="text-[28px] font-sarif">$ 2.405</div>
                <span className="text-[13px]">Total Earnings</span>
                <div className="w-[100%] mt-3 h-[5px] rounded-md overflow-hidden bg-blue-200">
                  <div className="bg-blue-600 w-[70%] h-full"></div>
                </div>
                <div className="absolute  text-blue-600 right-4 top-4">
                  <CgDollar size={40} />
                </div>
              </div>
              <div className="h-[120px] w-[32%] p-4 relative rounded-lg shadow-md bg-white">
                <div className="text-[28px] font-sarif">30</div>
                <span className="text-[13px]">Total Orders</span>
                <div className="w-[100%] mt-3 h-[5px] rounded-md overflow-hidden bg-blue-200">
                  <div className="bg-blue-600 w-[70%] h-full"></div>
                </div>
                <div className="absolute  text-blue-600 right-4 top-4">
                  <FiShoppingBag size={40} />
                </div>
              </div>
              <div className="h-[120px] w-[32%] p-4 relative rounded-lg shadow-md bg-white">
                <div className="text-[28px] font-sarif">$ 2.405</div>
                <span className="text-[13px]">Total Earnings</span>
                <div className="w-[100%] mt-3 h-[5px] rounded-md overflow-hidden bg-blue-200">
                  <div className="bg-blue-600 w-[70%] h-full"></div>
                </div>
                <div className="absolute  text-blue-600 right-4 top-4">
                  <CgDollar size={40} />
                </div>
              </div>
            </div>
            <div className="w-[full] bg-white h-auto mb-5">
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

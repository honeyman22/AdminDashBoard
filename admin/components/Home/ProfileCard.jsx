import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <div>
      <div className="w-full h-[280px] bg-white p-4 rounded-lg flex flex-col shadow-md">
        <div className="text-[18px]">Profile Details</div>
        <div className="flex flex-col  justify-center items-center">
          <div className="w-[120px] mb-2 rounded-full overflow-hidden h-[120px] relative">
            <Image
              src={require("../../public/logo.png")}
              alt="my photo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <span className="text-sm"> Nishan Bhattarai</span>
          <span className="text-sm font-light"> FrontEnd Developer </span>
          <div className="flex items-center mt-4 justify-center gap-2">
            <button className="bg-blue-600 rounded-md text-white text-sm px-4 py-2">
              Follow
            </button>
            <button className="bg-blue-600 rounded-md text-white text-sm px-4 py-2">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

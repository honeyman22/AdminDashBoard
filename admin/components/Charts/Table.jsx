import React from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

const Table = () => {
  return (
    <div className="px-4 border rounded-md">
      <table className="w-full ">
        <tr className="h-[60px]  border-b">
          <th className="text-left text-black/60 text-[18px] font-normal font-serif">
            Company
          </th>
          <th className="text-left text-black/60 text-[18px] font-normal font-serif">
            Client
          </th>
          <th className="text-left text-black/60 text-[18px] font-normal font-serif">
            Amount
          </th>
          <th className="text-left  text-black/60 text-[18px] font-normal font-serif">
            Rank
          </th>
          <th className="text-left text-black/60 text-[18px] font-normal font-serif"></th>
        </tr>
        <tr className="h-[60px] border-b">
          <td className="text-left gap-2 flex items-center  text-blue-500 text-[18px] font-normal font-serif">
            <div className="w-[30px] h-[60px] items-center justify-center flex">
              <FaGoogle size={25} />
            </div>
            <span className="text-black/60">Google</span>
          </td>
          <td className="text-left items-center  text-black text-[18px] font-normal font-serif">
            Don Jimmy
          </td>
          <td className="text-left items-center  text-blue-700 text-[18px] font-normal font-serif">
            $500
          </td>
          <td className="text-left  items-center  text-blue-400 text-[18px] font-normal font-serif">
            4.8 | <span className="text-black">Good</span>
          </td>
        </tr>
        <tr className="h-[60px] border-b">
          <td className="text-left gap-2 flex items-center  text-blue-500 text-[18px] font-normal font-serif">
            <div className="w-[30px] h-[60px] items-center justify-center flex">
              <FaFacebook size={25} />
            </div>
            <span className="text-black/60">Facebook</span>
          </td>
          <td className="text-left items-center  text-black text-[18px] font-normal font-serif">
            Ghost Rider
          </td>
          <td className="text-left items-center  text-blue-700 text-[18px] font-normal font-serif">
            $356
          </td>
          <td className="text-left  items-center  text-blue-400 text-[18px] font-normal font-serif">
            4.4 | <span className="text-black">Good</span>
          </td>
        </tr>
        <tr className="h-[60px] ">
          <td className="text-left gap-2 flex items-center  text-blue-500 text-[18px] font-normal font-serif">
            <div className="w-[30px] h-[60px] items-center justify-center flex">
              <FaGithub size={25} />
            </div>
            <span className="text-black/60">Github</span>
          </td>
          <td className="text-left items-center  text-black text-[18px] font-normal font-serif">
            Barbarian King
          </td>
          <td className="text-left items-center  text-blue-700 text-[18px] font-normal font-serif">
            $140
          </td>
          <td className="text-left  items-center  text-red-400 text-[18px] font-normal font-serif">
            2.75| <span className="text-red-800">Bad</span>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Table;

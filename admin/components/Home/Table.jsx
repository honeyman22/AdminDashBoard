import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit } from "react-icons/md";
const Table = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="w-full px-5 h-auto py-8">
        <div className="w-full py-3 text-[24px] font-serif">Employee List</div>
        <table className="w-full">
          <tr className="border-b bg-[#f1f1f1] border-black/40">
            <th className="text-left p-3">S.N.</th>
            <th className="text-left p-3">Name:</th>
            <th className="text-left p-3">Email:</th>
            <th className="text-left p-3">City:</th>
            <th className="text-left p-3">Phone:</th>
            <th className="text-left p-3">Company:</th>
            <th className="text-left p-3">Website:</th>
            <th className="w-[60px] p-3"></th>
          </tr>
          {!data && (
            <div className="text-[18px] font-serif text-blue-400">
              Loading....
            </div>
          )}
          {data &&
            data?.map((item, i) => (
              <tr
                className="border-b hover:bg-[#f1f1f1] cursor-pointer border-black/60"
                key={i}
              >
                <td className="text-left p-3">{item.id}</td>
                <td className="text-left p-3">{item.name}</td>
                <td className="text-left p-3">{item.email}</td>
                <td className="text-left p-3">{item.address.city}</td>
                <td className="text-left p-3">{item.phone.slice(0, 13)}</td>
                <td className="text-left p-3">{item.company.name}</td>
                <td className="text-left p-3">{item.website}</td>
                <td className="w-[60px] p-3 text-blue-400">
                  <MdEdit size={30} />
                </td>
              </tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Table;

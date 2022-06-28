import React from "react";
import { FaChessBishop, FaDotCircle, FaGoogle } from "react-icons/fa";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import BasicChart from "../Charts/BasicChart";
import DonutCharts from "../Charts/DonutCharts";
import { BsDot } from "react-icons/bs";
import Table from "../Charts/Table";
const Main = () => {
  return (
    <div>
      <div className="w-full gap-5 flex flex-col h-auto p-5">
        <div className="flex flex-row gap-5 h-[150px] w-full ">
          <div className="w-[33%] rounded-md  shadow-md border justify-center flex flex-col p-3 ">
            <div className="text-[18px]  font-serif ">Balance</div>
            <div className="text-[32px] flex items-center text-violet-600 font-serif font-semibold">
              $27632
              <span className="text-[16px] flex items-center px-3 font-[300] text-blue-400">
                +2.3% <MdArrowUpward />
              </span>
            </div>
            <div className="text-[16px] font-[300] text-black/40">
              Compared to ($21340 last year)
            </div>
          </div>
          <div className="w-[33%] rounded-md shadow-md border-[1px] justify-center flex flex-col p-3 ">
            <div className="text-[18px]  font-serif ">Income</div>
            <div className="text-[32px] flex items-center text-violet-600 font-serif font-semibold">
              $20123
              <span className="text-[16px] flex items-center px-3 font-[300] text-blue-400">
                +1.3% <MdArrowUpward />
              </span>
            </div>
            <div className="text-[16px] font-[300] text-black/40">
              Compared to ($19340 last year)
            </div>
          </div>
          <div className="w-[33%] rounded-md border-[1px] shadow-md justify-center flex flex-col p-3 ">
            <div className="text-[18px]  font-serif ">Saving</div>
            <div className="text-[32px] flex items-center text-violet-600 font-serif font-semibold">
              $27632
              <span className="text-[16px] flex items-center px-3 font-[300] text-red-400">
                +2.3% <MdArrowDownward />
              </span>
            </div>
            <div className="text-[16px] font-[300] text-black/40">
              Compared to ($213 last year)
            </div>
          </div>
        </div>
        <div className="flex w-full overflow-hidden z-0 gap-5 relative ">
          <div className="w-[70%] ">
            <BasicChart />
          </div>
          <div className="w-[30%] ">
            <DonutCharts />
          </div>
        </div>
        <div className="w-full flex gap-5 ">
          <div className="w-[45%]  flex flex-col gap-3 ">
            <div className="text-[18px] font-serif text-blue-700">
              Your Savings
            </div>
            <div className="w-full gap-3 h-[110px] border rounded-md p-2 flex items-center">
              <div className="h-[100px] w-[100px] flex rounded-md text-blue-500 items-center justify-center bg-blue-200">
                <FaChessBishop size={70} />
              </div>
              <div className="w-[80%] gap-1 flex justify-center flex-col h-[100px]">
                <div className="text-[16px] text-black/40">Deposite</div>
                <div className="text-[20px] font-semibold text-blue-700">
                  $10.000{" "}
                  <span className="text-[14px] text-black/40 font-light">
                    /$20.00
                  </span>
                </div>
                <div className="h-3 rounded-md bg-slate-100 overflow-hidden border">
                  <div className="bg-blue-500 w-[60%] rounded-md h-full"></div>
                </div>
                <div className="text-[14px] text-black/60">3% of your Goal</div>
              </div>
            </div>
            <div className="w-full gap-3 h-[110px] border rounded-md p-2 flex items-center">
              <div className="h-[100px] w-[100px] flex rounded-md text-blue-500 items-center justify-center bg-blue-200">
                <FaChessBishop size={70} />
              </div>
              <div className="w-[80%] gap-1 flex justify-center flex-col h-[100px]">
                <div className="text-[16px] text-black/40">Deposite</div>
                <div className="text-[20px] font-semibold text-blue-700">
                  $10.000{" "}
                  <span className="text-[14px] text-black/40 font-light">
                    /$20.00
                  </span>
                </div>
                <div className="h-3 rounded-md bg-slate-100 overflow-hidden border">
                  <div className="bg-blue-500 w-[60%] rounded-md h-full"></div>
                </div>
                <div className="text-[14px] text-black/60">3% of your Goal</div>
              </div>
            </div>
          </div>
          <div className="w-[55%] flex gap-3 flex-col ">
            <div className="text-[18px] font-serif text-blue-700">
              Trasactions
            </div>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

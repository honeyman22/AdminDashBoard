import React, { useEffect } from "react";
import { BsApple, BsFacebook, BsGoogle } from "react-icons/bs";
import Image from "next/image";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithGoogle } from "../components/firebase";

const Welcome = () => {
  const history = useRouter();

  return (
    <div>
      <div className="w-full px-5 flex justify-center items-center h-[89vh]">
        <div className="w-[80%] h-full flex items-center">
          <div className=" flex flex-col gap-4 items-start px-10 justify-center h-full w-[50%]">
            <div className=" font-serif font-[600] text-[32px]">
              Welcome to Admin Panel
            </div>
            <div className="text-[14px] w-[350px]  font-serif mb-4 font-[500] text-black/60 ">
              By creating an account you agree to our{" "}
              <span className="text-[12px] cursor-pointer text-yellow-600">
                Terms and Conditions
              </span>{" "}
              and
              <span className="text-[12px] cursor-pointer text-yellow-600">
                {" "}
                Data Protection Guidelines.
              </span>
            </div>

            <button className="w-[350px] font-serif text-[18px] rounded-md bg-slate-200 h-[50px]">
              {" "}
              Sign up with phone or Email
            </button>
            <div className="flex justify-between items-center w-[350px]">
              <div className="h-[1px] w-[40%] bg-black/60"></div>
              <div className="text-[20px] flex-shrink-0 text-black/60 w-[10%]">
                Or
              </div>
              <div className="h-[1px] w-[43%] bg-black/60"></div>
            </div>
            <button className="w-[350px] font-serif text-[18px] rounded-md text-white bg-blue-600 flex justify-center items-center gap-2 h-[50px]">
              <BsFacebook size={20} /> Countinue with Facebook
            </button>

            <button
              onClick={async () => {
                await signInWithGoogle();
                history.push("/");
              }}
              className="w-[350px] font-serif text-[18px] rounded-md  border-[1px] bg-white flex justify-center items-center gap-2 h-[50px]"
            >
              <BsGoogle size={20} /> Countinue with Google{" "}
            </button>

            <div className="text-[16px] w-[350px]  font-serif mb-4 font-[600] text-black/60 ">
              Already registered?{" "}
              <span className="text-[16px] cursor-pointer text-yellow-600">
                Log In
              </span>
            </div>
          </div>
          <div className="w-[50%] flex flex-col gap-5 items-center justify-center">
            <div className="w-full h-[300px] relative">
              <Image
                src={require("../public/register.png")}
                alt="register"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-[28px] font-serif font-semibold">
              Buy Crypto in Minutes
            </div>
            <div className="text-[16px] w-[80%] text-center font-serif text-black/60">
              Enjoy the world’s largest cryptocurrency exchange at your
              fingertips.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

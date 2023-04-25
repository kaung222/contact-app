import React, { useState } from "react";
import loginIamge from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { useRegisterMutation } from "../features/api/AuthApi";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmed_password] = useState("");

  const user = { name, email, password, password_confirmation };
  const registerHandler = async (user) => {
    const { data } = await register(user);
    if (data?.success) {
      console.log("register successfully!")
      navigate("/");
    }
  };
  return (
    <div>
      <div className="flex items-center justify-center gap-10 bg-white h-screen p-5 px-20 w-full">
        {/* left side start  */}
        <div className="w-1/2 p-5 rounded-lg h-full bg-[#f3f5f9]">
          <div className=" px-10">
            {/* <span className=" px-1 text-[#3c37ff] text-3xl">Logo</span> */}
            <div className=" my-3 flex items-center justify-center flex-col">
              <h1 className=" text-3xl mt-5 font-bold text-slate-700">
                Create an account
              </h1>
              <p className="my-3 font-semibold text-sm text-slate-400">
                Sign up now and unlock exclusive access!
              </p>
            </div>
            <div className=" text-sm">
              <div className=" mt-2">
                <label htmlFor="">Your Name</label>
                <br />
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="First Last"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <label htmlFor="">Email</label>
                <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="example@gmail.com"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <div className=" flex items-center justify-between">
                  <label htmlFor="">Password</label>
                  <span className=" text-[#3c37ff] text-sm">weak</span>
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="****"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <label htmlFor="">Comfirm Password</label>
                <br />
                <input
                  onChange={(e) => setConfirmed_password(e.target.value)}
                  type="text"
                  placeholder="****"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <button
                className="border-none  w-full my-2 bg-[#3c37ff] text-slate-300 focus:outline-blue-700 py-2 px-3 rounded-lg"
                onClick={() => registerHandler(user)}
              >
                Create account
              </button>
              <span className="text-sm font-normal text-slate-400 mt-3">
                Already have an account?
              </span>
              <Link to="/login">
                <span className="text-[#3c37ff] text-sm mx-3 hover:underline cursor-pointer">
                  Login
                </span>
              </Link>
            </div>
            <div className=" mt-[50px]">
              <div className=" flex items-center justify-start gap-3 text-sm text-slate-500">
                <span className="text-[#3c37ff] ">
                  <AiOutlineMail />
                </span>
                <span>
                  Need help or suggest anything{" "}
                  <Link to="/" className="text-[#3c37ff] hover:underline ">
                    {" "}
                    here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* left side end  */}

        {/* right side start  */}
        <div className="w-1/2 h-full">
          <img src={loginIamge} alt="" />
        </div>

        {/* right side end  */}
      </div>
    </div>
  );
};

export default Register;

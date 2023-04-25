import React, { useState } from "react";
import loginIamge from "../assets/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addUser } from "../features/services/AuthSlice";
import { useLoginMutation } from "../features/api/AuthApi";

const Login = () => {
  const [email, setEmail] = useState("james2000@gmail.com");
  const [password, setPassword] = useState("password");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();

  const user = { email, password };
  const loginHandler = async (user) => {
    const { data } = await login(user);
    console.log(data);
    if (data?.success) {
      dispatch(addUser({ user: data?.user, token: data?.token }));
      console.log("login successfully!");
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
              <h1 className=" text-3xl mt-5 font-bold text-slate-700">Login</h1>
              <p className="my-3 font-semibold text-slate-400">
                Welcome back , Chief!
              </p>
            </div>
            <div className="text-sm">
              <div className=" mt-2">
                <label htmlFor="">Email</label>
                <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="example@gmail.com"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2">
                <label htmlFor="">Password</label>
                <br />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="text"
                  placeholder="****"
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
                <span className=" text-end w-full text-sm text-[#3c37ff] hover:underline cursor-pointer">
                  Recover Password
                </span>
              </div>
              <button
                className="border-none  w-full my-5 bg-[#3c37ff] text-slate-300 focus:outline-blue-700 py-2 px-3 rounded-lg"
                onClick={() => loginHandler(user)}
              >
                Login
              </button>
              <span className="text-sm font-normal text-slate-400 mt-5">
                Don't have an account?
              </span>
              <Link to="/register">
                <span className="text-[#3c37ff] text-sm mx-3 hover:underline cursor-pointer">
                  Register
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

export default Login;

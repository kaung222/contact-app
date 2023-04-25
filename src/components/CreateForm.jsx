import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useCreateContactMutation } from "../features/api/ContactApi";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const CreateForm = () => {
  const [createContact] = useCreateContactMutation();
  const token = Cookies.get("token");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const contact = { name, email, phone, address };
  const createContactHandler = async (contact, token) => {
    console.log(contact, token);
    const data = await createContact(contact,token);
    console.log(data);
    // setCreate(false);
  };
  return (
    <div>
      <div className="w-screen h-screen absolute top-0 left-0 bg-slate-50">
        <div className=" relative w-full h-full flex items-center justify-center">
          <div className="w-[450px] h-auto p-5 py-5 shadow-md rounded-lg shadow-slate-700">
            <h1 className="text-center mb-5 text-2xl font-semibold">
              Create Contact
            </h1>
            <div className="text-sm">
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Name</span>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="John Doe"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Email</span>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="example@gmail.com"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Phone No.</span>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  placeholder="12-345-678-90"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <div className=" mt-2 flex items-center justify-center gap-3 ">
                <span className=" w-[200px]">Address</span>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  type="text"
                  placeholder="No.1,...St,Yangon"
                  required
                  className=" border-none  w-full my-2 focus:outline-blue-700 py-2 px-3 rounded-lg"
                />
              </div>
              <button
                className="border-none  w-full my-9 bg-[#3c37ff] text-slate-300 py-2 px-3 rounded-lg"
                onClick={() => createContactHandler(contact, token)}
              >
                Create
              </button>
            </div>
          </div>
          <Link to="/team">
            <button className="flex text-sm textsl items-center absolute top-2 right-2 justify-center gap-5 px-3 py-2 border-slate-500 border-[1px] rounded-lg">
              <span>
                <AiOutlineClose />
              </span>
              <span>Cancel</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;

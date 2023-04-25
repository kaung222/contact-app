import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Table from "./Table";
import CreateForm from "./CreateForm";
import { Link } from "react-router-dom";

const Content = () => {
  // const [create, setCreate] = useState(false);
  return (
    <div className="w-full h-full">
      <div className=" h-full w-full bg-slate-100 p-5 shadow-xl">
        <div className="flex items-center justify-between border-b-[1px] border-slate-400 pb-5">
          <div className="">
            <h3 className=" text-xl">Team Members</h3>
            <p className="text-slate-500 text-sm">
              Manage your team members and their account permissions here.
            </p>
          </div>
          <Link to="/create">
            <button className="flex text-sm textsl items-center justify-center gap-5 px-3 py-2 border-slate-500 border-[1px] rounded-lg">
              <span>
                <AiOutlinePlus />
              </span>
              <span>Add Contact</span>
            </button>
          </Link>
        </div>
        <Table />
      </div>
    </div>
  );
};

export default Content;

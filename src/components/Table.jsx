import React from "react";
import { IoMdTrash } from "react-icons/io";
import { HiPencil } from "react-icons/hi";
import Cookies from "js-cookie";
import { useGetContactsQuery } from "../features/api/ContactApi";
import { Link } from "react-router-dom";

const Table = () => {
  const token = Cookies.get("token");
  const { data } = useGetContactsQuery(token);
  console.log(data);
  // const contacts = data.contacts.data
  return (
    <div>
      <table className=" table w-full mt-5 rounded-lg">
        <thead className=" table-header-group">
          <tr className="text-sm text-slate-600 bg-slate-200 border-b-[1px] border-slate-300">
            {/* <th></th> */}
            <th className="py-3">Name</th>
            <th>Date Added</th>
            <th>Phone No.</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="text-sm text-slate-600  border-b-[1px] border-slate-300">
            {/* <td className='py-3'> 1</td> */}
            <td className="py-2 text-center"> James</td>
            <td className="text-center"> 22 March,2039</td>
            <td className="text-center"> 09797961628</td>
            <td className="text-center"> example@gmail.com</td>
            <td className="text-center"> No.100, North Dagon</td>
            <td className="text-center">
              <div className="flex items-center justify-center text-lg gap-1">
                <button className="px-2 py-1">
                  <IoMdTrash />
                </button>
                <Link to="/edit">
                  <button className=" px-2 py-1">
                    <HiPencil />
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;

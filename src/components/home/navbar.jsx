import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="flex items-center justify-between  bg-slate-500 px-2 ">
      <span>
        <img src="servici.png" alt="logo" className="w-16" />
      </span>
      <form className="">
        <input
          type="search"
          className=" p-2 pl-8   text-sm text-gray-900 bg-gray-50 rounded-full w-28 md:w-80  xl:w-96  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="search"
        />
      </form>

       <Link to="Client">
       <div  className="relative px-5 py-2 font-medium text-white group">
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-500 group-hover:bg-yellow-700 group-hover:skew-x-12"></span>
<span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-yellow-700 group-hover:bg-yellow-500 group-hover:-skew-x-12"></span>
<span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-yellow-600 -rotate-12"></span>
<span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-yellow-400 -rotate-12"></span>
 <span className="relative">Place Order</span>
</div>

        </Link>
    </div>
  );
};
export default Navbar;

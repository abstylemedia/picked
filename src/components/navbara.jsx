const Navbar = () => {
  return(
      <div className="flex basis-full flex-wrap bg-sky-500 justify-between ">
              <div className="">
              <img src="/logo.png" className="w-16 p-2" alt="facebook"/>
              </div>
          
              <div className="flex items-center">
                <input type='search'  placeholder='Track Order' className='rounded-lg w-24 sm:w-24 md:w-40 lg:w-60 text-sm sm:text-sm lg:text-base md:text-base text-center bg-sky-50  '/>
         
                <span className=" cursor-pointer float-right  bg-sky-500  input-group-text flex  px-2 text-base font-normal text-gray-700 text-center whitespace-nowrap  " id="basic-addon2">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                  </svg>
                </span>
              </div>
              <ul className='flex flex-wrap items-center pr-2'>
                <li>
                  <span>
                    <img src='/notification.png' alt='micr'  className=" cursor-pointer w-5  mx-5 " />
                    
                  </span>
                </li>
                <li>
                  <span className="">
                  <img src='/logo.png' alt='micr'  className=" cursor-pointer w-6   mx-3 rounded-full " />
                    
                  </span>
                </li>
                <li>
                  <span>
                  <button type="button" className="hover:bg-yellow-500  p-2 hidden lg:block xl:block sm:w-16 rounded-xl bg-yellow-400 ">Login</button>
                    
                  </span>
                </li>
              </ul>
              {/* <div className="p-3">
          <span>
                    <img src='/notification.png' alt='micr' width={20} className="lg:mt-3 cursor-pointer bg-slate-100 mx-3 sm:mt-4 md:mt-3 rounded-xl" />
              
                  </span>
              </div>
              <div className="p-3">
              <button type="button" className="  p-2  sm:w-16 rounded-xl bg-yellow-500">Login</button>
              </div> */}
          
          
      </div>
  )
}
export default Navbar;
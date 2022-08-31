import React from 'react';
const Navbar = () =>{
    return(
        <div className="flex items-center  bg-slate-200 justify-between">
            <div>
                <img src="servici.png" alt="logo" className="w-28 p-2 " />
            </div>
            
            <div className="border flex ">
            <svg xmlns="http://www.w3.org/2000/svg" className="xl:w-8 w-4" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z"/></svg>
             <span className="font-semibold md:text-lg xl:text-3xl ml-2 mb-1 text-sm">+91-2973-PICKUP</span>
            </div>
        </div>
    );
};
export default Navbar;
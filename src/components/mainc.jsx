import React from "react";
const Main = () =>{
        return(
            <section className=" bg-slate-200">
                <div className="relative">
                  <div className="sticky top-0 left-0 right-0 text-6xl shadow-lg font-bold bg-white p-2">Select Your Pickups</div>
                </div>
                <div className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center border py-4 px-8 lg:px-80 2xl:px-96">
                  <div class="grid justify-items-center items-center rounded-lg shadow-xl bg-white">
                    <div className="grid place-items-center  ">
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="pickup"/>
                      <p>Home Furniture & Decor</p>
                    </div>
                  </div>
                  <div class="grid justify-items-center items-center rounded-lg shadow-xl bg-white">
                    <div className="grid place-items-center  ">
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="pickup"/>
                      <p>Home Furniture & Decor</p>
                    </div>
                  </div>
                  <div class="grid justify-items-center items-center rounded-lg shadow-xl bg-white">
                    <div className="grid place-items-center  ">
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" alt="pickup"/>
                      <p>Home Furniture & Decor</p>
                    </div>
                  </div>
                </div>
               
            </section>
        )
    };
export default Main;
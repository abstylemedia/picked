import React from "react";
const Footr = () =>{
    return(
        <footer class="w-full  bg-white
            fixed left-0 bottom-0
            flex flex-col justify-center
            ">
               <div className="basis-full"> 
                <button className="w-1/2 py-2">
                    Schedule Order
                </button>
                <button className="w-1/2 py-2">
                    Request Now
                </button>
                </div> 
                <div className="basis-full flex"> 
                <button className="w-1/3 grid justify-items-center">
                <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home"/>
                    Home
                </button>
                <button className="w-1/3 grid justify-items-center">
                <img src="https://img.icons8.com/material-outlined/24/000000/purchase-order.png" alt="order"/>
                    Orders
                </button>
                <button className="w-1/3 grid justify-items-center">
                <img src="https://img.icons8.com/fluency-systems-filled/24/000000/dots-loading.png" alt="more"/>
                    More
                </button>
                </div> 
                
        </footer>
    )
};
export default Footr;

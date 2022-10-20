import {React,useState} from 'react';


export default function Test () {
  const [data,setData] = useState("");
  function clicked(e){
    e.preventDefault()
    if(data !==""){
      if(data === "Mini Vans"){
        const km = 20
        const totalkm = (km * 0.50)+ 10;
        sessionStorage.setItem('Truck', data);
        sessionStorage.setItem('total', totalkm);
        window.location.href = "//additem";
        
        console.log(data);
        console.log(totalkm);
        }
        else if(data === "Cargo Vans"){
            const km = 20
            const totalkm = (km * 0.50)+ 15;
            console.log(data);
            console.log(totalkm);
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
        window.location.href = "//additem";

        }else if(data === "Cube Vans"){
            const km = 20
            const totalkm = (km * 0.75)+ 25;
            console.log(data);
            console.log(totalkm);
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
        window.location.href = "//additem";

        }else if(data === "Straight Truck"){
            const km = 20
            const totalkm = (km * 0.90)+ 35;
            console.log(data);
            console.log(totalkm);
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
        window.location.href = "//additem";
        }
      }
    else{
      console.log("not selected");

    }
  }

    
  
  
  
        return(
            <section className=" bg-slate-100">
                <div className="relative">
                  <div className="sticky top-0 left-0 right-0 text-2xl lg:text-6xl shadow-lg font-bold bg-white p-2">Select Your Pickups</div>
                </div>
                <ul className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center pt-4 pb-28 px-8 md:px-40 lg:px-80 2xl:px-96 ">
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Grocery, Food & Home Essentials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Mini Vans" className="hidden peer" required="" />
                        <label htmlFor="Grocery, Food & Home Essentials" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full ">
                                <div className="w-full text-lg font-semibold text-center">Mini Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Furniture & Decor" name="hostings" onClick={(e)=>setData(e.target.value)} value="Cargo Vans" className="hidden peer" required="" />
                        <label htmlFor="Home Furniture & Decor" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg font-semibold text-center">Cargo Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Outdoor Living & Garden" name="hostings" onClick={(e)=>setData(e.target.value)} value="Cube Vans" className="hidden peer" required="" />
                        <label htmlFor="Outdoor Living & Garden" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Cube Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Improvement & Building Materials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Straight Truck" className="hidden peer" required="" />
                        <label htmlFor="Home Improvement & Building Materials" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Straight Truck</div>
                            </div>

                        </label>
                    </li>
                </ul>
                <footer className="w-full  bg-white fixed left-0 bottom-0 flex flex-col justify-center">
                  <div className="basis-full"> 
                   <button onClick={() =>window.location.href = "/schedule"} className="w-1/2 py-2">
                       Schedule Order
                   </button>
                   <button onClick={clicked}
                   className="w-1/2 py-2 bg-blue-500 text-white">
                       Request Now
                   </button>
                   </div> 
                   <div className="basis-full flex"> 
                   <button className="w-1/2 grid justify-items-center" onClick={() =>window.location.href = "/cdashboardp"} >
                   <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png" alt="home"/>
                       Home
                   </button>
                   <button className="w-1/2 grid justify-items-center" onClick={() =>window.location.href = "/cdashboardo"}>
                   <img src="https://img.icons8.com/material-outlined/24/000000/purchase-order.png" alt="order"/>
                       Orders
                   </button>
                   </div> 
                </footer>
                
            </section>
        )
  };

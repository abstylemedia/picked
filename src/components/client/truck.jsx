import {React,useState} from 'react';
export default function Truck () {
  const [data,setData] = useState("");
  function clicked(e){
    e.preventDefault()
    if(data !==""){
        const km = sessionStorage.getItem('km');
      if(data === "Mini Vans"){
        
        const totalkm = (km * 0.50)+ 10;
        const gst = (totalkm * 0.15);
                const subtotal = totalkm + gst;
            
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
            sessionStorage.setItem('gst', gst);
            sessionStorage.setItem('subtotal', subtotal);
        window.location.href = "/additem";
        }
        else if(data === "Cargo Vans"){
            
            const totalkm = (km * 0.50)+ 15;
            const gst = (totalkm * 0.15);
                const subtotal = totalkm + gst;
            
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
            sessionStorage.setItem('gst', gst);
            sessionStorage.setItem('subtotal', subtotal);
        window.location.href = "/additem";

        }else if(data === "Cube Vans"){
            
            const totalkm = (km * 0.75)+ 25;
            const gst = (totalkm * 0.15);
                const subtotal = totalkm + gst;
            
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
            sessionStorage.setItem('gst', gst);
            sessionStorage.setItem('subtotal', subtotal);
        window.location.href = "/additem";

        }else if(data === "Straight Truck"){
            
            const totalkm = (km * 0.90)+ 35;
            
               
                const gst = (totalkm * 0.15);
                const subtotal = totalkm + gst;
            
            sessionStorage.setItem('Truck', data);
            sessionStorage.setItem('total', totalkm);
            sessionStorage.setItem('gst', gst);
            sessionStorage.setItem('subtotal', subtotal);
        window.location.href = "/additem";
        }
      }
    else{
      console.log("not selected");

    }
  }

    
  
  
  
        return(
            <div className=" bg-slate-100 grid grid-cols-1  h-screen content-between">
                <div className="relative">
                  <div className="sticky top-0 left-0 right-0 text-2xl lg:text-6xl shadow-lg font-bold text-center bg-white p-2">Select Your Ride</div>
                </div>
                <ul className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center  px-8 md:px-40 lg:px-80 2xl:px-96 ">
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Grocery, Food & Home Essentials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Mini Vans" className="hidden peer" required="" />
                        <label htmlFor="Grocery, Food & Home Essentials" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full py-7">
                            <svg className='h-5 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">\<path d="M64 104v88h96V96H72c-4.4 0-8 3.6-8 8zm482 88L465.1 96H384v96H546zm-226 0V96H224v96h96zM592 384H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H48c-26.5 0-48-21.5-48-48V104C0 64.2 32.2 32 72 32H192 352 465.1c18.9 0 36.8 8.3 49 22.8L625 186.5c9.7 11.5 15 26.1 15 41.2V336c0 26.5-21.5 48-48 48zm-64 0c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM160 432c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z"/></svg>
                                <div className="w-full text-lg font-semibold text-center"> Mini Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Furniture & Decor" name="hostings" onClick={(e)=>setData(e.target.value)} value="Cargo Vans" className="hidden peer" required="" />
                        <label htmlFor="Home Furniture & Decor" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full py-7">
                            <svg className='h-5 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M32 96c0-35.3 28.7-64 64-64H320c23.7 0 44.4 12.9 55.4 32h51.8c25.3 0 48.2 14.9 58.5 38l52.8 118.8c.5 1.1 .9 2.1 1.3 3.2H544c35.3 0 64 28.7 64 64v32c17.7 0 32 14.3 32 32s-14.3 32-32 32H576c0 53-43 96-96 96s-96-43-96-96H256c0 53-43 96-96 96s-96-43-96-96H32c-17.7 0-32-14.3-32-32s14.3-32 32-32V288c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32V96zM384 224h85.9l-42.7-96H384v96zM160 432c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm368-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
                                <div className="w-full text-lg font-semibold text-center">Cargo Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Outdoor Living & Garden" name="hostings" onClick={(e)=>setData(e.target.value)} value="Cube Vans" className="hidden peer" required="" />
                        <label htmlFor="Outdoor Living & Garden" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full py-7">
                            <svg className='h-5 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM208 416c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zm272 48c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Cube Vans</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Improvement & Building Materials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Straight Truck" className="hidden peer" required="" />
                        <label htmlFor="Home Improvement & Building Materials" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full py-7">
                            <svg className='h-5 w-full ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 80C0 35.8 35.8 0 80 0H432c44.2 0 80 35.8 80 80V368c0 26.2-12.6 49.4-32 64v48c0 17.7-14.3 32-32 32H416c-17.7 0-32-14.3-32-32V448H128v32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V432C12.6 417.4 0 394.2 0 368V80zm129.9 72.2L112 224H400l-17.9-71.8C378.5 138 365.7 128 351 128H161c-14.7 0-27.5 10-31 24.2zM128 320c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                                <div className="w-full  text-lg text-center font-semibold">Straight Truck</div>
                            </div>

                        </label>
                    </li>
                </ul>
                <footer className="w-full  bg-white  flex flex-col justify-center">
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
                
            </div>
        )
  };

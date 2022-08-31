import {React,useState} from 'react';
const Main = () =>{
  const [data,setData] = useState("");
  function clicked(e){
    e.preventDefault()
    if(data !==""){
      if(data !== undefined){
        
        console.log(data);
        sessionStorage.setItem('category', data);
        window.location.href = "/pickserach";
        }
        else{
          console.log("undefine");
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
                <div className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center pt-4 pb-28 px-8 md:px-40 lg:px-80 2xl:px-96 ">
                  <button value="Grocery, Food & Home Essentials" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Grocery, Food & Home Essentials
                    
                  </button>
                  <button value="Home Furniture & Decor" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Home Furniture & Decor
                    
                  </button>
                  <button value="Outdoor Living & Garden" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Outdoor Living & Garden
                    
                  </button>
                  <button value="Home Improvement & Building Materials" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Home Improvement & Building Materials
                    
                  </button>
                  <button value="Electronics, TV & Computers" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Electronics, TV & Computers
                    
                  </button>
                  <button value="Office Supplies" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Office Supplies
                    
                  </button>
                  <button value="Pet Food & Care" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Pet Food & <br/>Care
                    
                  </button>
                  <button value="Kids & Baby" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Kids & Baby
                    
                  </button>
                  <button value="Small Appliance" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Small Appliance
                    
                  </button>
                  <button value="Clothing" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Clothing
                  </button>
                  <button value="Parcel" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Parcel
                  </button>
                  <button value="Documents" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Documents
                  </button>
                  <button value="Dry Cleaning" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Dry Cleaning
                  </button>
                  <button value="Floral & Gifts" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Floral & Gifts
                  </button>
                  <button value="Video Games" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Video Games
                  </button>
                  <button value="Automotive" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Automotive
                  </button>
                  <button value="Heath & Beauty" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Heath & Beauty
                  </button>
                  <button value="Others" onClick={(e)=>setData(e.target.value)} className="grid justify-items-center items-center place-items-center rounded-lg shadow-xl bg-white focus:outline-none  focus:bg-blue-500 focus:text-white py-4 md:py-20">
                    
                      <img src="https://img.icons8.com/external-vitaliy-gorbachev-fill-vitaly-gorbachev/60/000000/external-furniture-home-office-vitaliy-gorbachev-fill-vitaly-gorbachev.png" className="w-1/6" alt="pickup"/>
                      Others
                  </button>
                </div>
                <footer className="w-full  bg-white fixed left-0 bottom-0 flex flex-col justify-center">
                  <div className="basis-full"> 
                   <button className="w-1/2 py-2">
                       Schedule Order
                   </button>
                   <button onClick={clicked}
                   className="w-1/2 py-2 bg-blue-500 text-white">
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
            </section>
        )
  };
export default Main;
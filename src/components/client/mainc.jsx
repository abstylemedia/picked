import {React,useState} from 'react';


const Main = () =>{
  const [data,setData] = useState("");
  function clicked(e){
    e.preventDefault()
    if(data !==""){
      if(data !== undefined){
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
                <ul className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center pt-4 pb-28 px-8 md:px-40 lg:px-80 2xl:px-96 ">
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Grocery, Food & Home Essentials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Grocery, Food & Home Essentials" className="hidden peer" required="" />
                        <label htmlFor="Grocery, Food & Home Essentials" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full ">
                                <div className="w-full text-lg font-semibold text-center">Grocery, Food &</div>
                                <div className="w-full text-lg font-semibold text-center">Home Essentials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Furniture & Decor" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Furniture & Decor" className="hidden peer" required="" />
                        <label htmlFor="Home Furniture & Decor" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg font-semibold text-center">Home Furniture &</div>
                                <div className="w-full text-lg font-semibold text-center">Decor</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Outdoor Living & Garden" name="hostings" onClick={(e)=>setData(e.target.value)} value="Outdoor Living & Garden" className="hidden peer" required="" />
                        <label htmlFor="Outdoor Living & Garden" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Outdoor Living &</div>
                                <div className="w-full text-lg text-center font-semibold">Garden</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Improvement & Building Materials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Improvement & Building Materials" className="hidden peer" required="" />
                        <label htmlFor="Home Improvement & Building Materials" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Home Improvement &</div>
                                <div className="w-full text-lg text-center font-semibold"> Building Materials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Electronics, TV & Computers" name="hostings" onClick={(e)=>setData(e.target.value)} value="Electronics, TV & Computers" className="hidden peer" required="" />
                        <label htmlFor="Electronics, TV & Computers" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Electronics, TV &</div>
                                <div className="w-full text-lg text-center font-semibold">Computers</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Pet Food & Care" name="hostings" onClick={(e)=>setData(e.target.value)} value="Pet Food & Care" className="hidden peer" required="" />
                        <label htmlFor="Pet Food & Care" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Pet Food &</div>
                                <div className="w-full text-lg text-center font-semibold">Care</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Office Supplies" name="hostings" onClick={(e)=>setData(e.target.value)} value="Office Supplies" className="hidden peer" required="" />
                        <label htmlFor="Office Supplies" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Office Supplies</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Small Appliance" name="hostings" onClick={(e)=>setData(e.target.value)} value="Small Appliance" className="hidden peer" required="" />
                        <label htmlFor="Small Appliance" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Small Appliance</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Kids & Baby" name="hostings" onClick={(e)=>setData(e.target.value)} value="Kids & Baby" className="hidden peer" required="" />
                        <label htmlFor="Kids & Baby" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Kids &</div>
                                <div className="w-full text-lg text-center font-semibold">Baby</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Floral & Gifts" name="hostings" onClick={(e)=>setData(e.target.value)} value="Floral & Gifts" className="hidden peer" required="" />
                        <label htmlFor="Floral & Gifts" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg  text-center font-semibold">Floral &</div>
                                <div className="w-full text-lg text-center font-semibold">Gifts</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Clothing" name="hostings" onClick={(e)=>setData(e.target.value)} value="Clothing" className="hidden peer" required="" />
                        <label htmlFor="Clothing" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Clothing</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Parcel" name="hostings" onClick={(e)=>setData(e.target.value)} value="Parcel" className="hidden peer" required="" />
                        <label htmlFor="Parcel" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Parcel</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Documents" name="hostings" onClick={(e)=>setData(e.target.value)} value="Documents" className="hidden peer" required="" />
                        <label htmlFor="Documents" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Documents</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Dry Cleaning" name="hostings" onClick={(e)=>setData(e.target.value)} value="Dry Cleaning" className="hidden peer" required="" />
                        <label htmlFor="Dry Cleaning" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Dry Cleaning</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Video Games" name="hostings" onClick={(e)=>setData(e.target.value)} value="Video Games" className="hidden peer" required="" />
                        <label htmlFor="Video Games" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Video Games</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Automotive" name="hostings" onClick={(e)=>setData(e.target.value)} value="Automotive" className="hidden peer" required="" />
                        <label htmlFor="Automotive" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Automotive</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Heath & Beauty" name="hostings" onClick={(e)=>setData(e.target.value)} value="Heath & Beauty" className="hidden peer" required="" />
                        <label htmlFor="Heath & Beauty" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Health & Beauty</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Others" name="hostings" onClick={(e)=>setData(e.target.value)} value="Others" className="hidden peer" required="" />
                        <label htmlFor="Others" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                                <div className="w-full text-lg text-center font-semibold">Others</div>
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
export default Main;
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
                <ul className="grid gap-x-4 gap-y-8 grid-cols-2 justify-center pt-4 pb-28 px-8 md:px-40 lg:px-80 2xl:px-96 ">
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Grocery, Food & Home Essentials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Grocery, Food & Home Essentials" class="hidden peer" required="" />
                        <label for="Grocery, Food & Home Essentials" class="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full ">
                                <div class="w-full text-lg font-semibold text-center">Grocery, Food &</div>
                                <div class="w-full text-lg font-semibold text-center">Home Essentials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Furniture & Decor" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Furniture & Decor" class="hidden peer" required="" />
                        <label for="Home Furniture & Decor" class="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg font-semibold text-center">Home Furniture &</div>
                                <div class="w-full text-lg font-semibold text-center">Decor</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Outdoor Living & Garden" name="hostings" onClick={(e)=>setData(e.target.value)} value="Outdoor Living & Garden" class="hidden peer" required="" />
                        <label for="Outdoor Living & Garden" class="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Outdoor Living &</div>
                                <div class="w-full text-lg text-center font-semibold">Garden</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Improvement & Building Materials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Improvement & Building Materials" class="hidden peer" required="" />
                        <label for="Home Improvement & Building Materials" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Home Improvement &</div>
                                <div class="w-full text-lg text-center font-semibold"> Building Materials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Electronics, TV & Computers" name="hostings" onClick={(e)=>setData(e.target.value)} value="Electronics, TV & Computers" class="hidden peer" required="" />
                        <label for="Electronics, TV & Computers" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Electronics, TV &</div>
                                <div class="w-full text-lg text-center font-semibold">Computers</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Pet Food & Care" name="hostings" onClick={(e)=>setData(e.target.value)} value="Pet Food & Care" class="hidden peer" required="" />
                        <label for="Pet Food & Care" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Pet Food &</div>
                                <div class="w-full text-lg text-center font-semibold">Care</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Office Supplies" name="hostings" onClick={(e)=>setData(e.target.value)} value="Office Supplies" class="hidden peer" required="" />
                        <label for="Office Supplies" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Office Supplies</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Small Appliance" name="hostings" onClick={(e)=>setData(e.target.value)} value="Small Appliance" class="hidden peer" required="" />
                        <label for="Small Appliance" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Small Appliance</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Kids & Baby" name="hostings" onClick={(e)=>setData(e.target.value)} value="Kids & Baby" class="hidden peer" required="" />
                        <label for="Kids & Baby" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Kids &</div>
                                <div class="w-full text-lg text-center font-semibold">Baby</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Floral & Gifts" name="hostings" onClick={(e)=>setData(e.target.value)} value="Floral & Gifts" class="hidden peer" required="" />
                        <label for="Floral & Gifts" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg  text-center font-semibold">Floral &</div>
                                <div class="w-full text-lg text-center font-semibold">Gifts</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Clothing" name="hostings" onClick={(e)=>setData(e.target.value)} value="Clothing" class="hidden peer" required="" />
                        <label for="Clothing" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Clothing</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Parcel" name="hostings" onClick={(e)=>setData(e.target.value)} value="Parcel" class="hidden peer" required="" />
                        <label for="Parcel" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Parcel</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Documents" name="hostings" onClick={(e)=>setData(e.target.value)} value="Documents" class="hidden peer" required="" />
                        <label for="Documents" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Documents</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Dry Cleaning" name="hostings" onClick={(e)=>setData(e.target.value)} value="Dry Cleaning" class="hidden peer" required="" />
                        <label for="Dry Cleaning" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Dry Cleaning</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Video Games" name="hostings" onClick={(e)=>setData(e.target.value)} value="Video Games" class="hidden peer" required="" />
                        <label for="Video Games" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Video Games</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Automotive" name="hostings" onClick={(e)=>setData(e.target.value)} value="Automotive" class="hidden peer" required="" />
                        <label for="Automotive" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Automotive</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Heath & Beauty" name="hostings" onClick={(e)=>setData(e.target.value)} value="Heath & Beauty" class="hidden peer" required="" />
                        <label for="Heath & Beauty" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Heath & Beauty</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Others" name="hostings" onClick={(e)=>setData(e.target.value)} value="Others" class="hidden peer" required="" />
                        <label for="Others" class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div class="block w-full">
                                <div class="w-full text-lg text-center font-semibold">Others</div>
                            </div>

                        </label>
                    </li>
                </ul>
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
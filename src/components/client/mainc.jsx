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
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H76.1l60.3 316.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H179.9l-9.1-48h317c14.3 0 26.9-9.5 30.8-23.3l54-192C578.3 52.3 563 32 541.8 32H122l-2.4-12.5C117.4 8.2 107.5 0 96 0H24zM176 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm336-48c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48z"/></svg>
                                <div className="w-full text-lg font-semibold text-center">Grocery, Food &</div>
                                <div className="w-full text-lg font-semibold text-center">Home Essentials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Furniture & Decor" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Furniture & Decor" className="hidden peer" required="" />
                        <label htmlFor="Home Furniture & Decor" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M248 48V256h48V58.7c23.9 13.8 40 39.7 40 69.3V256h48V128C384 57.3 326.7 0 256 0H192C121.3 0 64 57.3 64 128V256h48V128c0-29.6 16.1-55.5 40-69.3V256h48V48h48zM48 288c-12.1 0-23.2 6.8-28.6 17.7l-16 32c-5 9.9-4.4 21.7 1.4 31.1S20.9 384 32 384l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32V384H352v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384c11.1 0 21.4-5.7 27.2-15.2s6.4-21.2 1.4-31.1l-16-32C423.2 294.8 412.1 288 400 288H48z"/></svg>
                                <div className="w-full text-lg font-semibold text-center">Home Furniture &</div>
                                <div className="w-full text-lg font-semibold text-center">Decor</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Outdoor Living & Garden" name="hostings" onClick={(e)=>setData(e.target.value)} value="Outdoor Living & Garden" className="hidden peer" required="" />
                        <label htmlFor="Outdoor Living & Garden" className="inline-flex justify-between items-center rounded-lg p-5 w-full text-gray-500 bg-white border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M240.8 4.8C250.3 10.6 256 20.9 256 32v72h89c3.6-13.8 16.1-24 31-24h88c26.5 0 48 21.5 48 48s-21.5 48-48 48H376c-14.9 0-27.4-10.2-31-24H256v72c0 11.1-5.7 21.4-15.2 27.2s-21.2 6.4-31.1 1.4l-192-96C6.8 151.2 0 140.1 0 128s6.8-23.2 17.7-28.6l192-96c9.9-5 21.7-4.4 31.1 1.4zM288 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H320c-17.7 0-32-14.3-32-32V256zM32 384h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32zm192 0H480c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Outdoor Living &</div>
                                <div className="w-full text-lg text-center font-semibold">Garden</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Home Improvement & Building Materials" name="hostings" onClick={(e)=>setData(e.target.value)} value="Home Improvement & Building Materials" className="hidden peer" required="" />
                        <label htmlFor="Home Improvement & Building Materials" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M88 104C88 95.16 95.16 88 104 88H152C160.8 88 168 95.16 168 104V152C168 160.8 160.8 168 152 168H104C95.16 168 88 160.8 88 152V104zM280 88C288.8 88 296 95.16 296 104V152C296 160.8 288.8 168 280 168H232C223.2 168 216 160.8 216 152V104C216 95.16 223.2 88 232 88H280zM88 232C88 223.2 95.16 216 104 216H152C160.8 216 168 223.2 168 232V280C168 288.8 160.8 296 152 296H104C95.16 296 88 288.8 88 280V232zM280 216C288.8 216 296 223.2 296 232V280C296 288.8 288.8 296 280 296H232C223.2 296 216 288.8 216 280V232C216 223.2 223.2 216 232 216H280zM0 64C0 28.65 28.65 0 64 0H320C355.3 0 384 28.65 384 64V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64zM48 64V448C48 456.8 55.16 464 64 464H144V400C144 373.5 165.5 352 192 352C218.5 352 240 373.5 240 400V464H320C328.8 464 336 456.8 336 448V64C336 55.16 328.8 48 320 48H64C55.16 48 48 55.16 48 64z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Home Improvement &</div>
                                <div className="w-full text-lg text-center font-semibold"> Building Materials</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Electronics, TV & Computers" name="hostings" onClick={(e)=>setData(e.target.value)} value="Electronics, TV & Computers" className="hidden peer" required="" />
                        <label htmlFor="Electronics, TV & Computers" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Electronics, TV &</div>
                                <div className="w-full text-lg text-center font-semibold">Computers</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Pet Food & Care" name="hostings" onClick={(e)=>setData(e.target.value)} value="Pet Food & Care" className="hidden peer" required="" />
                        <label htmlFor="Pet Food & Care" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Pet Food &</div>
                                <div className="w-full text-lg text-center font-semibold">Care</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Office Supplies" name="hostings" onClick={(e)=>setData(e.target.value)} value="Office Supplies" className="hidden peer" required="" />
                        <label htmlFor="Office Supplies" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Office Supplies</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Small Appliance" name="hostings" onClick={(e)=>setData(e.target.value)} value="Small Appliance" className="hidden peer" required="" />
                        <label htmlFor="Small Appliance" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M0 64C0 28.7 28.7 0 64 0h64 32H470.1c21.1 0 36.4 20.1 30.9 40.4L494.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H485.8l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H459.6l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L416 352H160l-8.7-96H64c-35.3 0-64-28.7-64-64V64zM145.5 192L133.8 64H64V192h81.5zM144 384H432c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V432c0-26.5 21.5-48 48-48zm144 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zM0 64C0 28.7 28.7 0 64 0h64 32H470.1c21.1 0 36.4 20.1 30.9 40.4L494.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H485.8l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16H459.6l-17.5 64H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h97.5L416 352H160l-8.7-96H64c-35.3 0-64-28.7-64-64V64zM145.5 192L133.8 64H64V192h81.5zM144 384H432c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48H144c-26.5 0-48-21.5-48-48V432c0-26.5 21.5-48 48-48zm144 96c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Small Appliance</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Kids & Baby" name="hostings" onClick={(e)=>setData(e.target.value)} value="Kids & Baby" className="hidden peer" required="" />
                        <label htmlFor="Kids & Baby" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 192H.1C2.7 117.9 41.3 52.9 99 14.1c13.3-8.9 30.8-4.3 39.9 8.8L256 192zm128-32c0-35.3 28.7-64 64-64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0v64c0 25.2-5.8 50.2-17 73.5s-27.8 44.5-48.6 62.3s-45.5 32-72.7 41.6S253.4 416 224 416s-58.5-5-85.7-14.6s-51.9-23.8-72.7-41.6s-37.3-39-48.6-62.3S0 249.2 0 224l224 0 160 0V160zM80 512c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48zm336-48c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Kids &</div>
                                <div className="w-full text-lg text-center font-semibold">Baby</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Floral & Gifts" name="hostings" onClick={(e)=>setData(e.target.value)} value="Floral & Gifts" className="hidden peer" required="" />
                        <label htmlFor="Floral & Gifts" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M190.5 68.8L225.3 128H224 152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8zM64 88c0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H480c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32H438.4c6.1-12 9.6-25.6 9.6-40c0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4L256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0H152C103.4 0 64 39.4 64 88zm336 0c0 22.1-17.9 40-40 40H288h-1.3l34.8-59.2C329.1 55.9 342.9 48 357.8 48H360c22.1 0 40 17.9 40 40zM32 288V464c0 26.5 21.5 48 48 48H224V288H32zM288 512H432c26.5 0 48-21.5 48-48V288H288V512z"/></svg>
                                <div className="w-full text-lg  text-center font-semibold">Floral &</div>
                                <div className="w-full text-lg text-center font-semibold">Gifts</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Clothing" name="hostings" onClick={(e)=>setData(e.target.value)} value="Clothing" className="hidden peer" required="" />
                        <label htmlFor="Clothing" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Clothing</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Parcel" name="hostings" onClick={(e)=>setData(e.target.value)} value="Parcel" className="hidden peer" required="" />
                        <label htmlFor="Parcel" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M50.7 58.5L0 160H208V32H93.7C75.5 32 58.9 42.3 50.7 58.5zM240 160H448L397.3 58.5C389.1 42.3 372.5 32 354.3 32H240V160zm208 32H0V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V192z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Parcel</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Documents" name="hostings" onClick={(e)=>setData(e.target.value)} value="Documents" className="hidden peer" required="" />
                        <label htmlFor="Documents" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Documents</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Dry Cleaning" name="hostings" onClick={(e)=>setData(e.target.value)} value="Dry Cleaning" className="hidden peer" required="" />
                        <label htmlFor="Dry Cleaning" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.1 237.4L151.2 69.7C168.6 79.7 192.6 88 224 88s55.4-8.3 72.8-18.3L226.5 280.6c-1.6 4.9-2.5 10-2.5 15.2V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V270.5c0-9.5-2.8-18.7-8.1-26.6l-47.9-71.8c-5.3-7.9-8.1-17.1-8.1-26.6V128 54.3 48c0-26.5-21.5-48-48-48h-4.5c-.2 0-.4 0-.6 0c-.4 0-.8 0-1.2 0C311 0 295.7 9.7 285.7 18.8C276.4 27.2 257.2 40 224 40s-52.4-12.8-61.7-21.2C152.3 9.7 137 0 118.3 0c-.4 0-.8 0-1.2 0c-.2 0-.4 0-.6 0H112C85.5 0 64 21.5 64 48v6.3V128v17.5c0 9.5-2.8 18.7-8.1 26.6L8.1 243.9C2.8 251.8 0 261.1 0 270.5V464c0 26.5 21.5 48 48 48H176c9.9 0 19-3 26.7-8.1C195.9 492.2 192 478.5 192 464V295.8c0-8.6 1.4-17.1 4.1-25.3l11-33.1zM347.3 356.7l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-48-48c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0zm-294.6 48l48-48c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-48 48c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Dry Cleaning</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Video Games" name="hostings" onClick={(e)=>setData(e.target.value)} value="Video Games" className="hidden peer" required="" />
                        <label htmlFor="Video Games" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 248c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40zm-24 56c0 22.1-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Video Games</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Automotive" name="hostings" onClick={(e)=>setData(e.target.value)} value="Automotive" className="hidden peer" required="" />
                        <label htmlFor="Automotive" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zm288 32c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Automotive</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Heath & Beauty" name="hostings" onClick={(e)=>setData(e.target.value)} value="Heath & Beauty" className="hidden peer" required="" />
                        <label htmlFor="Heath & Beauty" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368c0-79.5-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>
                                <div className="w-full text-lg text-center font-semibold">Health & Beauty</div>
                            </div>

                        </label>
                    </li>
                    <li className='shadow-xl rounded-lg'>
                        <input type="radio" id="Others" name="hostings" onClick={(e)=>setData(e.target.value)} value="Others" className="hidden peer" required="" />
                        <label htmlFor="Others" className="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border border-gray-200 cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100  h-full">                           
                            <div className="block w-full">
                            <svg  className='h-10 w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M448 96V224H288V96H448zm0 192V416H288V288H448zM224 224H64V96H224V224zM64 288H224V416H64V288zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/></svg>
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
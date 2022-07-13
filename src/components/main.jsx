const myStyle={
    backgroundImage: 
"url('/aa.gif')",
    marginTop:'',
    backgroundposition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};
// const mySty={
//     backgroundImage: 
// "url('/firt-sec-bg.png')",
//     height:'100vh',
//     backgroundRepeat: 'no-repeat',
   
    
// };
const Main = () =>{
    return(
    <div>
        <div className="p-4 lg:h-[720px]" style={myStyle}>
            <div className="lg:mt-11 md:mt-8 sm:mt-7">
               <h1 className="lg:text-6xl md:text-4xl sm:text-3xl text-white font-sans font-semibold ">Your Everything On-Demand</h1>
            </div>
                
            <div className=" mt-3">
                <h1 className="text-7xl  text-white font-sans font-semibold ">Delivery App </h1>
            </div>
            <div class="flex items-center mt-12">
                <input id="link-radio" type="radio" value="" className="w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="link-radio" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Email</label>


                <input id="phone" type="radio" value="" className="w-6 h-6 ml-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="link-radio" className="ml-2 text-xl font-medium text-gray-900 dark:text-gray-300">Phone</label>
            </div>
            <div className="flex mt-3">
                <input type="search"   className="block p-3 pl-10 mt-4  text-sm text-gray-900 bg-gray-50 rounded-full w-80 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="search" />
                
            </div>
                    
            
        </div>
        <div className="basis-full bg-neutral-800 h-96 ">
            <div className="flex items-center justify-center content-center">
                <img src="/video-image-2.jpg" alt='detail' className="ld:mt-16 md:mt-24 sm:mt-20 mt-24 lg:max-h-[340px] md:max-h-[330px] sm:max-h-[330px]" />
            </div>
        </div>
        <div className="mt-24">
            <div className=" p-6" >
            <ul className="list-none grid grid-cols-1 lg:grid-cols-4 gap-4 justify-between pb-16 ">
                    <li className="mt-2">
                    <div className=" flex-col  mx-auto bg-white  flex items-center">
                        <div className="shrink-0 ">
                            <img src="pickup-drive.jpg" alt="drive" className="rounded-full"/>
                        </div>
                    <div className="text-center ">
                        <div className=" font-medium text-black text-3xl ">Become A Pickups Driver and Earn</div>
                        <p className="text-slate-500">You have a new message!</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="flex-col max-w-sm mx-auto bg-white   flex items-center">
                        <div className="shrink-0  ">
                        <img src="store-partner.jpg" alt="store" className="rounded-full w-64" />
                        </div>
                    <div className="text-center">
                        <div class="text-3xl font-medium text-black">Become A Store Partner</div>
                        <p className="text-slate-500">You have a new message!</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="flex-col max-w-sm mx-auto bg-white flex items-center">
                        <div className="shrink-0  ">
                        <img src="daily-service.jpg" alt="daily" className="rounded-full w-64" />
                        </div>
                    <div className="text-center">
                        <div class="text-3xl font-medium text-black">Same Day Delivery Service</div>
                        <p className="text-slate-500">You have a new message!</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="flex-col max-w-sm mx-auto bg-white  flex items-center">
                        <div className="shrink-0 bg-sky-500 rounded-full ">
                         <img src="delivery.jpg" alt="delivery" className="rounded-full" />
                        </div>
                    <div className="text-center">
                        <div class="text-3xl font-medium text-black">Deliver Anything, 24/7</div>
                        <p className="text-slate-500">You have a new message!</p>
                        </div>
                    </div>
                    </li>
                   
                   
                   
                </ul>
            </div>
        </div>
        
    </div>
    );
}; 
export default Main;
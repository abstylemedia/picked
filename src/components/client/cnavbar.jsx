import {React} from 'react';
export default function Clientnav() {
 function logout (e){
    e.preventDefault();
    localStorage.clear();
            window.location.reload();
 }
  return (
    <>
        <section className='bg-gray-200 '>
            <div className='flex flex-col lg:flex-row'>
            <div className='basis-full border p-5'>
                <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md ">
                    <div className="flex flex-col items-center py-20">
                    <img src="avataaars.svg" alt="client" width={200} height={200}/>
                        <h5 className="mb-1 text-xl font-medium text-black">Hi! Bavmeen Singh</h5>
                        <span className="text-sm text-gray-500">bavmeen@bavmeen.com</span>
                    </div>
                </div>
                
                <div className="grid gap-x-4 gap-y-8 grid-cols-2 mt-9 border  ">
                    <button onClick={() => window.location.href = "/cdashboardo"}  className="w-full bg-blue-400 rounded-lg shadow-md  flex flex-col items-center py-4 mb-1 text-xl font-medium text-white">Your Orders
                    </button>
                    
                    <button  onClick={() => window.location.href = "/cdashboardp"} className="w-full  bg-blue-400 rounded-lg shadow-md flex flex-col items-center py-4 mb-1 text-xl font-medium text-white">Your Profile
                    </button>
                    
                </div>
                <div className="grid gap-x-4 gap-y-8 grid-cols-2 mt-9 border  ">
                    <button onClick={() => window.location.href = "/category"}  className="w-full bg-blue-600 rounded-lg shadow-md  flex flex-col items-center py-4 mb-1 text-xl font-medium text-white">Place New Order</button>
                    
                    <button  onClick={logout} className="w-full  bg-blue-600 rounded-lg shadow-md flex flex-col items-center py-4 mb-1 text-xl font-medium text-white">Logout</button>
                    
                </div>
                
                
            </div>
            </div>   
        </section>
    </>
  );
}

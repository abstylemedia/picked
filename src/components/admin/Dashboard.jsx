import React, { useEffect,useState }  from "react";
import Sidebar from "./Sidebar";
import axios from 'axios';

export default function   Dashboard (){
  // if (!localStorage.getItem('admin-key')){
  //   window.location.href = "/admin";
  // }
   const [users, setUsers] = useState([]);
   const [setuser, updatesetUsers] = useState([]);
  
  
  const UsersGet = () => {
    axios.get("https://pickedapi.herokuapp.com/order")
    .then(res =>{  setUsers(res.data)
      updatesetUsers(res.data)
    console.log(res.data);
      }
    ).catch((err) =>{
      console.log(err)
    })
  }
   useEffect(() => {
    UsersGet()
   }, [])
   
  // const UpdateUser = id => {
  //   window.location = '/OrderView/'+id
  // }
   const dataClick = (status) =>{
    let new_data = users.filter(name => name.status === status)
    updatesetUsers(new_data)
   }
  
    return (
        <>
        <Sidebar/>
        
        <div className='md:ml-64 -mt-2 px-1'>
            <div className="rounded-lg shadow-md">
                <div className="bg-purple-600 rounded-t-lg py-3 text-center" >
                    <h2 className="text-white text-2xl ">Order Table</h2>
                   
                </div>
                <div className=" bg-slate-300 flex py-3 justify-around text-center" >
                  <button onClick={() => dataClick('Pending')} className=" w-44 bg-red-500 rounded-lg items-center justify-center gap-4 text-sm font-light py-3">
                  Pending
                  </button>
                  
                  <button onClick={() => dataClick('Canceled')} className="w-44 bg-blue-500 rounded-lg items-center justify-center gap-4 text-sm font-light py-3">
                  Cancelled
                  </button>
                  <button  onClick={() => dataClick('Delivered')}className="w-44 bg-green-500 rounded-lg items-center justify-center gap-4 text-sm font-light py-3">
                   Delivered
                  </button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Order Number
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Category
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Status
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Item Name
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Order Date
                                    </th>
                                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-center">
                                        Operator
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {setuser.map((user) => (
                            <tr >
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {user.itemname}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {user.category}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                  <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{user.status}
                                  
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                {user.itemname}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                {user.createdAt}
                              </th>
                              
                             
                            
                              </tr>
                               ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            
        </div>
        
        </>
    );
}


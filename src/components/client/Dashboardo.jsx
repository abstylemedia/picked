import React, { useEffect,useState } from "react";
import Clientnav from "./cnavbar";
import axios from 'axios';

export default function Dashboardo () {
    
        if (!localStorage.getItem('my-key')){
            window.location.href = "/Client";
        }
        
        const [users, setUsers] = useState([]);
        useEffect(() => {
            UsersGet()
          }, [])
          const UsersGet = () => {
            axios.get("https://pickedapi.herokuapp.com/order")
            .then(res =>  {
                setUsers(res.data);
                  console.log(res.data);
                }
              )
            }
        
        return(
            <>
            <Clientnav/>
            <div className="bg-gray-200 px-4">
            <div className="overflow-x-auto bg-white rounded-md">
                        <table className="items-center w-full bg-transparent border-collapse ">
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
                                </tr>
                            </thead>
                            <tbody>
                            {users.map((element) => {
                            return element.status === "Delivered" ?
                            <tr >
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {element._id}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {element.category}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                  <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{element.status}
                                  
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {element.itemname}
                              </th>
                              <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                              {element.createdAt}
                              </th>
                            </tr>
: null;
})}
                            </tbody>
                        </table>
                </div>
            </div>
            
            
            </>
        )
    
}


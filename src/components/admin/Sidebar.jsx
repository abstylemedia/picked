import { useState } from 'react';
import AdminNavbar from './AdminNavbar';

export default function Sidebar() {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    const logout = () =>{
        localStorage.clear();
        window.location.reload(false);
    }
    return (
        <>
        <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
            />
            
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white w-64 z-10 py-4 px-6 transition-all duration-300`}
            >
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <h6 color="gray">Admin Name</h6>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4 ">
                                <button onClick={() => window.location.href = "/OrderDashboard"}
                                    className=" flex w-full justify-center  bg-purple-500 gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                                >
                                    
                                    Dashboard
                                </button>
                            </li>
                        </ul>

                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className=" px-2 rounded-lg text-white mb-2">
                                <button onClick={logout}
                                    className="flex w-full bg-red-500 rounded-lg items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    
                                    Logout
                                </button>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

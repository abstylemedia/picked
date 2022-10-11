import React, { Component  } from "react";
import Clientnav from "./cnavbar";
import Modal from './modal';

export default class Dashboardp extends Component {
    componentDidMount(){
        if (!localStorage.getItem('my-key')){
            window.location.href = "/Client";
        }
       
    }
    constructor(props) {
        super(props);
        
        this.state = {
        show: false ,

        };
        
        this.showe = this.showe.bind(this);
    }
    showe(e){
        e.preventDefault();
        
            this.setState({show : true});
        
        
            
        
        
    }
    render(){
        
        return(
            <>
            <Clientnav/>
            <div className="bg-gray-200 px-4 pb-3">
                <form className="px-4 rounded-md bg-white">
                    <div className="mb-6 p-1">
                        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">First Name</label>
                        <input type="text" id="Name" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={localStorage.getItem('userfname')} readOnly />
                    </div>
                    <div className="mb-6 p-1">
                        <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Last Name</label>
                        <input type="text" id="Name" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={localStorage.getItem('userlname')} readOnly />
                    </div>
                    <div className="mb-6 p-1">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={localStorage.getItem('useremail')} />
                    </div>
                    <div className="mb-6 p-1">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                        <input type="tel" id="phone" 
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="block p-4 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required value={localStorage.getItem('userphone')} />
                    </div>
                    <div className="mb-6 p-1">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <div className="relative">
                            <input type="password" id="password" className="block p-4  w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={localStorage.getItem('userphone')} readOnly/>
                            <button onClick={this.showe} type="submit" className="text-white absolute right-2.5 bottom-2.5  font-medium rounded-lg text-sm px-4 py-2 ">edit</button>
                        </div>
                    </div>
                </form>
            </div>
            
            <Modal show={this.state.show} >
                    <div className="border flex flex-col py-2 px-2" > 
                        <h1 className="text-4xl font-bold text-center my-2"> Change Password</h1>
                        <div className="relative mt-2">
                            <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Old Password</label>
                        </div>
                        <div className="relative mt-2">
                            <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">New Password</label>
                        </div>
                        <div className="relative mt-2">
                            <input type="text" id="floating_filled" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50  border-0 border-b-2 border-gray-300 appearance-none dark:text-white  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                            <label htmlFor="floating_filled" className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Confirm Password</label>
                        </div>
                        <div className="flex justify-center my-4">
                            <button onClick={this.clicked} className="w-1/3 py-4 bg-blue-500 text-white rounded px-3 ">
                                    Update
                            </button>
                        </div>    
                    </div>
                </Modal>
            
            </>
        )
    };
}


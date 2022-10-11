import React, { Component } from "react";
export default class PickupaddResidential extends Component {
    componentDidMount(){
        if (!sessionStorage.getItem('pickuplocation')){
            window.location.href = "/category";
        }
        
    }
    
    constructor(props) {
        
        super(props);
        this.state = {
        unit:"",
        buzzer:"",
        additional:"",
        type:"Residential",
        };
        this.clicked = this.clicked.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    clicked(e){
        e.preventDefault(); 
        if(this.state.unit && this.state.buzzer && this.state.additional &&  this.state.type  !==""){
        sessionStorage.setItem('pickunit', this.state.unit);
        sessionStorage.setItem('pickbuzzer', this.state.buzzer);
        sessionStorage.setItem('pickadd', this.state.additional);
        sessionStorage.setItem('picktype',this.state.type);
        
        window.location.href = "/dropaddc";
        }
        else{
            alert("not add");
        }
    }
    cancel(e){
        e.preventDefault();
        sessionStorage.clear();
            window.location.reload();
    }
   render(){
    
    return(
        <section className="bg-slate-100 h-screen">
            <nav className="w-screen py-5 text-center bg-blue-500 text-white">
                Pick Up Location
            </nav>
            <div className="mt-3 mb-9">
                <div className="p-2 px-4">
                    <div className="flex items-center">
                        <div className="flex justify-center items-center relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark text-white ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <p className="absolute top-0  text-center mt-14  text-xs font-medium uppercase text-blue-600">Pick Up Location</p>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark text-blue-500 ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0  text-center mt-14  text-xs font-medium uppercase text-blue-600">Drop Off Location</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark text-blue-500 ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0  text-center mt-14 text-xs font-medium uppercase text-blue-600">Add Items</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark text-blue-500 ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0  text-center mt-14 text-xs font-medium uppercase text-blue-600">Payment</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-3 pt-5">
                <div className=" rounded-md bg-white py-5 px-5">
                    <p className=" font-bold ">Enter Pick Up Location:</p>
                    <div className="mt-2 px-4 border-2 rounded">
                    <p className="text-gray-500">Pick Up Location:</p>
                    <p className="font-bold">{sessionStorage.getItem('pickuplocation')}</p>
                    
                    </div>
                    
                    <p className=" font-bold mt-2">Type of Location:</p>
                    <div className="border mt-2 rounded-2xl flex">
                        <button onClick={() =>window.location.href = "/pickupaddr"} className="basis-1/3 bg-black rounded-2xl text-white py-1" >
                            Residential
                        </button>
                        <button onClick={() =>window.location.href = "/pickupaddc"} className="basis-1/3 focus:bg-black rounded-2xl focus:text-white py-1" >
                            Commerical
                        </button>
                        <button onClick={() =>window.location.href = "/pickupaddre"} className="basis-1/3 focus:bg-black rounded-2xl focus:text-white py-1" >
                            Retail
                        </button>
                    </div>
                    <form className="mt-4">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  onChange={ (e) => this.setState({ unit: e.target.value})} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Unit/Suite Number" required />
                            </div>
                            <div className="relative z-0 mb-6 w-full group">
                                <input type="tel"  onChange={ (e) => this.setState({ buzzer: e.target.value})} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Buzzer#" required />
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full group">
                            <textarea type="text" onChange={ (e) => this.setState({ additional: e.target.value})}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-600 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Additional Details:(e.g. drop off at concierge)" required ></textarea>
                        </div>
                    </form>
                </div>
            </div>
            <footer className="w-full  bg-white
            fixed left-0 bottom-0
            flex flex-col justify-center
            ">
               <div className="basis-full"> 
                <button onClick={this.cancel} className="w-1/2 py-2">
                   Cancel Order
                </button>
                <button onClick={this.clicked} className="w-1/2 py-2 bg-blue-500 text-white">
                   Next
                </button>
                </div>
        </footer>
        
        </section>
    )
};
}

import React, { Component }  from "react";
import axios from "axios";

export default class Clogin extends Component {
        
    constructor(props) {
        
        super(props);
        this.state = {
        email: "",
        password:"",
          
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        
        e.preventDefault(); 
        
        axios.post("https://pickedapi.herokuapp.com/Clientlogin", this.state)
            .then( res => {
                
                localStorage.setItem('my-key', res.data.token);
                if (res.data.message == "ok"){
                    window.location.href = "/cdashboard";
                }else{
                    alert("User Not Found")
                }
                
                
            })
    }
   
    render(){
        
        
    return(
            <>
            <div className="bg-blue-500 flex justify-center md:pt-5 pb-6">
                <img src="servici.png" alt="cloud" className="w-72" />
            </div>
            <div className="rounded-lg -mt-6 mx-4 bg-white shadow-lg">
                <form onSubmit={this.handleSubmit}  className="py-3 px-3">
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="email" name="floating_email" onChange={ (e) => this.setState({ email: e.target.value})} 
                        id="floating_email" 
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="" 
                        required="" />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input type="password"  onChange={ (e) => this.setState({ password: e.target.value})} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-500 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required="" />
                        <label  className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div className="relative z-0 w-full -mb-7 group text-center">
                    <button type="submit" className="w-3/6 text-white bg-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center ">Login</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
};

import React, { Component }  from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const styling = {
    backgroundImage: `url('/1095.webp')`,
    backgroundposition: 'center',
    backgroundSize: 'cover',
}
export default class Alogin extends Component {
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
        
        axios.post("https://pickedapi.herokuapp.com/adminlogin", this.state)
            .then( res => {
                
                localStorage.setItem('admin-key', res.data.data);
                if (res.data.message === "ok"){
                    window.location.href = "/OrderDashboard";
                }else{
                    alert("User Not Found")
                }
                
            })
    }
   
   
    render(){
        
        
    return(
            <>
            <div className='h-screen'  style={styling}>
            <div class=" min-h-screen flex flex-col"  >
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <img src="/servici.png" className="w-32" />
                <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 class="mb-8 text-3xl text-center">Log In</h1>
                    <form  onSubmit={this.handleSubmit} >
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        
                        onChange={e => this.setState({email:e.target.value})}
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        
                        onChange={e => this.setState({password:e.target.value})}
                        placeholder="Password" />
                  

                    <button type="submit" ripple={true} class="w-full text-center py-3 rounded bg-sky-500 text-black hover:bg-green-dark focus:outline-none my-1"
                    >Add </button>
                        </form>
                    
                </div>

                <div class="text-grey-dark mt-6">
                    Don't have an account? 
                    
                    <NavLink class="no-underline border-b border-blue text-blue" to="/register">Register</NavLink>
                </div>
            </div>
        </div>
        </div>
            </>
        )
    }
};

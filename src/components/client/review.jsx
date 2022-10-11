
import React, { Component } from "react";
import axios from "axios";
export default class Review extends Component {
    componentDidMount(){
        if (!sessionStorage.getItem('droplocation')){
         window.location.href = "/category";
        }
        
    }
    constructor(props) {
        
        super(props);
        this.state = {
            email: localStorage.getItem('useremail'),
            category : sessionStorage.getItem('category'),
            picksearch: sessionStorage.getItem('pickuplocation'),
            pickuptype: sessionStorage.getItem('picktype'),
            pickupunit: sessionStorage.getItem('pickunit'),
            pickupbuzzer: sessionStorage.getItem('pickbuzzer'),
            pickupadditional: sessionStorage.getItem('pickadd'),
            dropsearch: sessionStorage.getItem('droplocation'),
            droptype: sessionStorage.getItem('droptype'),
            dropunit: sessionStorage.getItem('dropunit'),
            dropbuzzer: sessionStorage.getItem('dropbuzzer'),
            dropadditional: sessionStorage.getItem('dropadd'),
            itemname:sessionStorage.getItem('itemname'),dimensions:sessionStorage.getItem('dimensions'),dimensionslength:sessionStorage.getItem('length'),dimensionsheight:sessionStorage.getItem('height'),dimensionswidth:sessionStorage.getItem('width'),
            itemweight:sessionStorage.getItem('weightn'),itemweighttype:sessionStorage.getItem('weight'),delivery:sessionStorage.getItem('deliverytype'),
            selectedFile: "",
        };
        this.clicked = this.clicked.bind(this);
    }
    clicked(e){
        e.preventDefault(); 
        console.log(this.state);
        axios.post("https://pickedapi.herokuapp.com/order", this.state)
        .then( res => {
            alert(res.data.message);
            sessionStorage.clear();
            window.location.reload();
        })
        
    }
   render(){
    
    return(
        <section className="bg-slate-100 h-fit">
            <nav className="w-screen py-5 text-center bg-blue-500 text-white">
                Order Review
            </nav>
            <div className="px-3 pt-5 pb-11">
                <p><span className="font-bold my-2">Category:</span> {sessionStorage.getItem('category')}</p>
                <p className="font-bold my-2">Location:</p>
                <div className=" rounded-md bg-white py-5 px-5 mt-2 flex flex-col">
                    <p className="text-gray-500 my-1">Pick Up Location:</p>
                    <p className="font-bold">{sessionStorage.getItem('pickuplocation')}</p> 
                </div>
                <div className="rounded-md mt-2 bg-white py-5 px-5 mb-4 flex flex-col">
                    <p className="text-gray-500 my-1">Drop Off Location:</p>
                    <p className="font-bold">{sessionStorage.getItem('droplocation')}</p> 
                </div>
                <p className="font-bold">Total Items:</p>
                <div className=" rounded-md bg-white py-5 px-5 flex flex-col content-start">
                    <p className="font-bold flex justify-between my-1"><span>{sessionStorage.getItem('itemname')}</span> <span>Type: <span className="text-gray-500 font-normal">item</span></span></p>
                    <p className="text-gray-500 my-1"><span className="font-bold text-black">Dimensions:</span> {sessionStorage.getItem('dimensions')}</p>
                    <p className="text-gray-500 flex space-x-9 my-1"><span>Length: {sessionStorage.getItem('length')}</span> <span>Width: {sessionStorage.getItem('width')}</span>  <span>Height {sessionStorage.getItem('height')}</span></p>
                    <p className="text-gray-500 my-1"><span className="font-bold text-black">Dimensions:</span> {sessionStorage.getItem('weight')}</p>
                    <p className="text-gray-500 my-1">Weight: {sessionStorage.getItem('weightn')}</p> 
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="rounded-md bg-white w-2/3 flex justify-center items-center">
                        <label for="dropzone-file" className="flex flex-col justify-center items-center w-full  rounded-lg  cursor-pointer hover:bg-gray-100">
                            <div className="flex flex-col justify-center items-center ">
                                <p className="text-gray-500 py-4">Add Receipt & Item Picture</p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" onChange={({ base64 })=>this.setState({selectedFile: base64 })}/>
                        </label>
                    </div>
                </div>
                <p className="font-bold">Contact Info:</p>
                <div className=" rounded-md bg-white py-5 px-5 flex flex-col content-start">
                    <p className="text-gray-500 my-1"><span className="font-bold text-black">Phone Number:</span> {localStorage.getItem('userphone')}</p>
                    <p className="text-gray-500 my-1"><span className="font-bold text-black">Email:</span> {localStorage.getItem('useremail')}</p>
                     
                </div>
                <div className=" rounded-md bg-white py-5 px-5 mt-2 flex flex-col content-start">
                    <p className="font-bold flex justify-between my-1"><span>Sub Total:</span>  <span className="text-gray-500 font-normal">{sessionStorage.getItem('total')}</span></p> 
                    <p className="font-bold flex justify-between my-1"><span>Gst:</span>  <span className="text-gray-500 font-normal">{sessionStorage.getItem('gst')}</span></p>
                    <p className="font-bold flex border-t-2 justify-between my-1"><span>Total:</span>  <span className="text-gray-500 font-normal">{sessionStorage.getItem('subtotal')}</span></p>
                </div>
            </div>
            <footer className="w-full bg-white fixed left-0 bottom-0 flex flex-col justify-center">
                <div className="basis-full"> 
                    <button onClick={() => sessionStorage.clear()} className="w-1/2 py-2">
                        Cancel Order
                    </button>
                    <button onClick={this.clicked} className="w-1/2 py-2 bg-blue-500 text-white">
                        Place Order
                    </button>
                </div>
            </footer>
            
        </section>
    )
    };
}

import React, { Component  } from "react";
import Modal from './modal';

export default class additem extends Component {
    componentDidMount(){
        if (!sessionStorage.getItem('droplocation')){
            window.location.href = "/category";
        }
    }
    constructor(props) {
        super(props);
        
        this.state = {
        show: false ,
        itemname: "",
        dimensions:"",
        length:"",
        width:"",
        height:"",
        weight:"",
        weightn:"",
        type:"",

        };
        this.clicked = this.clicked.bind(this);
        this.showe = this.showe.bind(this);
    }
    showe(e){
        e.preventDefault();
        if(this.state.itemname && this.state.dimensions && this.state.length && this.state.width && this.state.height && this.state.weight && this.state.weightn && this.state.button !==""){
            this.setState({show : true});
        }
        else{
            alert("not add");
        }
        
    }
    
    clicked(e){
        e.preventDefault(); 
        if(this.state.type !==""){
            console.log(this.state.type);
            sessionStorage.setItem('itemname', this.state.itemname);
            sessionStorage.setItem('dimensions', this.state.dimensions);
            sessionStorage.setItem('length', this.state.length);
            sessionStorage.setItem('width', this.state.width); 
            sessionStorage.setItem('height',this.state.height);
            sessionStorage.setItem('weight',this.state.weight);
            sessionStorage.setItem('weightn',this.state.weightn);
            sessionStorage.setItem('dropbutton',this.state.button);
            sessionStorage.setItem('deliverytype',this.state.type);
            window.location.href = "/review";
        }
        else{
            alert("not add");
        }
    }
    render(){
        
        return(
            <>
            
            <section className="bg-slate-100 h-screen">
                <nav className="w-screen py-5 text-center bg-blue-500 text-white">
                    Add Item
                </nav>
                <div className="text-center"><p className=" font-bold ">Category:      
                <span className="font-normal">{sessionStorage.getItem('category')}</span></p></div>
                <div className="px-3 pt-5">
                    <div className=" rounded-md bg-white py-5 px-10">
                        <div className="relative z-0 mb-6 w-full pb-4 group border-b-2">
                            <input type="text"  onChange={ (e) => this.setState({ itemname: e.target.value})}
                            className="block py-2.5 px-1  w-full text-sm text-gray-900 bg-transparent border rounded-sm border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 " placeholder="Enter Item Name" required />
                        </div>
                        <div className="relative z-0 mb-6 w-full pb-4 flex">
                            <div className="basis-full md:basis-1/2  text-center flex items-center">
                                <p className="" >Dimensions:</p>
                                <ul className="border rounded-2xl basis-1/2  flex ">  
                                    <li className='rounded-2xl basis-1/2'>
                                        <input type="radio" id="CM" name="Dimensions" onClick={(e)=>this.setState({ dimensions: e.target.value})} value="CM" class="hidden peer" required="" />
                                        <label for="CM" class="inline-flex justify-between items-center w-full text-gray-500 rounded-2xl cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 h-full">                           
                                            <div class="block w-full">
                                                <div class="w-full text-lg text-center font-semibold">CM</div>
                                            </div>

                                        </label>
                                    </li>
                                    <li className='rounded-2xl basis-1/2'>
                                        <input type="radio" id="Inch" name="Dimensions" onClick={(e)=>this.setState({ dimensions: e.target.value})} value="Inch" class="hidden peer" required="" />
                                        <label for="Inch" class="inline-flex justify-between items-center w-full text-gray-500  rounded-2xl cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 h-full">                           
                                            <div class="block w-full">
                                                <div class="w-full text-lg text-center font-semibold">Inch</div>
                                            </div>

                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 border-b-2">
                            <div className="flex relative z-0 mb-6 w-full group">
                                <label >Length:</label>
                                <input type="tel" onChange={ (e) => this.setState({ length: e.target.value})} className=" w-full text-center text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  " />
                            </div>
                            <div className="flex relative z-0 mb-6 w-full group">
                                <label >Width:</label>
                                <input type="tel"  onChange={ (e) => this.setState({ width: e.target.value})} className=" w-full text-center text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  " />
                            </div>
                            <div className="flex relative z-0 mb-6 w-full group">
                                <label >Height:</label>
                                <input type="tel" onChange={ (e) => this.setState({ height: e.target.value})} className="text-center w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  " />
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full mt-5 pb-4 border-b-2 flex">
                            <div className="basis-full md:basis-1/2  text-center flex items-center">
                                <p>Weight:</p>
                                <ul className="border rounded-2xl basis-1/2  flex ">
                                    <li className='rounded-2xl basis-1/2'>
                                        <input type="radio" id="LB" name="weight" onClick={(e)=>this.setState({ weight: e.target.value})} value="LB" class="hidden peer" required="" />
                                        <label for="LB" class="inline-flex justify-between items-center w-full text-gray-500 rounded-2xl cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 h-full">                           
                                            <div class="block w-full">
                                                <div class="w-full text-lg text-center font-semibold">LB</div>
                                            </div>

                                        </label>
                                    </li>
                                    <li className='rounded-2xl basis-1/2'>
                                        <input type="radio" id="KG" name="weight" onClick={(e)=>this.setState({ weight: e.target.value})} value="KG" class="hidden peer" required="" />
                                        <label for="KG" class="inline-flex justify-between items-center w-full text-gray-500  rounded-2xl cursor-pointer  peer-checked:bg-black peer-checked:text-white hover:text-gray-600 hover:bg-gray-100 h-full">                           
                                            <div class="block w-full">
                                                <div class="w-full text-lg text-center font-semibold">KG</div>
                                            </div>

                                        </label>
                                    </li>  
                                </ul>
                                <div className="flex w-full ">
                                <input type="tel" onChange={(e)=>this.setState({ weightn: e.target.value})} className=" w-full text-center text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600  " />
                                </div>
                            </div>
                        </div>
                        <div className="relative z-0 mb-6 w-full mt-5 pb-4 border-b-2 flex justify-center">
                            <button onClick={this.showe} className="border border-black focus:bg-black rounded px-3 py-3 focus:text-white">
                                Add Item
                            </button>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.show} >
                    <div className="border flex flex-col py-2" > 
                        <h1 className="text-4xl font-bold text-center my-2">Deliver Options</h1>
                        <p className="text-center my-2">Select only one option</p>
                        <div className="mt-4">
                            <div className="form-check flex justify-center items-center my-2">
                                <label className="form-check-label w-1/2  inline-block text-gray-800" for="flexRadioDefault1">
                                Drop-off at the front door
                                </label>
                                 <input value="Drop-off at the front door" onClick={(e)=>this.setState({ type: e.target.value})} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            </div>
                            <div className="form-check flex justify-center items-center my-2">
                                <label className="form-check-label w-1/2 inline-block text-gray-800" for="flexRadioDefault2">
                                <span className="font-bold">Safe drop-off:</span> Someone will be present at the Delivery Location to receive the package.
                                </label>
                                <input value="Safe drop-off:Someone will be present at the Delivery Location to receive the package." onClick={(e)=>this.setState({ type: e.target.value})} className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left ml-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            </div>
                        </div>
                        <div className="flex justify-center my-4">
                            <button onClick={this.clicked} className="w-1/3 py-4 bg-blue-500 text-white rounded px-3 ">
                                    Add Item
                            </button>
                        </div>       
                    </div>
                </Modal>
            </section>
            </>
        )
    };
}


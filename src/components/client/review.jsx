
import React, { useState } from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

export default function Review () {
    
    if (!sessionStorage.getItem('droplocation')){
     window.location.href = "/category";
    }
    
    const [email] = useState(localStorage.getItem('useremail'));
    const [category] = useState(sessionStorage.getItem('category'));
    const [picksearch] = useState(sessionStorage.getItem('pickuplocation'));
    const [pickuptype] = useState(sessionStorage.getItem('picktype'));
    const [pickupunit] = useState(sessionStorage.getItem('pickunit'));
    const [pickupbuzzer] = useState(sessionStorage.getItem('pickbuzzer'));
    const [pickupadditional] = useState(sessionStorage.getItem('pickadd'));
    const [pickupstore] = useState(sessionStorage.getItem('pickstorename'));
    const [pickupcompany] = useState(sessionStorage.getItem('pickcompanyname'));
    const [pickuptime] = useState(sessionStorage.getItem('pickuptime'));
    const [price] = useState(sessionStorage.getItem('subtotal'));
    const [dropsearch] = useState(sessionStorage.getItem('droplocation'));
    const [dropcompany] = useState(sessionStorage.getItem('dropcompanyname'));
    const [droptype] = useState(sessionStorage.getItem('droptype'));
    const [dropunit] = useState(sessionStorage.getItem('dropunit'));
    const [dropbuzzer] = useState(sessionStorage.getItem('dropbuzzer'));
    const [dropadditional] = useState(sessionStorage.getItem('dropadd'));
    const [itemname] = useState(sessionStorage.getItem('itemname'));
    const [dimensions] = useState(sessionStorage.getItem('dimensions'));
    const [dimensionslength] = useState(sessionStorage.getItem('length'));
    const [dimensionsheight] = useState(sessionStorage.getItem('height'));
    const [dimensionswidth] = useState(sessionStorage.getItem('width'));
    const [itemweight] = useState(sessionStorage.getItem('weightn'));
    const [itemweighttype] = useState(sessionStorage.getItem('weight'));
    const [delivery] = useState(sessionStorage.getItem('deliverytype'));
    const [vehicle] = useState(sessionStorage.getItem('Truck'));
    const [image, setImage] = useState('')
    
    const handleFileChange = (e) => {
        
        setImage(e.target.files[0])
      }
    const priceForStripe = sessionStorage.getItem('subtotal') * 100;
    console.log(priceForStripe);
    const handleSuccess = () => {
        MySwal.fire({
          icon: 'success',
          title: 'Payment was successful',
          time: 4000,
        });
      };
      const handleFailure = () => {
        MySwal.fire({
          icon: 'error',
          title: 'Payment was not successful',
          time: 4000,
        });
      };
      const payNow = async token => {
        try {
          const response = await axios.post("https://pickedapi.herokuapp.com/payment", {
            amount: sessionStorage.getItem('subtotal') * 100,
            token,
      });
         
          if (response.status === 200) {
            let selectedFile = new FormData()
                selectedFile.append('file', image)
            axios.post("https://pickedapi.herokuapp.com/order",{
            email,
            category,
            picksearch,
            pickuptype,
            pickupunit,
            pickupbuzzer,
            pickupadditional,
            pickupstore,
            pickupcompany,
            pickuptime,
            price,
            dropsearch,
            dropcompany,
            droptype,
            dropunit,
            dropbuzzer,
            dropadditional,
            itemname,
            dimensions,
            dimensionslength,
            dimensionsheight,
            dimensionswidth,
            itemweight,
            itemweighttype,
            delivery,
            vehicle,
            selectedFile,
        })  
            handleSuccess();
            sessionStorage.clear();
            setTimeout(function(){
                window.location.reload();
             }, 5000);
          }
        } catch (error) {
          handleFailure();
          console.log(error);
        }
      };

    
    
   
    
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
                            <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange}/>
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
                <div className="basis-full px-3"> 
                    <button onClick={() => sessionStorage.clear()} className="w-1/2 py-2">
                        Cancel Order
                    </button>
                    
                    <StripeCheckout
                      stripeKey="pk_test_51Ltkf6KCZZ8yHFGVXAQzY8W15M6KNZFDpcHBPwuGSWMu33Cmw3w1sMXcX3JOqPc51lAGJgDWlDhPHHr80ld992CH00dvEYSzNA"
                      label="Place Order"
                      billingAddress
                      shippingAddress
                      amount={priceForStripe}
                      description={`total $${sessionStorage.getItem('subtotal')}`}
                      token={payNow}
                    className=" w-1/2"
                    />
                    
                </div>
            </footer>
            
        </section>
    )
    
}

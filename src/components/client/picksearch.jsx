
import React, {useRef} from 'react'
import {
  useJsApiLoader,
  Autocomplete,
} from '@react-google-maps/api';
import { Skeleton } from '@mui/material';

const apiKey = 'AIzaSyAQY7fjJ4hLUgiy-RIKeLwiKJptVRnGzEI';


export default function Pickserach () {
    if (!sessionStorage.getItem('category')){
        window.location.href = "/cdashboard";
    }
  const { isLoaded }=useJsApiLoader({
    googleMapsApiKey: apiKey,
    libraries: ['places'],
  })
  

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef()
  
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <Skeleton />
  }

  async function calculateRoute() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    sessionStorage.setItem('pickuplocation', originRef.current.value);
    
    sessionStorage.setItem('droplocation', destiantionRef.current.value);
    
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    
    const dis= results.routes[0].legs[0].distance.text
    const diss=dis.replace("km", "")
    sessionStorage.setItem('km', diss);
    window.location.href = "/pickupaddr";
  }

   
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark text-white ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <p className="absolute top-0  text-center mt-14  text-xs font-medium uppercase text-blue-600">Search Location</p>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark text-blue-500 ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0  text-center mt-14  text-xs font-medium uppercase text-blue-600">Pick Up Additional</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark text-blue-500 ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div className="absolute top-0  text-center mt-14 text-xs font-medium uppercase text-blue-600">Add Items</div>
                        </div>
                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-blue-600"></div>
                        <div className="flex justify-center items-center broder-blue-500 relative">
                            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bookmark text-blue-500 ">
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
                    <div className="mt-2">
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <Autocomplete><input type='text' placeholder='Pickup Address' ref={originRef} className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" /></Autocomplete>
                          
                        </div>
                    </div>
                    <p className="my-2" >powered by Google</p>
                </div>
            </div>
            <div className="px-3 pt-5">
                <div className=" rounded-md bg-white py-5 px-5">
                    <p className=" font-bold ">Enter Drop off Location:</p>
                    <div className="mt-2">
                        <div className="relative w-full">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <Autocomplete><input type='text' placeholder='Drop Off Address' ref={destiantionRef} className=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" /></Autocomplete>
                          
                        </div>
                    </div>
                    <p className="my-2" >powered by Google</p>
                </div>
            </div>
            <footer className="w-full  bg-white
            fixed left-0 bottom-0
            flex flex-col justify-center
            ">
               <div className="basis-full"> 
                <button onClick={() => sessionStorage.clear()} className="w-1/2 py-2">
                   Cancel Order
                </button>
                <button onClick={calculateRoute} className="w-1/2 py-2 bg-blue-500 text-white">
                   Next
                </button>
                </div>
        </footer>
        </section>
    )

}

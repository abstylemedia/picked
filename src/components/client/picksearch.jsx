import React, {useEffect, useRef, useState} from 'react'



const apiKey = 'AIzaSyAQY7fjJ4hLUgiy-RIKeLwiKJptVRnGzEI';
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';


// load google map api js

function loadAsyncScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src
    })
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  })
}

const extractAddress = (place) => {
  
    
  
  const address = {
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const city = this.city ? this.city + ", " : "";
      const zip = this.zip ? this.zip + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return city + zip + state + this.country;
    }
  }

  if (!Array.isArray(place?.address_components)) {
    return address;

  }

  place.address_components.forEach(component => {
    const types = component.types;
    const value = component.long_name;

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_1")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }

  });
  console.log(address);
  const location =[address.city, address.state, address.zip, address.country];
  sessionStorage.setItem('pickuplocation',location);
  sessionStorage.setItem('pickcity',address.city);
  sessionStorage.setItem('pickstate',address.state);
  sessionStorage.setItem('pickzip',address.zip);
  sessionStorage.setItem('pickcountry',address.country);
  
  return address;
}
export default function Pickserach () {
  if (!sessionStorage.getItem('category')){
    window.location.href = "/dashboard";
}
    const searchInput = useRef(null);
    const [ setAddress] = useState({});
  
  
    // init gmap script
    const initMapScript = () => {
      // if script already loaded
      if(window.google) {
        return Promise.resolve();
      }
      const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
      return loadAsyncScript(src);
    }
  
    // do something on address change
    const onChangeAddress = (autocomplete) => {
      const place = autocomplete.getPlace();
      setAddress(extractAddress(place));
    }
  
    // init autocomplete
    const initAutocomplete = () => {
      if (!searchInput.current) return;
  
      const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
      autocomplete.setFields(["address_component", "geometry"]);
      autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));
  
    }
  
  
    const reverseGeocode = ({ latitude: lat, longitude: lng}) => {
      const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
      searchInput.current.value = "Getting your location...";
      fetch(url)
          .then(response => response.json())
          .then(location => {
            const place = location.results[0];
            const _address = extractAddress(place);
            setAddress(_address);
            searchInput.current.value = _address.plain();
          })
    }
  
  
    const findMyLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          reverseGeocode(position.coords)
        })
      }
    }
  
    
  
    // load map script after mounted
    useEffect(() => {
      initMapScript().then(() => initAutocomplete())
    }, []);
  
    
  
   
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
                    <div className="mt-2">
                        <div class="relative w-full">
                            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            </div>
                            <input ref={searchInput} type="text" id="voice-search" class=" border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search Location" required />
                            <button onClick={findMyLocation}
                            type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                                <svg aria-hidden="true" class="w-4 h-4 text-gray-500  hover:text-gray-900 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                    </div>
                    <p className="my-2" >powered by Google</p>
                    <p className=" font-bold mt-2">Type of Location:</p>
                </div>
            </div>
            <footer className="w-full  bg-white
            fixed left-0 bottom-0
            flex flex-col justify-center
            ">
               <div className="basis-full"> 
                <button className="w-1/2 py-2">
                   Cancel Order
                </button>
                <button onClick={() => window.location.href = "/pickupadd"} className="w-1/2 py-2 bg-blue-500 text-white">
                   Next
                </button>
                </div>
        </footer>
        </section>
    )

}

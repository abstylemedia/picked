import React from 'react';
const myStyle={
    backgroundImage: 
"url('/apps.jpg')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};

const Apps = () =>{
    return(
        <div>
            <div className="h-auto" style={myStyle}>
                <div className="basis-full pt-14">
                    <h1 className=" text-center font-semibold text-white text-5xl ">How Does Pickups Work?</h1>
                </div>
                <div className=" ">
                <ul className="list-none p-5 grid grid-cols-1 lg:grid-cols-4 gap-4  justify-between ">
                    <li className="mt-2">
                    <div className="p-6 flex-col max-w-sm mx-auto   flex items-center">
                        <div className="shrink-0 bg-white w-44 h-44 rounded-full ">
                            <img src="cloud-computing.png" alt="cloud" />
                        </div>
                    <div className="text-center my-3">
                        <div className="text-lg font-medium text-black">Download The App</div>
                        <p className="text-black text-left p-7">Download our iOS and Android compatible App from the App store. Your life is about to get a whole lot easier (you can thank us later)</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="p-6 flex-col max-w-sm mx-auto  flex items-center">
                        <div className="shrink-0 bg-white w-44 h-44 rounded-full ">
                            <img src="order-food.png" alt="order" />
                        </div>
                    <div className="text-center my-3">
                        <div className="text-base font-medium text-black">Order Online From Any Retailer, Marketplace or Store</div>
                        <p className="text-black ">Shop directly on your favourite store site, then select in-store or curb-side pick up. And if you're not purchasing directly from a store site, we're still here for you. Whether you're shipping a parcel or found an item on Facebook Marketplace, just enter your details into the App and consider it done (we told you - we're your everything on-demand delivery app)</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="p-6 flex-col max-w-sm mx-auto flex items-center">
                        <div className="shrink-0 bg-white w-44 h-44 rounded-full ">
                        <img src="pickup.png" alt="location" className="w-40" />
                        </div>
                    <div className="text-center my-3">
                        <div className="text-base font-medium text-black">Place A Pickup Request Through Our App
</div>
                        <p className="text-black p-3">Upload your receipt or details of your fabulous new furniture piece or beautiful planter for your porch from the store or marketplace it was purchased at and a driver will be dispatched on-demand to pick it up and deliver it to you</p>
                        </div>
                    </div>
                    </li>
                    <li className="mt-2">
                    <div className="p-6 flex-col max-w-sm mx-auto  flex items-center">
                        <div className="shrink-0 bg-white w-44 h-44 rounded-full ">
                        <img src="location (1).png" alt="" />
                        </div>
                    <div className="text-center my-3">
                        <div className="text-base font-medium text-black">Track Your Order</div>
                        <p className="text-black p-5">Sit back, do some online shopping for your summer wardrobe or catchup on your to-do list, because your purchase is en route. Conveniently track your delivery and receive a notification once it’s arrived</p>
                        </div>
                    </div>
                    </li>
                   
                   
                   
                </ul>
                
                </div>
                
            </div>
            <div className="lg:p-5">
            <div className="flex lg:-mt-10  p-10 flex-wrap bg-red-900">
                <div className="basis-full sm:basis-full md:basis-1/3  p-5 ">
                <img src="/covidimg.png" alt='detail' className="ld:mt-16 md:mt-24 sm:mt-20 " />
                </div>
                <div className="basis-full md:basis-2/3 pl-6">
                <h1 className="lg:text-4xl  leading-5 md:text-3xl sm:text-2xl text-white font-sans font-bold mt-16 lg:text-left md:text-center ">Covid-19 Notice</h1>
                        <h1 className="lg:text-base leading-5 md:text-base sm:text-base text-white font-sans font-medium mt-3">Health, safety and well-being is our number one priority at Pickups, which is why we have put in place certain measures to protect our users. All drivers are obligated to respect the social distancing measures, as well as wear masks and gloves during the pick up and delivery process..</h1>
                        <h1 className="lg:text-base leading-5 md:text-xl sm:text-lg text-white font-sans font-medium mt-4">Some stores are currently experiencing an influx of online orders, therefore causing a delay or backup in meeting scheduled times. Pickups is working hard to provide a seamless delivery experience for you. During this time, we ask our users to only place a delivery request when an exact date and time from a retailer is confirmed and/or a notification is received. This will ensure items are prepared for us when drivers arrive and your delivery arrives when expected.</h1>
                        <h1 className="lg:text-base leading-5 md:text-xl sm:text-lg text-white font-sans font-medium mt-4">We thank you and wish you good health.</h1>
                </div>
            </div>
            </div>
            
        </div>
    );
};
export default Apps;
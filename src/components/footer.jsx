const Footer = () =>{
    return(
    <div className="bg-slate-800">
        <div>
            <h1 className="text-center text-4xl font-semibold text-white p-9">How We're Different</h1>
            <ul className="list-none p-5 grid grid-cols-1">
                <li>
                <div className="p-6  flex">
                        <div className="shrink-0  w-48 align-middle bg-slate-800  ">
                            <img src="delivery.png" alt="cloud" className="w-44 " />
                        </div>
                    <div className="">
                        <p className="text-white font-semibold text-3xl text-left p-2"> Place a pickup and/or delivery from the comfort of your home or office with our easy to use app.</p>
                        <p className=" text-xl text-white text-left p-2">The Pickups app allows you to deliver anything on-demand; no more paperwork or driving to your local courier to get something shipped.

</p>
                        </div>
                        
                    </div>
                    <hr></hr>
                </li>
                
                <li>
                <div className="p-6  flex">
                        <div className="shrink-0  w-48 align-middle bg-slate-800  ">
                            <img src="delivery-boy.png" alt="cloud" className="w-44 " />
                        </div>
                    <div className="">
                        <p className="text-white font-semibold text-3xl text-left p-2"> Have you ever purchased an item from a home store that’s too large to fit in your vehicle?</p>
                        <p className=" text-xl text-white text-left p-2">Our custom AR feature and backend algorithm matches your item size with the appropriate vehicle on-demand, so the driver can pick up and deliver right to your doorstep. No more coordinating with friends for their pick up trucks!)</p>
                        </div>
                    </div>
                    <hr></hr>
                </li>
                <li>
                <div className="p-6  flex">
                        <div className="shrink-0  w-48 align-middle bg-slate-800  ">
                            <img src="delivery-truck.png" alt="cloud" className="w-44 " />
                        </div>
                    <div className="">
                        <p className="text-white font-semibold text-3xl text-left p-2"> We are an everything on-demand delivery app, making it simple to pick up and deliver from the palm of your hand.</p>
                        <p className=" text-xl text-white text-left p-2">From grocery to home furnishings and everything in between, we got you covered. Now go enjoy that glass of wine!</p>
                        </div>
                    </div>
                </li>
                <li></li>
            </ul>
            <hr></hr>
            <div className="text-center p-6">
                <h1 className="text-base text-neutral-300 font-medium">© 2022 AB Style Media. All Rights Reserved</h1>
            </div>
        </div>
    </div>
    );
};
export default Footer;
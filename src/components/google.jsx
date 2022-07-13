const myStyle={
    backgroundImage: 
"url('/intro-bg.jpg')",
    marginTop:'',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    
};
const Google = () =>{
    return(
    <div>   
                <div className="flex lg:h-[70vh] md:h-auto sm:auto p-2  justify-center flex-wrap "  style={myStyle}s>
                  <div className="basis-full md:basis-1/2
                   sm:basis-1/2 grid place-items-center ">
                    <img src="layer2.jpg" className=" border -rotate-45 scale-[0.4] lg:scale-[0.6] md:scale-[0.5] skew-x-12 skew-y-12 h-full -translate-y-2  md:max-h-96 sm:max-h-96 sm:ml-12 sm:justify-center  " alt="layer" />
                  </div>
                  <div className="basis-full  md:basis-1/2 sm:basis-1/2">
                        <h1 className="lg:text-3xl  leading-5 md:text-lg sm:text-base text-white font-sans font-bold lg:mt-16">Download the Pickups App to experience delivery in a whole new way</h1>
                        <h1 className="lg:text-lg leading-5 md:text-lg sm:text-base text-white font-sans font-semibold mt-4 ">Pickups is the fastest and most convenient way to get anything delivered to you, on-demand.</h1>
                        <h1 className="lg:text-base md:text-xl sm:text-lg text-white font-sans font-normal nt-16">Place your order, track your delivery and receive your items on-demand</h1>
                        <div className="flex flex-wrap mt-4  space-x-10">
                            <img src="/android.png" alt="anfroid" />
                                <img src="/app-store.png" alt="store" />
                        </div>
                    </div>
                </div>
            
            
    </div>

    );
};
export default Google;
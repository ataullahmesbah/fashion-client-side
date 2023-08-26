
import banner from '../../../images/banner/img1.jpg';



const Banner = () => {
    return (
        
        <div className="relative h-[880px]  overflow-hidden bg-gradient-to-b from-blue-900 via-blue-800">
            {/* Banner Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center  lg:pt-20 h-full"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
            ></div>

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black via-blue-800 opacity-80 z-0"
                style={{
                    height: '90vh',
                }}
            ></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col z-10 space-y-3 lg:space-y-28">
                <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-16 sm:items-start sm:justify-start lg:mt-1 lg:space-x-48 mt-40 sm:mt-28">
                    {/* ... Your content ... */}
                    <div className=" sm:text-left lg:px-36 px-3  lg:mt-48">
                        <h6 className="text-3xl sm:text-5xl md:text-5xl md:px-10 text-white py-4 font-serif lg:mb-5">
                            Make people fall in love with your clothes.
                        </h6>
                        <p className="uppercase font-mono bg-blue-900  md:mx-10 text-center rounded-xl text-white w-[300px] lg:mb-8">Order Now for the Latest Trends</p>
                        <p className="uppercase font-mono  md:px-10 text-white py-4 ">Embrace style and grace with our exquisite collection of clothing. Discover the perfect blend of fashion <br /> and comfort that will make hearts swoon. Elevate your wardrobe with our curated selections, designed to <br /> captivate and inspire. Unleash your unique charm <br /> and confidence through our timeless fashion pieces.</p>

                        <p className="text-3xl sm:text-5xl md:px-10 text-white py-4 font-mono">
                            New Fashion Collection
                        </p>

                        <button className='btn btn-sm mx-10 mt-5 btn-secondary'>Learn More</button>
                    </div>

                    {/*            ------------------- */}


                </div>


            </div>
        </div>
    );
};

export default Banner;

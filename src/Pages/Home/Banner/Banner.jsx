import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Container from "../../../Shared/Container";


const Banner = () => {

    useEffect(() => {
        AOS.init();
    }, []);



    return (
        <div className="relative  lg:h-[950px] w-full min-h-screen max-w-full  bg-gradient-to-b from-blue-900 via-blue-800">
            {/* Banner Image Background */}
            <div
                className="absolute inset-0 bg-cover bg-center  lg:pt-20 h-full"
                style={{

                    backgroundImage: `url('https://i.ibb.co/h9Mws60/image.png')`,
                }}
            ></div>

            {/* Overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-b from-black  opacity-90 z-0"
                style={{
                    height: '90vh',
                }}
            ></div>

            {/* Content */}

            <Container>
                <div className="absolute inset-0 flex flex-col z-10 space-y-5 lg:space-y-28">
                    <div className="flex flex-col space-y-8 sm:flex-row sm:space-x-16 sm:items-start sm:justify-start md:mt-32 mt-20 lg:mt-14 lg:mx-28 mx-2 sm:mt-28  opacity-90">
                        <div className="sm:text-left lg:px-36 px-3 lg:mt-48">
                            <h6 data-aos="fade-right" data-aos-duration="2000" className="text-3xl sm:text-5xl lg:text-4xl xl:text-6xl md:px-10 font-semibold xl:font-extrabold text-gray-300 py-4 font-serif">Make people fall in love with <br /> your clothes.</h6>
                            <p data-aos="fade-left" data-aos-duration="3000" className="uppercase font-mono md:px-10 text-white py-4">Embrace style and grace with our exquisite collection of clothing. Discover the perfect blend of fashion <br /> and comfort that will make hearts swoon. Elevate your wardrobe with our curated selections, designed to <br /> captivate and inspire. Unleash your unique charm <br /> and confidence through our timeless fashion pieces.</p>
                            <p data-aos="fade-right" data-aos-duration="2000" className="text-3xl sm:text-5xl md:px-10 text-white py-4 font-mono">New Fashion Collection</p>
<<<<<<< HEAD
                            <div data-aos="fade-left" data-aos-duration="2000" className="">
=======
                            <div data-aos="fade-up"
                                data-aos-duration="3000" className="">
>>>>>>> b6f21d4224352b602ead17922397e3a530dafb33
                                <button className="btn btn-sm mx-10 mt-5 btn-secondary font-mono text-white font-semibold">Meet Tr-Fashion</button>

                            </div>
                        </div>
                    </div>


                </div>
            </Container>

        </div>
    );
};

export default Banner;




import { useState, useEffect } from "react";
import Container from "../../../Shared/Container";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetch("/gallery.json")
      .then((response) => response.json())
      .then((data) => setGalleryData(data));
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleImageClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-900 pb-20">
      <Container>
        <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16">
          <h2 data-aos="fade-left" data-aos-duration="2000" className="text-3xl md:text-4xl lg:text-5xl font-[Poppins] text-center mb-4 text-pink-600">
            Welcome to Tr-Fashion For Search <br />Gallery
          </h2>
          <p className="text-lg md:text-xl lg:text-xl text-center text-gray-400 font-[Poppins]" data-aos="fade-up" data-aos-duration="3000">
            Explore our Fashion Gallery, a curation of exquisite styles that captivate. Elevate your look with our <br />  curated collection of trendy ensembles and accessories.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10"  data-aos="zoom-in"
                data-aos-duration="3000">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className={`aspect-w-1 aspect-h-1 border-4 rounded-xl p-2 border-cyan-600 ${activeIndex === index
                    ? "transform scale-125 rotate-12"
                    : "transform transition-transform duration-300 hover:scale-110"
                  } shadow-2xl shadow-sky-800 hover:shadow-sky-900 cursor-pointer flex items-center justify-center`}
                onClick={() => handleImageClick(index)}
              >
                <img data-aos="fade-left" data-aos-duration="2000"
                  src={item.image}
                  alt={`Gallery Image ${index + 1}`}
                  className="object-cover w-full h-full rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Gallery;

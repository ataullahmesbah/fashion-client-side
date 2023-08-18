import  { useState, useEffect } from "react";
import Container from "../../../Shared/Container";


const Gallery = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    
    fetch("/gallery.json")
      .then((response) => response.json())
      .then((data) => setGalleryData(data));
  }, []);


  return (
    <div className="bg-orange-50">
<Container>
      <div className="container mx-auto py-8 px-4 md:px-8 lg:px-16 ">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 text-blue-950">
        Welcome to Tr-Fashion For Search <br />Gallery
      </h2>
      <p className="text-lg md:text-xl lg:text-xl text-center text-gray-600">
      Explore our Fashion Gallery, a curation of exquisite styles that captivate. Elevate your look with our curated collection of <br /> trendy ensembles and accessories. Redefine your fashion statement with <br /> pieces that exude confidence and flair.
      </p>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-10">
        {galleryData.map((item, index) => (
          <div key={index} className="aspect-w-1 aspect-h-1">
            <img
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

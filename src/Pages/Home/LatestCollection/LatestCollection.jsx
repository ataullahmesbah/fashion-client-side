import { useEffect } from 'react';
import Container from '../../../Shared/Container';
import AOS from "aos";
import "aos/dist/aos.css";

const LatestCollection = () => {
  const collectionItems = [
    {
      imageSrc: 'https://i.ibb.co/VNsKJCb/image.png',
      title: 'Elegant Evening Wear',
      description: 'Explore our exquisite evening dresses.',
    },
    {
      imageSrc: 'https://i.ibb.co/bbzFh7L/image.png',
      title: 'Casual Chic',
      description: 'Discover comfortable yet stylish everyday wear.',
    },
    {
      imageSrc: 'https://i.ibb.co/tCmmdYv/image.png',
      title: 'Casual Chic',
      description: 'Discover comfortable yet stylish everyday wear.',
    },
    // Add more collection items
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-cyan-900">
      <Container>
        <h2 className="text-3xl font-semibold mb-8 text-center text-white">Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {collectionItems.map((item, index) => (
            <div
              key={index}
              className="bg-black p-6 rounded-lg border-s-fuchsia-900 transition transform hover:scale-105 shadow-2xl shadow-orange-700"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img
                className="border-cyan-800 shadow-lg shadow-teal-800 w-full lg:h-96 h-48 object-cover mb-4 rounded-lg"
                src={item.imageSrc}
                alt={item.title}
                data-aos="zoom-in"
                data-aos-duration="2000"
              />
              <h3
                className="text-xl font-semibold mb-2 text-white"
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                {item.title}
              </h3>
              <p className="text-white" data-aos="fade-up" data-aos-duration="2000">
                {item.description}
              </p>
              <button
                className="mt-4 bg-secondary-focus text-white py-2 px-4 rounded-full hover:bg-opacity-30 transition"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                View Collection
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LatestCollection;

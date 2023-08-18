import React from 'react';
import Container from '../../../Shared/Container';

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

  return (
    <section className="py-16 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-semibold mb-8 text-center">Latest Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionItems.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <img
                className="w-full lg:h-96 h-48 object-cover mb-4"
                src={item.imageSrc}
                alt={item.title}
              />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition">
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

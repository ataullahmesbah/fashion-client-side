





import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navbarItems = [
    { label: 'About Us', value: 'about' },
    {
      label: 'Fashion',
      value: 'fashion',
      subItems: [{ label: 'Factory', value: 'factory' }, { label: 'Gallery', value: 'gallery' }],
    },
    { label: 'Contact Us', value: 'contact' },
  ];

  return (

    <nav className="navbar fixed top-0 z-10 justify-between lg:px-20 px-5 bg-opacity-30 bg-black text-white font-bold">
    {/* // <nav className="navbar fixed top-0 z-10 justify-between px-20 bg-opacity-30 bg-black text-white font-bold"> */}
      <div className="lg:flex  md:gap-2 gap-36  items-center md:px-10 ">
        {/* Left side */}
        <div className="flex items-center md:py-6">
          <span className="text-lg md:text-xl  font-semibold">Tr-Fashion</span>
        </div>
        
        {/* Right side */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <FaBars className="text-xl" />
          </button>
        </div>
      </div>
      
      {/* Menu */}
      <ul className={`md:flex ${mobileMenuOpen ? 'block' : 'hidden'} md:items-center md:space-x-4 pb-4 md:pb-0 font-semibold lg:gap-7 px-5 md:px-10`}>
        {navbarItems.map((item) => (
          <li key={item.value}>
            {item.subItems ? (
              <div className="relative group">
                <button
                  className={`${
                    activeTab === item.value ? 'underline' : 'hover:text-blue-600'
                  }`}
                  onClick={() => handleTabClick(item.value)}
                >
                  {item.label}
                </button>
                <ul className="absolute hidden mt-2 space-y-2 group-hover:block bg-white shadow-md">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.value}>
                      <button
                        className={`${
                          activeTab === subItem.value
                            ? 'underline'
                            : 'hover:text-orange-600'
                        }`}
                        onClick={() => handleTabClick(subItem.value)}
                      >
                        {subItem.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <button
                className={`${
                  activeTab === item.value ? 'underline' : 'hover:text-gray-600'
                }`}
                onClick={() => handleTabClick(item.value)}
              >
                {item.label}
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

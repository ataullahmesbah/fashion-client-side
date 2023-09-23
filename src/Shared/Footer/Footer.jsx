

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between md:items-center">
        <div className="mb-4 lg:mb-0 px-5">
          <h3 className="text-2xl font-semibold">Bengal</h3>
          <p className="mt-2">
            Your go-to destination for the latest fashion trends and styles.
          </p>
        </div>
        <div className="mb-4 lg:mb-0 px-5">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="mt-2">
            Email: info@bengal.com
            <br />
            Phone: +123-456-7890
          </p>
        </div>
        <div className="px-5">
          <h3 className="text-2xl font-semibold">Location</h3>
          <p className="mt-2">123 Fashion Avenue, Cityville</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm">
          &copy; {currentYear} Bengal. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

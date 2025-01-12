import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are a leading e-commerce platform providing high-quality
              products at great prices. Discover a wide range of items, from
              electronics to fashion.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:text-indigo-500 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:text-indigo-500 text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-indigo-500 text-sm">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-indigo-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-indigo-500 text-sm">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest updates, deals, and more delivered right to your
              inbox.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-l-lg text-black"
                required
              />
              <button
                type="submit"
                className="bg-indigo-600 p-2 rounded-r-lg text-white"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-500 text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-indigo-500 text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-indigo-500 text-xl">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-indigo-500 text-xl">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6">
          <div className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} E-Commerce, All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

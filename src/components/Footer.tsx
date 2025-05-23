
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">TrustAuth</h3>
            <p className="text-gray-300 mb-4">
              Rebuilding trust in digital content through advanced authentication and verification technologies.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 TrustAuth. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/tools" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Tools
              </Link>
              <Link to="/resources" className="block text-gray-300 hover:text-blue-400 transition-colors">
                Resources
              </Link>
              <Link to="/how-it-works" className="block text-gray-300 hover:text-blue-400 transition-colors">
                How It Works
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p>support@trustauth.com</p>
              <p>+1 (555) 123-4567</p>
              <p>24/7 Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

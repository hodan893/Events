import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Events</h3>
            <p className="text-gray-400 text-sm">
              Creating unforgettable experiences for your special moments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-white transition">Events</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services#wedding" className="text-gray-400 hover:text-white transition">Wedding Planning</Link></li>
              <li><Link to="/services#corporate" className="text-gray-400 hover:text-white transition">Corporate Events</Link></li>
              <li><Link to="/services#party" className="text-gray-400 hover:text-white transition">Private Parties</Link></li>
              <li><Link to="/services#conference" className="text-gray-400 hover:text-white transition">Conferences</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Event Street, City</li>
              <li>Phone: +1 234 567 890</li>
              <li>Email: info@events.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-400">
          &copy; {currentYear} Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
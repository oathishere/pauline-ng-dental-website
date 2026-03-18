import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-6">
              <a href="#home">
                <img 
                  src="/logo.png" 
                  alt="Pauline & Ng Dental Clinic" 
                  className="h-16 w-auto bg-white rounded-lg p-2 object-contain"
                />
              </a>
            </div>
            <p className="text-slate-400 text-base leading-relaxed mb-6">
              Providing comprehensive, compassionate dental care for the whole family in a modern and comfortable environment.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/paulineandngdentalclinic/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-slate-300 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/paulineandng.dental/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-800 p-2 rounded-full hover:bg-blue-600 transition-colors text-slate-300 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4 text-base text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <span>39, Jalan USJ 1/1a, Taman Subang Mewah,<br />47620 Subang Jaya, Selangor</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <span>016-340 3382</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>paulineandngdental@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3 text-base text-slate-400">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-blue-400 transition-colors">Patient Reviews</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact & Booking</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Opening Hours</h3>
            <ul className="space-y-3 text-base text-slate-400">
              <li className="flex items-center justify-between">
                <span>Everyday</span>
                <span className="text-white font-medium">9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Pauline and Ng Dental Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

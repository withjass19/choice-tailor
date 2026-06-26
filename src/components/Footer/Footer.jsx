import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoAirplane,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { logo } from "../../assets/images";

export default function Footer() {
  return (
    <footer className="w-full bg-[#061735] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-2 lg:grid-cols-5">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Choice Tailor" className="h-12 w-12 object-contain" />
            <div>
              <h2 className="font-serif text-xl font-bold">CHOICE TAILOR</h2>
              <p className="text-xs text-gray-300">Perfect Fit for Every Mission</p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-gray-300">
            Specialized in IAF uniforms and accessories with precision tailoring,
            quality fabrics and dedicated service.
          </p>

          <div className="mt-5 flex gap-4 text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[#d4a52f]">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Home</li>
            <li>Uniforms</li>
            <li>Accessories</li>
            <li>Measurement Guide</li>
            <li>Track Order</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[#d4a52f]">Customer Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>FAQ</li>
            <li>Shipping Policy</li>
            <li>Return & Refund Policy</li>
            <li>Measurement Help</li>
            <li>Size Guide</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[#d4a52f]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2">
              <IoCallOutline className="mt-1 text-[#d4a52f]" />
              +91 98765 43210
            </li>
            <li className="flex gap-2">
              <IoLogoWhatsapp className="mt-1 text-[#d4a52f]" />
              +91 98765 43210
            </li>
            <li className="flex gap-2">
              <IoMailOutline className="mt-1 text-[#d4a52f]" />
              support@choicetailor.com
            </li>
            <li className="flex gap-2">
              <IoLocationOutline className="mt-1 text-[#d4a52f]" />
              Choice Tailor, IAF Base Road, New Delhi - 110001
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[#d4a52f]">Newsletter</h3>
          <p className="text-sm leading-relaxed text-gray-300">
            Subscribe to get updates on new products, offers and more.
          </p>

          <input
            type="email"
            placeholder="Enter your email"
            className="mt-4 w-full rounded-md border border-gray-500 bg-transparent px-4 py-2 text-sm text-white outline-none placeholder:text-gray-400 focus:border-[#d4a52f]"
          />

          <button className="mt-3 w-full rounded-md bg-[#d4a52f] px-4 py-2 text-sm font-semibold text-white">
            Subscribe
          </button>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-300 lg:justify-start">
            Proudly Serving the Indian Air Force
            <IoAirplane className="text-[#d4a52f]" />
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-4 text-center text-xs text-gray-400">
        © 2024 Choice Tailor. All Rights Reserved.
      </div>
    </footer>
  );
}
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">
              Shree Jayanti Nirman Sewa
            </h3>
            <p className="mb-4 text-gray-400">
              Quality construction services for residential and commercial
              projects.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://www.facebook.com/shreejayanti.nirman.sewa"
                className="border-white border px-1 py-1 rounded-[15px] transition-colors hover:text-yellow-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              {/* <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 transition-colors hover:text-yellow-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/projects", label: "Projects" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 transition-colors hover:text-yellow-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-gray-400">
                  Pepsicola 32, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <Link
                  href="tel:01-4993108"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  01-4993108
                </Link>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-yellow-500" />
                <Link
                  href="mailto:info.shreejayanti.com@gmail.com"
                  className="text-gray-400 transition-colors hover:text-yellow-400"
                >
                  info.shreejayanti.com@gmail.com
                </Link>
              </li>
            </ul>
          </div>

          {/* Google Map */}
          <div className="col-xl-3  md:mt-5 flex justify-center">
            <div className="w-full max-w-xs">

              <h3 className="mb-4 text-xl font-bold"> Google Map</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.923852451172!2d85.3676459!3d27.6887483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a3c8622494b%3A0x525f1b173bda508f!2sShree%20Jayanti%20Nirman%20Sewa!5e0!3m2!1sen!2snp!4v1765351869744!5m2!1sen!2snp"
                width="100%"
                height="250"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Location"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-800" />

        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Construction Co. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-gray-400 transition-colors hover:text-yellow-400"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-gray-400 transition-colors hover:text-yellow-400"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

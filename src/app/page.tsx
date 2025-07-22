"use client";

import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "./components/SiteLayout";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans flex flex-col">
        {/* Service Cards */}
        <section
          className="flex flex-col items-center px-4 py-8 gap-8"
          aria-label="Main Services"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full max-w-5xl">
            {/* PC Repair Card */}
            <Link
              href="/services"
              aria-label="PC Repair Services"
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-gray-700 hover:border-blue-400 group cursor-pointer h-[340px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Image
                src="/file.svg"
                alt="PC Repair icon"
                width={56}
                height={56}
                className="mb-2"
              />
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400">
                PC Repair
              </h2>
              <p className="text-gray-300 text-center mb-2 flex-1">
                Fast, reliable computer repair for desktops, laptops, and more.
              </p>
              <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                See Pricing
              </span>
            </Link>
            {/* Tech Support Card */}
            <Link
              href="/services"
              aria-label="Tech Support Services"
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-gray-700 hover:border-blue-400 group cursor-pointer h-[340px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <Image
                src="/globe.svg"
                alt="Tech Support icon"
                width={56}
                height={56}
                className="mb-2"
              />
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400">
                Tech Support
              </h2>
              <p className="text-gray-300 text-center mb-2 flex-1">
                Friendly help with software, hardware, and troubleshooting.
              </p>
              <span className="bg-blue-900 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                See Pricing
              </span>
            </Link>
            {/* Community Card */}
            <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-gray-700 group h-[340px] focus:outline-none focus:ring-2 focus:ring-blue-400">
              <Image
                src="/window.svg"
                alt="Community icon"
                width={56}
                height={56}
                className="mb-2"
              />
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-blue-400">
                Community
              </h2>
              <p className="text-gray-300 text-center mb-2 flex-1">
                Supporting the Comox Valley and Vancouver Island with local tech expertise.
              </p>
              <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                Local Focus
              </span>
            </div>
            {/* Contact Card */}
            <Link
              href="/contact"
              aria-label="Contact Form"
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-xl shadow-xl p-8 flex flex-col items-center hover:scale-105 transition-transform border border-gray-700 hover:border-green-400 group cursor-pointer h-[340px] focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14 text-green-400 mb-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>
              <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-green-400">
                Contact
              </h2>
              <p className="text-gray-300 text-center mb-2 flex-1">
                Questions or need help? Reach out to us!
              </p>
              <span className="bg-green-900 text-green-200 px-3 py-1 rounded-full text-sm font-semibold mt-2">
                Contact Form
              </span>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-3xl mx-auto px-4 py-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            About OrcaIsleTech
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            OrcaIsleTech is proud to serve the Comox Valley and Vancouver Island with decades of hands-on experience in PC repair and tech support. Our team is passionate about technology and dedicated to helping our community thrive, whether you’re a home user or a local business.
          </p>
          <p className="text-gray-300 text-lg">
            We believe in honest, friendly service and practical solutions, drawing on over{" "}
            <span className="font-semibold text-white">30 years of real-world expertise</span>. While we may be new to the local business scene, our commitment to reliable support and customer satisfaction is at the heart of everything we do.
          </p>
        </section>

        <SiteFooter />
      </div>
    </>
  );
}

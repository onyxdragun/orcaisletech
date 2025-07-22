import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";
import localFont from "next/font/local";

const benguiatGothic = localFont({
  src: "../../fonts/ITC Benguiat Gothic Std Bold.otf",
  variable: "--font-benguiat-gothic",
  display: "swap",
});

export function SiteHeader() {
  return (
    <header className={`py-4 flex flex-col items-center px-4 md:px-0 bg-gray-900 ${benguiatGothic.variable}`}>  
      <div className="flex flex-row items-center gap-6 mb-2 w-full justify-center">
        <Link href="/">
          <Image
            src="/images/orcaisletech_trans.svg"
            alt="OrcaIsleTech Banner"
            width={400}
            height={80}
            priority

            style={{ height: "auto" }}
          />
        </Link>
        <div className="flex gap-3 ml-4">
          <a
            href="https://facebook.com/orcaisletech"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-2xl"
          >
            <FaFacebook className="text-gray-300 group-hover:!text-blue-500 transition-colors" />
          </a>
          <a
            href="https://instagram.com/orcaisletech"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-2xl"
          >
            <FaInstagram className="text-gray-300 group-hover:!text-pink-500 transition-colors" />
          </a>
          <Link
            href="/contact"
            className="group text-2xl"
            aria-label="Contact"
          >
            <FaEnvelope className="text-gray-300 group-hover:!text-green-400 transition-colors" />
          </Link>
        </div>
      </div>
      <p className="text-lg text-gray-300 font-[var(--font-benguiat-gothic)] px-2 md:px-0 text-center" style={{ fontFamily: 'var(--font-benguiat-gothic)' }}>
        PC Repair & Tech Support for the Comox Valley
      </p>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-auto py-6 text-center text-gray-400 bg-gray-900">
      <div className="flex justify-center gap-6 mb-2">
        <a
          href="https://facebook.com/orcaisletech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 text-2xl"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com/orcaisletech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 text-2xl"
        >
          <FaInstagram />
        </a>
        <Link
          href="/contact"
          className="hover:text-green-400 text-2xl"
          aria-label="Contact"
        >
          <FaEnvelope />
        </Link>
      </div>
      &copy; {new Date().getFullYear()} OrcaIsleTech. All rights reserved.
    </footer>
  );
}

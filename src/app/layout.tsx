import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OrcaIsleTech - PC Repair & Tech Support | Comox Valley, Courtenay, Comox, Cumberland, Campbell River",
  description:
    "OrcaIsleTech provides expert PC repair, tech support, and IT services for the Comox Valley, Courtenay, Comox, Cumberland, and Campbell River. Fast, friendly, and local technology help.",
  keywords: [
    "PC Repair",
    "Tech Support",
    "Comox Valley",
    "Courtenay",
    "Comox",
    "Cumberland",
    "Campbell River",
    "Vancouver Island",
    "Computer Service",
    "IT Help",
    "OrcaIsleTech"
  ],
  openGraph: {
    title: "OrcaIsleTech - PC Repair & Tech Support | Comox Valley, Courtenay, Comox, Cumberland, Campbell River",
    description:
      "OrcaIsleTech provides expert PC repair, tech support, and IT services for the Comox Valley, Courtenay, Comox, Cumberland, and Campbell River.",
    url: "https://orcaisletech.com",
    siteName: "OrcaIsleTech",
    images: [
      {
        url: "/orca-logo.svg",
        width: 120,
        height: 120,
        alt: "OrcaIsleTech Logo"
      }
    ],
    locale: "en_CA",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/images/orcaisletech_trans.svg" as="image" />
        {/* Google Analytics G4 */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        ` }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 text-white font-sans min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://afrexco.com.ng"),
  title: "Afrexco Global Resources | Luxury Landscaping & Garden Design Nigeria",
  description: "Afrexco Global Resources is Nigeria's premier luxury landscaping, water features, and garden design company. Transforming estates in Lagos (Lekki, Ikoyi, Victoria Island) and Abuja (Maitama) into stunning natural sanctuaries.",
  keywords: [
    "luxury landscaping Nigeria",
    "garden design Lagos",
    "landscape architecture Abuja",
    "swimming pools Lekki",
    "lawn care Ikoyi",
    "Afrexco Global Resources",
    "commercial grounds maintenance Nigeria",
    "residential garden design Lagos",
    "water features Abuja"
  ],
  alternates: {
    canonical: "https://afrexco.com.ng",
  },
  openGraph: {
    title: "Afrexco Global Resources | Luxury Landscaping & Garden Design Nigeria",
    description: "Transforming outdoor spaces in Lagos and Abuja into stunning natural sanctuaries with premium landscape architecture and sustainable garden design.",
    url: "https://afrexco.com.ng",
    siteName: "Afrexco Global Resources Ltd",
    images: [
      {
        url: "/afrexco-images/02-about-aerial-grounds.jpg",
        width: 1200,
        height: 630,
        alt: "Afrexco Luxury Landscaping Drone View",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afrexco Global Resources | Luxury Landscaping & Garden Design Nigeria",
    description: "Premium landscaping, reflecting pools, and garden design in Lagos and Abuja, Nigeria.",
    images: ["/afrexco-images/02-about-aerial-grounds.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#123B26" />
      </head>
      <body>{children}</body>
    </html>
  );
}

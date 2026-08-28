"use client";

import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LogoCarousel from "../components/LogoCarousel";
import About from "../components/About";
import ServicesAccordion from "../components/ServicesAccordion";
import ServicesGrid from "../components/ServicesGrid";
import WhyChooseUs from "../components/WhyChooseUs";
import ProjectGallery from "../components/ProjectGallery";
import Testimonials from "../components/Testimonials";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  // Shared Form State (for communication between Hero and ContactForm)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Garden maintenance",
    category: "Lawn Fix",
    location: "Lagos",
    area: "Select Sqft",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleHeroSubmit = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById("quote-section");
    if (contactSection) {
      setFormData((prev) => ({
        ...prev,
        service:
          formData.category === "Lawn Fix"
            ? "Garden maintenance"
            : formData.category,
      }));
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Structured Data (JSON-LD) for AEO
  const schemaBusiness = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Afrexco Global Resources Ltd",
    "image": "https://afrexco.com.ng/afrexco-images/02-about-aerial-grounds.jpg",
    "@id": "https://afrexco.com.ng/#landscapingservice",
    "url": "https://afrexco.com.ng",
    "telephone": "+2348000000000",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot 14, Kingsway Road (Alfred Rewane), Ikoyi",
      "addressLocality": "Lagos",
      "addressRegion": "Lagos State",
      "postalCode": "101233",
      "addressCountry": "NG",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 6.4549,
      "longitude": 3.4244,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00",
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Lagos" },
      { "@type": "AdministrativeArea", "name": "Abuja" },
      { "@type": "AdministrativeArea", "name": "Port Harcourt" },
    ],
  };

  const schemaFaqs = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best grass for luxury lawns in Nigeria?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bermuda grass, Carpet grass, and Zoysia grass are highly recommended for Nigerian lawns. Bermuda offers high drought resistance and a premium fine texture, while Carpet grass performs exceptionally well in shaded areas with heavy rain.",
        },
      },
      {
        "@type": "Question",
        "name": "How does Afrexco handle water irrigation during the dry season?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We design and install advanced smart irrigation systems that monitor soil moisture. We incorporate rainwater harvesting and water-smart flora planning to maintain lush, green grounds while optimizing water efficiency.",
        },
      },
      {
        "@type": "Question",
        "name": "Does Afrexco offer landscape design services for residential estates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in high-end residential landscape architecture, garden styling, swimming pools, masonry, reflecting pools, and native botanical curation for luxury villas in Lekki, Ikoyi, Victoria Island, and Maitama, Abuja.",
        },
      },
    ],
  };

  return (
    <>
      {/* Schema.org Scripts for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaqs) }}
      />

      <Header />
      
      <main>
        <Hero
          formData={formData}
          handleInputChange={handleInputChange}
          handleHeroSubmit={handleHeroSubmit}
        />
        
        <LogoCarousel />
        
        <About />
        
        <ServicesAccordion />
        
        <ServicesGrid />
        
        <WhyChooseUs />
        
        <ProjectGallery />
        
        <Testimonials />
        
        <ContactForm formData={formData} setFormData={setFormData} />
      </main>

      <Footer />
    </>
  );
}

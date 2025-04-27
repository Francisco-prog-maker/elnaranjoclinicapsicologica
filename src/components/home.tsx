import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import TherapistsSection from "./TherapistsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Chatbot from "./Chatbot";

const Home: React.FC = () => {
  React.useEffect(() => {
    // Asegurarse de que el contenido sea visible
    document.body.style.display = 'block';
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar logoUrl="/Fotos/LogoClinica.jpg" />

      {/* Main Content */}
      <main>
        {/* Hero Section - No necesita padding porque tiene su propio diseño */}
        <div id="home">
          <HeroSection
            title={
              <>
                Bienvenid@s a Clínica
                <br />
                Psicológica El Naranjo
              </>
            }
            tagline="Te ofrecemos un espacio cercano y cálido que te ayudará a sanar"
            ctaText="AGENDAR UNA HORA"
          />
        </div>

        {/* Las demás secciones usarán scroll-margin-top */}
        <ServicesSection
          title="Nuestros Servicios"
          subtitle="Ofrecemos una variedad de enfoques terapéuticos adaptados a tus necesidades únicas"
        />

        <TherapistsSection
          title="Nuestros Terapeutas Expertos"
          description="Conoce a nuestro equipo de profesionales licenciados dedicados a proporcionar atención de salud mental compasiva y efectiva."
        />

        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        clinicName="El Naranjo Clínica Psicológica"
        phone="+56981835706"
        email="clinicapsicologicaelnaranjo@gmail.com"
        socialLinks={{
          instagram: "https://www.instagram.com/clinicapsicologicaelnaranjo/",
          tiktok: "@clinicaelnaranjo"
        }}
      />

      {/* Chatbot */}
      <Chatbot name="Ps. Yin" />
    </div>
  );
};

export default Home;

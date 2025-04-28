import React, { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface NavbarProps {
  clinicName?: string;
  logoUrl?: string;
}

const Navbar = ({
  clinicName = "El Naranjo Clínica Psicológica",
  logoUrl = "/Fotos/LogoClinica.jpg",
}: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAgendarCita = () => {
    window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kVGpqbl5P8wkvLD3Bf0i5P1ySMrP028Vp0A_Sim58qH0UfcX5oIZ54sy95yK-Z-QJX4tSS_bj", "_blank");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-32 bg-white backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logos Container */}
          <div className="flex items-center gap-6">
            {/* LogoClinica */}
            <img
              src="/Fotos/LogoClinica.jpg"
              alt="Logo Clínica"
              className="w-16 h-16 rounded-full object-cover"
            />
            {/* LogoNaranjo */}
            <a href="#home">
              <img
                src="/Fotos/LogoNaranjo.jpg"
                alt="Logo Naranjo"
                className="w-56 h-56 object-contain mt-0 cursor-pointer"
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Inicio
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#therapists"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Terapeutas
            </a>
            <a
              href="#materials"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Materiales
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              Contacto
            </a>
            <Button 
              className="bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black flex items-center gap-2"
              onClick={handleAgendarCita}
            >
              <Phone size={16} className="text-black" />
              Agendar hora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Alternar menú"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-24 left-0 right-0 bg-white backdrop-blur-md shadow-lg py-4 px-4 space-y-4">
            <a
              href="#home"
              className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Inicio
            </a>
            <a
              href="#services"
              className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="#therapists"
              className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Terapeutas
            </a>
            <a
              href="#materials"
              className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiales
            </a>
            <a
              href="#contact"
              className="block text-gray-700 hover:text-teal-600 transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contacto
            </a>
            <Button 
              className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black flex items-center justify-center gap-2"
              onClick={() => {
                handleAgendarCita();
                setIsMenuOpen(false);
              }}
            >
              <Phone size={16} className="text-black" />
              Agendar hora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

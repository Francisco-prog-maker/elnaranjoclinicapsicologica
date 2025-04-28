import React from "react";
import { Button } from "./ui/button";
import { Instagram, Mail, Phone } from "lucide-react";
import { createGoogleCalendarUrl } from "@/lib/utils";

const TikTokIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64c.298-.002.595.042.88.13V9.4a6.17 6.17 0 00-1-.08A6.44 6.44 0 003 15.77a6.44 6.44 0 0011.14 4.44l.13-.19v-7.39a8.94 8.94 0 005.69 2.07v-3.38c-.139-.001-.277-.01-.415-.029L19.59 6.69z"/>
  </svg>
);

interface FooterProps {
  clinicName?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
    tiktok?: string;
  };
}

const Footer = ({
  clinicName = "Clínica Psicológica El Naranjo",
  phone = "+56981835706",
  email = "clinicapsicologicaelnaranjo@gmail.com",
  socialLinks = {
    instagram: "https://www.instagram.com/clinicapsicologicaelnaranjo/",
  },
}: FooterProps) => {
  const handleAgendarCita = () => {
    window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0kVGpqbl5P8wkvLD3Bf0i5P1ySMrP028Vp0A_Sim58qH0UfcX5oIZ54sy95yK-Z-QJX4tSS_bj", "_blank");
  };

  return (
    <footer className="bg-peach-100 text-peach-800 py-12 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Information */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <img 
                src="/Fotos/LogoClinica.jpg"
                alt="Logo Clínica"
                className="w-12 h-12 object-contain rounded-full"
              />
              <h3 className="text-xl font-semibold text-peach-900">
                {clinicName}
              </h3>
            </div>
            <p className="mb-6 text-peach-700">
              Brindando atención y apoyo para la salud mental y una
              vida equilibrada.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-600 hover:text-pink-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@clinicaelnaranjo"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-600 hover:text-black transition-colors"
              >
                <TikTokIcon />
              </a>
              <a
                href={`mailto:${email}`}
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="text-peach-600 hover:text-blue-500 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-peach-900">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-teal-600 transition-colors"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="#therapists"
                  className="hover:text-teal-600 transition-colors"
                >
                  Nuestros Terapeutas
                </a>
              </li>
              <li>
                <a
                  href="#materials"
                  className="hover:text-teal-600 transition-colors"
                >
                  Materiales
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-teal-600 transition-colors"
                >
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 transition-colors">
                  Términos de Servicio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-peach-900">
              Contáctanos
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-peach-800 flex-shrink-0" />
                <a
                  href={`https://wa.me/${phone.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-600 transition-colors"
                >
                  WhatsApp: {phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-peach-800 flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="mt-4">
                <Button
                  onClick={handleAgendarCita}
                  className="bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black border-[#FFDAB9]"
                >
                  Agendar hora
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-peach-200 mt-10 pt-6 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {clinicName}. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Button } from "./ui/button";
import { Instagram, Mail, Phone } from "lucide-react";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface FooterProps {
  clinicName?: string;
  phone?: string;
  email?: string;
  socialLinks?: {
    instagram?: string;
  };
}

const Footer = ({
  clinicName = "El Naranjo Clínica Psicológica",
  phone = "+56 123456789",
  email = "clinicapsicologicaelnaranjo@gmail.com",
  socialLinks = {
    instagram: "https://www.instagram.com/clinicapsicologicaelnaranjo/",
  },
}: FooterProps) => {
  const handleAgendarCita = () => {
    window.open(createGoogleCalendarUrl(), "_blank");
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
                <Phone className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0" />
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
                <Mail className="mr-2 h-5 w-5 text-teal-600 flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="hover:text-teal-600 transition-colors"
                >
                  {email}
                </a>
              </div>
              <div className="mt-4">
                <Button
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
                  onClick={handleAgendarCita}
                >
                  Agendar Cita
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

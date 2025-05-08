import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check, MapPin, Video, Sofa, Phone } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface MarieModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MarieModal: React.FC<MarieModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleAgendarCita = () => {
    window.open("https://encuadrado.com/p/marie-elaine-mackenzie-pelaez/", "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-4xl max-h-[90vh] p-0 bg-white overflow-hidden">
        <ScrollArea className="h-full max-h-[90vh]">
          <div className="p-4 md:p-6">
            <DialogHeader>
              <DialogTitle className="sr-only">Detalles del Terapeuta</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Columna izquierda */}
              <div className="col-span-full md:col-span-4 flex flex-col items-center">
                <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-4 border-4 border-peach-200">
                  <img
                    src="/Fotos/Marie3.png"
                    alt="Ps. Marie Elaine Mackenzie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <Button
                  onClick={handleAgendarCita}
                  className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black flex items-center justify-center gap-2"
                >
                  <Phone className="h-4 w-4" />
                  Agendar hora
                </Button>
              </div>

              {/* Columna derecha */}
              <div className="col-span-full md:col-span-8">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                  Psi. Marie Elaine Mackenzie
                </h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Providencia, Chile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sofa className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">$30,000 Presencial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">$20,000 Online</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed bg-peach-50 p-4 rounded-lg">
                  Psicóloga y fundadora de la Clínica Psicológica El Naranjo. Me especializo en psicoterapia breve, con un enfoque humanista y experiencial. Trabajo principalmente con adolescentes y adultos, ofreciendo un acompañamiento cálido y profesional donde cada paciente se sienta escuchado y comprendido.
                </p>

                <div className="grid grid-cols-1 gap-4 mb-4">
                  <Card className="p-4 bg-peach-50">
                    <h3 className="font-semibold text-gray-800 mb-3">Temáticas que trabajo</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {["Ansiedad", "Autoestima", "Autocuidado", "Bipolaridad", "Depresión"].map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {["Estrés", "Emociones", "Espectro Autista", "Relaciones Interpersonales"].map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MarieModal;
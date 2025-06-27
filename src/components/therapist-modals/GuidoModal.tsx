import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check, MapPin, Video, Phone } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";

interface GuidoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuidoModal: React.FC<GuidoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleAgendarCita = () => {
    window.open("http://wa.me/56933434628", "_blank");
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
                    src="/Fotos/Guido1.jpg"
                    alt="Ps. Guido Palma"
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
                  Ps. Guido Palma
                </h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Chile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">$20,000 Online</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed bg-peach-50 p-4 rounded-lg">
                  Psicólogo clínico comprometido con la salud mental. Mi enfoque se basa en reconocer la singularidad de cada persona para diseñar tratamientos personalizados. Me caracterizo por ser un profesional proactivo, accesible y empático, en constante actualización para brindar la mejor atención.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-4 bg-peach-50">
                    <h3 className="font-semibold text-gray-800 mb-3">Temáticas que trabajo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {["Ansiedad", "Autoestima", "Depresión", "Duelo"].map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {["Dificultades relacionales", "Fobias", "Trauma", "Neurodivergencias"].map((topic, index) => (
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

export default GuidoModal;
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Check, MapPin, Video, Sofa } from "lucide-react";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface GuidoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuidoModal: React.FC<GuidoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleAgendarCita = () => {
    window.open(createGoogleCalendarUrl(), "_blank");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-white p-6">
        <DialogHeader>
          <DialogTitle className="sr-only">Detalles del Terapeuta</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-12 gap-6">
          {/* Columna izquierda */}
          <div className="col-span-4 flex flex-col items-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-4 border-4 border-peach-200">
              <img
                src="/Fotos/Guido1.jpg"
                alt="Ps. Guido Palma"
                className="w-full h-full object-cover"
              />
            </div>
            <Button
              onClick={handleAgendarCita}
              className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black"
            >
              Agendar
            </Button>
          </div>

          {/* Columna derecha */}
          <div className="col-span-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ps. Guido Palma
            </h2>
            
            <div className="flex items-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">Chile</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-gray-600" />
                <span className="text-gray-600">$20,000 Online</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 text-base leading-relaxed bg-peach-50 p-4 rounded-lg">
              Psicólogo clínico comprometido con la salud mental. Mi enfoque se basa en reconocer la singularidad de cada persona para diseñar tratamientos personalizados. Me caracterizo por ser un profesional proactivo, accesible y empático, en constante actualización para brindar la mejor atención.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-peach-50">
                <h3 className="font-semibold text-gray-800 mb-3">Especialidad</h3>
                <ul className="space-y-2">
                  {["Depresión", "Duelo", "Trauma", "Autoestima"].map((specialty, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600" />
                      <span className="text-gray-700">{specialty}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-4 bg-peach-50">
                <h3 className="font-semibold text-gray-800 mb-3">Temáticas que trabajo</h3>
                <ul className="space-y-2">
                  {["Neurodivergencias", "Dificultades Relacionales", "Ansiedad", "Depresión", "Duelo"].map((topic, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-teal-600" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GuidoModal;
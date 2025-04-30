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

interface JisselModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const JisselModal: React.FC<JisselModalProps> = ({
  isOpen,
  onClose,
}) => {
  const handleAgendarCita = () => {
    window.open("https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Xj0u8u_ff2QQMWE-oyTtpwO8Cj7wzORoUkmLQoffekthGAg7qtIPEir7w6sboFJYP7KYpv4Yd", "_blank");
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
                    src="/Fotos/Jissel1.jpg"
                    alt="Ps. Jissel Alvarado"
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
                  Ps. Jissel Alvarado
                </h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">Temuco, Chile</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sofa className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">$20,000 Presencial</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-gray-600" />
                    <span className="text-gray-600">$15,000 Online</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-6 text-base leading-relaxed bg-peach-50 p-4 rounded-lg">
                  Psicóloga especialista en terapia sistémica breve, con enfoque en temáticas de género y violencia. Me dedico al desarrollo del autoconocimiento y bienestar emocional. Trabajo principalmente con adultos, ofreciendo un espacio seguro de escucha y reflexión donde pueden encontrar herramientas para su día a día.
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <Card className="p-4 bg-peach-50">
                    <h3 className="font-semibold text-gray-800 mb-3">Temáticas que trabajo</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        {["Ansiedad", "Autoestima", "Conflictos de pareja", "Estrés", "Manejo de emociones"].map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-teal-600" />
                            <span className="text-gray-700">{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <ul className="space-y-2">
                        {["Traumas complejos", "Duelo", "Depresión", "Pérdida", "Adaptación"].map((topic, index) => (
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

export default JisselModal;
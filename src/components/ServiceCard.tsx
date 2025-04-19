import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Button } from "../components/ui/button";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  Users,
  Brain,
  MessageCircle,
  Sparkles,
  GraduationCap,
  Home,
} from "lucide-react";

interface ServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  detailedInfo?: string;
}

const ServiceCard = ({
  icon = <Heart className="h-10 w-10 text-rose-500" />,
  title = "Psicoterapia Individual",
  description = "Sesiones personalizadas enfocadas en el crecimiento personal y el abordaje de desafíos específicos.",
  detailedInfo = "Nuestras sesiones de terapia individual proporcionan un espacio seguro y confidencial donde puedes trabajar directamente con un terapeuta capacitado para abordar desafíos personales, explorar emociones y desarrollar estrategias de afrontamiento. Las sesiones generalmente duran 50 minutos y están adaptadas a tus necesidades y objetivos únicos.",
}: ServiceCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="w-full max-w-sm h-full flex flex-col transition-all duration-300 hover:shadow-lg bg-white">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CardHeader className="text-center">
            <motion.div
              className="mx-auto mb-4 p-3 rounded-full bg-blue-50"
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {icon}
            </motion.div>
            <CardTitle className="text-xl font-semibold text-slate-800">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-slate-600 mb-4">
              {description}
            </CardDescription>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: expanded ? 1 : 0,
                height: expanded ? "auto" : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              {expanded && (
                <div className="text-sm text-slate-700">
                  {detailedInfo}
                </div>
              )}
            </motion.div>
          </CardContent>
          <CardFooter className="pt-0">
            <Button
              variant="outline"
              className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black border-[#FFDAB9]"
              onClick={() => setExpanded(!expanded)}
            >
              <div className="flex items-center justify-center w-full">
                <span className="mr-2 card-button-text">{!expanded ? "Saber Más" : "Mostrar Menos"}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: expanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.div>
              </div>
            </Button>
          </CardFooter>
        </motion.div>
      </Card>
    </motion.div>
  );
};

// Predefined service cards with different icons for easy use
export const IndividualTherapyCard = (
  props: Omit<ServiceCardProps, "icon">,
) => (
  <ServiceCard
    icon={<Heart className="h-10 w-10 text-rose-500" />}
    title="Terapia Individual"
    description="Sesiones personalizadas enfocadas en el crecimiento personal y el abordaje de desafíos específicos."
    {...props}
  />
);

export const CoupleTherapyCard = (props: Omit<ServiceCardProps, "icon">) => (
  <ServiceCard
    icon={<Users className="h-10 w-10 text-indigo-500" />}
    title="Terapia de Parejas"
    description="Sesiones guiadas para mejorar la comunicación y resolver conflictos en las relaciones."
    {...props}
  />
);

export const CognitiveTherapyCard = (props: Omit<ServiceCardProps, "icon">) => (
  <ServiceCard
    icon={<Brain className="h-10 w-10 text-emerald-500" />}
    title="Terapia Cognitivo-Conductual"
    description="Enfoque basado en evidencia para identificar y cambiar patrones de pensamiento negativos."
    {...props}
  />
);

export const GroupTherapyCard = (props: Omit<ServiceCardProps, "icon">) => (
  <ServiceCard
    icon={<MessageCircle className="h-10 w-10 text-amber-500" />}
    title="Terapia de Grupo"
    description="Entorno de apoyo donde las personas comparten experiencias y aprenden de los demás."
    {...props}
  />
);

export const MindfulnessTherapyCard = (
  props: Omit<ServiceCardProps, "icon">,
) => (
  <ServiceCard
    icon={<Sparkles className="h-10 w-10 text-cyan-500" />}
    title="Mindfulness y Reducción del Estrés"
    description="Técnicas para manejar el estrés y aumentar la conciencia del momento presente."
    {...props}
  />
);

export const FamilyTherapyCard = (props: Omit<ServiceCardProps, "icon">) => (
  <ServiceCard
    icon={<Home className="h-10 w-10 text-emerald-500" />}
    title="Psicoterapia Familiar"
    description="Terapia enfocada en mejorar la dinámica familiar, la comunicación y resolver conflictos entre los miembros de la familia."
    {...props}
  />
);

export const VocationalGuidanceCard = (props: Omit<ServiceCardProps, "icon">) => (
  <ServiceCard
    icon={<GraduationCap className="h-10 w-10 text-amber-500" />}
    title="Orientación Vocacional"
    description="Apoyo profesional para descubrir y desarrollar tu vocación, identificando tus intereses, habilidades y metas profesionales."
    {...props}
  />
);

export default ServiceCard;

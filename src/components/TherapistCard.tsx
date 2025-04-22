import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import MarieModal from "./therapist-modals/MarieModal";
import IgnaciaModal from "./therapist-modals/IgnaciaModal";
import JisselModal from "./therapist-modals/JisselModal";
import GuidoModal from "./therapist-modals/GuidoModal";
import CatalinaModal from "./therapist-modals/CatalinaModal";

interface TherapistCardProps {
  id: string;
  name: string;
  image: string;
  credentials: string;
  specialties: string[];
  description: string;
  workTopics: string[];
  onViewDetails: () => void;
}

const TherapistCard = ({
  id,
  name = "Ps. Marie Mackenzie",
  image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  credentials = "Psicóloga Clínica",
  specialties = ["Ansiedad", "Depresión", "Trauma", "Terapia de Parejas"],
  description = "La Ps. Mackenzie se especializa en enfoques basados en evidencia para ayudar a los clientes a superar desafíos y mejorar su bienestar mental.",
  workTopics = ["Autoestima", "Relaciones", "Estrés", "Ansiedad", "Depresión"],
  onViewDetails,
}: TherapistCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderModal = () => {
    switch (id) {
      case "1":
        return <MarieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case "2":
        return <IgnaciaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case "3":
        return <JisselModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case "4":
        return <GuidoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      case "5":
        return <CatalinaModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />;
      default:
        return null;
    }
  };

  return (
    <>
      <Card className="w-full max-w-[320px] h-[600px] overflow-hidden flex flex-col bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative w-full h-72 overflow-hidden">
          <img
            src={image}
            alt={`${name}`}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-gray-800">
            {name}
          </CardTitle>
          <CardDescription className="text-sm text-gray-600">
            {credentials}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="mb-3 flex flex-wrap gap-1">
            {specialties.slice(0, 3).map((specialty, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-blue-50 text-blue-700 border-blue-200"
              >
                {specialty}
              </Badge>
            ))}
          </div>
          <div className="h-[72px] overflow-hidden">
            <p className="text-sm text-gray-700 leading-6">{description}</p>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button
            onClick={() => {
              setIsModalOpen(true);
              onViewDetails();
            }}
            className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black"
          >
            Ver Perfil
          </Button>
        </CardFooter>
      </Card>

      {renderModal()}
    </>
  );
};

export default TherapistCard;

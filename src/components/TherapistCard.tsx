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
import TherapistDetailModal from "./TherapistDetailModal";

interface TherapistCardProps {
  name: string;
  image: string;
  credentials: string;
  specialties: string[];
  description: string;
  workTopics: string[];
  onViewDetails: () => void;
}

const TherapistCard = ({
  name = "Dra. Marie Mackenzie",
  image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
  credentials = "Doctorado en Psicología Clínica",
  specialties = ["Ansiedad", "Depresión", "Trauma", "Terapia de Parejas"],
  description = "La Dra. Mackenzie se especializa en enfoques basados en evidencia para ayudar a los clientes a superar desafíos y mejorar su bienestar mental.",
  workTopics = ["Autoestima", "Relaciones", "Estrés", "Ansiedad", "Depresión"],
  onViewDetails,
}: TherapistCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <p className="text-sm text-gray-700 line-clamp-3">{description}</p>
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

      <TherapistDetailModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        therapist={{
          name,
          image,
          description,
          specialties,
          workTopics,
        }}
      />
    </>
  );
};

export default TherapistCard;

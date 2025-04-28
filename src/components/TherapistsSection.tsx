import React from "react";
import TherapistCard from "./TherapistCard";
import { motion } from "framer-motion";

interface TherapistsSectionProps {
  title?: string;
  description?: string;
  therapists?: Array<{
    id: string;
    name: string;
    image: string;
    credentials: string;
    specialties: string[];
    description?: string;
    workTopics: string[];
  }>;
}

const TherapistsSection = ({
  title = "Nuestros Terapeutas",
  description = "",
  therapists = [
    {
      id: "1",
      name: "Ps. Marie Elaine Mackenzie",
      image: "/Fotos/Marie3.png",
      credentials: "Psicóloga Clínica y Fundadora ",
      specialties: ["Fobia", "Bipolaridad", "Duelo", "Emociones", "Estrés", ],
      description:
        "Psicóloga y fundadora de la Clínica Psicológica El Naranjo. Me especializo en psicoterapia breve, con...",
      workTopics: ["Autoestima", "Autocuidado", "Depresión", "Espectro Autista", "Fobias"],
    },
    {
      id: "2",
      name: "Ps. Ignacia Quezada",
      image: "/Fotos/Ignacia1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: ["Duelo", "Autoestima", "Emociones", ],
      description:
        "Psicóloga Clínica especializada en el área Infanto-Juvenil y Adultos. Cuento con 5 años de experiencia en...",
      workTopics: ["Pensamientos", "Heridas de la Infancia", "Dependencia Emocional", "Autoconocimiento", "Duelo"],
    },
    {
      id: "3",
      name: "Ps. Jissel Alvarado",
      image: "/Fotos/Jissel1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: ["Traumas", "Ansiedad", "Pérdidas", "Manejo de emociones", "Adaptación", ],
      description:
        "Psicóloga especialista en terapia sistémica breve, con enfoque en temáticas de género y violencia...",
      workTopics: ["Ansiedad Social", "Traumas complejos", "Relaciones Familiares", "Conflictos de pareja", "Comunicación"],
    },
    {
      id: "4",
      name: "Ps. Guido Palma",
      image: "/Fotos/Guido1.jpg",
      credentials: "Psicólogo Clínico",
      specialties: ["Depresión", "Duelo", "Trauma", "Autoestima", ],
      description:
        "Psicólogo clínico comprometido con la salud mental. Mi enfoque se basa en reconocer la singularidad de...",
      workTopics: ["Neurodivergencias", "Dificultades Relacionales", "Ansiedad", "Depresión", "Duelo"],
    },
    {
      id: "5",
      name: "Ps. Catalina Hennigs",
      image: "/Fotos/Catalina1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: ["Crisis", "Depresión", "TEA", ],
      description:
        "Psicóloga clínica especializada en adultos, con atención online. Me enfoco en el tratamiento de...",
      workTopics: ["Crisis Vitales", "Duelo", "Ansiedad", "Manejo Emocional", "Trastornos del Ánimo"],
    },
  ],
}: TherapistsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-peach-100" id="therapists">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-peach-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-peach-700 max-w-3xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
          {therapists.slice(0, 2).map((therapist, index) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TherapistCard
                id={therapist.id}
                name={therapist.name}
                image={therapist.image}
                credentials={therapist.credentials}
                specialties={therapist.specialties}
                description={therapist.description}
                workTopics={therapist.workTopics}
                onViewDetails={() =>
                  console.log(`View details for ${therapist.name}`)
                }
              />
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center mt-8">
          {therapists.slice(2).map((therapist, index) => (
            <motion.div
              key={therapist.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              viewport={{ once: true }}
            >
              <TherapistCard
                id={therapist.id}
                name={therapist.name}
                image={therapist.image}
                credentials={therapist.credentials}
                specialties={therapist.specialties}
                description={therapist.description}
                workTopics={therapist.workTopics}
                onViewDetails={() =>
                  console.log(`View details for ${therapist.name}`)
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TherapistsSection;

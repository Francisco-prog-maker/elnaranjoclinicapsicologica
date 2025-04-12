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
    description: string;
    workTopics: string[];
  }>;
}

const TherapistsSection = ({
  title = "Nuestros Terapeutas Expertos",
  description = "Conoce a nuestro equipo de profesionales licenciados dedicados a proporcionar atención de salud mental compasiva y efectiva.",
  therapists = [
    {
      id: "1",
      name: "Dra. Marie Elaine Mackenzie",
      image: "/Fotos/Marie3.png",
      credentials: "Doctorado en Psicología Clínica",
      specialties: ["Ansiedad", "Depresión", "Trauma", "Terapia de Parejas", "Mindfulness"],
      description:
        "La Dra. Mackenzie se especializa en enfoques basados en evidencia para ayudar a los clientes a superar desafíos y mejorar su bienestar mental.",
      workTopics: ["Autoestima", "Relaciones", "Estrés", "Desarrollo Personal", "Bienestar Emocional"],
    },
    {
      id: "2",
      name: "Ps. Ignacia Álvarez",
      image: "/Fotos/Ignacia1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: [
        "Psicoterapia Individual",
        "Terapia de Parejas",
        "Desarrollo Personal",
        "Manejo del Estrés",
        "Mindfulness"
      ],
      description:
        "La Ps. Ignacia se especializa en acompañar procesos de desarrollo personal y relacional, utilizando un enfoque integrador y centrado en la persona.",
      workTopics: ["Relaciones Interpersonales", "Ansiedad", "Depresión", "Autoconocimiento", "Duelo"],
    },
    {
      id: "3",
      name: "Ps. Jissel Álvarez",
      image: "/Fotos/Jissel1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: [
        "Terapia Individual",
        "Desarrollo Personal",
        "Manejo de Ansiedad",
        "Terapia Familiar",
        "Mindfulness"
      ],
      description:
        "La Ps. Jissel ayuda a sus pacientes a desarrollar estrategias efectivas para manejar la ansiedad y promover el crecimiento personal.",
      workTopics: ["Ansiedad Social", "Estrés Laboral", "Relaciones Familiares", "Autoestima", "Comunicación"],
    },
    {
      id: "4",
      name: "Ps. Guido Bustamante",
      image: "/Fotos/Guido1.jpg",
      credentials: "Psicólogo Clínico",
      specialties: [
        "Terapia Individual",
        "Psicoterapia",
        "Manejo del Estrés",
        "Terapia de Pareja",
        "Mindfulness"
      ],
      description:
        "El Ps. Guido se enfoca en proporcionar herramientas efectivas para el manejo del estrés y el desarrollo de habilidades de afrontamiento.",
      workTopics: ["Manejo del Estrés", "Relaciones de Pareja", "Ansiedad", "Desarrollo Personal", "Bienestar"],
    },
    {
      id: "5",
      name: "Ps. Catalina",
      image: "/Fotos/Catalina1.jpg",
      credentials: "Psicóloga Clínica",
      specialties: [
        "Terapia Individual",
        "Desarrollo Personal",
        "Psicoterapia",
        "Terapia Familiar",
        "Mindfulness"
      ],
      description:
        "La Ps. Catalina acompaña a sus pacientes en su proceso terapéutico con un enfoque integral y personalizado.",
      workTopics: ["Desarrollo Personal", "Relaciones Familiares", "Autoestima", "Manejo Emocional", "Bienestar"],
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

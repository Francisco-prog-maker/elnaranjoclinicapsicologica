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
      name: "Psi. Marie Elaine Mackenzie",
      image: "/Fotos/Marie3.png",
      credentials: "Psicóloga Clínica y Fundadora ",
      specialties: ["Ansiedad", "Bipolaridad", "Duelos", "Emociones", "Estrés", ],
      description:
        "Soy Marie Mackenzie, psicóloga y fundadora de la Clínica Psicológica El Naranjo. Me especializo en psicoterapia breve, con un enfoque humanista y experiencial, trabajando principalmente con adolescentes y adultos. Mi objetivo es ofrecer un acompañamiento cálido y profesional, donde cada paciente se sienta escuchado y comprendido.",
      workTopics: ["Autoestima", "Autocuidado", "Depresión", "Espectro Autista", "Fobias"],
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
        "Soy Ignacia Quezada Segovia, Psicóloga Clínica del área Infanto-Juvenil y Adultos. Atiendo desde hace 5 años en Modalidad Online. Mi objetivo es apoyar a los pacientes en su proceso terapéutico.",
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
        "Soy Jissel Alvarado, psicóloga, trabajo con la terapia sistémica breve, con enfoque en temáticas de género y violencia. También trabajo en autoconocimiento y bienestar emocional, acompañando a las personas en su proceso de crecimiento personal. Principalmente atiendo a adultos, brindando un espacio de escucha y reflexión, donde puedan sentirse comprendidos y encontrar estrategias y herramientas para afrontar su día a día. Mi objetivo es ofrecer un espacio seguro para sanar y crecer, promoviendo el bienestar emocional y el fortalecimiento personal.",
      workTopics: ["Ansiedad Social", "Estrés Laboral", "Relaciones Familiares", "Autoestima", "Comunicación"],
    },
    {
      id: "4",
      name: "Ps. Guido Palma",
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
        "Soy Guido Palma, psicólogo apasionado por la salud mental. Mi labor se fundamenta en reconocer y valorar la singularidad de cada persona, lo que me permite diseñar tratamientos personalizados y adaptados a sus necesidades específicas. Me defino como un profesional proactivo, accesible, empático y comprometido con mi trabajo. Constantemente me esfuerzo por perfeccionar mis conocimientos teóricos y prácticos, con el objetivo de brindar la mejor atención posible.",
      workTopics: ["Manejo del Estrés", "Relaciones de Pareja", "Ansiedad", "Desarrollo Personal", "Bienestar"],
    },
    {
      id: "5",
      name: "Ps. Catalina Hennigs",
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
        "Soy Catalina Hennigs, psicóloga clínica adultos. Atiendo en modalidad online. Acompaño a personas que atraviesan trastornos del ánimo, ansiedad, depresión y dificultades en el neurodesarrollo, incluyendo el Trastorno del Espectro Autista (TEA). También brindo apoyo en procesos de duelo y crisis vitales, ofreciendo un espacio de escucha y reflexión desde una perspectiva psicoanalítica.",
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

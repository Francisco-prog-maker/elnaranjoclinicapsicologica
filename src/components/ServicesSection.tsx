import React from "react";
import { motion } from "framer-motion";
import ServiceCard, {
  IndividualTherapyCard,
  CoupleTherapyCard,
  FamilyTherapyCard,
  VocationalGuidanceCard,
} from "./ServiceCard";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
}

const ServicesSection = ({
  title = "Nuestros Servicios",
  subtitle = "",
}: ServicesSectionProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-peach-50" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-peach-900 mb-4">
            {title}
          </h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto place-items-center"
        >
          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <IndividualTherapyCard 
              detailedInfo="La psicoterapia individual está pensada para quienes necesitan un tiempo y un lugar para sí. Aquí puedes explorar tus emociones, aprender a poner límites, trabajar la ansiedad, el estrés, el perfeccionismo, la autoestima o cualquier otra dificultad que esté interfiriendo en tu día a día. Nuestro enfoque es respetuoso, empático y adaptado a tus tiempos y necesidades." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <CoupleTherapyCard 
              detailedInfo="Esta terapia es un espacio conjunto para observar patrones relacionales, resolver conflictos de manera constructiva y reconectar con lo que les une. Trabajamos con parejas en distintas etapas (convivencia, crianza, crisis, decisiones importantes) desde una mirada que valida a ambas partes, promoviendo acuerdos y comprensión." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <FamilyTherapyCard 
              detailedInfo="La familia es un sistema vivo, y cada integrante tiene un rol importante. Esta terapia ofrece herramientas para afrontar desafíos como conflictos entre padres e hijos, cambios familiares, duelos o dificultades en la convivencia. Promovemos un espacio donde cada voz sea escuchada y donde puedan avanzar juntos hacia una convivencia más armónica." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <VocationalGuidanceCard 
              detailedInfo="Este servicio está diseñado para adolescentes o personas adultas que están en procesos de elección o cambio vocacional. A través de sesiones reflexivas, herramientas prácticas y autoconocimiento, te ayudamos a tomar decisiones informadas y alineadas con tu identidad, valores y proyecto de vida. No se trata solo de elegir una carrera, sino de conocerte mejor para proyectar tu futuro con sentido." 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

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
  subtitle = "Ofrecemos una variedad de servicios terapéuticos para apoyar tu bienestar mental",
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
              detailedInfo="Nuestras sesiones de terapia individual proporcionan un espacio seguro y confidencial donde puedes trabajar directamente con un terapeuta capacitado para abordar desafíos personales, explorar emociones y desarrollar estrategias de afrontamiento. Las sesiones generalmente duran 50 minutos y están adaptadas a tus necesidades y objetivos únicos." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <CoupleTherapyCard 
              detailedInfo="La terapia de parejas ayuda a los compañeros a mejorar su relación a través de una mejor comunicación, resolución de conflictos y comprensión más profunda. Nuestros terapeutas crean un ambiente neutral donde ambas personas pueden expresar sus preocupaciones, aprender a escuchar efectivamente y desarrollar estrategias para fortalecer su vínculo." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <FamilyTherapyCard 
              detailedInfo="La psicoterapia familiar es un espacio seguro donde toda la familia puede trabajar junta para mejorar la comunicación, resolver conflictos y fortalecer los lazos familiares. Nuestros terapeutas ayudan a identificar patrones disfuncionales, establecer límites saludables y desarrollar estrategias efectivas para una mejor convivencia familiar." 
            />
          </motion.div>

          <motion.div variants={itemVariants} className="w-full flex justify-center">
            <VocationalGuidanceCard 
              detailedInfo="Nuestro servicio de orientación vocacional te ayuda a descubrir tu verdadera vocación a través de evaluaciones especializadas, asesoramiento personalizado y exploración de carreras. Trabajamos contigo para identificar tus fortalezas, intereses y valores, ayudándote a tomar decisiones informadas sobre tu futuro profesional." 
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

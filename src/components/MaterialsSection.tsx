import React from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface MaterialsSectionProps {
  title?: string;
}

const MaterialsSection = ({
  title = "Guías",
}: MaterialsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 bg-peach-50" id="materials">
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
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Primer Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <Card className="relative h-[300px] overflow-hidden group cursor-pointer">
              <img
                src="/Fotos/mat1.jpg"
                alt="Mi Zona de calma"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white text-center px-4">
                  Mi Zona de calma
                </h3>
              </div>
            </Card>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/12vJ3ScmiTEgaxJqcCrd-qQtf0CtM_Lo6/view", "_blank")}
              className="bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Plantilla para imprimir
            </Button>
          </motion.div>

          {/* Segundo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <Card className="relative h-[300px] overflow-hidden group cursor-pointer">
              <img
                src="/Fotos/mat1.jpg"
                alt="Desafío de emociones"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white text-center px-4">
                  Desafío de emociones
                </h3>
              </div>
            </Card>
            <Button 
              onClick={() => window.open("https://drive.google.com/file/d/15p8lfxllTWddLtFUab0VSx5t6nZxyW5v/view", "_blank")}
              className="bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black flex items-center justify-center gap-2"
            >
              <Download className="h-4 w-4" />
              Plantilla para imprimir
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;
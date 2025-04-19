import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "./ui/carousel";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactSection = () => {
  const form = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) return;

    api.off("select", () => {}); // Añadimos el callback vacío requerido

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
      api.off("select", () => {});
    };
  }, [api]);

  const onSubmit = (data: ContactFormValues) => {
    // Log form data
    console.log(data);

    // Create Google Calendar URL with form data
    const title = `Cita: ${data.name}`;
    const description = `Correo: ${data.email}\nTeléfono: ${data.phone}\nMensaje: ${data.message}`;

    // Format date for tomorrow at 10:00 AM
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(10, 0, 0, 0);

    // Set duration to 1 hour
    const endTime = new Date(tomorrow);
    endTime.setHours(11, 0, 0, 0);

    // Format dates for Google Calendar URL
    const startDate = tomorrow.toISOString().replace(/-|:|\.\d+/g, "");
    const endDate = endTime.toISOString().replace(/-|:|\.\d+/g, "");

    // Construct Google Calendar URL
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&details=${encodeURIComponent(description)}&dates=${startDate}/${endDate}`;

    // Open Google Calendar in a new tab
    window.open(googleCalendarUrl, "_blank");

    // Reset the form
    form.reset();
  };

  return (
    <section
      className="py-16 px-4 md:px-8 bg-gradient-to-b from-peach-200 to-peach-50"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-peach-900 mb-4">
            Contacto
          </h2>
          <p className="text-lg text-peach-700 max-w-2xl mx-auto">
            Estamos aquí para ayudarte en tu camino hacia una mejor salud
            mental. Comunícate con nosotros para programar una cita o hacer
            cualquier pregunta.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Solicitar una Cita
            </h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre Completo</FormLabel>
                      <FormControl>
                        <Input placeholder="Juan Pérez" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="juan@ejemplo.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Número de Teléfono</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Tu Mensaje</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Cuéntanos sobre tus inquietudes o cualquier servicio específico que te interese..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full bg-[#FFDAB9] hover:bg-[#FFE4C4] text-black"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </Form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="bg-white p-8 rounded-lg shadow-md mb-6">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                Información de la Clínica
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Ubicación</h4>
                    <p className="text-slate-600">
                      Calle Sanación 123, Suite 101
                      <br />
                      Ciudad Bienestar, CB 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Teléfono</h4>
                    <p className="text-slate-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">
                      Correo Electrónico
                    </h4>
                    <p className="text-slate-600">
                      contacto@clinicapsicologica.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-teal-600 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Horario</h4>
                    <p className="text-slate-600">
                      Lunes - Viernes: 9:00 AM - 7:00 PM
                      <br />
                      Sábado: 10:00 AM - 4:00 PM
                      <br />
                      Domingo: Cerrado
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map replaced with Image Carousel */}
            <div className="bg-white p-4 rounded-lg shadow-md h-[300px] overflow-hidden">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                }}
                className="w-full h-full"
              >
                <CarouselContent>
                  <CarouselItem>
                    <div className="relative w-full h-[280px]">
                      <img
                        src="/Fotos/Terapiafamiliar.jpg"
                        alt="Terapia Familiar"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white rounded-md">
                        <h3 className="text-2xl font-bold mb-2 text-center px-4">
                          Bienvenid@s a Clínica<br/>Psicológica El Naranjo
                        </h3>
                        <p className="text-xl">Terapia Familiar</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative w-full h-[280px]">
                      <img
                        src="/Fotos/Terapiaindividual.png"
                        alt="Terapia Individual"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white rounded-md">
                        <h3 className="text-2xl font-bold mb-2 text-center px-4">
                          Bienvenid@s a Clínica<br/>Psicológica El Naranjo
                        </h3>
                        <p className="text-xl">Terapia Individual</p>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="relative w-full h-[280px]">
                      <img
                        src="/Fotos/terapiapareja.jpg"
                        alt="Terapia de Pareja"
                        className="w-full h-full object-cover rounded-md"
                      />
                      <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white rounded-md">
                        <h3 className="text-2xl font-bold mb-2 text-center px-4">
                          Bienvenid@s a Clínica<br/>Psicológica El Naranjo
                        </h3>
                        <p className="text-xl">Terapia de Pareja</p>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

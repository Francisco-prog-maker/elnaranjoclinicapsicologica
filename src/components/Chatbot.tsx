import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { MessageCircle, X, Send } from "lucide-react";
import { createGoogleCalendarUrl } from "@/lib/utils";

interface Message {
  text: string;
  sender: "user" | "bot";
}

interface ChatbotProps {
  name?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({ name = "Ps. Yin" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: `Hola, soy ${name}.`, sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [questionCount, setQuestionCount] = useState(0);
  const [askedAboutAppointment, setAskedAboutAppointment] = useState(false);
  const [waitingForAppointmentResponse, setWaitingForAppointmentResponse] = useState(false);
  const [initialGreetingDone, setInitialGreetingDone] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleTherapistScheduling = (input: string) => {
    const therapistUrls = {
      marie: "https://encuadrado.com/p/marie-elaine-mackenzie-pelaez/",
      ignacia: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Wd1dfg2xV3N7m5eKUx8grOZ0-fNY9NK-ayYDuZeCu1GfWQ7mLic-fN4oo3J9iNRA1k_TBl7HA",
      guido: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0yMz-lI8LM3qheGCCCnCyoDIYdATjmsU5ncA8L6KnOsSiWGy3OEKVXmofhAdFaL7b8jj9nM8hd",
      catalina: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0buGr6ORjpJQqSZupXD41qiemCqWiHHtRaRqnCL0u9pfAKSTJUTnRWssX9K_4YhfFBzlfT9Y6W",
      jissel: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1Xj0u8u_ff2QQMWE-oyTtpwO8Cj7wzORoUkmLQoffekthGAg7qtIPEir7w6sboFJYP7KYpv4Yd"
    };

    const input_lower = input.toLowerCase();
    let selectedTherapist = null;

    if (input_lower.includes("marie") || input_lower.includes("mackenzie")) {
      selectedTherapist = "marie";
    } else if (input_lower.includes("ignacia") || input_lower.includes("quezada")) {
      selectedTherapist = "ignacia";
    } else if (input_lower.includes("guido") || input_lower.includes("palma")) {
      selectedTherapist = "guido";
    } else if (input_lower.includes("catalina") || input_lower.includes("hennigs")) {
      selectedTherapist = "catalina";
    } else if (input_lower.includes("jissel") || input_lower.includes("alvarado")) {
      selectedTherapist = "jissel";
    }

    if (selectedTherapist) {
      const goodbyeMessage: Message = {
        text: `¡Perfecto! Te dirigiré al calendario de ${selectedTherapist.charAt(0).toUpperCase() + selectedTherapist.slice(1)}. Gracias por confiar en nosotros.`,
        sender: "bot" as const
      };
      setMessages(prev => [...prev, goodbyeMessage]);
      setTimeout(() => {
        window.open(therapistUrls[selectedTherapist!], "_blank");
      }, 1500);
      return true;
    }
    return false;
  };

  const qaPairs = [
    {
      keywords: ["whatsapp", "whats app", "wsp", "wassap", "y el whastapp?", "y el whatsapp?", "whasap", "contactar", "contacto", "mensaje", "mensajear", "número", "numero", "chat"],
      response: "Por supuesto, te comparto nuestro WhatsApp para que puedas contactarnos directamente. Te redirigiré al chat.",
    },
    {
      keywords: ["agendar", "agenda", "quiero agendar", "deseo agendar", "cita", "reservar", "reserva", "hora", "agendar hora", "agendar una hora", "hijo", "hija", "niño", "niña", "busco", "buscando", "necesito", "psicólogo", "psicologa", "psicóloga", "psicologo", "psicólogos", "psicologos", "terapia", "consulta", "atención", "atencion", "tratamiento"],
      response: "¡Por supuesto! Te ayudo a agendar una hora. ¿Con cuál de nuestros profesionales te gustaría agendar?\n- Ps. Marie Mackenzie\n- Ps. Ignacia Quezada\n- Ps. Catalina Hennigs\n- Ps. Guido Palma\n- Ps. Jissel Alvarado",
    },
    {
      keywords: ["ansiedad", "nervios", "preocupación", "preocupacion"],
      response:
        "La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. Si sientes que afecta tu vida diaria, técnicas como la respiración profunda, meditación y terapia cognitivo-conductual pueden ayudar.",
    },
    {
      keywords: ["depresión", "depresion", "triste", "tristeza"],
      response:
        "La depresión es un trastorno del estado de ánimo que puede manifestarse como tristeza persistente, pérdida de interés y energía. Es importante buscar ayuda profesional si experimentas estos síntomas por más de dos semanas.",
    },
    {
      keywords: ["terapia", "psicólogo", "psicologa", "tratamiento", "buscando psicólogo", "buscando psicóloga"],
      response:
        "¡Por supuesto! Te ayudo a agendar una hora. ¿Con cuál de nuestros profesionales te gustaría agendar? Tenemos disponibles a:\n- Ps. Marie\n- Ps. Ignacia\n- Ps. Catalina\n- Ps. Guido\n- Ps. Jissel",
    },
    {
      keywords: ["estrés", "estres", "agobio", "agobiado", "tensión", "tension"],
      response:
        "El estrés crónico puede afectar tanto tu salud mental como física. Algunas estrategias para manejarlo incluyen establecer límites saludables, practicar técnicas de relajación y mantener hábitos de vida saludables.",
    },
    {
      keywords: ["dormir", "insomnio", "sueño", "sueno"],
      response:
        "Los problemas de sueño son comunes y pueden estar relacionados con ansiedad, depresión o estrés. Mantener una rutina de sueño regular, limitar la cafeína y crear un ambiente propicio para dormir pueden ayudar a mejorar la calidad del sueño.",
    },
    {
      keywords: ["cuándo", "cuando", "empezar", "comenzar", "iniciar"],
      response:
        "Si sientes que te cuesta manejar el estrés, la ansiedad, la tristeza o cualquier desafío emocional en tu día a día, o si simplemente quieres conocerte mejor, es un buen momento para considerar la terapia.",
    },
    {
      keywords: ["duración", "duracion", "tiempo"],
      response:
        "Generalmente, una sesión de terapia dura entre 45 y 60 minutos. La frecuencia de las sesiones puede variar según las necesidades de cada persona.",
    },
    {
      keywords: ["elegir", "elijo", "adecuado", "terapeuta"],
      response:
        "¡Por supuesto! Te ayudo a agendar una hora. ¿Con cuál de nuestros profesionales te gustaría agendar? Tenemos disponibles a:\n- Ps. Marie\n- Ps. Ignacia\n- Ps. Catalina\n- Ps. Guido\n- Ps. Jissel",
    },
    {
      keywords: ["cuántas", "cuantas", "sesiones", "necesito", "duración terapia", "duracion terapia", "tiempo terapia"],
      response:
        "La duración de la terapia varía según los objetivos que tengas. Algunos encuentran beneficios con pocas sesiones, mientras que otros prefieren trabajar a largo plazo para profundizar en ciertos temas. Tu terapeuta te orientará sobre la mejor estrategia para ti.",
    },
    {
      keywords: ["informacion de los psicologos", "valores", "valores de la sesion", "valores de las sesiones", "precio", "precios", "precio de la sesion", "precios de las sesiones", "costo", "costos", "valor", "cuanto cuesta", "cuanto vale", "información de los psicólogos", "información psicólogos", "información de terapeutas", "terapeutas disponibles", "especialidades", "especialidad", "valores sesiones", "precio sesion", "precio sesiones", "costo sesion", "costo sesiones", "valor sesion", "valor sesiones"],
      response: "Te invito a visitar nuestra sección de Terapeutas en la página principal donde encontrarás información detallada sobre cada profesional, sus especialidades y los valores de las sesiones. Te redirigiré allí ahora.",
    },
    {
      keywords: ["normal", "nervios", "comenzar", "miedo"],
      response:
        "¡Totalmente normal! Es común sentir nervios antes de comenzar terapia. La terapia es un proceso que puede ayudarte a superar tus miedos y ansiedades.",
    },
    {
      keywords: ["graves", "problemas", "crisis"],
      response:
        "No, la terapia es útil para cualquier persona que quiera mejorar su bienestar emocional o abordar desafíos cotidianos. No necesitas estar en una crisis para beneficiarte de ella.",
    },
    {
      keywords: ["problemas", "tratar", "ayuda", "temas"],
      response:
        "La terapia puede ayudarte con una amplia gama de temas, como ansiedad, depresión, estrés, relaciones interpersonales, autoestima, toma de decisiones, duelos, entre otros.",
    },
    {
      keywords: ["confidencial", "privado", "secreto"],
      response:
        "Sí, todo lo que compartas con tu terapeuta es completamente confidencial, salvo en situaciones excepcionales (como riesgos de daño a ti mismo/a o a otros).",
    },
    {
      keywords: ["resultados", "mejora", "tiempo"],
      response:
        "Esto depende de cada persona y sus objetivos. Algunas personas sienten mejoras en pocas sesiones, mientras que otras prefieren un proceso más largo. Lo importante es que cada paso es un avance hacia tu bienestar.",
    },
    {
      keywords: ["cómodo", "comodo", "cambiar", "indicado"],
      response:
        "Si sientes que no es el indicado, es válido cambiar de profesional. Lo más importante es que tengas una conexión y te sientas en confianza para trabajar en ti.",
    },
    {
      keywords: ["silencio", "decir", "callado"],
      response:
        "Es completamente normal. La terapia es un proceso flexible, y tu terapeuta te guiará. A veces el silencio o la pausa también son parte de la reflexión y el trabajo interno.",
    },
    {
      keywords: ["trabajo", "laboral", "empresa"],
      response:
        "La ansiedad en el trabajo puede estar relacionada con varios factores como la carga laboral, relaciones interpersonales o equilibrio trabajo-vida. Podemos explorar técnicas de manejo del estrés y establecer límites saludables para mejorar tu bienestar laboral.",
    },
    {
      keywords: ["pensamientos negativos", "negativo", "pensamiento"],
      response:
        "Los pensamientos negativos pueden ser abrumadores, pero existen técnicas efectivas para manejarlos. La terapia cognitivo-conductual puede ayudarte a identificar patrones de pensamiento y desarrollar estrategias para reestructurarlos de manera más positiva.",
    },
    {
      keywords: ["pareja", "relación", "relacion"],
      response:
        "Las dificultades en las relaciones de pareja son comunes. La terapia puede ayudar a mejorar la comunicación, resolver conflictos y fortalecer la conexión emocional. Trabajaremos en desarrollar herramientas para una relación más saludable.",
    },
    {
      keywords: ["estancado", "dirección", "direccion", "metas"],
      response:
        "Sentirse estancado puede ser frustrante. La terapia puede ayudarte a explorar tus valores, identificar objetivos significativos y desarrollar un plan de acción para avanzar hacia donde quieres estar.",
    },
    {
      keywords: ["trauma", "traumático", "traumatico"],
      response:
        "El trauma puede tener un impacto significativo en nuestra vida. Existen enfoques terapéuticos específicos para el trauma que pueden ayudarte a procesar las experiencias difíciles y desarrollar resiliencia. Es importante trabajar a tu propio ritmo y en un espacio seguro.",
    },
    {
      keywords: ["informacion de los psicologos", "como se llaman los psicologos", "como se llaman las psicologas", "valores", "valores de la sesion", "valores de las sesiones", "precio", "precios", "precio de la sesion", "precios de las sesiones", "los precios de las sesiones", "costo", "costos", "valor", "cuanto cuesta", "cuanto vale", "información de los psicólogos", "información psicólogos", "información de terapeutas", "terapeutas disponibles", "especialidades", "especialidad"],
      response: "Te invito a visitar nuestra sección de Terapeutas en la página principal donde encontrarás información detallada sobre cada profesional, sus especialidades y los valores de las sesiones. Te redirigiré allí ahora.",
    },
  ];

  const handleWhatsAppRequest = (input: string) => {
    const whatsappKeywords = ["whatsapp", "whats app", "wsp", "wassap", "whasap", "contactar", "contacto", "mensaje", "mensajear"];
    const input_lower = input.toLowerCase();
    
    if (whatsappKeywords.some(keyword => input_lower.includes(keyword))) {
      const message: Message = {
        text: "Por supuesto, te redirigiré a nuestro WhatsApp para que puedas contactarnos directamente.",
        sender: "bot" as const
      };
      setMessages(prev => [...prev, message]);
      setTimeout(() => {
        window.open("http://wa.me/56933434628", "_blank");
      }, 1500);
      return true;
    }
    return false;
  };

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage: Message = { 
      text: input, 
      sender: "user" as const 
    };
    setMessages((prev) => [...prev, userMessage]);
    
    // Check for therapist info request
    const therapistInfoKeywords = ["informacion de los psicologos", "valores", "precios", "precio", "costo", "costos", "valor"];
    if (therapistInfoKeywords.some(keyword => input.toLowerCase().includes(keyword))) {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
      setTimeout(() => {
        // Redirect to therapists section
        const therapistsSection = document.getElementById('therapists');
        if (therapistsSection) {
          therapistsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1500);
      setInput("");
      return;
    }

    if (handleWhatsAppRequest(input)) {
      setInput("");
      return;
    }

    if (handleTherapistScheduling(input)) {
      setInput("");
      return;
    }

    if (checkForSchedulingRequest(input)) {
      const response = generateResponse(input);
      setMessages(prev => [...prev, { text: response, sender: "bot" }]);
      setInput("");
      return;
    }

    if (!initialGreetingDone) {
      const greetings = ["hola", "buenos días", "buenos dias", "buenas tardes", "buenas noches", "hi", "hello"];
      if (greetings.some(greeting => input.toLowerCase().includes(greeting))) {
        setTimeout(() => {
          setMessages((prev) => [...prev, { 
            text: "¿En qué puedo ayudarte hoy?", 
            sender: "bot" 
          }]);
          setInitialGreetingDone(true);
        }, 500);
      } else {
        setInitialGreetingDone(true);
        if (waitingForAppointmentResponse) {
          handleAppointmentResponse(input);
        } else {
          setQuestionCount(count => count + 1);
          setTimeout(() => {
            const botResponse = generateResponse(input);
            setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
            checkForNextAction();
          }, 500);
        }
      }
    } else {
      if (waitingForAppointmentResponse) {
        handleAppointmentResponse(input);
      } else {
        setQuestionCount(count => count + 1);
        setTimeout(() => {
          const botResponse = generateResponse(input);
          setMessages((prev) => [...prev, { text: botResponse, sender: "bot" }]);
          checkForNextAction();
        }, 500);
      }
    }
    
    setInput("");
  };

  const checkForSchedulingRequest = (input: string): boolean => {
    const schedulingKeywords = [
      "agendar", "agenda", "cita", "reservar", "reserva",
      "quiero agendar", "deseo agendar", "quisiera agendar",
      "quiero una cita", "deseo una cita", "necesito una cita", "hora", "agendar hora", "agendar una hora"
    ];
    
    const therapistNames = [
      "marie", "ignacia", "catalina", "guido", "jissel",
      "ps marie", "ps ignacia", "ps catalina", "ps guido", "ps jissel",
      "ps. marie", "ps. ignacia", "ps. catalina", "ps. guido", "ps. jissel"
    ];

    const input_lower = input.toLowerCase();
    
    const hasSchedulingKeyword = schedulingKeywords.some(keyword => 
      input_lower.includes(keyword.toLowerCase())
    );
    
    const hasTherapistName = therapistNames.some(name => 
      input_lower.includes(name.toLowerCase())
    );

    return hasSchedulingKeyword || hasTherapistName;
  };

  const generateResponse = (userInput: string): string => {
    if (checkForSchedulingRequest(userInput)) {
      return "¡Por supuesto! Te ayudo a agendar una cita. ¿Con cuál de nuestros profesionales te gustaría agendar? Tenemos disponibles a:\n- Ps. Marie\n- Ps. Ignacia\n- Ps. Catalina\n- Ps. Guido\n- Ps. Jissel";
    }

    const lowercaseInput = userInput.toLowerCase();

    for (const pair of qaPairs) {
      if (pair.keywords.some((keyword) => lowercaseInput.includes(keyword))) {
        return pair.response;
      }
    }

    return "Lo siento, no tengo información específica sobre eso. ¿Puedo ayudarte con algo más relacionado con ansiedad, depresión, terapia, estrés o problemas de sueño? También puedo ayudarte a agendar una cita con nuestros profesionales.";
  };

  const handleAppointmentResponse = (input: string) => {
    if (checkPositiveResponse(input)) {
      const goodbyeMessage: Message = {
        text: "¡Me alegro mucho! Gracias por confiar en nosotros. Te dirigiré al calendario para que puedas agendar tu cita con el profesional de tu preferencia.",
        sender: "bot" as const
      };
      setMessages(prev => [...prev, goodbyeMessage]);
      setTimeout(() => {
        window.open(createGoogleCalendarUrl(), "_blank");
      }, 1500);
    } else if (checkNegativeResponse(input)) {
      setQuestionCount(count => count + 1);
      const responseMessage: Message = {
        text: "Entiendo perfectamente. Continuemos conversando y cuando te sientas preparado/a, puedes agendar una cita en el momento que lo consideres adecuado.",
        sender: "bot" as const
      };
      setMessages(prev => [...prev, responseMessage]);
    }
    setWaitingForAppointmentResponse(false);
  };

  const checkPositiveResponse = (input: string): boolean => {
    const positiveWords = ["si", "sí", "ok", "esta bien", "bien", "claro", "por supuesto", "dale", "bueno"];
    const lowerInput = input.toLowerCase();
    return positiveWords.some(word => lowerInput.includes(word));
  };

  const checkNegativeResponse = (input: string): boolean => {
    const negativeWords = ["no", "nop", "nel", "después", "despues", "otro día", "otro dia", "más tarde", "mas tarde", "ahora no"];
    const lowerInput = input.toLowerCase();
    return negativeWords.some(word => lowerInput.includes(word));
  };

  const askAboutAppointment = () => {
    const message: Message = {
      text: "¿Te gustaría agendar una cita con alguno de nuestros psicólogos? Tenemos disponibles a la Ps. Marie, Ps. Ignacia, Ps. Catalina, Ps. Guido y Ps. Jissel.",
      sender: "bot" as const
    };
    setMessages(prev => [...prev, message]);
    setWaitingForAppointmentResponse(true);
    setAskedAboutAppointment(true);
  };

  const checkForFinalGoodbye = () => {
    const goodbyeMessage: Message = {
      text: "Gracias por compartir conmigo. Te animo a que consideres agendar una cita cuando te sientas preparado/a. Nuestros profesionales estarán encantados de ayudarte en tu proceso. ¡Que tengas un excelente día!",
      sender: "bot" as const
    };
    setMessages(prev => [...prev, goodbyeMessage]);
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  const checkForNextAction = () => {
    if (!askedAboutAppointment && questionCount >= 4) {
      setTimeout(askAboutAppointment, 1000);
    } else if (askedAboutAppointment && questionCount >= 7) {
      setTimeout(checkForFinalGoodbye, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 sm:w-96 flex flex-col overflow-hidden border border-gray-200">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h3 className="font-medium">{name}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full hover:bg-blue-700 text-white"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto max-h-80 bg-gray-50">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-3 ${message.sender === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block p-3 rounded-lg ${message.sender === "user" ? "bg-blue-100 text-blue-900" : "bg-white border border-gray-200 text-gray-800"} max-w-[80%]`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-3 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Escribe tu pregunta..."
              className="flex-1 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button
              onClick={handleSend}
              className="rounded-r-md bg-blue-600 hover:bg-blue-700 text-white"
            >
              <Send size={18} />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

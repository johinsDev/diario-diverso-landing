import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description: "Resuelve tus dudas sobre nuestros productos y servicios.",
};

const QUESTIONS = [
  {
    title: "¿Puedo personalizar el diseño de mi diario?",
    content:
      "¡Sí! Puedes elegir el color y el diseño de tu diario dentro de nuestro catálogo al momento de la compra. Queremos que cada diario refleje tu estilo personal.",
  },
  {
    title: "¿Cómo realizo una compra?",
    content:
      "Todas las compras se realizan a través de nuestros asesores por WhatsApp. Ellos te guiarán en cada paso del proceso para asegurarte una experiencia de compra personalizada y satisfactoria.",
  },
  {
    title: "¿Cuál es la política de devoluciones?",
    content:
      "No aceptamos devoluciones. Asegúrate de revisar bien tus elecciones antes de finalizar tu compra. Si tienes alguna duda, nuestros asesores están aquí para ayudarte.",
  },
  {
    title: "¿Cuánto tiempo tardará en llegar mi pedido?",
    content:
      "El tiempo de entrega varía según tu ubicación. Una vez realizado el pedido, te proporcionaremos un estimado de tiempo de entrega. Generalmente, los pedidos se entregan dentro de 5 a 7 días hábiles.",
  },
  {
    title: "¿Qué opciones de pago aceptan?",
    content:
      "Aceptamos pagos mediante transferencia bancaria y algunos servicios de pago móvil. Consulta con tu asesor para más detalles.",
  },
  {
    title: "¿Puedo hacer un seguimiento de mi pedido?",
    content:
      "Sí, una vez que tu pedido haya sido enviado, te proporcionaremos un número de seguimiento para que puedas monitorear el estado de tu entrega.",
  },
  {
    title: "¿Qué hago si mi producto llega dañado?",
    content:
      "Si recibes un producto dañado, contáctanos inmediatamente a través de WhatsApp con fotos del daño. Evaluaremos el caso y te ofreceremos una solución.",
  },
  {
    title:
      "¿Puedo comprar productos adicionales, como esferos y separadores, por separado?",
    content:
      "Sí, puedes comprar esferos en gel de diferentes colores y separadores magnéticos por separado. Consulta la disponibilidad y opciones con tu asesor.",
  },
  {
    title: "¿Cómo elijo las mini portadas para el diario de lectura?",
    content:
      "Puedes seleccionar las mini portadas que prefieras al momento de realizar tu pedido. Nuestros asesores te proporcionarán la atención para conocer la lista de tus favoritas.",
  },
  {
    title: "¿Ofrecen productos digitales?",
    content:
      "Próximamente lanzaremos versiones digitales de nuestros diarios. Mantente al tanto de nuestras actualizaciones en redes sociales y nuestra página web para más información.",
  },
];

export default function FAQPage() {
  return (
    <main className="flex-1 flex flex-col container py-4 md:py-10">
      <h1 className="text-3xl font-bold mb-8">Preguntas frecuentes</h1>

      <Accordion type="multiple">
        {QUESTIONS.map((question, index) => (
          <AccordionItem key={index} value={question.title}>
            <AccordionTrigger className="text-left lg:text-xl font-semibold">
              {question.title}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 mt-2 lg:text-lg">
              {question.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}

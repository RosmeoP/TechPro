import { useState } from 'react';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cómo puedo comenzar a usar TechPro?",
      answer: "Puedes registrarte gratis en nuestra plataforma y acceder a una prueba de 14 días sin necesidad de tarjeta de crédito. Solo necesitas un correo electrónico válido para comenzar."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos todas las tarjetas de crédito y débito principales (Visa, MasterCard, American Express), así como PayPal y transferencias bancarias para planes empresariales."
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer: "Sí, puedes actualizar o degradar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican de inmediato y se ajusta el cobro de forma proporcional."
    },
    {
      question: "¿Ofrecen soporte técnico?",
      answer: "Todos los planes incluyen soporte por email. Los planes Profesional y Empresarial incluyen soporte 24/7 por chat en vivo y llamadas telefónicas con tiempos de respuesta garantizados."
    },
    {
      question: "¿Mis datos están seguros?",
      answer: "Absolutamente. Utilizamos encriptación de nivel bancario (AES-256), copias de seguridad automáticas diarias y cumplimos con las normativas GDPR y SOC 2 Type II."
    },
    {
      question: "¿Puedo cancelar mi suscripción?",
      answer: "Sí, puedes cancelar en cualquier momento sin penalizaciones. Tu acceso continuará hasta el final del período de facturación actual."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Preguntas Frecuentes
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las dudas más comunes sobre TechPro
          </p>
        </div>

        {/* Acordeón */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              {/* Pregunta (Header del acordeón) */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
              >
                <span className="text-base font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                
                {/* Icono de abrir/cerrar */}
                <span
                  className={`text-2xl text-blue-600 transition-transform duration-300 shrink-0 ${
                    activeIndex === index ? 'rotate-45' : 'rotate-0'
                  }`}
                >
                  +
                </span>
              </button>

              {/* Respuesta (Contenido del acordeón) */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            ¿No encontraste lo que buscabas?
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Contáctanos
          </button>
        </div>

      </div>
    </section>
  );
}

export default FAQ;

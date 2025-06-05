import React, { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Какие виды отходов можно перерабатывать на установках YTEO?",
      answer:
        "Установки YTEO могут перерабатывать широкий спектр отходов: промышленные отходы (пластик, бумага, текстиль), энергетические отходы (уголь, биомасса), бытовые отходы, медицинские отходы, автомобильные шины, электронные компоненты и многое другое. Исключение составляют только радиоактивные и высокотоксичные материалы.",
    },
    {
      question: "Сколько времени занимает процесс переработки?",
      answer:
        "Полный цикл переработки отходов в газ занимает от 2 до 4 часов в зависимости от типа и объема отходов. Это включает загрузку, измельчение, термическую обработку при температуре 1200°C, газификацию и очистку получаемого газа.",
    },
    {
      question: "Безопасна ли технология для окружающей среды?",
      answer:
        "Да, технология YTEO полностью экологически безопасна. Процесс происходит при контролируемых условиях без выбросов вредных веществ в атмосферу. Все продукты переработки используются для получения чистого газа, не остается отходов или токсичных остатков.",
    },
    {
      question: "Какую площадь можно отопить получаемым газом?",
      answer:
        "Это зависит от производительности установки и типа перерабатываемых отходов. Например, установка YTEO-Mobile 500 (500 кг/час) может обеспечить газом отопление здания площадью до 2000 м². Более мощные установки способны отапливать целые кварталы или промышленные комплексы.",
    },
    {
      question: "Требуется ли специальное обучение персонала?",
      answer:
        "Да, мы предоставляем полное обучение персонала работе с оборудованием YTEO. Курс включает теоретическую и практическую подготовку, изучение техники безопасности и процедур обслуживания. Обучение занимает 2-3 недели, по окончании выдается сертификат.",
    },
    {
      question: "Какие гарантии предоставляются на оборудование?",
      answer:
        "Мы предоставляем гарантию 3 года на все оборудование YTEO, включая бесплатное техническое обслуживание и замену запчастей. Также доступна расширенная гарантия до 5 лет и договоры сервисного обслуживания с круглосуточной технической поддержкой.",
    },
    {
      question: "Можно ли установить оборудование в труднодоступных регионах?",
      answer:
        "Да, у нас есть мобильные установки YTEO, специально разработанные для работы в удаленных и труднодоступных регионах. Они не требуют подключения к централизованным сетям и могут работать автономно. Доставка и монтаж возможны в любую точку России.",
    },
    {
      question: "Какова стоимость установки и срок окупаемости?",
      answer:
        "Стоимость зависит от производительности и комплектации оборудования: от 1,5 млн ₽ для компактных установок до 15 млн ₽ для промышленных комплексов. Срок окупаемости составляет 2-4 года в зависимости от объемов переработки и стоимости альтернативного топлива в регионе.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-yteo-text-primary mb-6 montserrat-bold">
              Часто задаваемые вопросы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto montserrat-regular leading-relaxed">
              Ответы на самые популярные вопросы о технологии YTEO и нашем
              оборудовании
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left bg-yteo-azure hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-yteo-text-primary montserrat-semibold pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      <i
                        className={`fas ${openFAQ === index ? "fa-minus" : "fa-plus"} text-primary transition-transform duration-200`}
                      ></i>
                    </div>
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 py-4 bg-white border-t border-gray-200 animate-accordion-down">
                    <p className="text-gray-600 montserrat-regular leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 montserrat-regular mb-6">
              Не нашли ответ на свой вопрос?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contacts"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors montserrat-medium"
              >
                <i className="fas fa-envelope mr-2"></i>
                Задать вопрос
              </a>
              <a
                href="tel:+74951234567"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors montserrat-medium"
              >
                <i className="fas fa-phone mr-2"></i>
                Позвонить нам
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

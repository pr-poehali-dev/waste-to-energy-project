import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    type: "consultation",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Здесь будет логика отправки формы
    alert("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacts"
      className="py-20 bg-gradient-to-br from-primary to-secondary"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 montserrat-bold">
              Получите консультацию
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto montserrat-regular leading-relaxed">
              Наши эксперты помогут подобрать оптимальное решение для ваших
              задач и рассчитают экономическую эффективность
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-8 montserrat-bold">
                Свяжитесь с нами
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-phone text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold montserrat-semibold">
                      Телефон
                    </div>
                    <div className="montserrat-regular">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold montserrat-semibold">
                      Email
                    </div>
                    <div className="montserrat-regular">info@yteo.ru</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold montserrat-semibold">
                      Адрес
                    </div>
                    <div className="montserrat-regular">
                      г. Москва, ул. Инновационная, д. 1
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-xl"></i>
                  </div>
                  <div>
                    <div className="font-semibold montserrat-semibold">
                      Режим работы
                    </div>
                    <div className="montserrat-regular">Пн-Пт: 9:00-18:00</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white/10 rounded-xl">
                <h4 className="font-bold mb-4 montserrat-bold">
                  <i className="fas fa-headset mr-2"></i>
                  Техническая поддержка 24/7
                </h4>
                <p className="text-sm opacity-90 montserrat-regular">
                  Круглосуточная поддержка для владельцев оборудования YTEO
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                    Тип обращения
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                  >
                    <option value="consultation">Консультация</option>
                    <option value="quote">Коммерческое предложение</option>
                    <option value="support">Техническая поддержка</option>
                    <option value="partnership">Партнерство</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                      Имя *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                    Компания
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                    placeholder="Название компании"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-yteo-text-primary mb-2 montserrat-semibold">
                    Сообщение
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent montserrat-regular"
                    placeholder="Расскажите о ваших потребностях..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="yteo"
                  size="lg"
                  className="w-full"
                >
                  <i className="fas fa-paper-plane mr-2"></i>
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-yteo-text-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <i className="fas fa-leaf text-white"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold montserrat-bold">YTEO</h3>
                <p className="text-sm text-gray-400 montserrat-regular">
                  Эко-технологии
                </p>
              </div>
            </div>
            <p className="text-gray-400 montserrat-regular leading-relaxed mb-6">
              Инновационные технологии переработки отходов в чистую энергию.
              Создаем экологически безопасное будущее.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-bold mb-6 montserrat-bold">
              Продукция
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#equipment"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Мобильные установки
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Стационарные комплексы
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Отопительное оборудование
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Генераторы
                </a>
              </li>
              <li>
                <a
                  href="#equipment"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Запчасти и комплектующие
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 montserrat-bold">Услуги</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#contacts"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Консультации
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Проектирование
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Монтаж и пуско-наладка
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  Обучение персонала
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 montserrat-bold">Контакты</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <div>
                  <p className="text-gray-400 montserrat-regular">г. Москва</p>
                  <p className="text-gray-400 montserrat-regular">
                    ул. Инновационная, д. 1
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <a
                  href="tel:+74951234567"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <a
                  href="mailto:info@yteo.ru"
                  className="text-gray-400 hover:text-white transition-colors montserrat-regular"
                >
                  info@yteo.ru
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-clock text-primary"></i>
                <p className="text-gray-400 montserrat-regular">
                  Пн-Пт: 9:00-18:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm montserrat-regular mb-4 md:mb-0">
              © {currentYear} YTEO. Все права защищены.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors montserrat-regular"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors montserrat-regular"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors montserrat-regular"
              >
                Сертификаты
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

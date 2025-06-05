import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const EquipmentCatalog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "Все оборудование", icon: "fas fa-th-large" },
    { id: "mobile", name: "Мобильные установки", icon: "fas fa-truck" },
    {
      id: "stationary",
      name: "Стационарные комплексы",
      icon: "fas fa-industry",
    },
    { id: "heating", name: "Отопительное оборудование", icon: "fas fa-fire" },
  ];

  const equipment = [
    {
      id: 1,
      category: "mobile",
      name: "YTEO-Mobile 500",
      description: "Мобильная установка для переработки 500 кг отходов в час",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      specs: {
        Производительность: "500 кг/час",
        Мощность: "250 кВт",
        Габариты: "6×2.5×3 м",
        Вес: "8 тонн",
      },
      price: "от 2 500 000 ₽",
    },
    {
      id: 2,
      category: "stationary",
      name: "YTEO-Industrial 2000",
      description: "Промышленный комплекс для крупных предприятий",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      specs: {
        Производительность: "2000 кг/час",
        Мощность: "800 кВт",
        Габариты: "15×8×6 м",
        Обслуживание: "2 оператора",
      },
      price: "от 8 500 000 ₽",
    },
    {
      id: 3,
      category: "heating",
      name: "YTEO-Heat 100",
      description: "Котел для отопления на получаемом газе",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      specs: {
        Мощность: "100 кВт",
        "Площадь отопления": "до 1000 м²",
        КПД: "92%",
        Автономность: "24/7",
      },
      price: "от 850 000 ₽",
    },
    {
      id: 4,
      category: "mobile",
      name: "YTEO-Compact 200",
      description: "Компактная установка для малых объемов",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      specs: {
        Производительность: "200 кг/час",
        Мощность: "120 кВт",
        Габариты: "4×2×2.5 м",
        Мобильность: "На колесах",
      },
      price: "от 1 500 000 ₽",
    },
    {
      id: 5,
      category: "stationary",
      name: "YTEO-Mega 5000",
      description: "Крупнейший комплекс для городских нужд",
      image:
        "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop",
      specs: {
        Производительность: "5000 кг/час",
        Мощность: "1500 кВт",
        Габариты: "25×12×8 м",
        Автоматизация: "95%",
      },
      price: "от 15 000 000 ₽",
    },
    {
      id: 6,
      category: "heating",
      name: "YTEO-Generator 50",
      description: "Газовый генератор электроэнергии",
      image:
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      specs: {
        Мощность: "50 кВт",
        Выработка: "400 кВт⋅ч/день",
        Шум: "менее 65 дБ",
        "Расход газа": "15 м³/час",
      },
      price: "от 650 000 ₽",
    },
  ];

  const filteredEquipment =
    activeCategory === "all"
      ? equipment
      : equipment.filter((item) => item.category === activeCategory);

  return (
    <section id="equipment" className="py-20 bg-yteo-azure">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yteo-text-primary mb-6 montserrat-bold">
            Каталог оборудования
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto montserrat-regular leading-relaxed">
            Полная линейка оборудования YTEO для любых задач и масштабов
            производства
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 montserrat-medium ${
                activeCategory === category.id
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-yteo-text-primary hover:bg-gray-50"
              }`}
            >
              <i className={category.icon}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm montserrat-medium">
                  {item.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-yteo-text-primary mb-3 montserrat-bold">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4 montserrat-regular">
                  {item.description}
                </p>

                <div className="space-y-2 mb-6">
                  {Object.entries(item.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <span className="text-gray-600 montserrat-regular">
                        {key}:
                      </span>
                      <span className="font-semibold text-yteo-text-primary montserrat-semibold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="yteo" className="flex-1">
                    <i className="fas fa-eye mr-2"></i>
                    Подробнее
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <i className="fas fa-envelope mr-2"></i>
                    Запрос КП
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="yteo-secondary" size="lg" className="px-8">
            <i className="fas fa-download mr-2"></i>
            Скачать полный каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCatalog;

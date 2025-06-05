import React from "react";

const TechnologyOverview = () => {
  const features = [
    {
      icon: "fas fa-recycle",
      title: "Универсальная переработка",
      description:
        "Перерабатываем любые виды отходов: промышленные, энергетические, бытовые",
      stats: "Более 50 типов отходов",
    },
    {
      icon: "fas fa-bolt",
      title: "Быстрый процесс",
      description:
        "Полный цикл переработки от загрузки отходов до получения газа занимает 2-4 часа",
      stats: "2-4 часа",
    },
    {
      icon: "fas fa-leaf",
      title: "Экологичность",
      description: "Нулевые вредные выбросы, полная переработка без остатков",
      stats: "0% выбросов",
    },
    {
      icon: "fas fa-fire",
      title: "Высокая эффективность",
      description:
        "Получаемый газ подходит для отопления и энергетических нужд",
      stats: "95% КПД",
    },
    {
      icon: "fas fa-map-marker-alt",
      title: "Мобильность",
      description: "Компактные установки для труднодоступных регионов",
      stats: "Любые локации",
    },
    {
      icon: "fas fa-cogs",
      title: "Автоматизация",
      description:
        "Полностью автоматизированный процесс с минимальным участием персонала",
      stats: "1 оператор",
    },
  ];

  return (
    <section id="technology" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-yteo-text-primary mb-6 montserrat-bold">
            Технология YTEO
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto montserrat-regular leading-relaxed">
            Инновационный подход к переработке отходов с использованием
            передовых технологий газификации и термической обработки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-yteo-azure rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mr-4">
                  <i className={`${feature.icon} text-white text-2xl`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-yteo-text-primary montserrat-bold">
                    {feature.title}
                  </h3>
                  <div className="text-primary font-semibold montserrat-semibold">
                    {feature.stats}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 montserrat-regular leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 montserrat-bold">
                Процесс переработки отходов
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span className="montserrat-regular">
                    Загрузка и измельчение отходов
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span className="montserrat-regular">
                    Термическая обработка при 1200°C
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span className="montserrat-regular">
                    Газификация и очистка
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <span className="montserrat-regular">
                    Получение чистого газа
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop"
                alt="Схема процесса переработки"
                className="rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;

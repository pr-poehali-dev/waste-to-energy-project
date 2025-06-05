import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-yteo-azure to-white pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yteo-text-primary mb-6 montserrat-bold leading-tight">
                Инновационная технология переработки отходов в
                <span className="text-primary"> чистую энергию</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 mb-8 montserrat-regular leading-relaxed">
                Революционная система переработки промышленных и энергетических
                отходов. Преобразуем отходы в газ за несколько часов для
                отопления и энергетики.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button variant="yteo" size="lg" className="text-lg px-8 py-4">
                  <i className="fas fa-play mr-2"></i>
                  Смотреть демо
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <i className="fas fa-download mr-2"></i>
                  Скачать каталог
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary montserrat-bold">
                    2-4
                  </div>
                  <div className="text-sm text-gray-600 montserrat-regular">
                    часа переработки
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary montserrat-bold">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 montserrat-regular">
                    эффективность
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary montserrat-bold">
                    0
                  </div>
                  <div className="text-sm text-gray-600 montserrat-regular">
                    вредных выбросов
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
                  alt="Установка YTEO для переработки отходов"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-xl mb-2 montserrat-bold">
                    Установка YTEO в действии
                  </h3>
                  <p className="text-white/90 text-sm montserrat-regular">
                    Переработка промышленных отходов в чистый газ
                  </p>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 rounded-full p-3">
                  <i className="fas fa-play text-primary text-xl"></i>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-secondary text-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-fire text-2xl"></i>
                  <div>
                    <div className="font-bold montserrat-bold">1200°C</div>
                    <div className="text-sm montserrat-regular">
                      Температура переработки
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import ServicesCatalog from "./ServicesCatalog";

export default function HeroSection() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleServicesClick = () => {
    setIsServicesOpen(true);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-slate-800 to-emerald-900 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.3),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Main Hero Content */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent block font-semibold text-2xl">
              YTEO
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Современные технологии переработки отходов в энергию. Экологически
            чистые решения для промышленности и городов.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={handleServicesClick}
          >
            <Icon name="Zap" className="mr-2" size={20} />
            Наши услуги
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="bg-green-800 hover:bg-green-900 border-2 border-green-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Icon name="FileText" className="mr-2" size={20} />
            Узнать больше
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
            <div className="text-slate-300">Проектов завершено</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">15+</div>
            <div className="text-slate-300">Лет опыта</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">99%</div>
            <div className="text-slate-300">Довольных клиентов</div>
          </div>
        </div>
      </div>

      {/* Services Catalog Dialog */}
      <ServicesCatalog open={isServicesOpen} onOpenChange={setIsServicesOpen} />
    </section>
  );
}

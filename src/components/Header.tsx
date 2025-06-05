import React, { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "#home" },
    { name: "Технология", href: "#technology" },
    { name: "Оборудование", href: "#equipment" },
    { name: "Отопление", href: "#heating" },
    { name: "Контакты", href: "#contacts" },
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <i className="fas fa-leaf text-white text-lg"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-yteo-text-primary montserrat-bold">
                YTEO
              </h1>
              <p className="text-sm text-gray-600 montserrat-regular">
                новые технологии экологического отопления
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-yteo-text-primary hover:text-primary transition-colors montserrat-medium text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="montserrat-medium">
              Вход
            </Button>
            <Button variant="yteo" className="montserrat-medium">
              Консультация
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-2xl text-yteo-text-primary`}
            ></i>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-yteo-text-primary hover:text-primary transition-colors montserrat-medium text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="montserrat-medium">
                  Вход
                </Button>
                <Button variant="yteo" className="montserrat-medium">
                  Консультация
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

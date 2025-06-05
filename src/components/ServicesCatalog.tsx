import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ServicesCatalogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  {
    category: "Строительство",
    icon: "Building",
    services: [
      { name: "Монтаж металлоконструкций", price: "от 25 000 ₽/м²" },
      { name: "Сварочные работы", price: "от 1 500 ₽/п.м" },
      { name: "Промышленное строительство", price: "по проекту" },
    ],
  },
  {
    category: "Электромонтаж",
    icon: "Zap",
    services: [
      { name: "Монтаж кабельных линий", price: "от 800 ₽/п.м" },
      { name: "Установка электрооборудования", price: "от 15 000 ₽" },
      { name: "Пусконаладочные работы", price: "от 50 000 ₽" },
    ],
  },
  {
    category: "Теплоснабжение",
    icon: "Thermometer",
    services: [
      { name: "Монтаж трубопроводов", price: "от 2 000 ₽/п.м" },
      { name: "Установка котельного оборудования", price: "от 100 000 ₽" },
      { name: "Системы отопления", price: "от 3 000 ₽/м²" },
    ],
  },
  {
    category: "Водоснабжение",
    icon: "Droplets",
    services: [
      { name: "Монтаж водопроводных сетей", price: "от 1 800 ₽/п.м" },
      { name: "Установка насосного оборудования", price: "от 80 000 ₽" },
      { name: "Системы водоочистки", price: "от 200 000 ₽" },
    ],
  },
  {
    category: "Проектирование",
    icon: "PenTool",
    services: [
      { name: "Проектирование инженерных систем", price: "от 500 ₽/м²" },
      { name: "Авторский надзор", price: "от 30 000 ₽/мес" },
      { name: "Техническое обследование", price: "от 150 ₽/м²" },
    ],
  },
  {
    category: "Газоснабжение",
    icon: "Flame",
    services: [
      { name: "Монтаж газопроводов", price: "от 3 500 ₽/п.м" },
      { name: "Подключение газового оборудования", price: "от 45 000 ₽" },
      { name: "Газификация объектов", price: "по проекту" },
    ],
  },
];

export default function ServicesCatalog({
  open,
  onOpenChange,
}: ServicesCatalogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Полный каталог услуг YTEO
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {services.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Icon
                    name={category.icon}
                    className="text-green-800"
                    size={24}
                  />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="font-medium">{service.name}</span>
                      <Badge
                        variant="secondary"
                        className="bg-green-100 text-green-800"
                      >
                        {service.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 p-4 bg-green-50 rounded-lg text-center">
          <p className="text-sm text-gray-600">
            Точную стоимость работ мы рассчитаем после осмотра объекта и
            составления технического задания.
          </p>
          <p className="text-sm font-medium mt-2">
            Звоните: <span className="text-green-800">+7 (495) 123-45-67</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

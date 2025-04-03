import React from 'react';
import { Users, Heart, Award, Target } from 'lucide-react';

function About() {
  const stats = [
    { icon: <Heart className="w-8 h-8" />, number: "500+", label: "Cães Resgatados" },
    { icon: <Users className="w-8 h-8" />, number: "300+", label: "Adoções Realizadas" },
    { icon: <Award className="w-8 h-8" />, number: "50+", label: "Voluntários Ativos" },
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-orange-800 mb-6">
              Nossa História
            </h1>
            <p className="text-lg text-gray-700">
              Desde 2015, a Cuida de Dog tem se dedicado ao resgate e cuidado de cães abandonados
              em São Paulo. Nossa missão é proporcionar uma segunda chance para esses animais,
              oferecendo abrigo, cuidados veterinários e muito amor.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <div className="text-orange-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex justify-center mb-6">
              <Target className="w-12 h-12 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
              Nossa Missão
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nosso objetivo é criar um mundo onde nenhum cão precise viver nas ruas.
                Trabalhamos incansavelmente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Resgatar cães em situação de risco</li>
                <li>Proporcionar cuidados veterinários completos</li>
                <li>Promover adoções responsáveis</li>
                <li>Educar a comunidade sobre posse responsável</li>
                <li>Realizar campanhas de castração</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
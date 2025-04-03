import React from 'react';
import { Heart, Mail } from 'lucide-react';

function Dogs() {
  const dogs = [
    {
      name: "Thor",
      age: "2 anos",
      image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
      description: "Thor é um cachorro brincalhão e cheio de energia. Adora crianças e outros cães."
    },
    {
      name: "Luna",
      age: "1 ano",
      image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8",
      description: "Luna é uma cachorrinha dócil e carinhosa. Adora receber carinho e dormir no colo."
    },
    {
      name: "Bob",
      age: "3 anos",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d",
      description: "Bob é um cachorro calmo e companheiro. Ideal para apartamentos."
    },
    {
      name: "Nina",
      age: "6 meses",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      description: "Nina é uma filhote super esperta e brincalhona. Adora brincar com bolinhas."
    }
  ];

  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-6">
            Nossos Dogs para Adoção
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Conheça alguns dos nossos amigos que estão à procura de um lar amoroso.
            Todos os cães são castrados, vacinados e microchipados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dogs.map((dog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={dog.image}
                alt={dog.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{dog.name}</h3>
                <p className="text-orange-600 mb-4">{dog.age}</p>
                <p className="text-gray-600 mb-6">{dog.description}</p>
                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                  <Heart className="w-5 h-5" />
                  Quero Adotar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <Mail className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Interessado em Adotar?
            </h2>
            <p className="text-gray-600 mb-6">
              Entre em contato conosco para conhecer mais sobre nosso processo de adoção
              e agendar uma visita para conhecer nossos dogs pessoalmente.
            </p>
            <a
              href="mailto:adocao@cuidadedog.org.br"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              adocao@cuidadedog.org.br
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dogs;
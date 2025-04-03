import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-orange-50 pt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold text-orange-800 mb-6">
              Ajude-nos a Cuidar dos Nossos Amigos de Quatro Patas
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Somos uma ONG dedicada ao resgate, cuidado e adoção responsável de cães abandonados.
              Sua doação pode fazer a diferença na vida de muitos animais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/dogs"
                className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors"
              >
                Conheça Nossos Dogs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b"
              alt="Cachorros felizes"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Donation Section */}
        <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl shadow-xl">
          <Heart className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Faça uma Doação
          </h2>
          <p className="text-gray-600 mb-8">
            Sua contribuição ajuda a manter nosso trabalho de resgate e cuidado dos animais.
            Escaneie o QR Code abaixo para fazer uma doação via PIX.
          </p>
          <div className="bg-orange-100 p-6 rounded-xl inline-block">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=00020126580014BR.GOV.BCB.PIX0136example@cuidadedog.org.br5204000053039865802BR5913Cuida%20de%20Dog6008Sao%20Paulo62070503***6304E2CA"
              alt="QR Code para doação"
              className="w-48 h-48 mx-auto"
            />
          </div>
          <p className="mt-4 text-sm text-gray-500">
            PIX: example@cuidadedog.org.br
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
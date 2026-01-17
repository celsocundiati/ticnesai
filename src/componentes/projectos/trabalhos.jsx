// src/components/TrabalhosEstagio.jsx
import React from "react";
import { ArrowRight, FolderArchive } from "lucide-react";

const TrabalhosEstagio = () => {
  const driveLink = "https://drive.google.com/drive/folders/1SqoeoysZb3KEszKlk8PhzrzxB6GFm6zC?usp=sharing"; // substitua pelo link da pasta

  return (
    <section className="bg-white/20 rounded-xl shadow-md mt-6 p-8">
      <div className="flex items-center gap-3 mb-4">
        <FolderArchive className="text-4xl text-blue-600" />
        <h2 className="text-2xl font-semibold">Trabalhos do Estágio</h2>
      </div>
      <p className="mb-4 text-gray-700">
        Aqui estão todos os trabalhos do meu estágio. Clique no botão abaixo para acessar a pasta completa no Google Drive.
      </p>
      <a
        href={driveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
      >
        Ver Trabalhos
      </a>
    </section>
  );
};

export default TrabalhosEstagio;
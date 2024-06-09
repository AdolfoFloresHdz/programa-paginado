import React from 'react';

const Index = () => {
  return (
    <div className="text-center py-10 bg-gray-50">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Bienvenido a mi Portafolio</h1>
      <h2 className="text-2xl font-semibold text-gray-600">Adolfo Flores Hernández</h2>
      <p className="mt-4 text-gray-600">Explora mis proyectos y conoce más sobre mí y mis trabajos.</p>
      <div className="mt-8 flex justify-center">
        <iframe 
          className="w-full max-w-md h-64 rounded-lg shadow-lg" 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Index;

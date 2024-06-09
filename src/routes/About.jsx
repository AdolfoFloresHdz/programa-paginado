import React from 'react';
import foto from '../assets/images/Mi_foto.jpg';

const About = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Acerca de Mí</h1>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg p-6">
        <div className="md:w-1/3 mb-4 md:mb-0">
          <img 
            src={foto} 
            alt="Foto de Adolfo Flores Hernández" 
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="md:w-2/3 md:ml-6 text-gray-800">
          <p className="text-lg">
            Tengo pasión por la tecnología, interés en abordar problemas complejos, soy organizado, responsable y curioso. 
            Destaco en proyectos desafiantes, colaboro efectivamente en equipo y busco adquirir nuevos conocimientos. 
            Aspiro a crecer profesionalmente y contribuir en el mundo digital en constante evolución.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;

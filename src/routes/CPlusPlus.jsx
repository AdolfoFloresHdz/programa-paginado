import React from 'react';
import ProjectList from '../components/ProjectList';

const CPlusPlus = () => {
  const projects = [
    { id: 1, name: 'Repositorio completo de Trabajos de C++', url: 'https://github.com/AdolfoFloresHdz/Trabajos-de-C-.git' },
    
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos en C++</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default CPlusPlus;

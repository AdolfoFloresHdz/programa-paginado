import React from 'react';
import ProjectList from '../components/ProjectList';

const Python = () => {
  const projects = [
    { id: 1, name: 'Dteccion de Tumores', url: 'https://colab.research.google.com/drive/1Zd2wT2hR0rBxQEQRlgLT02jKSI5w3ll2?usp=drive_link' }
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos en Python</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default Python;

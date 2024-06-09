import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>URL: <a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
      {/* Agregar más detalles si es necesario */}
    </div>
  );
}

export default ProjectDetail;

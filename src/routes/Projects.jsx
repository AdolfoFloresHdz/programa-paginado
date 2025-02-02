import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Proyectos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <NavLink to="/projects/python" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="data:image/png;base64,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" alt="Python" className="w-full h-48 object-cover mb-4 rounded-lg" />
          <h5 className="text-2xl font-bold mb-2">Proyectos en Google Colaboratori</h5>
          <p>Ver proyectos realizados en Python.</p>
        </NavLink>
        <NavLink to="/projects/machine-learning" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqvREgueCenWgK3AOYf2Ggyz-jOISn5uJfg&s" alt="Anaconda" className="w-full h-48 object-cover mb-4 rounded-lg"/>
          <h5 className="text-2xl font-bold mb-2">Proyectos de Machine Learning</h5>
          <p>Ver proyectos realizados en Machine Learning.</p>
        </NavLink>
        <NavLink to="/projects/cplusplus" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++" className="w-full h-48 object-cover mb-4 rounded-lg"/>
          <h5 className="text-2xl font-bold mb-2">Proyectos en C++</h5>
          <p>Ver proyectos realizados en C++.</p>
        </NavLink>
        <NavLink to="/projects/programacion-logica" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiZg9FOGg5UO-Amg9b3ebeXU__pQ9XV1yumA49s9-uI-08tbYCa4jkNmtD_tv5s7LzgD0&usqp=CAU" alt="Programación Lógica Funcional" className="w-full h-48 object-cover mb-4 rounded-lg"/>
          <h5 className="text-2xl font-bold mb-2">Proyectos de Programación Lógica Funcional</h5>
          <p>Ver proyectos realizados en Programación Lógica Funcional.</p>
        </NavLink>
        <NavLink to="/projects/lenguajes-automatas" className="block bg-white text-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhflomWU5g6BKWCOK36flRpRTa9wPsW013RpAHwXN8pcCeObBCVsEUCZ08z4rgykzm4k8nrTazCoAaxcy_9uWnQ6vWkRdxew6XRKd28gRXf_4GAnxXlTITmiKOcmS3B6_MJD2hH-uL3N4s/s1600/finite_automata.jpg" alt="Lenguajes y Autómatas 2" className="w-full h-48 object-cover mb-4 rounded-lg"/>
          <h5 className="text-2xl font-bold mb-2">Proyectos de Lenguajes y Autómatas 2</h5>
          <p>Ver proyectos realizados en Lenguajes y Autómatas 2.</p>
        </NavLink>
      </div>
    </div>
  );
}

export default Projects;

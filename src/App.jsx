import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Index from './routes/Index';
import Contactos from './routes/Contactos';
import About from './routes/About';
import ContactoDinamico from './routes/ContactoDinamico';
import Projects from './routes/Projects';
import Python from './routes/Python';
import MachineLearning from './routes/MachineLearning';
import CPlusPlus from './routes/CPlusPlus';
import ProgramacionLogica from './routes/ProgramacionLogica';
import LenguajesAutomatas from './routes/LenguajesAutomatas';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink className="text-2xl font-bold text-white hover:text-gray-200" to="/">Mi Portafolio</NavLink>
          <div className="flex space-x-4">
            <NavLink className="px-3 py-2 rounded-md text-white hover:bg-blue-700" to="/">Inicio</NavLink>
            <NavLink className="px-3 py-2 rounded-md text-white hover:bg-blue-700" to="/contactos">Contacto</NavLink>
            <NavLink className="px-3 py-2 rounded-md text-white hover:bg-blue-700" to="/about">Acerca de</NavLink>
            <NavLink className="px-3 py-2 rounded-md text-white hover:bg-blue-700" to="/projects">Proyectos</NavLink>
          </div>
        </div>
      </nav>

      <div className="container max-w-4xl mx-auto px-4 py-6 bg-white shadow-lg rounded-lg mt-6">
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/contactos' element={<Contactos />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacto/:nombre/:apellido' element={<ContactoDinamico />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/python' element={<Python />} />
          <Route path='/projects/machine-learning' element={<MachineLearning />} />
          <Route path='/projects/cplusplus' element={<CPlusPlus />} />
          <Route path='/projects/programacion-logica' element={<ProgramacionLogica />} />
          <Route path='/projects/lenguajes-automatas' element={<LenguajesAutomatas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

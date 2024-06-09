import React from 'react';
import ProjectList from '../components/ProjectList';

const MachineLearning = () => {
  const projects = [
    { id: 1, name: 'Numpy', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/01_Numpy.ipynb' },
    { id: 2, name: 'Introduccion a Pandas', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/02_IntroduccionaPandas.ipynb' },
    { id: 3, name: 'Introduccion a Matplotlib', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/03_Introduccion_Matplotlib.ipynb' },
    { id: 4, name: 'Regresion Lineal', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/04_RegresionLineal_Prediccion_de_un_incidente_de_seguridad.ipynb' },
    { id: 5, name: '200 Datos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/05_200_datos.ipynb' },
    { id: 6, name: 'Regresion de Alturas y Pesos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/05_Regresion_De_Alturas_y_Pesos.ipynb' },
    { id: 7, name: 'Conjuntos de Datos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/07_Division_del_conjunto_de_Datos.ipynb' },
    { id: 8, name: 'Visualizacion de Datos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/07_Visualizacvion_del_Datset.ipynb' },
    { id: 9, name: 'Division de Conjuntos de Datos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/08.-%20Division_del_Conjunto_de_Datos.ipynb' },
    { id: 10, name: 'Preparacion Conjuntos de Datos', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/8_Preparaci%E0%B8%82n%20del%20conjunto%20de%20datos.ipynb' },
    { id: 11, name: 'Creacion de Transformadores y Piplines Personalizados', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/9_Creaci%E0%B8%82n%20de%20Transformadores%20y%20Pipelines%20personalizados.ipynb' },
    { id: 12, name: 'Evaluacion de Resultados', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/10_Evaluaci%E0%B8%82n%20de%20resultados.ipynb' },
    { id: 13, name: 'Evaluacion Logistica Deteccion de SPAM', url: 'https://github.com/AdolfoFloresHdz/Correos-Electronicos-SPAM-Y-HAM-machinelearning/blob/8e98db7a73455570a7af040ec167f84baece0fb7/3502%20Regresi%C3%B3n%20Log%C3%ADstica%20Detecci%C3%B3n%20de%20SPAM.ipynb' },

  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos de Machine Learning</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default MachineLearning;

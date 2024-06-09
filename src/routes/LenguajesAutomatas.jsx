import React from 'react';
import ProjectList from '../components/ProjectList';

const LenguajesAutomatas = () => {
  const projects = [
    { id: 1, name: 'AVL', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/AVL.py' },
    { id: 2, name: 'Examen 1', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/Examen1.py' },
    { id: 3, name: 'USC', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/USC.py-' },
    { id: 4, name: 'Algorito Estrella', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/algoritmoEstrella.py'},
    { id: 5, name: 'Arbol', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/arbol.py' },
    { id: 6, name: 'Back Tracking', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/backtracking.py' },
    { id: 7, name: 'Carretera USC', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/carretera_ucs.py' },
    { id: 8, name: 'Copo', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/copo.py' },
    { id: 9, name: 'Cv2', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/cv2.py' },
    { id: 10, name: 'Dijkstra', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/dijkstra.py' },
    { id: 11, name: 'Heuritica', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/heuristica.py' },
    { id: 12, name: 'Horas', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/horas.py' },
    { id: 13, name: 'Puzle Lineal BFS', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/puzlelineal_bfs.py' },
    { id: 14, name: 'Puzle Lineal BFS REC', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/puzlelineal_bfs_rec.py' },
    { id: 15, name: 'Puzle Lineal DFS', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/puzlelineal_dfs.py' },
    { id: 16, name: 'Vuelos BFS', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/vuelos_bfs.py' },
    { id: 17, name: 'Vuelos BPI', url: 'https://github.com/AdolfoFloresHdz/Lenguajes-y-Automatas-2-/blob/8caec29784b22021167d656814540549024df66b/vuelos_bpi.py' },
  ];

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Proyectos de Lenguajes y Autómatas 2</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default LenguajesAutomatas;

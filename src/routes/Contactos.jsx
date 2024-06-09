import React from 'react';

const Contactos = () => {
  const contacts = [
    {
      id: 1,
      name: 'Facebook',
      url: 'https://www.facebook.com/tu-perfil',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
    },
    {
      id: 2,
      name: 'GitHub',
      url: 'https://github.com/AdolfoFloresHdz',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg'
    },
    {
      id: 3,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adolfo-flores-hernandez',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg'
    },
    {
      id: 4,
      name: 'WhatsApp',
      url: 'https://wa.me/7121991628',
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
    }
  ];

  return (
    <div className="py-10 bg-gray-50">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Contactos</h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 bg-white shadow-lg rounded-lg p-6">
        {contacts.map(contact => (
          <a 
            key={contact.id}
            href={contact.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition duration-300 flex flex-col items-center"
          >
            <img src={contact.imgSrc} alt={contact.name} className="w-20 h-20 object-contain hover:opacity-80 transition duration-300 mb-2" style={{width: '5rem', height: '5rem'}} />
            <span className="text-lg font-semibold text-gray-800">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contactos;

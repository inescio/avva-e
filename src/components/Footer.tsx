import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full text-center py-4 border-t border-gray-200 bg-white text-gray-500 text-sm mt-8">
    &copy; {new Date().getFullYear()} Denim Shop. Todos los derechos reservados.
  </footer>
);

export default Footer; 
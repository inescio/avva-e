import React from 'react';
import './scrolling-banner.css';

export default function ScrollingBanner() {
  return (
    <div className="bg-black text-white py-3 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-sm tracking-wider mx-8">
          ENVÍO GRATIS EN COMPRAS MAYORES A $150 • NUEVA COLECCIÓN DE MEZCLILLA DISPONIBLE • MODA SOSTENIBLE • DEVOLUCIONES DE 30 DÍAS
        </span>
        <span className="text-sm tracking-wider mx-8">
          ENVÍO GRATIS EN COMPRAS MAYORES A $150 • NUEVA COLECCIÓN DE MEZCLILLA DISPONIBLE • MODA SOSTENIBLE • DEVOLUCIONES DE 30 DÍAS
        </span>
        <span className="text-sm tracking-wider mx-8">
          ENVÍO GRATIS EN COMPRAS MAYORES A $150 • NUEVA COLECCIÓN DE MEZCLILLA DISPONIBLE • MODA SOSTENIBLE • DEVOLUCIONES DE 30 DÍAS
        </span>
      </div>
    </div>
  );
} 
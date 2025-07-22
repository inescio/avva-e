import Image from 'next/image';

const looks = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1656333010581-3f8a6f1d75a8?w=500&h=600&fit=crop",
    alt: "Look casual urbano",
    style: "Casual Urbano"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=600&fit=crop",
    alt: "Look elegante casual",
    style: "Elegante Casual"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1588117305388-c2631a279f9d?w=500&h=600&fit=crop",
    alt: "Look streetwear",
    style: "Streetwear"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500&h=600&fit=crop",
    alt: "Look minimalista",
    style: "Minimalista"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
    alt: "Look vintage",
    style: "Vintage"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=500&h=600&fit=crop",
    alt: "Look boho chic",
    style: "Boho Chic"
  }
];

export default function StyleGallery() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-wider text-gray-900 mb-4">GALERÍA DE ESTILOS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Inspírate con nuestros diferentes looks y encuentra tu estilo único con AVVA.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {looks.map((look, index) => (
            <div 
              key={look.id} 
              className={`group cursor-pointer ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`}
            >
              <div className="relative aspect-square md:aspect-auto md:h-full bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={look.image}
                  alt={look.alt}
                  width={500}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white tracking-wide">{look.style}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="border-2 border-black text-black px-8 py-3 hover:bg-black hover:text-white transition-colors duration-300 tracking-wide">
            SÍGUENOS EN INSTAGRAM
          </button>
        </div>
      </div>
    </section>
  );
} 
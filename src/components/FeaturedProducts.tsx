import Image from 'next/image';

const products = [
  {
    id: 1,
    name: "Jeans Skinny AVVA",
    price: "$890",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=500&fit=crop",
    alt: "Jeans skinny azul"
  },
  {
    id: 2,
    name: "Chaqueta Denim Oversized",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=500&fit=crop",
    alt: "Chaqueta de mezclilla oversized"
  },
  {
    id: 3,
    name: "Top Crop Denim",
    price: "$650",
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
    alt: "Top crop de mezclilla"
  },
  {
    id: 4,
    name: "Vestido Denim Midi",
    price: "$1,100",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    alt: "Vestido midi de mezclilla"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-wider text-gray-900 mb-4">PRODUCTOS DESTACADOS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra colección más popular de mezclilla, diseñada para la mujer moderna que busca estilo y comodidad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="tracking-wide text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-300 tracking-wide">
            VER TODA LA COLECCIÓN
          </button>
        </div>
      </div>
    </section>
  );
} 
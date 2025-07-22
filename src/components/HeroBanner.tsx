import Image from 'next/image';

const models = [
  {
    src: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=600&fit=crop&crop=face',
    alt: 'Modelo con chaqueta de mezclilla',
    className: 'w-48 h-96 object-cover rounded-lg hidden lg:block',
  },
  {
    src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=650&fit=crop&crop=face',
    alt: 'Modelo con camisa de mezclilla',
    className: 'w-52 h-[26rem] object-cover rounded-lg hidden md:block',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=650&fit=crop&crop=face',
    alt: 'Modelo con vestido de mezclilla',
    className: 'w-52 h-[26rem] object-cover rounded-lg hidden md:block',
  },
  {
    src: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=300&h=600&fit=crop&crop=face',
    alt: 'Modelo con overol de mezclilla',
    className: 'w-48 h-96 object-cover rounded-lg hidden lg:block',
  },
];

export default function HeroBanner() {
  return (
    <section className="relative min-h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Background Models Row */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-end space-x-4 opacity-60">
          {models.map((model, i) => (
            <div key={i} className={model.className}>
              <Image src={model.src} alt={model.alt} width={200} height={400} className="w-full h-full object-cover rounded-lg" />
            </div>
          ))}
        </div>
      </div>
      {/* Central Model & Branding */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8">
          <Image
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=700&fit=crop&crop=face"
            alt="Modelo central en mezclilla"
            width={320}
            height={560}
            className="w-64 sm:w-80 h-[28rem] sm:h-[35rem] object-cover rounded-lg shadow-2xl"
          />
        </div>
        <div className="text-center space-y-4">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl tracking-wider text-gray-900">DENIM BY AVVA</h2>
          <div className="inline-block">
            <span className="bg-black text-white px-6 py-2 text-lg sm:text-xl tracking-wide">NUEVO</span>
          </div>
          <button className="mt-6 bg-white text-black px-8 py-3 border-2 border-black hover:bg-black hover:text-white transition-colors duration-300 tracking-wide">COMPRAR AHORA</button>
        </div>
      </div>
      {/* Mobile Background Models */}
      <div className="absolute inset-0 flex items-center justify-between px-4 md:hidden opacity-40">
        <Image
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=200&h=400&fit=crop&crop=face"
          alt="Modelo en mezclilla"
          width={128}
          height={256}
          className="w-32 h-64 object-cover rounded-lg"
        />
        <Image
          src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=400&fit=crop&crop=face"
          alt="Modelo en mezclilla"
          width={128}
          height={256}
          className="w-32 h-64 object-cover rounded-lg"
        />
      </div>
    </section>
  );
} 
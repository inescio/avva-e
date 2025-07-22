'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Search, ShoppingBag, User } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'NUEVO' },
  { href: '/denim', label: 'DENIM' },
  { href: '/tops', label: 'TOPS' },
  { href: '/vestidos', label: 'VESTIDOS' },
  { href: '/ofertas', label: 'OFERTAS' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl tracking-wider font-extrabold text-blue-700">AVVA</Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-gray-800 hover:text-blue-700 transition-colors font-medium text-lg ${pathname === link.href ? 'underline underline-offset-4' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-800 hover:text-blue-700 transition-colors" aria-label="Buscar">
              <Search size={20} />
            </button>
            <button className="text-gray-800 hover:text-blue-700 transition-colors" aria-label="Usuario">
              <User size={20} />
            </button>
            <Link href="/cart" className="text-gray-800 hover:text-blue-700 transition-colors" aria-label="Carrito">
              <ShoppingBag size={20} />
            </Link>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-800 hover:text-blue-700 transition-colors" aria-label="Menú">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 
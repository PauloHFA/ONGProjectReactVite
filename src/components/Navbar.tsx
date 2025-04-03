import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Heart, PawPrint as Paw, Phone, Menu as MenuIcon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { path: '/', icon: <Home className="w-5 h-5" />, label: 'Início' },
    { path: '/about', icon: <Heart className="w-5 h-5" />, label: 'Sobre Nós' },
    { path: '/dogs', icon: <Paw className="w-5 h-5" />, label: 'Nossos Dogs' },
    { path: '/contact', icon: <Phone className="w-5 h-5" />, label: 'Contato' },
  ];

  return (
    <nav className="bg-orange-600 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Paw className="w-8 h-8 text-white" />
            <span className="text-white text-xl font-bold ml-2">Cuida de Dog</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-orange-700 text-white'
                        : 'text-white hover:bg-orange-500'
                    }`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-orange-500 focus:outline-none"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-orange-600">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? 'bg-orange-700 text-white'
                      : 'text-white hover:bg-orange-500'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
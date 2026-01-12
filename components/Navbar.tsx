
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, Landmark, ChevronDown, UserCircle, LayoutDashboard } from 'lucide-react';
import { PORTAL_THEME } from '../styles/theme';

interface NavbarProps {
  onNavigate: (page: string) => void;
  isAuthenticated?: boolean;
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, isAuthenticated = false, userName }) => {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu
  const [isGovOpen, setIsGovOpen] = useState(false); // Government Dropdown (Desktop)
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsGovOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className={PORTAL_THEME.navbar.container}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LOGO */}
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="bg-white/10 p-2 rounded-lg mr-3 group-hover:bg-white/20 transition-colors backdrop-blur-md">
                <Landmark className={`h-8 w-8 ${PORTAL_THEME.navbar.logoIcon}`} />
            </div>
            <div>
                <span className="block font-bold text-xl tracking-tight leading-none">Tu Municipio</span>
                <span className="block text-xs font-light text-rose-200 tracking-widest uppercase">Portal Digital</span>
            </div>
          </div>
          
          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              <button onClick={() => onNavigate('home')} className={PORTAL_THEME.navbar.link}>Inicio</button>
              
              {/* Dropdown Gobierno */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsGovOpen(!isGovOpen)} 
                  className={`flex items-center ${PORTAL_THEME.navbar.link}`}
                >
                  Gobierno <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isGovOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isGovOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-xl py-2 z-50 animate-fade-in-up border border-rose-100">
                    <button onClick={() => { onNavigate('president'); setIsGovOpen(false); }} className="block w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-rose-50 hover:text-rose-700 transition-colors">
                      Presidente Municipal
                    </button>
                    <button onClick={() => { onNavigate('directory'); setIsGovOpen(false); }} className="block w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-rose-50 hover:text-rose-700 transition-colors">
                      Directorio Oficial
                    </button>
                  </div>
                )}
              </div>

              <button onClick={() => onNavigate('catalog')} className={PORTAL_THEME.navbar.link}>Trámites y Servicios</button>
              <button onClick={() => onNavigate('transparency')} className={PORTAL_THEME.navbar.link}>Transparencia</button>
              <button onClick={() => onNavigate('news')} className={PORTAL_THEME.navbar.link}>Sala de Prensa</button>
              
              <div className="h-6 w-px bg-rose-700/50 mx-3"></div>
              
              {isAuthenticated ? (
                 <button 
                    onClick={() => onNavigate('account')} 
                    className="bg-rose-800 text-white hover:bg-rose-700 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2 border border-rose-700"
                 >
                    <LayoutDashboard className="h-4 w-4" />
                    <span className="truncate max-w-[150px]">Ir a mi Panel</span>
                 </button>
              ) : (
                <button 
                    onClick={() => onNavigate('auth')} 
                    className={`${PORTAL_THEME.navbar.buttonCTA} flex items-center gap-2`}
                >
                    <UserCircle className="h-4 w-4" />
                    Mi Cuenta
                </button>
              )}

            </div>
          </div>
          
          {/* MOBILE TOGGLE */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-rose-100 hover:text-white hover:bg-rose-800 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-rose-950 border-t border-rose-800 animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button onClick={() => { onNavigate('home'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-3 rounded-md text-base font-medium">Inicio</button>
            <div className="px-3 py-2 text-xs font-bold text-rose-300 uppercase tracking-widest border-b border-rose-900/50 mb-1 mt-2">Gobierno</div>
            <button onClick={() => { onNavigate('president'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-2 rounded-md text-base font-medium pl-6">Presidente</button>
            <button onClick={() => { onNavigate('directory'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-2 rounded-md text-base font-medium pl-6">Directorio</button>
            <div className="border-t border-rose-900/50 my-2"></div>
            <button onClick={() => { onNavigate('catalog'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-3 rounded-md text-base font-medium">Trámites</button>
            <button onClick={() => { onNavigate('transparency'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-3 rounded-md text-base font-medium">Transparencia</button>
            <button onClick={() => { onNavigate('news'); setIsOpen(false); }} className="block w-full text-left hover:bg-rose-900 px-3 py-3 rounded-md text-base font-medium">Noticias</button>
            
            {isAuthenticated ? (
                <button 
                    onClick={() => { onNavigate('account'); setIsOpen(false); }}
                    className="block w-full text-left bg-rose-800 text-white hover:bg-rose-700 px-3 py-3 rounded-md text-base font-bold mt-4 shadow-lg flex items-center justify-center gap-2 border border-rose-700"
                >
                    <LayoutDashboard className="h-5 w-5" />
                    Ir a mi Panel ({userName?.split(' ')[0]})
                </button>
            ) : (
                <button 
                    onClick={() => { onNavigate('auth'); setIsOpen(false); }}
                    className="block w-full text-left bg-white text-rose-900 hover:bg-rose-50 px-3 py-3 rounded-md text-base font-bold mt-4 shadow-lg flex items-center justify-center gap-2"
                >
                    <UserCircle className="h-5 w-5" />
                    Mi Cuenta
                </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

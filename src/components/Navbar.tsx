import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import mark from '../assets/mark.png';
const logoMark = '/assets/logo-mark.png';

interface NavbarProps {
  onOpenCalculator?: () => void;
  onNavigateToSection?: (sectionId: string) => void;
}

export function Navbar({ onOpenCalculator, onNavigateToSection }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const isEmpresasPage = location.pathname === '/empresas';
  const isAcademiasPage = location.pathname === '/academias';
  const isUsuarioPage = location.pathname === '/usuario' || location.pathname === '/usuarios';
  const isCalculadorasPage = location.pathname === '/calculadoras';

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(
    isEmpresasPage
      ? 'empresas'
      : isAcademiasPage
      ? 'academias'
      : isUsuarioPage
      ? 'usuario'
      : isCalculadorasPage
      ? 'calculadoras'
      : location.pathname === '/'
      ? 'home'
      : ''
  );
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === '/empresas') {
      setActiveItem('empresas');
    } else if (location.pathname === '/academias') {
      setActiveItem('academias');
    } else if (location.pathname === '/usuario' || location.pathname === '/usuarios') {
      setActiveItem('usuario');
    } else if (location.pathname === '/calculadoras') {
      setActiveItem('calculadoras');
    } else if (location.pathname === '/') {
      setActiveItem('home');
    } else {
      setActiveItem('');
    }
  }, [location.pathname]);

  // Close login dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveItem(id);
    if (onNavigateToSection) {
      onNavigateToSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    setActiveItem(id);

    if (id === 'home') {
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'academias') {
      if (location.pathname !== '/academias') {
        navigate('/academias');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'empresas') {
      if (location.pathname !== '/empresas') {
        navigate('/empresas');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (id === 'usuario') {
      if (location.pathname !== '/usuario') {
        navigate('/usuario');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePartnerClick = () => {
    setIsMobileMenuOpen(false);
    if (location.pathname === '/academias') {
      if (onNavigateToSection) {
        onNavigateToSection('cadastro');
        return;
      }
    }
    if (location.pathname === '/empresas') {
      const el = document.getElementById('cadastro');
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
        return;
      }
    }
    if (location.pathname !== '/') {
      navigate('/?section=formulario');
    } else {
      scrollTo('formulario');
    }
  };

  const handleCalculatorClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    navigate('/calculadoras');
  };

  const navItems = [
    { id: 'home', label: 'Home', action: () => handleNavClick('home'), activeClass: 'bg-gym-orange text-white font-semibold shadow-xs' },
    { id: 'academias', label: 'Academias', action: () => handleNavClick('academias'), activeClass: 'bg-gradient-orange text-gray-950 font-bold shadow-xs' },
    { id: 'empresas', label: 'Empresas', action: () => handleNavClick('empresas'), activeClass: 'bg-gradient-yellow text-gray-950 font-bold shadow-xs' },
    { id: 'usuario', label: 'Usuário', action: () => handleNavClick('usuario'), activeClass: 'bg-gradient-green text-gray-950 font-bold shadow-xs' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white/95 backdrop-blur-md transition-all">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        {/* Logos GymClub Originais */}
        <button
          onClick={() => {
            if (location.pathname !== '/') {
              navigate('/');
            } 
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setActiveItem('home');
          }}
          className="flex items-center gap-2 group transition-opacity hover:opacity-90 cursor-pointer"
          aria-label="Ir para Home"
        >
          <img
            src={mark}
            alt="GymClub Icon"
            className="h-7 sm:h-9 w-auto object-contain"
          />
          <img
            src={logoMark}
            alt="GymClub"
            className="h-15 sm:h-20 w-auto object-contain"
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <nav className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveItem(item.id);
                    item.action();
                  }}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-xs sm:text-sm font-title transition-all cursor-pointer ${
                    isActive
                      ? item.activeClass
                      : 'text-gray-800 font-normal hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Calculadora Link */}
            <button
              onClick={handleCalculatorClick}
              className={`shrink-0 px-3.5 py-1.5 text-xs sm:text-sm font-title font-bold rounded-full transition-all cursor-pointer ${
                location.pathname === '/calculadoras'
                  ? 'bg-gradient-yellow text-gray-950 shadow-xs'
                  : 'text-gym-orange hover:text-gym-orange hover:bg-gray-50'
              }`}
            >
              <span>Calculadoras</span>
            </button>
          </nav>

          {/* Login Dropdown */}
          <div ref={loginRef} className="relative ml-1">
            <button
              type="button"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs sm:text-sm font-title transition-all cursor-pointer border border-gray-200 bg-white text-gray-800 font-normal hover:bg-gray-50 ${
                isLoginOpen ? 'border-gray-400' : ''
              }`}
              aria-expanded={isLoginOpen}
            >
              <span>Login</span>
              <span className="text-[10px] text-gray-700">▼</span>
            </button>

            {isLoginOpen && (
              <div className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[210px] overflow-hidden rounded-2xl border border-black/10 bg-white p-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                <a
                  href="https://gymclub.com.br/company/login"
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col rounded-xl px-4 py-2.5 transition hover:bg-[#f7e92a]/25 group"
                >
                  <span className="font-title text-xs font-bold text-gray-900 group-hover:text-black">
                    Empresas
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Acessar portal corporativo
                  </span>
                </a>

                <a
                  href="https://gymclub.com.br/gym/login"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 flex flex-col rounded-xl px-4 py-2.5 transition hover:bg-[#ff883f]/15 group"
                >
                  <span className="font-title text-xs font-bold text-gray-900 group-hover:text-black">
                    Academias
                  </span>
                  <span className="text-[11px] text-gray-500">
                    Acessar portal da academia
                  </span>
                </a>
              </div>
            )}
          </div>

          {/* CTA Seja Parceiro (Preto com transição para Laranja Oficial) */}
          <button
            onClick={handlePartnerClick}
            className="ml-2 rounded-full bg-gradient-green px-5 py-2.5 text-xs sm:text-sm font-title font-bold text-black  transition-all hover:bg-[#ff883f] hover:text-black cursor-pointer shadow-sm"
          >
            Seja parceiro
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-black transition hover:bg-black/5 lg:hidden cursor-pointer"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs transition-opacity lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[min(85vw,320px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
          <div className="flex items-center gap-1.5">
            <img src={mark} alt="GymClub" className="h-6 w-auto" />
            <img src={logoMark} alt="GymClub" className="h-5 w-auto" />
          </div>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-gray-600 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setIsMobileMenuOpen(false);
                setActiveItem(item.id);
                item.action();
              }}
              className={`rounded-2xl px-4 py-3 text-left text-sm font-title transition ${
                activeItem === item.id ? item.activeClass : 'text-gray-800 font-normal hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}

          <button
            onClick={handleCalculatorClick}
            className={`rounded-2xl px-4 py-3 text-left text-sm font-title font-bold transition ${
              location.pathname === '/calculadoras'
                ? 'bg-gradient-yellow text-gray-950'
                : 'text-gray-800 hover:bg-gray-100 hover:text-gym-orange'
            }`}
          >
            Calculadoras
          </button>

          <button
            onClick={handlePartnerClick}
            className="mt-2 rounded-2xl bg-black px-4 py-3 text-center text-sm font-title font-bold text-white transition hover:bg-[#ff883f] hover:text-black"
          >
            Seja parceiro
          </button>

          <div className="mt-6 border-t border-black/10 pt-4">
            <p className="mb-2 px-2 font-title text-[11px] uppercase tracking-widest text-gray-400">
              Acesso Portais
            </p>
            <a
              href="https://gymclub.com.br/company/login"
              target="_blank"
              rel="noreferrer"
              className="flex rounded-xl px-4 py-2.5 text-xs font-title font-medium text-gray-800 hover:bg-yellow-50"
            >
              Login Empresas
            </a>
            <a
              href="https://gymclub.com.br/gym/login"
              target="_blank"
              rel="noreferrer"
              className="flex rounded-xl px-4 py-2.5 text-xs font-title font-medium text-gray-800 hover:bg-orange-50"
            >
              Login Academias
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

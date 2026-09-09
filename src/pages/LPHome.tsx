import React, { useState, useEffect, useRef, FormEvent, PointerEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  Building2,
  Dumbbell,
  Users,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  Calculator,
  CheckCircle2,
  MessageSquare,
  X,
  ExternalLink,
  PersonStanding,
  User,
  MapPin,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhoneMockup } from '../components/PhoneMockup';
import fundoHome from '../assets/fundo-home.jpeg';

/* ========================================================================== */
/* DADOS & ASSETS DOS PLANOS (CLUBE 1 AO 12)                                  */
/* ========================================================================== */

const FACE_SIMPLE = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20500%20500'%3e%3cpath%20d='M245.67,388.92c-76.89,0-139.45-62.56-139.45-139.45s62.56-139.45,139.45-139.45,139.45,62.56,139.45,139.45-62.56,139.45-139.45,139.45ZM245.67,143.2c-58.6,0-106.27,47.67-106.27,106.27s47.67,106.27,106.27,106.27,106.27-47.67,106.27-106.27-47.67-106.27-106.27-106.27Z'/%3e%3cpath%20d='M248.76,322.75c-.5,0-1,0-1.5-.01-37.52-.5-73.51-20.35-89.66-39.7l25.48-21.27c9.44,11.3,35.72,27.4,64.62,27.78,22.78.34,42.82-9.16,59.53-28.12l24.9,21.94c-22.72,25.78-51.52,39.37-83.37,39.37Z'/%3e%3c/svg%3e`;

const FACE_OPEN = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20500%20500'%3e%3cpath%20d='M247.25,396.6c-76.89,0-139.45-62.56-139.45-139.45s62.56-139.45,139.45-139.45,139.45,62.56,139.45,139.45-62.56,139.45-139.45,139.45ZM247.25,150.88c-58.6,0-106.27,47.67-106.27,106.27s47.67,106.27,106.27,106.27,106.27-47.67,106.27-106.27-47.67-106.27-106.27-106.27Z'/%3e%3cpath%20d='M251.09,340c-1.78,0-3.58-.05-5.39-.16-29.73-1.77-54.04-16.09-70.27-41.43-11.86-18.5-15.17-36.61-15.3-37.37l-2.96-16.71h182.84l-3.58,17.14c-.17.83-4.4,20.55-17.08,39.81-16.73,25.41-40.24,38.72-68.24,38.72ZM193.72,272.79c7.12,15.64,22.47,36.79,53.67,38.64,31.35,1.86,47.64-21.54,55.3-38.64h-108.97Z'/%3e%3c/svg%3e`;

const FACE_STARS = `data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20id='Camada_1'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%20viewBox='0%200%20500.03%20500.03'%3e%3cpath%20d='M441.97,192.62c-2.69-8.27-10.34-13.83-19.04-13.83h-44.99l-13.9-42.78c-2.69-8.27-10.34-13.83-19.04-13.83s-15.64,5.07-18.63,12.73c-22.39-15.34-49.45-24.34-78.58-24.34s-53.47,8.11-75.19,22.06c-3.45-6.36-10.12-10.45-17.57-10.45-8.7,0-16.35,5.56-19.04,13.83l-13.9,42.78h-44.99c-8.7,0-16.35,5.56-19.04,13.83-2.69,8.27.23,17.27,7.27,22.38l36.39,26.44-13.9,42.79c-2.69,8.27.23,17.27,7.27,22.38,3.52,2.55,7.65,3.83,11.77,3.83h.01c4.13-.01,8.25-1.28,11.77-3.84l1.28-.93c21.52,49.28,70.73,83.81,127.86,83.81,61.16,0,108.8-35.64,129.06-86.18l4.56,3.31c3.52,2.55,7.65,3.83,11.77,3.83h0c4.13.01,8.25-1.27,11.77-3.83,7.04-5.11,9.96-14.11,7.27-22.38l-13.9-42.79,36.4-26.44c7.04-5.11,9.96-14.11,7.27-22.38ZM315.49,168.21l-3.44,10.58h-44.99c-7.09,0-13.47,3.69-17.05,9.53-3.58-5.84-9.97-9.53-17.06-9.53h-44.99l-4.36-13.41c17.84-13.56,40.08-21.62,64.17-21.62,25.71,0,49.32,9.19,67.72,24.45ZM100.59,206.43h27.04c8.7,0,16.35-5.56,19.04-13.83l8.36-25.71,8.35,25.71c2.69,8.28,10.34,13.84,19.04,13.84h27.04l-21.87,15.89c-7.04,5.11-9.96,14.11-7.27,22.38l8.35,25.71-21.87-15.89c-3.52-2.56-7.65-3.84-11.77-3.84h-.01c-4.13-.01-8.25,1.27-11.77,3.83l-21.87,15.89,8.35-25.71c2.69-8.27-.23-17.27-7.27-22.38l-21.87-15.89ZM247.79,356.29c-46.15,0-85.48-29.59-100.12-70.78l7.36-5.35,36.4,26.44c7.03,5.11,16.49,5.11,23.53,0s9.96-14.11,7.27-22.38l-13.9-42.78,36.4-26.44c2.17-1.57,3.94-3.52,5.28-5.7,1.34,2.18,3.12,4.12,5.29,5.7l36.4,26.44-13.9,42.79c-2.69,8.27.23,17.27,7.27,22.38,7.04,5.11,16.5,5.11,23.54,0l36.39-26.44,3.82,2.78c-13.89,42.53-53.93,73.34-101.03,73.34ZM377.57,222.33c-7.04,5.11-9.96,14.11-7.27,22.38l8.35,25.71-21.87-15.89c-3.52-2.56-7.65-3.84-11.77-3.84h0c-4.13,0-8.25,1.28-11.77,3.84l-21.87,15.89,8.35-25.71c2.69-8.27-.23-17.27-7.27-22.38l-21.87-15.89h27.04c8.7,0,16.35-5.56,19.04-13.83l8.35-25.71,8.35,25.71c2.69,8.27,10.34,13.83,19.04,13.83h27.04l-21.87,15.89Z'/%3e%3c/svg%3e`;

interface Plan {
  name: string;
  price: number;
  hex: string;
  face: string;
}

const PLANS: Plan[] = [
  { name: 'CLUBE 1', price: 39.9, hex: '#ff883f', face: FACE_SIMPLE },
  { name: 'CLUBE 2', price: 69.9, hex: '#ff883f', face: FACE_SIMPLE },
  { name: 'CLUBE 3', price: 99.9, hex: '#ff9d3a', face: FACE_SIMPLE },
  { name: 'CLUBE 4', price: 139.9, hex: '#ffb336', face: FACE_SIMPLE },
  { name: 'CLUBE 5', price: 169.9, hex: '#f7e92a', face: FACE_OPEN },
  { name: 'CLUBE 6', price: 199.9, hex: '#f7e92a', face: FACE_OPEN },
  { name: 'CLUBE 7', price: 249.9, hex: '#e8ec2b', face: FACE_OPEN },
  { name: 'CLUBE 8', price: 309.9, hex: '#d9f032', face: FACE_OPEN },
  { name: 'CLUBE 9', price: 419.9, hex: '#c2f463', face: FACE_STARS },
  { name: 'CLUBE 10', price: 549.9, hex: '#c2f463', face: FACE_STARS },
  { name: 'CLUBE 11', price: 649.9, hex: '#b3f253', face: FACE_STARS },
  { name: 'CLUBE 12', price: 739.9, hex: '#a1f042', face: FACE_STARS },
];

/* ========================================================================== */
/* COMPONENTE PRINCIPAL DA HOME (LPHome)                                      */
/* ========================================================================== */

export default function LPHome() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [selectedLeadType, setSelectedLeadType] = useState<'company' | 'gym' | ''>('company');
  const [isCalculatorModalOpen, setIsCalculatorModalOpen] = useState(false);

  // Estados para as seções interativas da página
  const [subsidy, setSubsidy] = useState<number>(30);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragCoords = useRef({ startX: 0, scrollLeft: 0 });

  // Estados da Calculadora Integrada
  const [employees, setEmployees] = useState<number>(100);
  const [activeRate, setActiveRate] = useState<number>(30);
  const [planCost, setPlanCost] = useState<number>(120);

  // Estados do Formulário de Contato
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [leadTypeForm, setLeadTypeForm] = useState<'company' | 'gym'>('company');
  const [orgName, setOrgName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  // Estados do Modal da Calculadora Rápida
  const [modalEmployees, setModalEmployees] = useState<number>(50);
  const [modalTraditionalFee, setModalTraditionalFee] = useState<number>(35);

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      const timer = setTimeout(() => {
        const el = document.getElementById(section);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectAudience = (audience: 'academias' | 'empresas' | 'alunos') => {
    if (audience === 'academias') {
      navigate('/academias');
    } else if (audience === 'empresas') {
      navigate('/empresas');
    } else {
      navigate('/usuario');
    }
  };

  const handleSelectCard = (type: 'company' | 'gym' | 'student') => {
    if (type === 'gym') {
      navigate('/academias');
    } else if (type === 'student') {
      navigate('/usuario');
    } else {
      setSelectedLeadType(type);
      setLeadTypeForm('company');
      handleNavigateToSection('formulario');
    }
  };

  // Funções do Carrossel
  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const handleScrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const cardWidth = 280;
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const handlePointerDown = (e: PointerEvent) => {
    if (!carouselRef.current || e.pointerType === 'touch') return;
    isDragging.current = true;
    dragCoords.current = {
      startX: e.clientX,
      scrollLeft: carouselRef.current.scrollLeft,
    };
    carouselRef.current.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    const walk = e.clientX - dragCoords.current.startX;
    carouselRef.current.scrollLeft = dragCoords.current.scrollLeft - walk;
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (!carouselRef.current) return;
    isDragging.current = false;
    try {
      if (carouselRef.current.hasPointerCapture(e.pointerId)) {
        carouselRef.current.releasePointerCapture(e.pointerId);
      }
    } catch {
      // safe ignore
    }
  };

  // Cálculos da Calculadora
  const activeEmployees = Math.max(1, Math.round((employees * activeRate) / 100));
  const traditionalCost = employees * (planCost * 0.7);
  const gymclubCost = activeEmployees * (planCost * 0.45);
  const monthlySavings = Math.max(0, traditionalCost - gymclubCost);
  const annualSavings = monthlySavings * 12;

  // Formatação Form
  const formatPhone = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 11);
    if (digits.length <= 2) return digits;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  };

  const formatCnpj = (val: string) => {
    const digits = val.replace(/\D/g, '').slice(0, 14);
    if (digits.length <= 2) return digits;
    if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
    if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
    if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
    return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
  };

  const handleSubmitContact = (e: FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || contactPhone.replace(/\D/g, '').length < 10) {
      setFormError('Preencha seu nome completo, e-mail e telefone válido.');
      return;
    }
    if (!orgName.trim() || !city.trim() || state.trim().length !== 2) {
      setFormError('Informe a empresa/academia, cidade e UF (2 letras).');
      return;
    }
    if (!cnpj.trim() || cnpj.replace(/\D/g, '').length < 14) {
      setFormError('Informe um CNPJ válido com 14 dígitos.');
      return;
    }

    setFormError('');
    setFormLoading(true);

    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
    }, 700);
  };

  const inputClass =
    'w-full bg-gray-100 border border-transparent focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-gym-orange rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 text-sm sm:text-base font-title font-light outline-none transition-all placeholder:text-gray-400';

  // Modal cálculos
  const modalActiveEmployees = Math.max(1, Math.round(modalEmployees * 0.20));
  const modalTraditionalCost = modalEmployees * modalTraditionalFee;
  const modalGymclubCost = modalActiveEmployees * 25;
  const modalMonthlySavings = Math.max(0, modalTraditionalCost - modalGymclubCost);
  const modalYearlySavings = modalMonthlySavings * 12;

  const floatingBadges = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-green',
      position: 'top-[12%] left-[8%] md:left-[14%]',
      animation: 'animate-float-slow',
      label: 'Sem surpresas',
    },
    {
      icon: <Users className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-teal',
      position: 'top-[14%] right-[8%] md:right-[14%]',
      animation: 'animate-float',
      label: 'Time ativo',
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-yellow-green',
      position: 'top-1/2 -translate-y-1/2 left-[3%] md:left-[8%]',
      animation: 'animate-float-reverse',
      label: 'Zero desperdício',
    },
    {
      icon: <Zap className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-yellow-orange',
      position: 'top-1/2 -translate-y-1/2 right-[3%] md:right-[8%]',
      animation: 'animate-float',
      label: 'Mais energia',
    },
    {
      icon: <Dumbbell className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-orange',
      position: 'bottom-[14%] left-[6%] md:left-[16%]',
      animation: 'animate-float-reverse',
      label: 'Liberdade',
    },
    {
      icon: <Sparkles className="w-8 h-8 text-gray-900" />,
      color: 'bg-gradient-orange-yellow',
      position: 'bottom-[16%] right-[6%] md:right-[16%]',
      animation: 'animate-float-slow',
      label: 'Produtividade',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 selection:bg-[#ff883f] selection:text-white">
      {/* 1. Header / Navbar Oficial GymClub */}
      <Navbar
        onOpenCalculator={() => navigate('/calculadoras')}
        onNavigateToSection={handleNavigateToSection}
      />

      <main className="flex-1">
        {/* ================================================================ */}
        {/* SECTION 1: HERO OFICIAL                                         */}
        {/* ================================================================ */}
        <section
          id="inicio"
          className="mx-auto w-full bg-cover sm:bg-auto bg-center relative flex flex-col justify-center min-h-[min(calc(100svh-var(--nav-h)),880px)] pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden"
          style={{
            backgroundImage: `url(${fundoHome}), url('/web-background.png'), url('https://gymclub.com.br/assets/web-background-BOzopAgo.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto w-full max-w-5xl [@media(min-height:820px)]:xl:max-w-6xl mt-6 sm:mt-12 px-4 text-center sm:px-6 lg:px-8 relative z-10">
            <p className="font-unbounded text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl [@media(min-height:820px)]:xl:text-7xl drop-shadow-xs">
              Benefício fitness com
            </p>

            <div className="mt-1.5 sm:mt-2 flex items-center justify-center gap-2 sm:gap-3 [@media(min-height:820px)]:sm:gap-5">
              <span className="font-unbounded text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl [@media(min-height:820px)]:xl:text-7xl inline-flex items-center gap-2 sm:gap-3 drop-shadow-xs">
                liberdade{' '}
                <img
                  src="/seta.png"
                  alt="e"
                  className="inline h-6 sm:h-8 md:h-10 lg:h-12 [@media(min-height:820px)]:xl:h-14 w-auto object-contain align-middle"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://gymclub.com.br/seta.png';
                  }}
                />
              </span>
              <span className="font-unbounded text-2xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl [@media(min-height:820px)]:xl:text-7xl drop-shadow-xs">
                economia
              </span>
            </div>

            <p className="mt-5 sm:mt-7 [@media(min-height:820px)]:sm:mt-10 text-center font-unbounded text-sm sm:text-lg md:text-xl [@media(min-height:820px)]:xl:text-2xl font-normal text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-xs">
              O aplicativo ideal para academias parceiras, empresas que buscam eficiência e alunos que valorizam flexibilidade.
            </p>

            <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-3 sm:mt-10 [@media(min-height:820px)]:sm:mt-14 sm:grid-cols-3 sm:gap-4 [@media(min-height:820px)]:sm:gap-5 mb-10">
              <button
                onClick={() => handleSelectAudience('academias')}
                className="cursor-pointer rounded-full bg-gradient-to-tr from-[#FFEB99] to-[#FF7F2A] px-6 py-3.5 sm:py-4 [@media(min-height:820px)]:sm:py-5 text-center font-unbounded text-base [@media(min-height:820px)]:xl:text-xl font-normal text-black hover:bg-none hover:bg-white hover:shadow-lg active:scale-95 transition-all duration-300 sm:text-lg shadow-md"
              >
                <span>Academias</span>
              </button>

              <button
                onClick={() => handleSelectAudience('empresas')}
                className="cursor-pointer rounded-full bg-gradient-to-tr from-[#F7E92A] to-[#FFEB99] px-6 py-3.5 sm:py-4 [@media(min-height:820px)]:sm:py-5 text-center font-unbounded text-base [@media(min-height:820px)]:xl:text-xl font-normal text-black hover:bg-none hover:bg-white hover:shadow-lg active:scale-95 transition-all duration-300 sm:text-lg shadow-md"
              >
                <span>Empresas</span>
              </button>

              <button
                onClick={() => handleSelectAudience('alunos')}
                className="cursor-pointer rounded-full bg-gradient-to-tr from-[#C2F463] to-[#25E79C] px-6 py-3.5 sm:py-4 [@media(min-height:820px)]:sm:py-5 text-center font-unbounded text-base [@media(min-height:820px)]:xl:text-xl font-normal text-black hover:bg-none hover:bg-white hover:shadow-lg active:scale-95 transition-all duration-300 sm:text-lg shadow-md"
              >
                <span>Usuários</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 2: OS 3 SEGMENTOS / CARDS EM GRADIENTE                   */}
        {/* ================================================================ */}
        <section id="segmentos" className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-yellow-orange opacity-10 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
             
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-gray-900 mb-4 tracking-tight">
                O GymClub foi feito para você!
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600 leading-relaxed">
                Soluções sob medida para academias parceiras, empresas que buscam eficiência e alunos que valorizam flexibilidade.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 items-stretch">
              {/* Card 1: Academias */}
              <div
                id="card-academias"
                className="bg-white rounded-[32px] p-8 border-2 border-gym-orange/30 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:border-gym-orange/60 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-gym-orange text-xs font-title font-bold uppercase tracking-wider">
                      <Dumbbell className="w-3.5 h-3.5" />
                      Para Academias
                    </span>
                   
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-title font-bold text-gray-900 mb-4">
                    Academias
                  </h3>

                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    Quer ser parceiro e ter mais adesão com repasse sustentável? Conheça o modelo que repassa até 85%, tem taxa zero de adesão e dá autonomia total nos seus horários.
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-orange/20 text-gym-orange flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                      </span>
                      <span>Repasse sustentável de até 85%</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-orange/20 text-gym-orange flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                      </span>
                      <span>Autonomia total de lotação e regras</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-orange/20 text-gym-orange flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                      </span>
                      <span>Sem concorrência desleal com seu balcão</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectCard('gym')}
                  className="cursor-pointer w-full bg-gradient-orange hover:opacity-95 text-white px-6 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:shadow-orange-500/25 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Cadastrar academia</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 2: Empresas */}
              <div
                id="card-empresas"
                className="bg-white rounded-[32px] p-8 border-2 border-gym-yellow/50 shadow-2xl shadow-yellow-500/10 hover:shadow-yellow-500/20 transition-all hover:-translate-y-1 flex flex-col justify-between relative"
              >
                

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-title font-bold uppercase tracking-wider">
                      <Building2 className="w-3.5 h-3.5" />
                      Para Empresas
                    </span>
                   
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-title font-bold text-gray-900 mb-4">
                    Empresas
                  </h3>

                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    Quer levar o GymClub para seus colaboradores sem desperdício? Taxa zero de adesão e sua empresa só paga estritamente pela coparticipação de quem realmente treina.
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-yellow/40 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Sem cobrança por colaboradores inativos</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-yellow/40 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Economia de até 70% no orçamento de RH</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-yellow/40 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Dashboard completo com métricas em tempo real</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectCard('company')}
                  className="cursor-pointer w-full bg-gradient-yellow hover:opacity-95 text-gray-900 px-6 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:shadow-yellow-400/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Conhecer benefício</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Card 3: Usuários */}
              <div
                id="card-alunos"
                className="bg-white rounded-[32px] p-8 border-2 border-gym-green/40 shadow-xl shadow-green-500/5 hover:shadow-2xl hover:border-gym-green/70 transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-title font-bold uppercase tracking-wider">
                      <User className="w-3.5 h-3.5" />
                      Para Usuários
                    </span>
                    
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-title font-bold text-gray-900 mb-4">
                    Usuários
                  </h3>

                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    Quer ter liberdade para treinar onde quiser pelo melhor valor? Conheça os planos flexíveis e inicie sua jornada em centenas de academias e estúdios credenciados.
                  </p>

                  <div className="space-y-3 mb-8 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Musculação, crossfit, natação e lutas</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Acesso por QR Code direto no aplicativo</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Sem carência ou multas de cancelamento</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleSelectCard('student')}
                  className="cursor-pointer w-full bg-gradient-green hover:opacity-95 text-gray-900 px-6 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:shadow-gym-green/30 hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Baixar aplicativo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 3: CARROSSEL OFICIAL DOS PLANOS (CLUBE 1 AO 12)          */}
        {/* ================================================================ */}
        <section id="planos" className="py-20 sm:py-28 bg-[#fafafa] relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-yellow-orange opacity-15 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-gray-900 mb-4 tracking-tight">
                Liberdade total para treinar onde quiser
              </h2>

              <p className="text-sm sm:text-lg font-title font-light text-gray-600 leading-relaxed">
                Com o subsídio corporativo, o valor dos planos despenca para o colaborador. Veja abaixo quanto seu time paga na ponta:
              </p>

              <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-3 sm:px-6 sm:py-3.5 rounded-3xl sm:rounded-full border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-gym-orange" />
                  <span className="text-xs sm:text-sm font-title font-medium text-gray-700">
                    Coparticipação da Empresa:
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <input
                    id="plans-subsidy-range"
                    type="range"
                    min={0}
                    max={150}
                    step={10}
                    value={subsidy}
                    onChange={(e) => setSubsidy(Number(e.target.value))}
                    className="w-32 sm:w-44 accent-gym-orange cursor-pointer"
                  />
                  <span className="font-title font-bold text-sm sm:text-base text-gray-900 bg-gray-100 px-3 py-1 rounded-xl">
                    R$ {subsidy},00
                  </span>
                </div>
              </div>
            </div>

            <div className="relative">
              <button
                type="button"
                aria-label="Ver planos anteriores"
                onClick={() => handleScrollCarousel('left')}
                className="absolute -left-2 sm:-left-5 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black transition-all cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                aria-label="Ver próximos planos"
                onClick={() => handleScrollCarousel('right')}
                className="absolute -right-2 sm:-right-5 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black transition-all cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              <div
                ref={carouselRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="flex gap-4 sm:gap-5 overflow-x-auto hide-scrollbar py-4 px-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
              >
                {PLANS.map((plan) => {
                  const discount = Math.min(subsidy, plan.price);
                  const finalPrice = Math.max(0, plan.price - discount);

                  return (
                    <article
                      key={plan.name}
                      className="group relative min-h-[195px] min-w-[240px] sm:min-w-[270px] flex-none snap-start overflow-hidden rounded-[32px] border border-gray-200/90 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-200/80 hover:border-gray-300"
                    >
                      <div className="relative z-10 flex h-full flex-col pr-16 justify-between">
                        <div>
                          <h3 className="font-title text-xl sm:text-2xl font-bold uppercase leading-tight text-gray-900 tracking-tight">
                            {plan.name}
                          </h3>

                          <div className="mt-4 space-y-1">
                            {discount > 0 ? (
                              <p className="font-title text-lg font-semibold text-gray-400 red-line-through">
                                {formatCurrency(plan.price)}
                              </p>
                            ) : (
                              <p className="font-title text-xs font-medium text-gray-400 uppercase tracking-wider">
                                Valor integral
                              </p>
                            )}

                            <p className="font-title text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                              {formatCurrency(finalPrice)}
                            </p>

                            <p className="font-title text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                              POR MÊS
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="pointer-events-none absolute bottom-0 right-0 z-0 flex h-full items-center justify-end">
                        <div
                          className="h-32 w-32 translate-x-5 translate-y-3 opacity-90 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:translate-x-7 group-hover:scale-[1.3] sm:h-36 sm:w-36"
                          style={{
                            backgroundColor: plan.hex,
                            maskImage: `url("${plan.face}")`,
                            WebkitMaskImage: `url("${plan.face}")`,
                            maskSize: 'contain',
                            WebkitMaskSize: 'contain',
                            maskRepeat: 'no-repeat',
                            WebkitMaskRepeat: 'no-repeat',
                            maskPosition: 'center',
                            WebkitMaskPosition: 'center',
                          }}
                        />
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedLeadType('company');
                  setLeadTypeForm('company');
                  handleNavigateToSection('formulario');
                }}
                className="cursor-pointer inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 shadow-lg"
              >
                <span>Quero esses planos na minha empresa</span>
                <ArrowRight className="w-4 h-4 text-gym-green" />
              </button>

              <a
                href="#app"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-title font-medium text-gray-600 hover:text-gray-900 px-5 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-gym-orange" />
                <span>Consultar academias credenciadas no App</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 4: REDE CREDENCIADA                                      */}
        {/* ================================================================ */}
        <section id="rede" className="py-16 sm:py-24 bg-white relative overflow-hidden">
          {/* Luz de ambientação nas cores da marca */}
          <div className="absolute top-0 left-0 w-[700px] h-[500px] bg-gradient-yellow-green opacity-10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              {/* Eyebrow */}
              

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-gray-900 mb-6 tracking-tight">
                Veja todas as academias{' '}
                <span className="text-gym-orange">credenciadas no app</span>
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600 leading-relaxed">
                São mais de 200 academias, estúdios de crossfit, pilates, natação e lutas espalhados pelo Brasil. Consulte a rede completa e descubra quais unidades já fazem parte do GymClub na sua cidade.
              </p>
            </div>

            {/* O que cada público encontra na rede */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-green rounded-2xl flex items-center justify-center shadow-sm">
                    <User className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Usuários
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                  Saiba onde vai treinar
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Confira as unidades perto de casa, do trabalho e da faculdade antes de escolher o seu plano. Nada de assinar no escuro.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-sm">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Empresas
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                  Confira a cobertura
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Veja a rede disponível nas regiões onde seus colaboradores moram antes de fechar o benefício. Sem surpresa depois da contratação.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-teal rounded-2xl flex items-center justify-center shadow-sm">
                    <Dumbbell className="w-6 h-6 text-gray-900" />
                  </div>
                  <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    Academias
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                  Veja quem já é parceiro
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Descubra as unidades que já recebem alunos pelo GymClub na sua cidade e o espaço que a sua academia pode ocupar na rede.
                </p>
              </div>
            </div>

            {/* CTA principal */}
            <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://gymclub.com.br/rede-credenciada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 shadow-lg"
              >
                <span>Ver rede credenciada</span>
                <ExternalLink className="w-4 h-4 text-gym-green" />
              </a>

              <a
                href="#app"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-title font-medium text-gray-600 hover:text-gray-900 px-5 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Smartphone className="w-4 h-4 text-gym-orange" />
                <span>Consultar direto pelo app</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 5: FAIXA MARQUEE                                         */}
        {/* ================================================================ */}
        <section className="w-full overflow-hidden bg-gradient-to-r from-[#C2F463] via-[#81f185] to-[#25E79C] py-5 sm:py-6 shadow-inner border-y border-black/10 select-none">
          <div className="flex overflow-hidden">
            <div className="animate-marquee flex items-center shrink-0">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`marquee-1-${index}`}
                  className="flex items-center gap-6 sm:gap-10 shrink-0 px-6 sm:px-10"
                >
                  <span className="font-title text-base sm:text-2xl md:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                    ENTRE PARA O CLUBE FITNESS QUE SE PREOCUPA COM VOCÊ!
                  </span>
                  <img
                    src="https://gymclub.com.br/nivel-2.svg"
                    alt="GymClub Smiley"
                    className="h-10 sm:h-14 w-auto object-contain inline-block shrink-0"
                  />
                </div>
              ))}
            </div>

            <div className="animate-marquee flex items-center shrink-0" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={`marquee-2-${index}`}
                  className="flex items-center gap-6 sm:gap-10 shrink-0 px-6 sm:px-10"
                >
                  <span className="font-title text-base sm:text-2xl md:text-3xl font-black uppercase text-black tracking-tight whitespace-nowrap">
                    ENTRE PARA O CLUBE FITNESS QUE SE PREOCUPA COM VOCÊ!
                  </span>
                  <img
                    src="https://gymclub.com.br/nivel-2.svg"
                    alt="GymClub Smiley"
                    className="h-10 sm:h-14 w-auto object-contain inline-block shrink-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 6: BAIXE O APP & MOCKUP SMARTPHONE                       */}
        {/* ================================================================ */}
        <section id="app" className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-yellow-orange opacity-10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-[#fffdfa] via-white to-[#fefcf8] rounded-[36px] sm:rounded-[48px] border border-orange-100 p-8 sm:p-14 lg:p-16 shadow-2xl shadow-orange-500/5 relative overflow-hidden">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-gradient-yellow-orange opacity-15 rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7 text-left">
                 

                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-gray-900 mb-6 tracking-tight leading-tight">
                    Baixe agora e entre{' '}
                    <span className="text-gradient-orange">para o GymClub</span>
                  </h2>

                  <p className="text-sm sm:text-lg font-title font-light text-gray-600 max-w-xl leading-relaxed mb-8">
                    Encontre academias próximas com geolocalização inteligente, faça check-in direto pelo celular e gerencie seu plano na palma da mão.
                  </p>

                  <div className="space-y-3.5 mb-10">
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Check-in instantâneo por geolocalização ou QR Code ao chegar na academia</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Fotos das instalações, horários de pico e modalidades aceitas</span>
                    </div>

                    <div className="flex items-center gap-3 text-xs sm:text-sm font-title font-light text-gray-700">
                      <span className="w-5 h-5 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-gray-900" strokeWidth={3} />
                      </span>
                      <span>Gestão simples de assinatura e inclusão de dependentes</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://apps.apple.com/br/app/gymclub-benef%C3%ADcios/id6763812347"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black hover:bg-gray-800 text-white font-title text-xs sm:text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
                      aria-label="Baixar na App Store"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.92.04-2.02.62-2.66 1.37-.56.65-.98 1.71-.85 2.74 1.03.08 2.05-.54 2.59-1.24z"/>
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-sans font-medium text-gray-400">Disponível na</span>
                        <span className="block font-title font-bold text-xs sm:text-sm">App Store</span>
                      </div>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=gymclub.app&hl=pt_BR"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black hover:bg-gray-800 text-white font-title text-xs sm:text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
                      aria-label="Baixar no Google Play"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186a2.372 2.372 0 0 1-.61-.395c-.322-.321-.5-.75-.5-1.205V3.414c0-.455.178-.884.5-1.205.18-.18.39-.315.609-.395zm11.242 11.243l2.457 2.457-11.89 6.866 9.433-9.323zm0-2.114L5.418 1.62l11.89 6.866-2.457 2.457zm1.058 1.057l3.655 2.11c.905.523.905 1.375 0 1.898l-3.655 2.11-2.116-2.11 2.116-2.008z"/>
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-sans font-medium text-gray-400">Disponível no</span>
                        <span className="block font-title font-bold text-xs sm:text-sm">Google Play</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center py-4 lg:py-0">
                  <PhoneMockup />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 7: MANIFESTO ECOSSISTEMA                                */}
        {/* ================================================================ */}
        <section id="manifesto" className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-yellow-orange opacity-10 rounded-full blur-[130px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-bold text-gray-900 mb-6 tracking-tight">
                No GymClub, todo mundo sai ganhando{' '}
                <span className="text-gym-orange">de verdade</span>
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600 leading-relaxed">
                Mais do que uma plataforma de acesso, construímos um ecossistema equilibrado que valoriza o caixa da sua empresa, a sustentabilidade da sua academia e a saúde do seu time.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {/* Empresas */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-orange rounded-2xl flex items-center justify-center shadow-sm">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      Empresas
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                    Zero Desperdício
                  </h3>
                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    Sua empresa só investe nos colaboradores que realmente treinam. Sem taxa de adesão, sem pacotes engessados e sem pagar por quem não usa.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Sem cobrança por funcionários inativos</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Economia direta no orçamento de benefícios</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Gestão simplificada e relatórios em tempo real</span>
                  </div>
                </div>
              </div>

              {/* Academias */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-green rounded-2xl flex items-center justify-center shadow-sm">
                      <Dumbbell className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      Academias
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                    Repasse Sustentável
                  </h3>
                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    A única plataforma que respeita o ecossistema fitness. Repassamos até 85% do valor da assinatura, com controle de lotação.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Até 85% de repasse garantido por check-in</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Autonomia total para definir regras e horários</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Sem canibalização de alunos particulares</span>
                  </div>
                </div>
              </div>

              {/* Usuários */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50/50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-yellow rounded-2xl flex items-center justify-center shadow-sm">
                      <Users className="w-6 h-6 text-gray-900" />
                    </div>
                    <span className="text-[11px] font-title font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                      Usuários
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-title font-bold text-gray-900 mb-3">
                    Liberdade de Escolha
                  </h3>
                  <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                    Acesso descomplicado a musculação, crossfit, natação, lutas, pilates e dança. Treine perto de casa, do trabalho ou onde preferir.
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Centenas de modalidades e parceiros credenciados</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Check-in digital rápido e sem filas</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Planos acessíveis sem fidelidade abusiva</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={() => handleNavigateToSection('formulario')}
                className="cursor-pointer inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300 px-8 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Quero entrar para o GymClub</span>
                <ArrowRight className="w-4 h-4 text-gym-orange" />
              </button>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* SECTION 8: SEÇÃO ORBITAL DE ALTO IMPACTO (6 Ícones Flutuantes)   */}
        {/* ================================================================ */}
        <section className="py-20 sm:py-32 relative overflow-hidden bg-[#fafafa]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[450px] bg-gradient-yellow-orange opacity-15 blur-[120px] pointer-events-none rounded-full" />

          <div className="absolute inset-0 z-0 hidden sm:block pointer-events-none">
            {floatingBadges.map((badge, idx) => (
              <div
                key={idx}
                className={`absolute ${badge.position} ${badge.color} ${badge.animation} w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-[0_12px_36px_rgba(0,0,0,0.1)] border border-white/60 transition-transform duration-300`}
                title={badge.label}
              >
                {badge.icon}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-title font-extrabold text-gray-900 tracking-tight leading-[1.12] mb-6 sm:mb-8">
              Pare de pagar por quem{' '}
              <span className="text-gradient-orange">não utiliza</span> o benefício.
            </h2>

            <p className="text-base sm:text-xl md:text-2xl font-title font-light text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
              Transforme seu caixa e engaje seu time com o GymClub.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setSelectedLeadType('company');
                  setLeadTypeForm('company');
                  handleNavigateToSection('formulario');
                }}
                className="cursor-pointer inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-8 sm:px-10 py-4 sm:py-4.5 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-2xl hover:shadow-gray-900/30 hover:-translate-y-0.5"
              >
                <span>Cadastrar minha empresa</span>
                <ArrowRight className="w-4 h-4 text-[#c2f463]" />
              </button>
            </div>
          </div>
        </section>

      

        {/* ================================================================ */}
        {/* SECTION 10: FALE CONOSCO & FORMULÁRIO DE CADASTRO               */}
        {/* ================================================================ */}
        <section
          id="cadastro"
          className="relative lg:min-h-[820px] flex items-center py-16 lg:py-20 bg-gym-orange overflow-hidden"
        >
          <div id="formulario" className="absolute -top-20" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[800px] md:w-[1200px] aspect-square rounded-full bg-[#f7e92a] pointer-events-none" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[1000px] md:w-[1500px] aspect-square rounded-full border-[60px] md:border-[100px] border-[#c2f463] pointer-events-none opacity-80" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[1200px] md:w-[1800px] aspect-square rounded-full border-[60px] md:border-[100px] border-[#3ad9c5] pointer-events-none opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-gym-orange via-gym-orange/90 to-gym-orange/70 lg:bg-gradient-to-r lg:from-gym-orange lg:via-gym-orange/80 lg:to-transparent pointer-events-none" />

          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="w-full lg:flex-1 text-white">
                

                <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-extrabold mb-6 leading-[1.15] tracking-tight">
                  Sem taxas ocultas, <br className="hidden sm:inline" />
                  sem gestão complexa
                </h2>

                <p className="text-sm sm:text-lg md:text-xl font-title font-light text-white/95 leading-relaxed mb-8 max-w-xl">
                  Implementar um benefício de saúde corporativa não precisa ser uma dor de cabeça para o RH. Na verdade, com o{' '}
                  <strong className="font-bold text-white">GymClub</strong>, é exatamente o oposto. E para as academias, garantimos o maior repasse do mercado.
                </p>

                <div className="pt-6 space-y-4">
                  <p className="font-title text-xs font-bold uppercase tracking-wider text-white/90">
                    Canais de Atendimento Imediato
                  </p>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://wa.me/5543991860104?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Gymclub"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-gray-900 border border-white/40 font-title text-xs sm:text-sm font-bold transition-all shadow-sm"
                    >
                      <MessageSquare className="w-4 h-4 text-[#c2f463]" />
                      <span>Falar pelo WhatsApp</span>
                    </a>

                    <a
                      href="https://www.instagram.com/gymclub.beneficios/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 font-title text-xs sm:text-sm font-medium transition-all"
                    >
                      <span>@gymclub.beneficios</span>
                    </a>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-white/80 font-title font-light pt-2">
                    <ShieldCheck className="w-4 h-4 text-[#c2f463] shrink-0" />
                    <span>Dados protegidos com conformidade total à LGPD.</span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-[580px] lg:shrink-0">
                <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/50">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-title font-black text-gray-900 mb-6 uppercase text-center tracking-tight">
                    {leadTypeForm === 'company' ? 'CADASTRE SUA EMPRESA' : 'CADASTRE SUA ACADEMIA'}
                  </h3>

                  <div className="flex p-1 bg-gray-100 rounded-2xl mb-6">
                    <button
                      type="button"
                      onClick={() => setLeadTypeForm('company')}
                      className={`flex-1 py-2.5 rounded-xl font-title text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        leadTypeForm === 'company'
                          ? 'bg-black text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Sou Empresa
                    </button>
                    <button
                      type="button"
                      onClick={() => setLeadTypeForm('gym')}
                      className={`flex-1 py-2.5 rounded-xl font-title text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                        leadTypeForm === 'gym'
                          ? 'bg-black text-white shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Sou Academia
                    </button>
                  </div>

                  {formSubmitted ? (
                    <div className="py-8 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h4 className="font-title text-xl font-bold text-gray-900">
                        Cadastro recebido com sucesso!
                      </h4>
                      <p className="text-sm text-gray-600 font-title font-light leading-relaxed">
                        Obrigado, <strong>{contactName}</strong>! Nossa equipe comercial entrará em contato com a <strong>{orgName}</strong> em instantes.
                      </p>
                      <button
                        type="button"
                        onClick={() => setFormSubmitted(false)}
                        className="mt-4 px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-900 font-title text-xs font-bold transition-colors cursor-pointer"
                      >
                        Enviar outro cadastro
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmitContact} className="space-y-3.5">
                      {formError && (
                        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-2.5 text-xs text-red-600 font-title font-light">
                          {formError}
                        </div>
                      )}

                      <div>
                        <input
                          type="text"
                          required
                          value={contactName}
                          onChange={(e) => setContactName(e.target.value)}
                          placeholder="Nome completo"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <input
                          type="email"
                          required
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          placeholder="E-mail profissional / comercial"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <input
                          type="tel"
                          required
                          value={contactPhone}
                          onChange={(e) => setContactPhone(formatPhone(e.target.value))}
                          placeholder="Telefone / WhatsApp com DDD"
                          className={inputClass}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          required
                          value={orgName}
                          onChange={(e) => setOrgName(e.target.value)}
                          placeholder={leadTypeForm === 'company' ? 'Nome da Empresa' : 'Nome da Academia'}
                          className={inputClass}
                        />
                      </div>

                      <div className="grid grid-cols-[1fr_100px] gap-2.5">
                        <input
                          type="text"
                          required
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          placeholder="Cidade"
                          className={inputClass}
                        />
                        <input
                          type="text"
                          required
                          maxLength={2}
                          value={state}
                          onChange={(e) => setState(e.target.value.toUpperCase().slice(0, 2))}
                          placeholder="UF"
                          className={`${inputClass} text-center font-bold`}
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          required
                          inputMode="numeric"
                          value={cnpj}
                          onChange={(e) => setCnpj(formatCnpj(e.target.value))}
                          placeholder="CNPJ (00.000.000/0000-00)"
                          className={inputClass}
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={formLoading}
                          className="cursor-pointer w-full bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 shadow-lg disabled:opacity-60"
                        >
                          {formLoading ? (
                            <span>Enviando dados...</span>
                          ) : (
                            <>
                              <span>Quero cadastrar {leadTypeForm === 'company' ? 'minha empresa' : 'minha academia'}</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 10. Footer Institucional Oficial */}
      <Footer
        onSelectSection={handleNavigateToSection}
        onOpenCalculator={() => navigate('/calculadoras')}
      />

      {/* Modal Interativo da Calculadora Rápida */}
      {isCalculatorModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-black/10 text-gray-900">
            <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-orange-100 flex items-center justify-center text-[#ff883f]">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-title text-sm font-bold text-gray-900">
                    Simulador de Economia GymClub
                  </h3>
                  <p className="text-[11px] text-gray-500 font-sans">
                    Compare o modelo tradicional com a taxa zero de adesão GymClub
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsCalculatorModalOpen(false)}
                className="rounded-xl p-2 text-gray-400 hover:bg-gray-200 hover:text-gray-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-title font-semibold mb-1">
                    <span>Número de Colaboradores:</span>
                    <span className="text-[#ff883f] font-bold text-sm">{modalEmployees} pessoas</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={500}
                    step={5}
                    value={modalEmployees}
                    onChange={(e) => setModalEmployees(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#ff883f]"
                  />
                  <div className="flex justify-between text-[10px] text-gray-400 font-sans mt-1">
                    <span>5</span>
                    <span>250</span>
                    <span>500+</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-title font-semibold mb-1">
                    <span>Taxa cobrada em outros modelos (por cabeça):</span>
                    <span className="text-gray-700 font-bold text-sm">R$ {modalTraditionalFee},00 /mês</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={80}
                    step={5}
                    value={modalTraditionalFee}
                    onChange={(e) => setModalTraditionalFee(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-red-50/60 border border-red-200/60">
                  <span className="text-[10px] font-title font-bold text-red-600 uppercase">Outros Benefícios</span>
                  <p className="text-xs text-gray-600 mt-1 font-sans">Cobrança por todos ({modalEmployees} cadastros mesmo que só {modalActiveEmployees} treinem)</p>
                  <p className="text-xl font-title font-bold text-red-700 mt-2">
                    R$ {modalTraditionalCost.toLocaleString('pt-BR')}<span className="text-xs font-normal">/mês</span>
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-300">
                  <span className="text-[10px] font-title font-bold text-emerald-700 uppercase flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Modelo GymClub
                  </span>
                  <p className="text-xs text-gray-600 mt-1 font-sans">Taxa zero de cadastro + pague estritamente pelo uso real</p>
                  <p className="text-xl font-title font-bold text-emerald-800 mt-2">
                    R$ {modalGymclubCost.toLocaleString('pt-BR')}<span className="text-xs font-normal">/mês</span>
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-gradient-green p-6 text-gray-900 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
                <div>
                  <p className="text-xs font-title font-bold uppercase tracking-wider opacity-85">
                    Economia Anual Estimada
                  </p>
                  <p className="font-title text-2xl sm:text-3xl font-black mt-0.5 tracking-tight">
                    R$ {modalYearlySavings.toLocaleString('pt-BR')},00
                  </p>
                </div>

                <button
                  onClick={() => {
                    setIsCalculatorModalOpen(false);
                    setSelectedLeadType('company');
                    setLeadTypeForm('company');
                    handleNavigateToSection('formulario');
                  }}
                  className="cursor-pointer rounded-full bg-black text-white px-6 py-3 font-title text-xs sm:text-sm font-bold hover:bg-gray-800 transition-all whitespace-nowrap shadow-md hover:-translate-y-0.5"
                >
                  Levar para minha empresa
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Check,
  QrCode,
  Sparkles,
  ArrowRight,
  Dumbbell,
  ShieldCheck,
  CreditCard,
  Building2,
  UserCheck,
  Flame,
  ChevronDown, Minus, Plus, CheckCircle2,
  X,
  Star,
  MapPin,
  Calendar,
  Zap,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { PhoneMockup } from '../components/PhoneMockup';

// Imagens geradas e oficiais do usuário
import usuarioHeroPhoto from '../assets/usuario-hero.jpg';
import appMockupPhoto from '../assets/app-mockup.jpg';
import bgEmpresa from '../assets/bg-empresa.png';
import fundoUsuarios from '../assets/fundo-usuarios.jpeg';
import qrAppStore from '../assets/qrcode-appstore.png';
import qrGooglePlay from '../assets/qrcode-googleplay.png';

/* ------------------------------------------------------------------ */
/* Dados dos 12 Planos Oficiais do GymClub                            */
/* ------------------------------------------------------------------ */
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

/* ------------------------------------------------------------------ */
/* Dúvidas Frequentes (FAQ)                                           */
/* ------------------------------------------------------------------ */
interface FaqItem {
  pergunta: string;
  resposta: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    pergunta: 'Preciso ter vínculo com alguma empresa para contratar o GymClub?',
    resposta:
      'Não! Essa é uma das maiores vantagens do GymClub: você pode assinar diretamente como Pessoa Física (B2C) pelo nosso aplicativo, sem precisar que seu empregador ofereça o benefício. E caso a sua empresa venha a ser parceira no futuro, você pode vincular sua conta para receber o subsídio corporativo.',
  },
  {
    pergunta: 'Como funciona o check-in na academia?',
    resposta:
      'É 100% digital e sem burocracia. Ao chegar na recepção da academia parceira, basta abrir o app GymClub, tocar em "Fazer Check-in" e ler o QR Code da recepção ou confirmar via geolocalização. A liberação na catraca é imediata.',
  },
  {
    pergunta: 'Posso treinar em academias ou cidades diferentes?',
    resposta:
      'Com certeza! Sua assinatura não tem vínculo exclusivo com uma única academia. Você pode treinar perto de casa na segunda-feira, perto do trabalho na terça, fazer natação na quarta e treinar em outra cidade quando estiver viajando, desde que o espaço seja compatível com o seu plano.',
  },
  {
    pergunta: 'Como funciona o pagamento e o cancelamento?',
    resposta:
      'A cobrança é mensal e recorrente no cartão de crédito, sem comprometer o limite total do seu cartão com valores anuais. Você não tem fidelidade nem carência: pode cancelar a qualquer momento diretamente pelo app em poucos cliques.',
  },
  {
    pergunta: 'Quantas vezes posso treinar por dia?',
    resposta:
      'Você tem direito a 1 (um) check-in presencial por dia para usufruir da academia ou estúdio da sua escolha em toda a rede credenciada do seu plano.',
  },
  {
    pergunta: 'Posso trocar de plano se quiser mais academias?',
    resposta:
      'Sim! Você pode fazer upgrade ou downgrade de plano direto no app quando desejar. O ajuste é imediato e proporcional aos dias restantes do seu ciclo.',
  },
  {
    pergunta: 'Preciso pagar taxa de matrícula ou anuidade?',
    resposta:
      'Zero! No GymClub você não paga matrícula, anuidade, taxa de manutenção nem taxa de cancelamento. Você paga única e exclusivamente a mensalidade do plano que escolher.',
  },
];

/* ------------------------------------------------------------------ */
/* Componente Principal                                                */
/* ------------------------------------------------------------------ */
export default function LPUsuario() {
  const [faqAberto, setFaqAberto] = useState<number | null>(0);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'auto';
      startX.current = e.pageX - carouselRef.current.offsetLeft;
      scrollLeft.current = carouselRef.current.scrollLeft;
    }
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handlePointerUp = () => {
    isDragging.current = false;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = 'smooth';
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const formatCurrency = (val: number) => {
    return val.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const openDownloadModal = () => setIsDownloadModalOpen(true);
  const closeDownloadModal = () => setIsDownloadModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-title selection:bg-gym-green selection:text-gray-950">
      {/* Header / Navbar Integrada com indicador de aba ativa Usuário */}
      <Navbar />

      <main>
        {/* ========================================================== */}
        {/* SEÇÃO 1: HERO PRINCIPAL DE USUÁRIOS                         */}
        {/* ========================================================== */}
        <section id="inicio" className="relative flex flex-col justify-center min-h-[min(calc(100svh-var(--nav-h)),880px)] pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden bg-[#C4F22C]">
          {/* Fundo padronizado com imagem do usuário */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-80"
            style={{ backgroundImage: `url(${fundoUsuarios}), url(${bgEmpresa})` }}
            aria-hidden="true"
          />
          <div className="w-full max-w-[950px] mt-6 sm:mt-12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
            
              <h1 className="text-[32px] sm:text-5xl md:text-7xl font-title font-extrabold text-white tracking-tight leading-[1.1] mb-6 sm:mb-8 [@media(min-height:820px)]:sm:mb-12 drop-shadow-xs">
                Treine com flexibilidade e <span className="text-gradient-yellow"> liberdade </span>
                
              </h1>
              <p className="text-base sm:text-xl [@media(min-height:820px)]:xl:text-2xl font-title font-medium text-white/95 max-w-3xl mx-auto mb-10 sm:mb-12 [@media(min-height:820px)]:sm:mb-16 leading-relaxed drop-shadow-sm">
                Liberdade de escolher o melhor lugar para seu objetivo, onde você estiver.
                Acesso a centenas de academias, estúdios de crossfit, pilates, natação e lutas com uma única assinatura.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsDownloadModalOpen(true)}
                  className="w-full sm:w-auto bg-gray-900 hover:bg-black text-white px-6 sm:px-8 [@media(min-height:820px)]:sm:px-10 py-3.5 sm:py-4 [@media(min-height:820px)]:sm:py-5 rounded-full text-[13px] sm:text-base [@media(min-height:820px)]:xl:text-lg font-title font-bold transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Baixar app e começar
                  <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="#planos"
                  className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white border border-white/40 backdrop-blur-sm px-6 sm:px-8 [@media(min-height:820px)]:sm:px-10 py-3.5 sm:py-4 [@media(min-height:820px)]:sm:py-5 rounded-full text-[13px] sm:text-base [@media(min-height:820px)]:xl:text-lg font-title font-bold transition-all"
                >
                  Ver planos disponíveis
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 2: QUERO ENTRAR NO GYMCLUB (LIBERDADE SEM VÍNCULO)   */}
        {/* ========================================================== */}
        <section id="sobre" className="py-16 sm:py-24 bg-[#fafafa] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
               

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
                Uma assinatura única e <span className="text-gradient-green">diferentes academias</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 leading-relaxed">
                Sem vínculo exclusivo com uma só unidade e sem obrigatoriedade de ser colaborador de uma empresa.
                Você escolhe se quer contratar como <strong>Pessoa Física</strong> ou aproveitar o <strong>benefício corporativo</strong>.
              </p>
            </div>

            {/* 2 Modelos de Acesso: Pessoa Física vs Empresa */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-14">
              {/* Card 1: Como Pessoa Física (B2C) */}
              <div className="bg-white rounded-[32px] p-8 border-2 border-gym-green/50 shadow-xl shadow-green-500/5 hover:shadow-2xl transition-all hover:-translate-y-1 relative">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-800 text-xs font-title font-bold uppercase tracking-wider mb-5">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span>Para Você (Pessoa Física)</span>
                </div>

                <h3 className="text-2xl font-title font-bold text-gray-900 mb-3">
                  Contrate direto no app
                </h3>

                <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                  Não precisa esperar seu RH contratar. Você baixa o app, escolhe o plano que cabe no seu bolso e já começa a treinar hoje.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Sem burocracia ou comprovação corporativa</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Pagamento mensal recorrente no cartão</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-gym-green/30 text-gray-900 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />
                    </span>
                    <span>Cancele quando quiser pelo próprio aplicativo</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Como Benefício da Sua Empresa (B2B) */}
              <div className="bg-white rounded-[32px] p-8 border border-gray-200 shadow-xl shadow-gray-200/40 hover:shadow-2xl transition-all hover:-translate-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-50 text-yellow-800 text-xs font-title font-bold uppercase tracking-wider mb-5">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Benefício da Empresa</span>
                </div>

                <h3 className="text-2xl font-title font-bold text-gray-900 mb-3">
                  Com subsídio do seu trabalho
                </h3>

                <p className="text-sm font-title font-light text-gray-600 leading-relaxed mb-6">
                  Sua empresa contratou o GymClub? Você acessa os mesmos clubes com coparticipação paga pela empresa e mensalidades ainda menores.
                </p>

                <div className="space-y-3 pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-yellow-800" strokeWidth={3} />
                    </span>
                    <span>Desconto direto na sua mensalidade</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-yellow-800" strokeWidth={3} />
                    </span>
                    <span>Possibilidade de incluir dependentes legais</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs sm:text-sm font-title font-light text-gray-700">
                    <span className="w-4 h-4 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-yellow-800" strokeWidth={3} />
                    </span>
                    <span>Indique seu RH para liberar o convênio</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparativo: Academia Antiga vs GymClub */}
            <div className="max-w-4xl mx-auto bg-white rounded-[32px] p-6 sm:p-10 border border-gray-200/80 shadow-lg">
              <h3 className="text-lg sm:text-xl font-title font-bold text-center text-gray-900 mb-6">
                Por que o plano do GymClub é diferente do plano de uma academia comum?
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200">
                  <p className="text-xs font-title font-bold text-gray-500 uppercase tracking-wider mb-2">
                    Academia Tradicional
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-600 font-light">
                    <li>❌ Preso a uma única unidade física</li>
                    <li>❌ Contratos anuais com multa de cancelamento</li>
                    <li>❌ Taxas de matrícula e anuidade surpresa</li>
                    <li>❌ Apenas uma modalidade inclusa</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-green-50/70 border border-green-200">
                  <p className="text-xs font-title font-bold text-green-900 uppercase tracking-wider mb-2">
                    Com o GymClub
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-gray-800 font-medium">
                    <li>✅ Treine em qualquer academia parceira do plano</li>
                    <li>✅ Sem fidelidade: cancele quando quiser no app</li>
                    <li>✅ Zero taxas de matrícula ou manutenção</li>
                    <li>✅ Musculação, crossfit, natação, lutas e pilates</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 3: BENEFÍCIO COMPLETO (8 PILARES DO ALUNO)            */}
        {/* ========================================================== */}
        <section id="beneficios" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
              

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
                O aluno no centro de <span className="text-gradient-green">toda a experiência</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 leading-relaxed">
                Recursos e suporte pensados para tornar sua jornada de saúde mais eficiente, flexível e prazerosa.
                Ganhe autonomia, confiança e incentivo diário para alcançar seu melhor potencial.
              </p>
            </div>

            {/* Grid dos 8 Recursos e Vantagens Exclusivas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 1 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-green text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Acesso a múltiplas academias
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Não fique refém de um único espaço. Treine em centenas de estabelecimentos credenciados perto de você.
                </p>
              </div>

              {/* 2 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gym-yellow text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Assinatura única e simples
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Um único valor mensal dá acesso a toda a rede do plano escolhido, sem múltiplos contratos ou pagamentos avulsos.
                </p>
              </div>

              {/* 3 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gym-orange text-white flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <Flame className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Escolha conforme seu perfil
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  12 opções de planos (Clube 1 ao Clube 12) para você pagar apenas pelo nível de estrutura que deseja utilizar.
                </p>
              </div>

              {/* 4 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-green text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Rede compatível no mapa
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Veja no mapa do app as academias parceiras, fotos, horários de pico e comodidades antes de sair de casa.
                </p>
              </div>

              {/* 5 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gym-yellow text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Sem vínculo obrigatório
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Disponível para qualquer pessoa física. Baixe o app e comece no mesmo instante, sem intermediários.
                </p>
              </div>

              {/* 6 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gradient-green text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <Dumbbell className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Diferentes modalidades
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Varie seus treinos entre musculação, funcional, natação, crossfit, lutas, spinning, yoga e pilates.
                </p>
              </div>

              {/* 7 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gym-orange text-white flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Cobrança recorrente
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Pagamento mensal no cartão de crédito sem comprometer o limite total do seu cartão. Sem sustos na fatura.
                </p>
              </div>

              {/* 8 */}
              <div className="bg-[#fafafa] rounded-[28px] p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 rounded-2xl bg-gym-yellow text-gray-900 flex items-center justify-center font-bold mb-4 shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-title font-bold text-gray-900 text-base mb-2">
                  Cancele quando quiser
                </h3>
                <p className="text-xs sm:text-sm font-title font-light text-gray-600 leading-relaxed">
                  Liberdade de verdade: se precisar pausar ou cancelar, basta 1 toque no app. Sem multas e sem burocracia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 4: PLANOS DISPONÍVEIS (TODOS OS PLANOS)               */}
        {/* ========================================================== */}
        <section id="planos" className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
               

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
                Conheça todos os <span className="text-gradient-green">planos disponíveis</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 leading-relaxed mb-8">
                Do essencial ao premium exclusivo. Escolha o nível de clube que combina com a sua rotina de treinos.
              </p>

            </div>

            {/* Carrossel dos Planos */}
            <div className="relative mt-8">
              {/* Botão Anterior */}
              <button
                type="button"
                aria-label="Ver planos anteriores"
                onClick={() => handleScroll('left')}
                className="absolute -left-2 sm:-left-5 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black transition-all cursor-pointer hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Botão Próximo */}
              <button
                type="button"
                aria-label="Ver próximos planos"
                onClick={() => handleScroll('right')}
                className="absolute -right-2 sm:-right-5 top-1/2 z-20 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-gray-200 shadow-xl flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:text-black transition-all cursor-pointer hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Trilho do Carrossel com Arrastar/Scroll Suave */}
              <div
                ref={carouselRef}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                className="flex gap-4 sm:gap-5 overflow-x-auto hide-scrollbar py-4 px-2 snap-x snap-mandatory cursor-grab active:cursor-grabbing select-none"
              >
                {PLANS.map((plan) => {
                  return (
                    <article
                      key={plan.name}
                      className="group relative min-h-[195px] min-w-[240px] sm:min-w-[270px] flex-none snap-start overflow-hidden rounded-[32px] border border-gray-200/90 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-gray-200/80 hover:border-gray-300"
                    >
                      {/* Conteúdo textual à esquerda */}
                      <div className="relative z-10 flex h-full flex-col pr-16 justify-between">
                        <div>
                          <h3 className="font-title text-xl sm:text-2xl font-bold uppercase leading-tight text-gray-900 tracking-tight">
                            {plan.name}
                          </h3>
                          <div className="mt-4 space-y-1">
                            <p className="font-title text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                              R$ {formatCurrency(plan.price)}
                            </p>
                            <p className="font-title text-[10px] font-medium uppercase tracking-[0.15em] text-gray-500">
                              POR MÊS
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Smiley Face no canto direito com máscara e animação de hover */}
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

            {/* Rodapé da Seção com CTAs Rápidos */}
            <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={openDownloadModal}
                className="cursor-pointer inline-flex items-center gap-2.5 bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full text-sm sm:text-base font-title font-bold transition-all hover:shadow-xl hover:-translate-y-0.5 shadow-lg"
              >
                <span>Baixar App e Assinar</span>
                <ArrowRight className="w-4 h-4 text-gym-green" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 5: MOCKUP & DOWNLOAD DO APP                          */}
        {/* ========================================================== */}
        <section id="download" className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="bg-gradient-to-br from-green-50/60 via-white to-yellow-50/40 rounded-[36px] sm:rounded-[44px] border border-gray-200 p-8 sm:p-14 lg:p-16 shadow-2xl shadow-gray-200/50">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                {/* Lado Esquerdo: Chamada de Download & Passos */}
                <div className="lg:col-span-7">
                  

                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-title font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                    Baixe agora e entre <br />
                    <span className="text-gradient-green">para o GymClub</span>
                  </h2>

                  <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 leading-relaxed mb-8">
                    O próximo passo da sua evolução acontece no aplicativo. Escolha sua loja favorita, instale o GymClub e siga o cadastro simples para começar a treinar hoje mesmo.
                  </p>

                  {/* 3 Passos da Adesão no App */}
                  <div className="space-y-4 mb-10">
                    <div className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-green text-gray-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        1
                      </div>
                      <div>
                        <p className="text-sm font-title font-bold text-gray-900">
                          Instale o app gratuito
                        </p>
                        <p className="text-xs text-gray-500 font-light">
                          Disponível para iOS e Android em suas respectivas lojas oficiais.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-green text-gray-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        2
                      </div>
                      <div>
                        <p className="text-sm font-title font-bold text-gray-900">
                          Crie sua conta em 1 minuto
                        </p>
                        <p className="text-xs text-gray-500 font-light">
                          Preencha seus dados básicos com segurança e escolha o plano perfeito para você.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-gradient-green text-gray-950 font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                        3
                      </div>
                      <div>
                        <p className="text-sm font-title font-bold text-gray-900">
                          Faça check-in e treine
                        </p>
                        <p className="text-xs text-gray-500 font-light">
                          Chegue na academia parceira, aponte a câmera pro QR Code e bons treinos!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botões das Lojas Oficiais */}
                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href="https://apps.apple.com/br/app/gymclub-benef%C3%ADcios/id6763812347"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black hover:bg-gray-800 text-white font-title text-xs sm:text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.92.04-2.02.62-2.66 1.37-.56.65-.98 1.71-.85 2.74 1.03.08 2.05-.54 2.59-1.24z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-sans font-medium text-gray-400">
                          Disponível na
                        </span>
                        <span className="block font-title font-bold text-xs sm:text-sm">
                          App Store
                        </span>
                      </div>
                    </a>

                    <a
                      href="https://play.google.com/store/apps/details?id=gymclub.app&hl=pt_BR"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-black hover:bg-gray-800 text-white font-title text-xs sm:text-sm font-bold shadow-lg transition-all hover:-translate-y-0.5"
                    >
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186a2.372 2.372 0 0 1-.61-.395c-.322-.321-.5-.75-.5-1.205V3.414c0-.455.178-.884.5-1.205.18-.18.39-.315.609-.395zm11.242 11.243l2.457 2.457-11.89 6.866 9.433-9.323zm0-2.114L5.418 1.62l11.89 6.866-2.457 2.457zm1.058 1.057l3.655 2.11c.905.523.905 1.375 0 1.898l-3.655 2.11-2.116-2.11 2.116-2.008z" />
                      </svg>
                      <div className="text-left">
                        <span className="block text-[10px] uppercase font-sans font-medium text-gray-400">
                          Disponível no
                        </span>
                        <span className="block font-title font-bold text-xs sm:text-sm">
                          Google Play
                        </span>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Lado Direito: Mockup do Smartphone Realista GymClub */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <PhoneMockup />

                  {/* Caixa do QR Code para quem está no desktop */}
                  <div className="mt-6 flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-gray-200 shadow-sm w-full max-w-[340px]">
                    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200 shrink-0 text-gray-900">
                      <QrCode className="w-7 h-7 text-gym-green-dark" />
                    </div>
                    <div>
                      <p className="text-xs font-title font-bold text-gray-900">
                        Prefere escanear com o celular?
                      </p>
                      <button
                        onClick={openDownloadModal}
                        className="text-[11px] font-title font-bold text-gym-green-dark hover:underline cursor-pointer"
                      >
                        Clique para ver QR Code ampliado
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 7: BANNER FINAL DE CONVERSÃO                          */}
        {/* ========================================================== */}
        <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
          {/* Luzes de ambientação com as cores da marca (Verde e Amarelo/Laranja) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-gym-green/20 to-gym-yellow/20 blur-[120px] pointer-events-none rounded-full" />
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Pronto para ter liberdade <br />
              <span className="text-gradient-green">nos seus treinos?</span>
            </h2>

            <p className="text-sm sm:text-lg font-title font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Baixe o GymClub agora mesmo, escolha o plano ideal para a sua rotina e comece a treinar em centenas de academias pelo Brasil.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={openDownloadModal}
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-title font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-sm sm:text-base transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
              >
                <Smartphone className="w-5 h-5 text-gym-green" />
                <span>Baixar aplicativo grátis</span>
                <ArrowRight className="w-4 h-4 text-gym-green" />
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-title font-medium text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-green-dark" strokeWidth={3} />
                </span>
                Instalação grátis
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-green-dark" strokeWidth={3} />
                </span>
                Sem fidelidade
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-green-dark" strokeWidth={3} />
                </span>
                Check-in imediato
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 6: DÚVIDAS FREQUENTES (FAQ ACCORDION)                */}
        {/* ========================================================== */}
        <section id="faq" className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-4xl md:text-6xl font-title font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Perguntas <span className="text-gradient-green">Frequentes</span>
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600 max-w-2xl mx-auto">
                Tudo o que você precisa saber sobre o cadastro, check-in, cobrança e cancelamento no GymClub.
              </p>
            </div>

            <div className="bg-[#f4f4f4] rounded-3xl sm:rounded-[40px] p-3 sm:p-4 md:p-8 border border-gray-200/50">
              <div className="space-y-3 sm:space-y-4">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = faqAberto === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                    >
                      <button
                        onClick={() => setFaqAberto(isOpen ? null : index)}
                        className="w-full px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5 sm:gap-4">
                          <div className="shrink-0 text-gym-orange">
                            {isOpen ? (
                              <Minus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                            ) : (
                              <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                            )}
                          </div>
                          <span className="text-[13px] sm:text-base md:text-lg font-title font-bold text-gray-900">
                            {item.pergunta}
                          </span>
                        </div>
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-0 ml-6 sm:ml-9 text-[13px] sm:text-base font-title font-light text-gray-600 leading-relaxed">
                              {item.resposta}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* ========================================================== */}
      {/* MODAL DE DOWNLOAD & QR CODE DO APP                         */}
      {/* ========================================================== */}
      {isDownloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-gray-100">
            <button
              onClick={closeDownloadModal}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-green text-gray-950 flex items-center justify-center mx-auto mb-3 shadow-xs">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-title font-bold text-gray-900">
                Baixe o <span className="text-gradient-green">GymClub App</span>
              </h3>
              <p className="text-xs sm:text-sm font-title font-light text-gray-500 mt-1">
                Aponte a câmera do seu celular para o QR Code abaixo ou acesse diretamente a sua loja.
              </p>
            </div>

            {/* QR Codes oficiais — um por loja */}
            <div className="bg-gray-50 p-5 sm:p-6 rounded-2xl border border-gray-200 mb-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[158px] bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <img
                      src={qrAppStore}
                      alt="QR Code para baixar o app GymClub na App Store"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-title font-bold text-gray-700 mt-2.5">
                    App Store
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-full max-w-[158px] bg-white p-3 rounded-xl border border-gray-200 shadow-sm">
                    <img
                      src={qrGooglePlay}
                      alt="QR Code para baixar o app GymClub no Google Play"
                      className="w-full h-auto block"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-title font-bold text-gray-700 mt-2.5">
                    Google Play
                  </span>
                </div>
              </div>

              <p className="text-[11px] font-title font-medium text-gray-500 mt-4 text-center">
                Aponte a câmera do smartphone para abrir na sua loja
              </p>
            </div>

            {/* Links Diretos */}
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://apps.apple.com/br/app/gymclub-benef%C3%ADcios/id6763812347"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-black hover:bg-gray-800 text-white font-title text-xs font-bold flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>App Store</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=gymclub.app&hl=pt_BR"
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-black hover:bg-gray-800 text-white font-title text-xs font-bold flex items-center justify-center gap-2 transition-all text-center"
              >
                <span>Google Play</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Rodapé Oficial GymClub */}
      <Footer />
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  ChevronDown, Minus, Plus,
  Building2,
  Dumbbell,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Users,
  Star,
  MapPin,
  TrendingUp,
  Percent,
  MessageCircle,
  PiggyBank,
  Zap,
  X,
  Phone,
  Mail,
  User,
  Clock,
  CreditCard,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
const logoMark = '/assets/logo-mark.png';
import bgEmpresa from '../assets/bg-empresa.png';
import fundoAcademias from '../assets/fundo-academias.jpeg';
import bgPraQuem from '../assets/bg-praquem.png';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/* ------------------------------------------------------------------ */
/* Planos da plataforma (Clube 1 a Clube 12)                           */
/* ------------------------------------------------------------------ */

interface PlanItem {
  id: number;
  name: string;
  price: number;
  priceFormatted: string;
}

const PLATFORM_PLANS: PlanItem[] = [
  { id: 1, name: 'Clube 1', price: 39.9, priceFormatted: 'R$ 39,90' },
  { id: 2, name: 'Clube 2', price: 69.9, priceFormatted: 'R$ 69,90' },
  { id: 3, name: 'Clube 3', price: 99.9, priceFormatted: 'R$ 99,90' },
  { id: 4, name: 'Clube 4', price: 139.9, priceFormatted: 'R$ 139,90' },
  { id: 5, name: 'Clube 5', price: 169.9, priceFormatted: 'R$ 169,90' },
  { id: 6, name: 'Clube 6', price: 199.9, priceFormatted: 'R$ 199,90' },
  { id: 7, name: 'Clube 7', price: 249.9, priceFormatted: 'R$ 249,90' },
  { id: 8, name: 'Clube 8', price: 309.9, priceFormatted: 'R$ 309,90' },
  { id: 9, name: 'Clube 9', price: 419.9, priceFormatted: 'R$ 419,90' },
  { id: 10, name: 'Clube 10', price: 549.9, priceFormatted: 'R$ 549,90' },
  { id: 11, name: 'Clube 11', price: 649.9, priceFormatted: 'R$ 649,90' },
  { id: 12, name: 'Clube 12', price: 799.9, priceFormatted: 'R$ 799,90' },
];

/* ------------------------------------------------------------------ */
/* Estados e Funções de Máscara / Validação                           */
/* ------------------------------------------------------------------ */

const UFS = [
  { sigla: 'AC', nome: 'Acre' },
  { sigla: 'AL', nome: 'Alagoas' },
  { sigla: 'AP', nome: 'Amapá' },
  { sigla: 'AM', nome: 'Amazonas' },
  { sigla: 'BA', nome: 'Bahia' },
  { sigla: 'CE', nome: 'Ceará' },
  { sigla: 'DF', nome: 'Distrito Federal' },
  { sigla: 'ES', nome: 'Espírito Santo' },
  { sigla: 'GO', nome: 'Goiás' },
  { sigla: 'MA', nome: 'Maranhão' },
  { sigla: 'MT', nome: 'Mato Grosso' },
  { sigla: 'MS', nome: 'Mato Grosso do Sul' },
  { sigla: 'MG', nome: 'Minas Gerais' },
  { sigla: 'PA', nome: 'Pará' },
  { sigla: 'PB', nome: 'Paraíba' },
  { sigla: 'PR', nome: 'Paraná' },
  { sigla: 'PE', nome: 'Pernambuco' },
  { sigla: 'PI', nome: 'Piauí' },
  { sigla: 'RJ', nome: 'Rio de Janeiro' },
  { sigla: 'RN', nome: 'Rio Grande do Norte' },
  { sigla: 'RS', nome: 'Rio Grande do Sul' },
  { sigla: 'RO', nome: 'Rondônia' },
  { sigla: 'RR', nome: 'Roraima' },
  { sigla: 'SC', nome: 'Santa Catarina' },
  { sigla: 'SP', nome: 'São Paulo' },
  { sigla: 'SE', nome: 'Sergipe' },
  { sigla: 'TO', nome: 'Tocantins' },
];

function formatarTelefone(valor: string) {
  const d = valor.replace(/\D/g, '').slice(0, 11);
  if (!d) return '';
  if (d.length <= 2) return `(${d}`;
  const ddd = d.slice(0, 2);
  const resto = d.slice(2);
  const corte = d.length > 10 ? 5 : 4;
  if (resto.length <= corte) return `(${ddd}) ${resto}`;
  return `(${ddd}) ${resto.slice(0, corte)}-${resto.slice(corte)}`;
}

function formatarCnpj(valor: string) {
  const d = valor.replace(/\D/g, '').slice(0, 14);
  if (d.length > 12) {
    return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
  }
  if (d.length > 8) {
    return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  }
  if (d.length > 5) {
    return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  }
  if (d.length > 2) {
    return `${d.slice(0, 2)}.${d.slice(2)}`;
  }
  return d;
}

function cnpjValido(valor: string) {
  const d = valor.replace(/\D/g, '');
  if (d.length !== 14) return false;
  if (/^(\d)\1{13}$/.test(d)) return false;

  const digito = (base: string) => {
    let peso = base.length - 7;
    let soma = 0;
    for (const char of base) {
      soma += Number(char) * peso--;
      if (peso < 2) peso = 9;
    }
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
  };

  return (
    digito(d.slice(0, 12)) === Number(d[12]) &&
    digito(d.slice(0, 13)) === Number(d[13])
  );
}

const emailValido = (valor: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim());

/* ------------------------------------------------------------------ */
/* FAQ Dados                                                           */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    pergunta: 'Tem algum custo para minha academia entrar?',
    resposta:
      'Não! O credenciamento é 100% gratuito. Não cobramos taxa de adesão, mensalidade fixa ou anuidade para sua academia fazer parte da rede de parceiros do GymClub.',
  },
  {
    pergunta: 'GymClub realiza o pagamento apenas por check-in?',
    resposta:
      'O valor repassado é proporcional ao plano que o aluno contratou. Se o aluno frequenta exclusivamente a sua academia no mês, você recebe até 85% do valor total da mensalidade dele. Caso ele divida com outra academia da rede, o repasse de 85% é rateado proporcionalmente aos check-ins realizados em cada uma.',
  },
  {
    pergunta: 'Minha academia precisa dar exclusividade ao GymClub?',
    resposta:
      'De forma alguma! Você não precisa de exclusividade. Sua academia pode continuar operando com suas matrículas normais de balcão e até com outros agregadores se desejar. O GymClub é uma fonte adicional e altamente rentável de receita.',
  },
  {
    pergunta: 'Como e quando recebo os repasses?',
    resposta:
      'Os repasses são calculados no fechamento do ciclo mensal e transferidos diretamente para a conta bancária informada pela sua academia, com relatório transparente e auditável em seu painel de parceiro.',
  },
  {
    pergunta: 'Como funciona o check-in na recepção?',
    resposta:
      'O processo é extremamente rápido e simples para não sobrecarregar sua recepção. O aluno abre o aplicativo GymClub no celular, realiza o check-in por geolocalização ou QRCode, e a confirmação aparece instantaneamente no sistema da sua recepção.',
  },
  {
    pergunta: 'Posso limitar os horários de acesso dos alunos GymClub?',
    resposta:
      'Sim! Sua academia tem total autonomia para definir os planos compatíveis, modalidades inclusas e até eventuais faixas de horários, respeitando as regras combinadas durante o credenciamento.',
  },
];

/* ------------------------------------------------------------------ */
/* Componente Principal                                                */
/* ------------------------------------------------------------------ */

export default function LPAcademias() {
  // Planos da plataforma: Default para Clube 6 (R$ 199,90)
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(5);
  const carouselRef = useRef<HTMLDivElement>(null);

  const selectedPlan = PLATFORM_PLANS[selectedPlanIndex] || PLATFORM_PLANS[5];

  // Cálculo de 85% de repasse
  const valorRepasse = Number((selectedPlan.price * 0.85).toFixed(2));
  const valor3_4 = Number((valorRepasse * 0.75).toFixed(2));
  const valor1_4 = Number((valorRepasse * 0.25).toFixed(2));

  const valorRepasseFormatado = valorRepasse.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const valor3_4Formatado = valor3_4.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const valor1_4Formatado = valor1_4.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Carousel navigation
  const handlePrevPlan = () => {
    setSelectedPlanIndex((prev) => (prev > 0 ? prev - 1 : PLATFORM_PLANS.length - 1));
  };

  const handleNextPlan = () => {
    setSelectedPlanIndex((prev) => (prev < PLATFORM_PLANS.length - 1 ? prev + 1 : 0));
  };

  // Scroll active plan into view smoothly inside the carousel
  useEffect(() => {
    if (carouselRef.current) {
      const activeCard = carouselRef.current.children[selectedPlanIndex] as HTMLElement;
      if (activeCard) {
        const container = carouselRef.current;
        // Centraliza pelo centro real dos elementos: offsetLeft seria medido a partir
        // do wrapper posicionado (que tem padding lateral), deslocando o card.
        const containerRect = container.getBoundingClientRect();
        const cardRect = activeCard.getBoundingClientRect();
        const delta =
          cardRect.left + cardRect.width / 2 - (containerRect.left + containerRect.width / 2);
        container.scrollTo({ left: container.scrollLeft + delta, behavior: 'smooth' });
      }
    }
  }, [selectedPlanIndex]);

  // Modal de Cadastro de Academia (conforme print 3)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [etapa, setEtapa] = useState<number>(1); // 1 a 7

  // Campos do formulário
  const [nomeResponsavel, setNomeResponsavel] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [nomeAcademia, setNomeAcademia] = useState('');

  const [cnpj, setCnpj] = useState('');
  const [razaoSocial, setRazaoSocial] = useState('');
  const [numUnidades, setNumUnidades] = useState('1');

  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');

  const [modalidades, setModalidades] = useState<string[]>([
    'Musculação',
    'Funcional',
  ]);
  const [comodidades, setComodidades] = useState<string[]>([
    'Ar-condicionado',
    'Vestiário com chuveiro',
  ]);
  const [faixaMensalidade, setFaixaMensalidade] = useState('R$ 100 a R$ 179/mês');

  const [erroEtapa, setErroEtapa] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [enviadoComSucesso, setEnviadoComSucesso] = useState(false);

  // IBGE Cidades
  const [cidades, setCidades] = useState<string[]>([]);
  const [carregandoCidades, setCarregandoCidades] = useState(false);

  useEffect(() => {
    if (!uf) {
      setCidades([]);
      setCidade('');
      return;
    }
    setCarregandoCidades(true);
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
      .then((res) => res.json())
      .then((dados) => {
        if (Array.isArray(dados)) {
          const lista = dados.map((d: { nome: string }) => d.nome).sort();
          setCidades(lista);
        }
      })
      .catch(() => {
        setCidades([]);
      })
      .finally(() => {
        setCarregandoCidades(false);
      });
  }, [uf]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Travar scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Validação por etapa
  const validarEtapaAtual = (): boolean => {
    setErroEtapa('');
    if (etapa === 1) {
      if (!nomeResponsavel.trim()) {
        setErroEtapa('Por favor, informe seu nome completo.');
        return false;
      }
      if (!telefone.trim() || telefone.replace(/\D/g, '').length < 10) {
        setErroEtapa('Informe seu telefone ou WhatsApp com DDD.');
        return false;
      }
      if (!email.trim() || !emailValido(email)) {
        setErroEtapa('Informe um e-mail válido.');
        return false;
      }
      if (!nomeAcademia.trim()) {
        setErroEtapa('Informe o nome da sua academia ou rede.');
        return false;
      }
    } else if (etapa === 2) {
      if (cnpj.trim() && !cnpjValido(cnpj)) {
        setErroEtapa('CNPJ inválido — verifique os números digitados.');
        return false;
      }
    } else if (etapa === 3) {
      if (!uf) {
        setErroEtapa('Selecione o estado (UF) da sua academia.');
        return false;
      }
      if (!cidade.trim()) {
        setErroEtapa('Selecione ou informe a cidade.');
        return false;
      }
    }
    return true;
  };

  const handleNextEtapa = () => {
    if (!validarEtapaAtual()) return;

    if (etapa < 7) {
      setEtapa((prev) => prev + 1);
    } else {
      handleFinalizarCadastro();
    }
  };

  const handlePrevEtapa = () => {
    setErroEtapa('');
    if (etapa > 1) {
      setEtapa((prev) => prev - 1);
    }
  };

  const handleFinalizarCadastro = async () => {
    setEnviando(true);
    setErroEtapa('');

    const payload = {
      tipo: 'academia_parceira',
      nomeResponsavel,
      telefone,
      email,
      nomeAcademia,
      cnpj,
      razaoSocial,
      numUnidades,
      uf,
      cidade,
      bairro,
      modalidades: modalidades.join(', '),
      comodidades: comodidades.join(', '),
      faixaMensalidade,
      planoReferencia: `${selectedPlan.name} (${selectedPlan.priceFormatted})`,
      dataCadastro: new Date().toISOString(),
    };

    try {
      const resp = await fetch('https://n8n.cimerianofficial.com/webhook/gymclub-lp-academias', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (!resp || !resp.ok) {
        await new Promise((resolve) => setTimeout(resolve, 600));
      }
      setEnviadoComSucesso(true);
    } catch {
      setEnviadoComSucesso(true);
    } finally {
      setEnviando(false);
    }
  };

  const toggleModalidade = (item: string) => {
    setModalidades((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleComodidade = (item: string) => {
    setComodidades((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Porcentagem calculada para os 7 passos
  const porcentagemConcluida = Math.round((etapa / 7) * 100);

  // FAQ Accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa] text-gray-900 selection:bg-[#ff883f] selection:text-white font-sans">
      {/* 1. Navbar Oficial GymClub */}
      <Navbar
        onNavigateToSection={(id) => {
          if (id === 'cadastro' || id === 'formulario' || id === 'parceiro') {
            openModal();
          } else {
            const el = document.getElementById(id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }}
      />

      <main className="flex-1">
        {/* ========================================================== */}
        {/* SEÇÃO 1: HERO OFICIAL GYMCLUB - PARA DONOS DE ACADEMIA     */}
        {/* ========================================================== */}
        <section id="inicio" className="relative overflow-hidden bg-[#fafafa]">
          {/* Fundo Colorido com Textura e Anéis Geométricos GymClub */}
          <div className="relative flex flex-col justify-center min-h-[min(calc(100svh-var(--nav-h)),880px)] pt-16 pb-24 sm:pt-24 sm:pb-32 px-4 sm:px-6 lg:px-8 text-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-90"
              style={{ backgroundImage: `url(${fundoAcademias}), url(${bgEmpresa})` }}
              aria-hidden="true"
            />
         
            <div className="w-full max-w-7xl mt-6 sm:mt-12 mx-auto relative z-10">
              {/* Tag / Eyebrow Oficial GymClub */}
             
              
              {/* H1 Headline GymClub */}
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-7xl font-title font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] max-w-5xl mx-auto mb-6 [@media(min-height:820px)]:sm:mb-10 drop-shadow-sm"
              >
                A rede de benefícios que{' '}
                <span className="text-[#f7e92a]  decoration-wavy decoration-[#c2f463] decoration-2 underline-offset-8 block sm:inline">
                  paga a sua academia de verdade.
                </span>
              </motion.h1>
              
              {/* Subhead */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-base sm:text-xl [@media(min-height:820px)]:xl:text-2xl font-title font-normal text-white max-w-3xl mx-auto leading-relaxed mb-8 [@media(min-height:820px)]:sm:mb-12 drop-shadow-2xs"
              >
                Nada de migalhas por check-in. Você fica com <strong className="font-extrabold text-[#f7e92a]">o valor justo de cada plano</strong>, com repasse de até 85% e pagamento mensal garantido.
              </motion.p>

              {/* Tags de Destaque Flutuantes */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <span className="px-3.5 [@media(min-height:820px)]:sm:px-5 py-1.5 [@media(min-height:820px)]:sm:py-2.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white text-xs [@media(min-height:820px)]:sm:text-sm font-title font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#c2f463] animate-pulse" />
                  Repasse de até 85%
                </span>
                <span className="px-3.5 [@media(min-height:820px)]:sm:px-5 py-1.5 [@media(min-height:820px)]:sm:py-2.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white text-xs [@media(min-height:820px)]:sm:text-sm font-title font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#f7e92a]" />
                  Zero taxa de adesão
                </span>
                <span className="px-3.5 [@media(min-height:820px)]:sm:px-5 py-1.5 [@media(min-height:820px)]:sm:py-2.5 rounded-full bg-white/20 backdrop-blur-xs border border-white/30 text-white text-xs [@media(min-height:820px)]:sm:text-sm font-title font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#3ad9c5]" />
                  Liberdade total de regras
                </span>
              </div>
            </div>
          </div>

          {/* Fundo Branco Solar (Carrossel Interativo de Planos) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center pt-10 pb-16 sm:pt-14 sm:pb-24">
            {/* Subtitle: Planos da plataforma */}
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-title font-extrabold text-gym-orange uppercase tracking-widest bg-orange-50 px-4 py-1 rounded-full border border-orange-200">
                Planos da plataforma
              </span>
            </div>

            {/* Interactive Carousel of Plans */}
            <div className="relative max-w-4xl mx-auto mb-8 px-8 sm:px-12">
              {/* Left Arrow Button */}
              <button
                onClick={handlePrevPlan}
                aria-label="Plano anterior"
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-orange-50 border border-orange-200 shadow-xl flex items-center justify-center text-gray-900 transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 text-gym-orange" />
              </button>

              {/* Plans track */}
              <div
                ref={carouselRef}
                className="flex items-center gap-3 sm:gap-4 overflow-x-auto py-6 px-2 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {PLATFORM_PLANS.map((plan, idx) => {
                  const isSelected = idx === selectedPlanIndex;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlanIndex(idx)}
                      className={`relative shrink-0 w-36 sm:w-44 p-4 sm:p-5 rounded-3xl cursor-pointer transition-all duration-300 text-center ${
                        isSelected
                          ? 'bg-gradient-to-b from-white to-orange-50/50 border-2 border-gym-orange shadow-2xl scale-105 sm:scale-110 z-10 ring-4 ring-orange-200'
                          : 'bg-white border border-gray-200 opacity-80 hover:opacity-100 hover:border-orange-200 hover:bg-orange-50/20 transition-all shadow-sm'
                      }`}
                    >
                      {/* Badge ESCOLHIDO no gradiente GymClub */}
                      {isSelected && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-yellow-orange text-gray-950 text-[10px] sm:text-xs font-title font-black px-3 py-0.5 rounded-full shadow-md uppercase tracking-wider whitespace-nowrap">
                          SELECIONADO
                        </div>
                      )}
                      <p
                        className={`text-xs sm:text-sm font-title font-bold mb-1 ${
                          isSelected ? 'text-gym-orange' : 'text-gray-500'
                        }`}
                      >
                        {plan.name}
                      </p>
                      <p
                        className={`text-base sm:text-xl font-title font-extrabold ${
                          isSelected ? 'text-gray-900' : 'text-gray-800'
                        }`}
                      >
                        {plan.priceFormatted}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Right Arrow Button */}
              <button
                onClick={handleNextPlan}
                aria-label="Próximo plano"
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white hover:bg-orange-50 border border-orange-200 shadow-xl flex items-center justify-center text-gray-900 transition-all hover:scale-110 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5 text-gym-orange" />
              </button>
            </div>

            {/* Carousel Pagination Dots */}
            <div className="flex items-center justify-center gap-1.5 mb-8">
              {PLATFORM_PLANS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedPlanIndex(idx)}
                  aria-label={`Ver plano ${idx + 1}`}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    idx === selectedPlanIndex
                      ? 'w-7 bg-gradient-orange'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Callout Banner Dinâmico no Estilo Solar GymClub */}
            <motion.div
              key={selectedPlanIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-r from-orange-50 via-amber-50 to-emerald-50 p-6 sm:p-8 shadow-xl border-2 border-orange-200/80 text-gray-900 mb-8 relative overflow-hidden"
            >
              <p className="text-base sm:text-2xl font-title text-gray-900 font-bold">
                Receba até{' '}
                <span className="text-gradient-orange font-title font-black text-2xl sm:text-3xl">
                  R$ {valorRepasseFormatado}
                </span>{' '}
                com um único check-in no {selectedPlan.name}!
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <button
                onClick={openModal}
                className="w-full sm:w-auto bg-gradient-orange text-white font-title font-bold px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm sm:text-base transition-all hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Quero ser academia parceira</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </button>
              <a
                href="/calculadoras?tab=academias"
                className="w-full sm:w-auto bg-white hover:bg-orange-50 text-gray-900 border border-orange-200 font-title font-bold px-7 py-4 rounded-full text-sm sm:text-base transition-all hover:shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Simular faturamento na calculadora</span>
              </a>
            </div>

            {/* Pílulas de Confiança no Rodapé do Hero */}
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-3 text-xs sm:text-sm font-title font-medium text-gray-700">
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-700" strokeWidth={3} />
                </div>
                Repasse sustentável de até 85%
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                </div>
                Taxa zero de adesão
              </div>
              <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-gray-200 shadow-2xs">
                <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-amber-700" strokeWidth={3} />
                </div>
                Autonomia total de horários
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 2: STATS CARD INTEGRADO (Paleta Clara Oficial GymClub) */}
        {/* Inspirado na arquitetura limpa e solar da página inicial    */}
        {/* ========================================================== */}
        <section className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-10 border border-orange-100 shadow-2xl shadow-orange-500/10 backdrop-blur-md relative overflow-hidden">
            {/* Detalhe de topo em degradê das cores do GymClub */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-gym-orange via-gym-yellow to-gym-green" />

            {/* Glow sutil ao fundo do card */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-50 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              <div className="pt-2 sm:pt-0">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 text-gym-orange mb-3">
                  <Building2 className="w-5 h-5 text-gym-orange" />
                </div>
                <p className="text-3xl sm:text-5xl font-title font-extrabold text-gradient-orange tracking-tight mb-1">
                  +200
                </p>
                <p className="text-xs sm:text-sm font-title font-medium text-gray-500">
                  academias parceiras
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 mb-3">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-3xl sm:text-5xl font-title font-extrabold text-emerald-600 tracking-tight mb-1">
                  +50%
                </p>
                <p className="text-xs sm:text-sm font-title font-medium text-gray-500">
                  no repasse por aluno
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-amber-50 text-amber-500 mb-3">
                  <Users className="w-5 h-5 text-amber-600" />
                </div>
                <p className="text-3xl sm:text-5xl font-title font-extrabold text-amber-500 tracking-tight mb-1">
                  +3 mil
                </p>
                <p className="text-xs sm:text-sm font-title font-medium text-gray-500">
                  usuários ativos
                </p>
              </div>

              <div className="pt-4 sm:pt-0 sm:pl-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-orange-50 text-gym-orange mb-3">
                  <Star className="w-5 h-5 fill-gym-orange text-gym-orange" />
                </div>
                <p className="text-3xl sm:text-5xl font-title font-extrabold text-gym-orange tracking-tight mb-1">
                  4,9★
                </p>
                <p className="text-xs sm:text-sm font-title font-medium text-gray-500">
                  avaliação dos parceiros
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 3: SEM PEGADINHA - Como a gente consegue pagar mais? */}
        {/* ========================================================== */}
        <section id="sem-pegadinha" className="py-16 sm:py-24 bg-[#fafafa] relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Eyebrow */}
            

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
              Como a gente consegue <span className="text-gradient-orange">pagar tanto mais?</span>
            </h2>

            {/* Subhead */}
            <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Sem mágica: a gente simplesmente não fica com a maior parte do que o aluno paga. O dinheiro segue o aluno e vai direto pra academia onde ele treina.
            </p>

            {/* Card Repasse 85% / 15% */}
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-100 shadow-xl shadow-gray-200/50 max-w-2xl mx-auto mb-16 text-center relative overflow-hidden">
              <h3 className="text-base sm:text-lg font-title font-bold text-gray-900 mb-6">
                De cada plano que o aluno paga:
              </h3>

              {/* Barra dividida 85% / 15% nos gradientes GymClub (sem fundo escuro pesado) */}
              <div className="w-full h-14 sm:h-16 rounded-2xl overflow-hidden flex font-title font-bold text-xs sm:text-sm shadow-inner mb-5 border border-emerald-100">
                <div className="w-[85%] bg-gradient-green text-gray-950 flex items-center justify-center px-4 transition-all">
                  <span className="truncate font-extrabold">85% vai pra sua academia</span>
                </div>
                <div className="w-[15%] bg-orange-100 text-gym-orange flex items-center justify-center px-2">
                  <span className="text-[11px] sm:text-xs font-bold">15% taxa adm.</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm font-title font-light text-gray-600">
                Sem modelo de "sócio oculto". Aqui, quem fica com a maior fatia é a sua academia!
              </p>
            </div>

            {/* Subseção de Proporcionalidade */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-title font-bold text-gray-800 max-w-3xl mx-auto mb-10 leading-snug">
              E o valor é proporcional: quanto mais o aluno treina na sua academia, <span className="text-gradient-orange">mais você recebe.</span>
            </h3>

            {/* 2 Cards de Cenário Comparativo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-left mb-12">
              {/* Card 1: Treina só na sua */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-gray-100 shadow-lg shadow-gray-200/40 flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-gradient-yellow-orange text-gray-900 text-xs font-title font-bold uppercase tracking-wider mb-4 shadow-xs">
                    TREINA SÓ NA SUA
                  </div>

                  <p className="text-xs sm:text-sm font-title font-light text-gray-700 leading-relaxed mb-6">
                    Um aluno do <strong className="font-semibold text-gray-900">{selectedPlan.name} ({selectedPlan.priceFormatted})</strong> treina só na sua academia. <strong className="font-semibold text-gray-900">1 ou 10 check-ins no mês, tanto faz.</strong>
                  </p>
                </div>

                <div>
                  {/* Barra 100% */}
                  <div className="w-full h-12 rounded-xl bg-gradient-green text-gray-950 flex items-center justify-center font-title font-bold text-xs sm:text-sm mb-4 shadow-xs">
                    Você fica com 100% do repasse
                  </div>

                  <p className="text-xs sm:text-sm font-title font-light text-gray-700">
                    Você leva o valor cheio:{' '}
                    <span className="font-title font-bold text-gym-orange text-lg sm:text-xl">
                      R$ {valorRepasseFormatado}
                    </span>
                  </p>
                </div>
              </div>

              {/* Card 2: Divide com outra */}
              <div className="bg-white rounded-[28px] p-6 sm:p-8 border border-gray-100 shadow-lg shadow-gray-200/40 flex flex-col justify-between hover:shadow-xl transition-all">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-50 text-gym-orange border border-orange-200 text-xs font-title font-bold uppercase tracking-wider mb-4">
                    DIVIDE COM OUTRA
                  </div>

                  <p className="text-xs sm:text-sm font-title font-light text-gray-700 leading-relaxed mb-6">
                    O mesmo aluno faz <strong className="font-semibold text-gray-900">3 check-ins na sua academia</strong> e <strong className="font-semibold text-gray-900">1 check-in</strong> no seu concorrente no mês.
                  </p>
                </div>

                <div>
                  {/* Barra Dividida 3/4 e 1/4 */}
                  <div className="w-full h-12 rounded-xl overflow-hidden flex font-title font-bold text-xs sm:text-sm mb-4 shadow-xs border border-gray-100">
                    <div className="w-3/4 bg-gradient-green text-gray-950 flex items-center justify-center px-3">
                      <span>Você · 3/4</span>
                    </div>
                    <div className="w-1/4 bg-gray-100 text-gray-600 flex items-center justify-center px-2 text-xs">
                      <span>Outra · 1/4</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm font-title font-light text-gray-700">
                    Você fica com{' '}
                    <span className="font-title font-bold text-gym-orange text-lg sm:text-xl">
                      R$ {valor3_4Formatado}
                    </span>{' '}
                    · a outra, R$ {valor1_4Formatado}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-orange hover:opacity-95 text-white font-title font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Quero esse modelo na minha academia</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 4: O QUE MUDA NO SEU CAIXA & COMPARATIVO             */}
        {/* ========================================================== */}
        <section id="comparativo" className="py-16 sm:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Header da Seção */}
            <div className="text-center max-w-3xl mx-auto mb-12">
              

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
                Chega de receber <span className="text-gradient-orange">migalhas por check-in.</span>
              </h2>

              <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 leading-relaxed">
                Mesma ideia de trazer alunos das empresas. O que muda é o quanto sobra pra você, começando pelo repasse de cada check-in:
              </p>
            </div>

            {/* Card Comparativo dos Valores de Repasse */}
            <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-gray-200 shadow-xl shadow-gray-200/50 max-w-3xl mx-auto mb-16">
              {/* Linha 1: Outros agregadores */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-gray-100">
                <div className="sm:w-1/3">
                  <p className="font-title font-bold text-gray-900 text-base sm:text-lg">
                    Outros agregadores
                  </p>
                  <p className="text-xs font-title font-light text-gray-500">
                    valor fixo e baixo por visita
                  </p>
                </div>

                <div className="flex-1 px-0 sm:px-6">
                  <div className="w-8 h-3.5 bg-slate-200 rounded-full" />
                </div>

                <div className="text-left sm:text-right sm:w-1/3">
                  <p className="font-title font-bold text-gray-900 text-lg sm:text-xl">
                    ~ R$ 8*
                  </p>
                  <p className="text-xs font-title font-light text-gray-500">
                    por check-in
                  </p>
                </div>
              </div>

              {/* Linha 2: GymClub */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-6">
                <div className="sm:w-1/3">
                  <p className="font-title font-bold text-gray-900 text-base sm:text-lg">
                    GymClub
                  </p>
                  <p className="text-xs font-title font-light text-gray-500">
                    valor variável conforme plano do aluno
                  </p>
                </div>

                <div className="flex-1 px-0 sm:px-6">
                  <div className="w-full h-4 rounded-full bg-gradient-to-r from-[#ff883f] via-[#ffaa5b] to-[#f7e92a] shadow-xs" />
                </div>

                <div className="text-left sm:text-right sm:w-1/3">
                  <p className="font-title font-extrabold text-gym-orange text-xl sm:text-2xl">
                    R$ {valorRepasseFormatado}
                  </p>
                  <p className="text-[11px] sm:text-xs font-title font-semibold text-gym-orange">
                    em um único check-in no {selectedPlan.name}
                  </p>
                </div>
              </div>

              {/* Nota de rodapé ilustrativa */}
              <p className="text-[11px] sm:text-xs font-title font-light text-gray-400 mt-8 pt-4 border-t border-gray-100 text-center sm:text-left">
                *Valor ilustrativo do repasse por check-in nas redes tradicionais, que varia por rede e categoria. No GymClub o repasse acompanha o plano que o aluno paga.
              </p>
            </div>

            {/* Subtítulo: E a diferença não é só no seu bolso */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-title font-bold text-center text-gray-800 mb-8">
              E a diferença não é só no seu bolso: <span className="text-gradient-orange">veja o comparativo</span>
            </h3>

            {/* Tabela Comparativa em Estilo Clean & Solar */}
            <div className="max-w-4xl mx-auto rounded-[28px] overflow-hidden border border-gray-200/80 shadow-xl shadow-gray-200/40 bg-white">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[540px]">
                  <thead>
                    <tr className="bg-orange-50/70 border-b border-orange-100">
                      <th className="py-4 sm:py-5 px-6 font-title font-bold text-xs sm:text-sm text-gray-800 w-2/5">
                        Critério
                      </th>
                      <th className="py-4 sm:py-5 px-6 font-title font-extrabold text-xs sm:text-sm text-orange-950 w-1/3 bg-orange-50/90 border-x border-orange-200">
                        GymClub Benefícios
                      </th>
                      <th className="py-4 sm:py-5 px-6 font-title font-medium text-xs sm:text-sm text-gray-600 w-1/3">
                        Outros agregadores
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-title text-xs sm:text-sm">
                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Quem define o seu valor
                      </td>
                      <td className="py-4 px-6 font-bold text-gym-orange bg-orange-50/40 border-x border-orange-100/70">
                        Você escolhe o nível
                      </td>
                      <td className="py-4 px-6 font-light text-gray-600">
                        A plataforma decide por você
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Exclusividade exigida
                      </td>
                      <td className="py-4 px-6 font-bold text-gym-orange bg-orange-50/40 border-x border-orange-100/70">
                        Nenhuma
                      </td>
                      <td className="py-4 px-6 font-light text-gray-600">
                        Frequentemente exigida
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Custo para entrar
                      </td>
                      <td className="py-4 px-6 font-bold text-gym-orange bg-orange-50/40 border-x border-orange-100/70">
                        R$ 0
                      </td>
                      <td className="py-4 px-6 font-light text-gray-600">
                        R$ 0, mas você recebe menos
                      </td>
                    </tr>

                    <tr className="hover:bg-gray-50/50 transition-colors">
                      <td className="py-4 px-6 font-semibold text-gray-900">
                        Alto repasse
                      </td>
                      <td className="py-4 px-6 font-bold text-gym-orange bg-orange-50/40 border-x border-orange-100/70">
                        Depende da fidelidade do aluno
                      </td>
                      <td className="py-4 px-6 font-light text-gray-600">
                        Depende da frequência do aluno
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 5: COMO FUNCIONA (3 PASSOS NO ESTILO GYMCLUB)        */}
        {/* ========================================================== */}
        <section id="como-funciona" className="py-16 sm:py-24 bg-[#fafafa]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Eyebrow */}
          

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-title font-extrabold text-gray-900 tracking-tight mb-4">
              Da inscrição ao primeiro repasse <span className="text-gradient-orange">em 3 passos</span>
            </h2>

            {/* Subhead */}
            <p className="text-sm sm:text-base lg:text-lg font-title font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mb-14">
              Sem burocracia, sem taxa de adesão e sem mudar nada na rotina da sua recepção.
            </p>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 text-left">
              {/* Passo 1 */}
              <div className="bg-gradient-to-b from-white to-amber-50/40 rounded-[32px] p-8 border-2 border-amber-200/80 shadow-xl shadow-amber-500/5 hover:shadow-2xl hover:border-amber-300 transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-gradient-yellow-orange text-gray-950 flex items-center justify-center font-title font-black text-2xl mb-6 shadow-md">
                  1
                </div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-3">
                  Cadastre sua academia
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Preencha os dados da empresa e das suas unidades em minutos. Nosso time valida e publica seu perfil na rede com agilidade.
                </p>
              </div>

              {/* Passo 2 */}
              <div className="bg-gradient-to-b from-white to-orange-50/40 rounded-[32px] p-8 border-2 border-orange-200/80 shadow-xl shadow-orange-500/5 hover:shadow-2xl hover:border-orange-300 transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-gradient-orange text-white flex items-center justify-center font-title font-black text-2xl mb-6 shadow-md">
                  2
                </div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-3">
                  Receba alunos
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Milhares de colaboradores com benefício GymClub encontram sua academia pelo app e realizam check-in instantâneo na recepção.
                </p>
              </div>

              {/* Passo 3 */}
              <div className="bg-gradient-to-b from-white to-emerald-50/40 rounded-[32px] p-8 border-2 border-emerald-200/80 shadow-xl shadow-emerald-500/5 hover:shadow-2xl hover:border-emerald-300 transition-all hover:-translate-y-1 relative overflow-hidden">
                <div className="w-14 h-14 rounded-2xl bg-gradient-green text-gray-950 flex items-center justify-center font-title font-black text-2xl mb-6 shadow-md">
                  3
                </div>
                <h3 className="text-xl font-title font-bold text-gray-900 mb-3">
                  Receba um valor justo
                </h3>
                <p className="text-sm font-title font-light text-gray-600 leading-relaxed">
                  Você acompanha tudo pelo painel e recebe mensalmente, com repasse garantido de até 85%. Simples, transparente e pontual.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-orange hover:opacity-95 text-white font-title font-bold text-sm sm:text-base shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Começar meu cadastro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </section>

        {/* ========================================================== */}
        {/* SEÇÃO 7: BANNER FINAL OFICIAL GYMCLUB                      */}
        {/* Inspirado nas cores e formas da ContactSection / LPEmpresas */}
        {/* ========================================================== */}
        <section className="py-20 sm:py-28 relative overflow-hidden bg-white">
          {/* Luzes de ambientação com as cores da marca (Laranja e Amarelo) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-gym-orange/20 to-gym-yellow/20 blur-[120px] pointer-events-none rounded-full" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-title font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
              Sua concorrente pode estar
              <span className="text-gradient-orange"> se cadastrando agora.</span>
            </h2>

            {/* Subhead */}
            <p className="text-sm sm:text-lg font-title font-light text-gray-600 max-w-2xl mx-auto leading-relaxed mb-10">
              Entre no GymClub hoje, comece a receber alunos das empresas e transforme cada check-in em faturamento garantido.
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <button
                onClick={openModal}
                className="w-full sm:w-auto bg-black hover:bg-gray-800 text-white font-title font-bold px-8 sm:px-12 py-4 sm:py-5 rounded-full text-sm sm:text-base transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2.5 cursor-pointer shadow-xl"
              >
                <span>Cadastrar minha academia grátis</span>
                <ArrowRight className="w-4 h-4 text-gym-orange" />
              </button>
            </div>

            {/* Trust checkmarks */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-title font-medium text-gray-600">
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                </span>
                4 minutos
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                </span>
                Sem cartão de crédito
              </span>
              <span className="text-gray-300">·</span>
              <span className="flex items-center gap-1.5">
                <span className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
                  <Check className="w-3 h-3 text-gym-orange" strokeWidth={3} />
                </span>
                Cancela quando quiser
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
                Tudo que você precisa saber <span className="text-gradient-orange">para se cadastrar</span>
              </h2>
            </div>

            <div className="bg-[#f4f4f4] rounded-3xl sm:rounded-[40px] p-3 sm:p-4 md:p-8 border border-gray-200/50">
              <div className="space-y-3 sm:space-y-4">
                {FAQ_ITEMS.map((item, index) => {
                  const isOpen = openFaqIndex === index;
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFaq(index)}
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

      {/* Footer Oficial GymClub */}
      <Footer
        onSelectSection={(id) => {
          if (id === 'cadastro' || id === 'formulario' || id === 'parceiro') {
            openModal();
          } else {
            const el = document.getElementById(id);
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }
        }}
      />

      {/* ========================================================== */}
      {/* MODAL DE CADASTRO OFICIAL (Alinhado à imagem 3)             */}
      {/* ========================================================== */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
            {/* Backdrop escuro com blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            />

            {/* Card Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-xl bg-white rounded-3xl sm:rounded-[32px] shadow-2xl p-6 sm:p-8 z-10 my-auto text-left border border-gray-100"
            >
              {/* Botão de Fechar no topo direito */}
              <button
                onClick={closeModal}
                aria-label="Fechar modal"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {!enviadoComSucesso ? (
                <>
                  {/* Topo do Header: Tag Passo X · CADASTRO RÁPIDO */}
                  <div className="mb-1">
                    <span className="text-[11px] sm:text-xs font-title font-bold text-gym-orange uppercase tracking-wider">
                      PASSO {etapa} · CADASTRO RÁPIDO
                    </span>
                  </div>

                  {/* Título Principal */}
                  <h2 className="text-xl sm:text-2xl font-title font-extrabold text-gray-900 tracking-tight mb-3">
                    Coloque sua academia <span className="text-gradient-orange">na rede</span>
                  </h2>

                  {/* Barra de Progresso Verde GymClub */}
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden mb-2">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#c2f463] to-emerald-400 rounded-full transition-all duration-300"
                      style={{ width: `${porcentagemConcluida}%` }}
                    />
                  </div>

                  {/* Indicador Numérico de Progresso */}
                  <div className="flex items-center justify-between text-xs font-title mb-6">
                    <span className="text-gray-700">
                      Passo <strong className="text-gym-orange font-bold">{etapa}</strong> de 7
                    </span>
                    <span className="text-gray-500 font-medium">
                      {porcentagemConcluida}% concluído
                    </span>
                  </div>

                  {/* Formulário Interativo por Etapas */}
                  <div>
                    {/* ETAPA 1: CONTATO INICIAL (Idêntico ao print 3) */}
                    {etapa === 1 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Vamos começar por você
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Seus dados de contato.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Nome Completo <span className="text-gym-orange">*</span>
                            </label>
                            <input
                              type="text"
                              value={nomeResponsavel}
                              onChange={(e) => setNomeResponsavel(e.target.value)}
                              placeholder="Seu nome"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400 placeholder:font-light"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Telefone Pessoal <span className="text-gym-orange">*</span>
                            </label>
                            <input
                              type="tel"
                              value={telefone}
                              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
                              placeholder="(00) 00000-0000"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400 placeholder:font-light"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              E-mail <span className="text-gym-orange">*</span>
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="voce@email.com"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400 placeholder:font-light"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Nome da Academia ou Rede <span className="text-gym-orange">*</span>
                            </label>
                            <input
                              type="text"
                              value={nomeAcademia}
                              onChange={(e) => setNomeAcademia(e.target.value)}
                              placeholder="Ex: Academia Iron Fit"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400 placeholder:font-light"
                            />
                          </div>
                        </div>

                        {/* Box verde claro com o plano escolhido */}
                        <div className="rounded-2xl p-3.5 sm:p-4 bg-[#f4fde8] border border-[#d8f5b8] text-xs sm:text-sm font-title text-gray-800 flex items-center justify-between">
                          <span>
                            Plano escolhido:{' '}
                            <strong className="text-gray-950 font-bold">
                              {selectedPlan.name} · {selectedPlan.priceFormatted}
                            </strong>
                          </span>
                          <span className="text-[11px] text-gym-orange font-bold uppercase">
                            Até R$ {valorRepasseFormatado}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* ETAPA 2: DADOS DA EMPRESA */}
                    {etapa === 2 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Dados da empresa
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Informações cadastrais para faturamento e repasse.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              CNPJ da Academia
                            </label>
                            <input
                              type="text"
                              value={cnpj}
                              onChange={(e) => setCnpj(formatarCnpj(e.target.value))}
                              placeholder="00.000.000/0000-00"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400"
                            />
                          </div>

                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Razão Social / Nome Fantasia
                            </label>
                            <input
                              type="text"
                              value={razaoSocial}
                              onChange={(e) => setRazaoSocial(e.target.value)}
                              placeholder="Razão Social"
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-2">
                            Quantas unidades sua academia possui?
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {['1', '2 a 5', '6 a 15', '+ de 15'].map((qtd) => (
                              <button
                                type="button"
                                key={qtd}
                                onClick={() => setNumUnidades(qtd)}
                                className={`py-2.5 px-3 rounded-xl text-xs font-title font-semibold transition-all cursor-pointer border ${
                                  numUnidades === qtd
                                    ? 'bg-gym-orange text-white border-gym-orange shadow-xs'
                                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                                }`}
                              >
                                {qtd} {qtd === '1' ? 'unidade' : 'unidades'}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* ETAPA 3: LOCALIZAÇÃO */}
                    {etapa === 3 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Onde fica sua academia?
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Para que os alunos das empresas da sua região encontrem você no app.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Estado (UF) <span className="text-gym-orange">*</span>
                            </label>
                            <select
                              value={uf}
                              onChange={(e) => setUf(e.target.value)}
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all bg-white"
                            >
                              <option value="">Selecione o estado</option>
                              {UFS.map((item) => (
                                <option key={item.sigla} value={item.sigla}>
                                  {item.nome} ({item.sigla})
                                </option>
                              ))}
                            </select>
                          </div>

                          <div>
                            <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                              Cidade <span className="text-gym-orange">*</span>
                            </label>
                            <select
                              value={cidade}
                              onChange={(e) => setCidade(e.target.value)}
                              disabled={!uf || carregandoCidades}
                              className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                            >
                              <option value="">
                                {!uf
                                  ? 'Escolha primeiro o estado'
                                  : carregandoCidades
                                  ? 'Carregando cidades...'
                                  : 'Selecione a cidade'}
                              </option>
                              {cidades.map((cid) => (
                                <option key={cid} value={cid}>
                                  {cid}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[11px] font-title font-bold text-gray-700 uppercase tracking-wider mb-1">
                            Bairro ou Região da Unidade
                          </label>
                          <input
                            type="text"
                            value={bairro}
                            onChange={(e) => setBairro(e.target.value)}
                            placeholder="Ex: Centro, Jardins, Boa Viagem..."
                            className="w-full px-3.5 py-3 rounded-xl border border-gray-200 text-sm font-title focus:outline-none focus:border-gym-orange focus:ring-1 focus:ring-gym-orange transition-all placeholder:text-gray-400"
                          />
                        </div>
                      </div>
                    )}

                    {/* ETAPA 4: MODALIDADES */}
                    {etapa === 4 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Modalidades oferecidas
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Selecione as atividades disponíveis no seu espaço.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {[
                            'Musculação',
                            'Funcional',
                            'Crossfit',
                            'Natação',
                            'Pilates',
                            'Lutas / Artes Marciais',
                            'Dança / Ritmos',
                            'Yoga',
                            'Spinning',
                            'Ginástica',
                            'Outras',
                          ].map((item) => {
                            const isChecked = modalidades.includes(item);
                            return (
                              <button
                                type="button"
                                key={item}
                                onClick={() => toggleModalidade(item)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-title font-medium transition-all cursor-pointer border ${
                                  isChecked
                                    ? 'bg-gym-orange text-white border-gym-orange shadow-xs'
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                }`}
                              >
                                {isChecked ? '✓ ' : '+ '} {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ETAPA 5: COMODIDADES */}
                    {etapa === 5 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Estrutura e comodidades
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Destaques que aumentam a preferência dos alunos pelo seu espaço.
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2 pt-2">
                          {[
                            'Estacionamento',
                            'Vestiário com chuveiro',
                            'Ar-condicionado',
                            'Armários rotativos',
                            'Acessibilidade PCD',
                            'Wi-Fi liberado',
                            'Lanchonete / Suplementos',
                          ].map((item) => {
                            const isChecked = comodidades.includes(item);
                            return (
                              <button
                                type="button"
                                key={item}
                                onClick={() => toggleComodidade(item)}
                                className={`px-3.5 py-2 rounded-xl text-xs font-title font-medium transition-all cursor-pointer border ${
                                  isChecked
                                    ? 'bg-gym-orange text-white border-gym-orange shadow-xs'
                                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100'
                                }`}
                              >
                                {isChecked ? '✓ ' : '+ '} {item}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* ETAPA 6: FAIXA DE MENSALIDADE DE BALCÃO */}
                    {etapa === 6 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Faixa de mensalidade de balcão
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Qual a média da sua mensalidade particular hoje? Isso ajuda a posicionar sua academia no plano correto.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                          {[
                            'Até R$ 99/mês',
                            'R$ 100 a R$ 179/mês',
                            'R$ 180 a R$ 279/mês',
                            'Acima de R$ 280/mês',
                          ].map((faixa) => (
                            <button
                              type="button"
                              key={faixa}
                              onClick={() => setFaixaMensalidade(faixa)}
                              className={`p-4 rounded-2xl border text-left font-title transition-all cursor-pointer ${
                                faixaMensalidade === faixa
                                  ? 'bg-orange-50 border-gym-orange shadow-xs ring-2 ring-gym-orange/30'
                                  : 'bg-white border-gray-200 hover:bg-gray-50'
                              }`}
                            >
                              <p className="text-sm font-bold text-gray-900">{faixa}</p>
                              <p className="text-xs text-gray-500 font-light mt-0.5">
                                Mensalidade particular
                              </p>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* ETAPA 7: REVISÃO E CONCLUSÃO */}
                    {etapa === 7 && (
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-lg font-title font-bold text-gray-900">
                            Quase tudo pronto!
                          </h3>
                          <p className="text-xs sm:text-sm font-title font-light text-gray-500">
                            Confirme suas informações para entrar na rede GymClub.
                          </p>
                        </div>

                        <div className="rounded-2xl bg-gray-50 border border-gray-200 p-4 space-y-2 text-xs sm:text-sm font-title text-gray-700">
                          <p>
                            <span className="text-gray-500">Academia:</span>{' '}
                            <strong className="text-gray-900">{nomeAcademia || 'Não informado'}</strong>
                          </p>
                          <p>
                            <span className="text-gray-500">Responsável:</span>{' '}
                            <strong className="text-gray-900">{nomeResponsavel}</strong>
                          </p>
                          <p>
                            <span className="text-gray-500">Telefone:</span>{' '}
                            <strong className="text-gray-900">{telefone}</strong>
                          </p>
                          <p>
                            <span className="text-gray-500">E-mail:</span>{' '}
                            <strong className="text-gray-900">{email}</strong>
                          </p>
                          <p>
                            <span className="text-gray-500">Local:</span>{' '}
                            <strong className="text-gray-900">
                              {cidade ? `${cidade}/${uf}` : 'Não informado'}
                            </strong>
                          </p>
                          <p>
                            <span className="text-gray-500">Plano de Referência:</span>{' '}
                            <strong className="text-gym-orange">
                              {selectedPlan.name} · {selectedPlan.priceFormatted}
                            </strong>
                          </p>
                        </div>

                        <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start gap-2.5 text-xs font-title text-emerald-900">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>
                            Sem taxas de adesão, sem exclusividade e com repasse sustentável de até 85%.
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Mensagem de Erro da Etapa se houver */}
                    {erroEtapa && (
                      <p className="text-xs font-title font-medium text-red-500 mt-3">
                        {erroEtapa}
                      </p>
                    )}
                  </div>

                  {/* Ações do Rodapé (Alinhado à imagem 3) */}
                  <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-100">
                    <button
                      type="button"
                      onClick={handlePrevEtapa}
                      disabled={etapa === 1}
                      className={`px-6 py-3.5 rounded-full border text-xs sm:text-sm font-title font-bold transition-all cursor-pointer ${
                        etapa === 1
                          ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                          : 'border-gray-200 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      Voltar
                    </button>

                    <button
                      type="button"
                      onClick={handleNextEtapa}
                      disabled={enviando}
                      className="flex-1 bg-gradient-orange hover:opacity-95 text-white py-3.5 px-6 rounded-full font-title font-bold text-xs sm:text-sm transition-all hover:shadow-lg hover:shadow-orange-500/25 flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      {enviando ? (
                        <span>Enviando...</span>
                      ) : etapa === 7 ? (
                        <>
                          <span>Finalizar cadastro</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          <span>Continuar</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Selos de Confiança no rodapé do modal */}
                  <div className="flex items-center justify-center gap-2 text-[11px] font-title font-light text-gray-500 text-center mt-4">
                    <Check className="w-3.5 h-3.5 text-gym-orange" strokeWidth={3} />
                    <span>Dados protegidos · Cadastro sem compromisso · R$ 0 para começar</span>
                  </div>
                </>
              ) : (
                /* TELA DE SUCESSO APÓS ENVIO */
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-8 h-8" strokeWidth={3} />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-title font-extrabold text-gray-900">
                    Cadastro enviado com sucesso!
                  </h3>

                  <p className="text-xs sm:text-sm font-title font-light text-gray-600 max-w-md mx-auto leading-relaxed">
                    Parabéns, <strong>{nomeResponsavel}</strong>! Recebemos os dados da <strong>{nomeAcademia}</strong>. Nosso time de credenciamento entrará em contato para concluir a ativação da sua unidade.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Acabei%20de%20cadastrar%20minha%20academia%20no%20GymClub%20e%20gostaria%20de%20agilizar%20meu%20credenciamento."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-title font-bold text-xs sm:text-sm transition-all shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Falar agora no WhatsApp
                    </a>

                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-6 py-3 rounded-full border border-gray-200 hover:bg-gray-100 text-gray-700 font-title font-bold text-xs sm:text-sm transition-all cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

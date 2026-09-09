import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowRight,
  Briefcase,
  Building2,
  CheckCircle2,
  Dumbbell,
  LayoutDashboard,
  MapPin,
  Menu,
  MessageCircle,
  Minus,
  PiggyBank,
  Plus,
  ShieldCheck,
  Star,
  Target,
  TrendingUp,
  Users,
  X,
  Zap,
} from 'lucide-react';
import { motion } from 'motion/react';
import { AnimatePresence, motion as fmMotion } from 'framer-motion';
 
import bgEmpresa from '../assets/fundo-empresas.png';
import bgPraQuem from '../assets/bg-praquem.png';
import { EmpresasCalculator } from '../components/EmpresasCalculator';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

const navLinks = [
  { href: '#vantagens', label: 'Vantagens' },
  { href: '#empresas', label: 'Empresas' },
  { href: '#como-funciona', label: 'Como Funciona' },
  { href: '#calculadora', label: 'Calculadora' },
];

/* ------------------------------------------------------------------ */
/* Vantagens                                                           */
/* ------------------------------------------------------------------ */

const features = [
  {
    icon: <PiggyBank className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-yellow-orange",
    title: 'Pague só pelo que usar',
    description: 'Sem taxas fixas sobre quem não usa. A empresa paga apenas a coparticipação pelos colaboradores ativos.',
  },
  {
    icon: <Zap className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-orange",
    title: 'Alto valor percebido',
    description: 'O valor investido pela empresa vira desconto direto na mensalidade, ajudando de verdade no bolso do colaborador.',
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-green",
    title: 'Gestão Simplificada',
    description: 'Implementar um benefício de saúde não precisa ser dor de cabeça. Plataforma fácil para o RH administrar.',
  },
  {
    icon: <Users className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-yellow-orange",
    title: 'Para empresas de todo tamanho',
    description: 'Sem exigência de quantidade mínima. Escale o benefício conforme o crescimento e a adesão do seu time.',
  },
  {
    icon: <Activity className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-orange",
    title: 'Mais saúde e engajamento',
    description: 'Incentive a qualidade de vida com impacto positivo na produtividade e no clima organizacional.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-gray-900" />,
    iconBg: "bg-gradient-green",
    title: 'Coparticipação Flexível',
    description: 'Você decide com quanto quer contribuir. O formato gera maior percepção de benefício.',
  },
];

/* ------------------------------------------------------------------ */
/* Como funciona                                                       */
/* ------------------------------------------------------------------ */

const steps = [
  {
    num: '1',
    bg: 'bg-gradient-yellow-orange',
    title: 'Preencha o formulário',
    desc: 'Leva menos de 3 minutos para iniciar a parceria.',
  },
  {
    num: '2',
    bg: 'bg-gradient-orange',
    title: 'Onboarding Rápido',
    desc: 'Receba a confirmação e faça a ativação com nossa equipe.',
  },
  {
    num: '3',
    bg: 'bg-gradient-green',
    title: 'Benefício Liberado',
    desc: 'Disponibilize a plataforma para seus colaboradores treinarem.',
  },
];


/* ------------------------------------------------------------------ */
/* Depoimentos                                                         */
/* ------------------------------------------------------------------ */

type Review = {
  name: string;
  initials: string;
  avatarBg: string;
  body: string;
};

const reviews: Review[] = [
  {
    name: 'Mariana Alves',
    initials: 'MA',
    avatarBg: 'bg-gradient-orange',
    body: 'A gente pagava por 180 colaboradores e menos de 50 usavam. No primeiro mês com o GymClub a conta caiu pela metade, sem tirar o benefício de ninguém.',
  },
  {
    name: 'Rafael Bittencourt',
    initials: 'RB',
    avatarBg: 'bg-gradient-green',
    body: 'O time é todo remoto, espalhado por cinco estados. Era impossível fechar com uma rede só. Aqui cada um treina perto de casa e eu não administro nada.',
  },
  {
    name: 'Carolina Dias',
    initials: 'CD',
    avatarBg: 'bg-gradient-yellow',
    body: 'O onboarding levou uma tarde. Mandei a planilha, no dia seguinte estava liberado. Nunca tinha implantado um benefício sem reunião de alinhamento.',
  },
  {
    name: 'Thiago Nakamura',
    initials: 'TN',
    avatarBg: 'bg-gradient-teal',
    body: 'O que me convenceu foi previsibilidade: eu defino o teto da coparticipação e pago só o uso real. O caixa parou de levar susto todo fechamento.',
  },
  {
    name: 'Juliana Prado',
    initials: 'JP',
    avatarBg: 'bg-gradient-orange-yellow',
    body: 'Somos 14 pessoas e todo fornecedor exigia mínimo de 50 vidas. O GymClub foi o único que topou começar do nosso tamanho.',
  },
  {
    name: 'Eduardo Ramos',
    initials: 'ER',
    avatarBg: 'bg-gradient-yellow-green',
    body: 'A adesão saiu de 12% para 47% em três meses. Como o desconto aparece direto na mensalidade, o pessoal entendeu o valor na hora.',
  },
];

/* ------------------------------------------------------------------ */
/* Formulário de cadastro                                              */
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

const campoBase =
  'w-full bg-gray-100 border border-transparent focus:bg-white focus:border-gray-300 focus:ring-2 focus:ring-gym-orange rounded-2xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-title font-light outline-none transition-all placeholder:text-gray-400';

const campoErro =
  'border-red-400 bg-red-50 focus:border-red-400 focus:ring-red-300';

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    question: "Como funciona o Gymclub para empresas?",
    answer: "A empresa disponibiliza o acesso à plataforma para seus colaboradores, que passam a ter a liberdade de treinar em diferentes academias, de acordo com o plano escolhido. O uso é simples e não exige uma estrutura complexa de gestão por parte da empresa."
  },
  {
    question: "A empresa precisa pagar pelo benefício?",
    answer: "A empresa não paga nenhuma taxa por colaborador cadastrado. É possível realizar o pagamento de um valor por colaborador para se tornar desconto na mensalidade. Como funciona, caso a empresa pague R$10,00 por colaborador, esse valor é revertido em desconto no plano. Se seu colaborador contratar um plano de R$110,00, ele irá sair por R$100,00. Esse formato gera maior percepção do benefício pelos colaboradores, já que a contribuição da empresa impacta diretamente no acesso ao plano. Diferente de outros formatos em que o valor pago serve apenas para liberar o uso do aplicativo, aqui a empresa participa ativamente do benefício, tornando-o mais tangível e relevante para o colaborador."
  },
  {
    question: "Quais as vantagens para a empresa?",
    answer: "O Gymclub permite oferecer um benefício de bem-estar de forma simples e flexível, sem a necessidade de gerenciar contratos complexos ou múltiplos fornecedores. Além disso, contribui para a qualidade de vida dos colaboradores, com impacto positivo em engajamento, produtividade e clima organizacional."
  },
  {
    question: "Para quais empresas o Gymclub é mais indicado?",
    answer: "O Gymclub é ideal para empresas que buscam oferecer um benefício moderno e flexível, especialmente aquelas com equipes híbridas, colaboradores em diferentes regiões ou com rotinas variadas. Também é uma ótima opção para empresas que ainda não possuem um benefício estruturado de bem-estar e querem começar de forma simples."
  },
  {
    question: "O Gymclub substitui outros benefícios?",
    answer: "O Gymclub pode atuar como benefício principal de bem-estar ou complementar outros já existentes. Ele se adapta à estratégia da empresa, podendo ser utilizado como ferramenta de atração, retenção e engajamento de colaboradores."
  },
  {
    question: "Existe uma quantidade mínima de colaboradores para aderir ao Gymclub?",
    answer: "Não. O Gymclub não exige uma quantidade mínima de colaboradores para contratação. Empresas de diferentes portes podem aderir à plataforma, desde equipes menores até estruturas maiores, com a possibilidade de escalar o benefício conforme o crescimento e a adesão dos colaboradores."
  }
];

/* ================================================================== */
/* Página                                                              */
/* ================================================================== */

export default function LPEmpresas() {
  /* ---------------- Header ---------------- */
  const [menuOpen, setMenuOpen] = useState(false);


  /* ---------------- Call to action ---------------- */
  const floatingIcons = [
    { icon: <ShieldCheck className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-green', position: 'top-[10%] left-[10%] md:left-[15%]', animation: 'animate-float-slow' },
    { icon: <Dumbbell className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-orange', position: 'bottom-[15%] left-[5%] md:left-[20%]', animation: 'animate-float-reverse' },
    { icon: <Users className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-teal', position: 'top-[15%] right-[10%] md:right-[15%]', animation: 'animate-float' },
    { icon: <TrendingUp className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-yellow-orange', position: 'bottom-[20%] right-[5%] md:right-[20%]', animation: 'animate-float-slow' },
    { icon: <PiggyBank className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-yellow-green', position: 'top-1/2 -translate-y-1/2 left-[2%] md:left-[8%]', animation: 'animate-float-reverse' },
    { icon: <Zap className="w-8 h-8 text-gray-900" />, color: 'bg-gradient-orange-yellow', position: 'top-1/2 -translate-y-1/2 right-[2%] md:right-[8%]', animation: 'animate-float' },
  ];

  /* ---------------- Formulário de cadastro ---------------- */
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  const [tocado, setTocado] = useState<Record<string, boolean>>({});

  const [tentouEnviar, setTentouEnviar] = useState(false);

  const marcar = (campo: string) =>
    setTocado((t) => ({ ...t, [campo]: true }));

  const [cidades, setCidades] = useState<string[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [falhouIbge, setFalhouIbge] = useState(false);

  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erroEnvio, setErroEnvio] = useState(false);

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setTelefone('');
    setEmpresa('');
    setCnpj('');
    setUf('');
    setCidade('');
    setTocado({});
    setTentouEnviar(false);
  };

  useEffect(() => {
    if (!uf) {
      setCidades([]);
      setFalhouIbge(false);
      return;
    }

    let cancelado = false;
    const ctrl = new AbortController();

    setCarregando(true);
    setFalhouIbge(false);

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios?orderBy=nome`,
      { signal: ctrl.signal }
    )
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then((dados: { nome: string }[]) => {
        if (cancelado) return;

        setCidades(dados.map((m) => m.nome));
        setCarregando(false);
      })
      .catch(() => {
        if (cancelado) return;

        setFalhouIbge(true);
        setCarregando(false);
      });

    return () => {
      cancelado = true;
      ctrl.abort();
    };
  }, [uf]);

  /* Todos os campos são obrigatórios: a mensagem de "faltando" vem primeiro,
     e só depois a de formato inválido. */
  const erros: Record<string, string> = {
    nome: !nome.trim()
      ? 'Informe seu nome completo.'
      : '',

    email: !email.trim()
      ? 'Informe seu email.'
      : !emailValido(email)
        ? 'Digite um email válido.'
        : '',

    telefone: !telefone.trim()
      ? 'Informe seu celular com DDD.'
      : telefone.replace(/\D/g, '').length < 10
        ? 'Informe o DDD e o número completo.'
        : '',

    empresa: !empresa.trim()
      ? 'Informe o nome da empresa.'
      : '',

    uf: !uf
      ? 'Selecione o estado.'
      : '',

    cidade: !cidade.trim()
      ? 'Informe a cidade.'
      : '',

    cnpj: !cnpj.trim()
      ? 'Informe o CNPJ.'
      : !cnpjValido(cnpj)
        ? 'CNPJ inválido — confira os números.'
        : '',
  };

  const formularioInvalido = Object.values(erros).some(Boolean);

  /* O erro só aparece depois que a pessoa saiu do campo ou tentou enviar —
     assim ninguém vê tudo vermelho antes de começar a preencher. */
  const mostrarErro = (campo: string) =>
    (tocado[campo] || tentouEnviar) && erros[campo] ? erros[campo] : '';

  const erroNome = mostrarErro('nome');
  const erroEmail = mostrarErro('email');
  const erroTelefone = mostrarErro('telefone');
  const erroEmpresa = mostrarErro('empresa');
  const erroUf = mostrarErro('uf');
  const erroCidade = mostrarErro('cidade');
  const erroCnpj = mostrarErro('cnpj');

  const mensagemErro = (texto: string) =>
    texto ? (
      <p className="text-xs font-title font-light text-red-500 mt-1.5 ml-1">
        {texto}
      </p>
    ) : null;

  /* ---------------- FAQ ---------------- */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header / Navbar Oficial GymClub */}
      <Navbar />

      <main className="flex-1">

        {/* ========================================================== */}
        {/* Hero                                                        */}
        {/* ========================================================== */}
        <section id="inicio" className="relative flex flex-col justify-center min-h-[min(calc(100svh-var(--nav-h)),880px)] pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden bg-gym-orange">
          {/* Fundo da marca */}
          <div
            className="absolute inset-0 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url(${bgEmpresa})` }}
            aria-hidden="true"
          />

          <div className="w-full max-w-[950px] mt-6 sm:mt-12 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <h1 className="text-[26px] sm:text-5xl md:text-7xl font-title font-extrabold text-white tracking-tight leading-tight mb-8 sm:mb-12">
                O  benefício que <br />
                <span className="text-gym-orange">não cobra</span> por quem não usa.
              </h1>

              <p className="text-sm sm:text-xl font-title font-normal text-gray-800 max-w-3xl mx-auto mb-10 sm:mb-12 leading-relaxed">
               Implemente uma cultura de saúde sem pagar por colaboradores inativos. No GymClub, sua empresa só paga a coparticipação dos colaboradores que realmente treinam.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#calculadora" className="w-full sm:w-auto bg-gradient-green hover:opacity-90 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-base font-title font-bold transition-all hover:shadow-xl hover:shadow-gym-green/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Simular Economia
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#cadastro" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-base font-title font-bold transition-all hover:border-gray-300">
                  Quero cadastrar minha empresa
                </a>
              </div>

              <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-4 text-sm font-title font-light text-gray-900">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-yellow-orange flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-gray-900" />
                  </div>
                  Taxa zero por cadastro
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-orange flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-gray-900" />
                  </div>
                  Onboarding em 3 minutos
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-gradient-green flex items-center justify-center">
                    <CheckCircle2 className="w-3 h-3 text-gray-900" />
                  </div>
                  Coparticipação flexível
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* Vantagens                                                   */}
        {/* ========================================================== */}
        <section id="vantagens" className="py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 mb-6">
                Diferente de tudo que você já viu no mercado
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600">
                Enquanto outros aplicativos cobram uma taxa fixa por colaborador cadastrado apenas para liberar o acesso, no GymClub a sua empresa participa ativamente do benefício.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-gray-100/50"
                >
                  <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-6 shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-[13px] sm:text-base font-title font-light text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* Para quais empresas                                         */}
        {/* ========================================================== */}
        <section id="empresas" className="relative overflow-hidden py-16 sm:py-24">
          {/* imagem de fundo desfocada */}
          <div
            className="absolute -inset-10 bg-cover bg-center blur-[0.05px]"
            style={{ backgroundImage: `url(${bgPraQuem})` }}
            aria-hidden="true"
          />
          {/* véu laranja translúcido para garantir a leitura do texto */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,136,63,0.26), rgba(255,172,63,0.14)), rgba(255,255,255,0.84)',
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-10 sm:gap-16 items-center">

              <div className="lg:w-1/2">
                <h2 className="text-xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 mb-6">
                  O GymClub é para quais empresas?
                </h2>
                <p className="text-sm sm:text-lg font-title font-normal text-gray-800 mb-8 leading-relaxed">
                  O Gymclub é ideal para empresas que buscam oferecer um benefício moderno e flexível, especialmente aquelas com:
                </p>

                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-orange rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="text-gray-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-lg">Equipes Híbridas ou Remotas</h4>
                      <p className="text-[13px] sm:text-base font-title font-light text-gray-800 mt-1">Colaboradores em diferentes regiões com rotinas variadas, que precisam de liberdade para treinar onde quiserem.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-yellow rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Briefcase className="text-gray-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-lg">Iniciando na Saúde Corporativa</h4>
                      <p className="text-[13px] sm:text-base font-title font-light text-gray-800 mt-1">Ótima opção para empresas que ainda não possuem um benefício estruturado de bem-estar e querem começar de forma simples.</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-green rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                      <Target className="text-gray-900 w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm sm:text-lg">Foco em Crescimento</h4>
                      <p className="text-[13px] sm:text-base font-title font-light text-gray-800 mt-1">Escalável para acompanhar o crescimento da sua empresa, desde equipes menores até estruturas maiores, sem burocracia.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="lg:w-1/2 w-full">
                <div className="relative">
                  <div className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 opacity-30 blur-xl" />
                  <div className="bg-white p-6 sm:p-8 md:p-12 rounded-[40px] border border-gray-100 relative shadow-2xl shadow-gray-200/50 backdrop-blur-sm">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gym-orange rounded-full flex items-center justify-center mb-6 shadow-lg shadow-orange-500/30">
                        <span className="text-4xl sm:text-5xl leading-none text-white font-sans font-extrabold">0</span>
                      </div>
                      <h3 className="text-base sm:text-2xl font-bold text-gray-900 mb-4">Quantidade Mínima</h3>
                      <p className="font-title font-light text-black text-sm sm:text-lg">
                        Diferente do mercado tradicional, não exigimos um número mínimo de colaboradores para contratação.
                      </p>
                      <a href="#cadastro" className="mt-8 inline-block bg-gradient-green hover:opacity-90 text-gray-900 px-6 sm:px-8 py-3 rounded-full text-[13px] sm:text-base font-title font-bold transition-all hover:shadow-lg hover:shadow-gym-green/20">
                        Quero cadastrar minha empresa
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* Como funciona                                               */}
        {/* ========================================================== */}
        <section id="como-funciona" className="py-16 sm:py-24 text-gray-900 relative overflow-x-clip">
          {/* glow que atravessa para a section de baixo, sem corte na borda */}
          <div className="absolute top-0 right-0 w-[800px] h-[1300px] bg-gradient-yellow-orange opacity-10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">

              <h2 className="text-xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 mb-6">
                Rápido e sem burocracia
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600">
                Esqueça implementações que demoram meses. Com o GymClub, sua equipe tem acesso ao benefício em poucos dias.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50 hover:border-gray-200 transition-all"
                >

                  <div className={`w-12 h-12 ${step.bg} rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10 text-gray-900 shadow-sm`}>
                    {step.num}
                  </div>
                  <h3 className="text-base sm:text-xl font-bold mb-3 relative z-10 text-gray-900">{step.title}</h3>
                  <p className="text-[13px] sm:text-base font-title font-light text-gray-600 relative z-10">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* Calculadora                                                 */}
        {/* ========================================================== */}
        <EmpresasCalculator />

        {/* ========================================================== */}
        {/* Call to action                                              */}
        {/* ========================================================== */}
        <section className="py-20 sm:py-32 relative overflow-hidden">

          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-yellow-orange opacity-10 blur-[100px] pointer-events-none rounded-full" />

          {/* Floating Icons Background */}
          <div className="absolute inset-0 z-0 hidden sm:block pointer-events-none">
            {floatingIcons.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.position} ${item.color} ${item.animation} w-20 h-20 rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.08)]`}
              >
                {item.icon}
              </div>
            ))}
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-xl sm:text-5xl md:text-7xl font-title font-extrabold text-gray-900 tracking-tight leading-tight mb-6 sm:mb-8">
              Pare de pagar por quem <span className="text-gradient-orange">não utiliza</span> o benefício.
            </h2>

            <p className="text-sm sm:text-xl md:text-3xl font-title font-light text-gray-600 mb-10 sm:mb-12">
              Transforme seu caixa e engaje seu time com o{' '}
              <span className="text-gradient-orange font-bold">GymClub</span>.
            </p>

            <a
              href="#cadastro"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-full text-[13px] sm:text-lg font-title font-bold transition-all hover:shadow-2xl hover:shadow-gray-900/20 hover:-translate-y-1"
            >
              Cadastrar minha empresa
            </a>
          </div>
        </section>

        {/* ========================================================== */}
        {/* Depoimentos                                                 */}
        {/* ========================================================== */}
        <section className="py-16 sm:py-24 relative overflow-x-clip">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-3xl md:text-4xl font-title font-bold text-gray-900 mb-6">
                Quem já trocou o custo fixo pelo uso real
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600">
                Times de RH e financeiro que pararam de pagar por quem não treina.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="marquee-pause overflow-hidden py-3">
              <div
                className="marquee-track"
                style={{ ['--marquee-duration' as string]: '75s' }}
              >
                {[...reviews, ...reviews].map((review, index) => (
                  <div
                    key={`${review.name}-${index}`}
                    className="w-[290px] sm:w-[340px] shrink-0 bg-white rounded-3xl p-6 border border-gray-200 shadow-sm"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-11 h-11 shrink-0 ${review.avatarBg} rounded-full flex items-center justify-center text-sm font-title font-bold text-gray-900`}
                        aria-hidden="true"
                      >
                        {review.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="font-title font-bold text-gray-900 truncate">{review.name}</p>
                      </div>
                    </div>

                    <div className="flex gap-0.5 mb-3" aria-label="5 de 5 estrelas">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gym-orange fill-gym-orange" />
                      ))}
                    </div>

                    <p className="text-[13px] sm:text-base font-title font-light text-gray-600 leading-relaxed">{review.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Máscaras laterais para os cards entrarem e saírem suavemente */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-24 md:w-48 bg-gradient-to-r from-[#FAFAFA] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-24 md:w-48 bg-gradient-to-l from-[#FAFAFA] to-transparent" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center mt-15 mb-30 gap-4">
                <a href="#cadastro" className="w-full sm:w-auto bg-gradient-green hover:opacity-90 text-gray-900 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-[13px] sm:text-base font-title font-bold transition-all hover:shadow-xl hover:shadow-gym-green/30 hover:-translate-y-1 flex items-center justify-center gap-2">
                  Quero cadastrar minha empresa
                </a>
              </div>

        </section>

        {/* ========================================================== */}
        {/* Cadastro                                                    */}
        {/* ========================================================== */}
        <section
          id="cadastro"
          className="relative lg:min-h-[834px] flex items-center py-16 lg:py-12 bg-gym-orange overflow-hidden"
        >
          {/* Background Graphic elements inspired by the brand's vibrant curves */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[800px] md:w-[1200px] aspect-square rounded-full bg-[#f7e92a] pointer-events-none" />

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[1000px] md:w-[1500px] aspect-square rounded-full border-[60px] md:border-[100px] border-[#c2f463] pointer-events-none opacity-80" />

          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] md:translate-x-[15%] w-[1200px] md:w-[1800px] aspect-square rounded-full border-[60px] md:border-[100px] border-[#3ad9c5] pointer-events-none opacity-40" />

          {/* Até lg o texto ocupa a largura toda e passaria por cima dos círculos
              amarelos; aí o véu é vertical e cobre tudo. No desktop volta a ser
              horizontal, preservando os círculos à direita. */}
          <div className="absolute inset-0 bg-gradient-to-b from-gym-orange via-gym-orange/90 to-gym-orange/70 lg:bg-gradient-to-r lg:from-gym-orange lg:via-gym-orange/80 lg:to-transparent pointer-events-none" />

          {/* Container */}
          <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

              {/* Text Content */}
              <div className="w-full lg:flex-1 text-white">
                <h2 className="text-xl sm:text-4xl md:text-5xl font-title font-extrabold mb-6 leading-[1.1] tracking-tight whitespace-normal sm:whitespace-nowrap">
                  Sem taxas ocultas,
                  <br />
                  sem gestão complexa
                </h2>

                <p className="text-sm sm:text-lg md:text-xl font-title font-light text-white/90 leading-relaxed">
                  Implementar um benefício de saúde corporativa não precisa ser
                  uma dor de cabeça para o RH. Na verdade, com o{" "}
                  <strong>GymClub</strong>, é exatamente o oposto.
                </p>
              </div>

              {/* Form Card */}
              <div className="w-full lg:w-[620px] lg:flex-shrink-0">
                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">

                  <h3 className="text-lg sm:text-2xl md:text-3xl font-title font-black text-gray-900 mb-6 uppercase text-center tracking-tight">
                    CADASTRE SUA EMPRESA
                  </h3>

                  <form
                    className="space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();

                      const form = e.currentTarget;

                      setEnviado(false);
                      setErroEnvio(false);
                      setTentouEnviar(true);

                      /* Nada sai daqui com campo em branco ou inválido. */
                      if (formularioInvalido) {
                        const primeiro = [
                          'nome',
                          'email',
                          'telefone',
                          'empresa',
                          'uf',
                          'cidade',
                          'cnpj',
                        ].find((campo) => erros[campo]);

                        form
                          .querySelector<HTMLElement>(`[name="${primeiro}"]`)
                          ?.focus();

                        return;
                      }

                      const dados = Object.fromEntries(
                        new FormData(form).entries()
                      );

                      console.log('Enviando para o n8n:', dados);

                      setEnviando(true);

                      try {
                        const resposta = await fetch(
                          'https://n8n.cimerianofficial.com/webhook/gymclub-lp-empresas',
                          {
                            method: 'POST',
                            headers: {
                              'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(dados),
                          }
                        );

                        console.log(
                          'Resposta do n8n:',
                          resposta.status,
                          resposta.statusText
                        );

                        if (!resposta.ok) throw new Error(String(resposta.status));


                        form.reset();
                        limparCampos();
                        setEnviado(true);
                      } catch (erro) {
                        console.error(
                          'Erro ao enviar formulário para o n8n:',
                          erro
                        );

                        setErroEnvio(true);
                      } finally {
                        setEnviando(false);
                      }
                    }}
                    noValidate
                  >
                    <div>
                      <input
                        type="text"
                        name="nome"
                        placeholder="Nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        onBlur={() => marcar('nome')}
                        aria-invalid={Boolean(erroNome)}
                        className={`${campoBase} ${erroNome ? campoErro : ''}`}
                      />

                      {mensagemErro(erroNome)}
                    </div>

                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => marcar('email')}
                        aria-invalid={Boolean(erroEmail)}
                        className={`${campoBase} ${
                          erroEmail ? campoErro : ''
                        }`}
                      />

                      {mensagemErro(erroEmail)}
                    </div>

                    <div>
                      <input
                        type="tel"
                        name="telefone"
                        inputMode="numeric"
                        placeholder="Celular com DDD"
                        value={telefone}
                        onChange={(e) =>
                          setTelefone(formatarTelefone(e.target.value))
                        }
                        onBlur={() => marcar('telefone')}
                        aria-invalid={Boolean(erroTelefone)}
                        className={`${campoBase} ${
                          erroTelefone ? campoErro : ''
                        }`}
                      />

                      {mensagemErro(erroTelefone)}
                    </div>

                    <div>
                      <input
                        type="text"
                        name="empresa"
                        placeholder="Nome da empresa"
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        onBlur={() => marcar('empresa')}
                        aria-invalid={Boolean(erroEmpresa)}
                        className={`${campoBase} ${erroEmpresa ? campoErro : ''}`}
                      />

                      {mensagemErro(erroEmpresa)}
                    </div>

                     <div className="flex gap-4">
                      <div className="w-2/5">
                        <select
                          name="uf"
                          value={uf}
                          onChange={(e) => {
                            setUf(e.target.value);
                            setCidade('');
                          }}
                          onBlur={() => marcar('uf')}
                          aria-label="Estado"
                          aria-invalid={Boolean(erroUf)}
                          className={`${campoBase} ${
                            uf ? 'text-gray-900' : 'text-gray-400'
                          } ${erroUf ? campoErro : ''}`}
                        >
                          <option value="">Estado</option>

                          {UFS.map((estado) => (
                            <option
                              key={estado.sigla}
                              value={estado.sigla}
                            >
                              {estado.sigla} — {estado.nome}
                            </option>
                          ))}
                        </select>

                        {mensagemErro(erroUf)}
                      </div>

                      <div className="w-3/5">
                        {falhouIbge ? (
                          <input
                            type="text"
                            name="cidade"
                            placeholder="Cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            onBlur={() => marcar('cidade')}
                            aria-invalid={Boolean(erroCidade)}
                            className={`${campoBase} ${
                              erroCidade ? campoErro : ''
                            }`}
                          />
                        ) : (
                          <select
                            name="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            onBlur={() => marcar('cidade')}
                            disabled={!uf || carregando}
                            aria-label="Cidade"
                            aria-invalid={Boolean(erroCidade)}
                            className={`${campoBase} disabled:opacity-60 disabled:cursor-not-allowed ${
                              cidade
                                ? 'text-gray-900'
                                : 'text-gray-400'
                            } ${erroCidade ? campoErro : ''}`}
                          >
                            <option value="">
                              {!uf
                                ? 'Cidade'
                                : carregando
                                  ? 'Carregando…'
                                  : 'Cidade'}
                            </option>

                            {cidades.map((nome) => (
                              <option key={nome} value={nome}>
                                {nome}
                              </option>
                            ))}
                          </select>
                        )}

                        {mensagemErro(erroCidade)}
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        name="cnpj"
                        inputMode="numeric"
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange={(e) =>
                          setCnpj(formatarCnpj(e.target.value))
                        }
                        onBlur={() => marcar('cnpj')}
                        aria-invalid={Boolean(erroCnpj)}
                        className={`${campoBase} ${
                          erroCnpj ? campoErro : ''
                        }`}
                      />

                      {mensagemErro(erroCnpj)}
                    </div>

                    <div className="flex justify-end">
                      <button
                        type="submit"
                        disabled={enviando}
                        className="bg-black hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-[13px] sm:text-lg font-title font-bold transition-all hover:shadow-xl hover:-translate-y-1 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                      >
                        {enviando ? 'Enviando…' : 'Enviar cadastro'}
                      </button>
                    </div>
                  </form>

                  {/* Aviso pós-envio: o formulário continua no lugar (já limpo),
                      então a pessoa pode cadastrar de novo se errou algum dado. */}
                  {enviado && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="mt-6 flex items-start gap-3 rounded-2xl bg-green-50 border border-green-200 px-4 sm:px-5 py-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-5 h-5 shrink-0 mt-0.5 text-green-600"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>

                      <p className="text-sm sm:text-base font-title font-light text-green-800 leading-relaxed">
                        Seu cadastro foi enviado com sucesso! Aguarde que um dos
                        nossos atendentes entrará em contato com você.
                      </p>
                    </div>
                  )}

                  {erroEnvio && (
                    <div
                      role="status"
                      aria-live="polite"
                      className="mt-6 flex items-start gap-3 rounded-2xl bg-red-50 border border-red-200 px-4 sm:px-5 py-4"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                        className="w-5 h-5 shrink-0 mt-0.5 text-red-500"
                      >
                        <circle cx="12" cy="12" r="9" />
                        <path d="M12 8v4M12 16h.01" />
                      </svg>

                      <p className="text-sm sm:text-base font-title font-light text-red-700 leading-relaxed">
                        Não foi possível enviar seu cadastro agora. Confira os dados
                        e tente novamente em instantes.
                      </p>
                    </div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================== */}
        {/* FAQ                                                         */}
        {/* ========================================================== */}
        <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xl sm:text-4xl md:text-6xl font-title font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Perguntas <span className="text-gradient-orange">Frequentes</span>
              </h2>
              <p className="text-sm sm:text-lg font-title font-light text-gray-600 max-w-2xl mx-auto">
                Tudo o que você precisa saber sobre como o GymClub revoluciona o benefício corporativo da sua empresa.
              </p>
            </div>

            {/* FAQ Container matching the provided style */}
            <div className="bg-gray-100 rounded-3xl sm:rounded-[40px] p-3 sm:p-4 md:p-8 shadow-inner border border-gray-200/50">
              <div className="space-y-3 sm:space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <div className="flex items-center gap-2.5 sm:gap-4">
                        {/* Plus/Minus icon positioned on the left as in the reference, but colored orange */}
                        <div className="shrink-0 text-gym-orange">
                          {openIndex === index ? (
                            <Minus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                          ) : (
                            <Plus className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={3} />
                          )}
                        </div>
                        <span className="text-[13px] sm:text-base md:text-lg font-title font-bold text-gray-900">
                          {faq.question}
                        </span>
                      </div>
                    </button>

                    <AnimatePresence>
                      {openIndex === index && (
                        <fmMotion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                          <div className="px-3 sm:px-6 pb-4 sm:pb-6 pt-0 ml-6 sm:ml-9 text-[13px] sm:text-base font-title font-light text-gray-600 leading-relaxed">
                            {faq.answer}
                          </div>
                        </fmMotion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Institucional Oficial */}
      <Footer />
    </div>
  );
}

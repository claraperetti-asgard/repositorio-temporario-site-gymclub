import React, { useState, useEffect, useRef, PointerEvent } from 'react';
import { EmpresasCalculator } from '../components/EmpresasCalculator';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Dumbbell, 
  ArrowRight,
  TrendingUp,
  Sparkles,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  X,
  Award,
  DollarSign
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';


const AcademiasCalculator = () => {
  const navigate = useNavigate();
  const [internosUsr, setInternosUsr] = useState('100');
  const [internosVal, setInternosVal] = useState('1000');
  
  const [agrAUsr, setAgrAUsr] = useState('100');
  const [agrAVal, setAgrAVal] = useState('1000');
  
  const [agrBUsr, setAgrBUsr] = useState('100');
  const [agrBVal, setAgrBVal] = useState('1000');

  const [planoGymclub, setPlanoGymclub] = useState(69.90);

  const tInternos = Number(internosUsr) ? Number(internosVal) / Number(internosUsr) : 0;
  const tAgrA = Number(agrAUsr) ? Number(agrAVal) / Number(agrAUsr) : 0;
  const tAgrB = Number(agrBUsr) ? Number(agrBVal) / Number(agrBUsr) : 0;

  const totalUsrAgr = Number(agrAUsr) + Number(agrBUsr);
  const totalValAgr = Number(agrAVal) + Number(agrBVal);
  const ticketAgrs = totalUsrAgr ? totalValAgr / totalUsrAgr : 0;

  const ticketGymclub = planoGymclub * 0.85; // 85% repasse
  
  const difAluno = ticketGymclub - ticketAgrs;
  const lucroPotencial = totalUsrAgr * ticketGymclub - totalValAgr;
  const pctVsAtual = totalValAgr > 0 ? (lucroPotencial / totalValAgr) * 100 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-200/90 space-y-8">
      
      {/* Header com estilo GymClub */}
      <div className="text-center mb-8">
       
        <h2 className="text-2xl sm:text-4xl font-title font-black text-gray-950 mb-2 tracking-tight">
          Compare os agregadores com a <span className="text-gym-orange">simulação GymClub</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-title font-light">
          Simule detalhadamente por operação e veja a diferença no faturamento da sua academia.
        </p>
      </div>

      {/* 3 Cards Coloridos na Paleta GymClub */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Planos Internos (Amarelo Solar da Paleta) */}
        <div className="bg-[#fefce8] rounded-3xl p-6 border border-[#fef08a] relative overflow-hidden shadow-xs">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-yellow rounded-l-3xl"></div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-title font-bold text-gray-950 text-sm uppercase tracking-wide">
              Planos internos
            </h4>
            <div className="w-6 h-6 rounded-full bg-gym-yellow flex items-center justify-center font-title font-black text-xs text-gray-950">
              1
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Usuários únicos</label>
              <input 
                type="number" 
                value={internosUsr} 
                onChange={e => setInternosUsr(e.target.value)} 
                className="w-full bg-white border border-yellow-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-yellow" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Valor recebido (R$)</label>
              <input 
                type="number" 
                value={internosVal} 
                onChange={e => setInternosVal(e.target.value)} 
                className="w-full bg-white border border-yellow-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-yellow" 
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-yellow-200/80">
            <span className="text-[10px] uppercase font-title font-bold text-gray-500 block mb-0.5">Ticket Médio Interno</span>
            <span className="font-title font-black text-lg text-gray-950">
              R$ {tInternos.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* Card 2: Agregador A (Laranja Vibrante da Paleta) */}
        <div className="bg-[#fff9f5] rounded-3xl p-6 border border-orange-200 relative overflow-hidden shadow-xs">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-orange rounded-l-3xl"></div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-title font-bold text-gray-950 text-sm uppercase tracking-wide">
              Agregador A
            </h4>
            <div className="w-6 h-6 rounded-full bg-gym-orange flex items-center justify-center font-title font-black text-xs text-white">
              A
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Usuários únicos</label>
              <input 
                type="number" 
                value={agrAUsr} 
                onChange={e => setAgrAUsr(e.target.value)} 
                className="w-full bg-white border border-orange-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-orange" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Valor recebido (R$)</label>
              <input 
                type="number" 
                value={agrAVal} 
                onChange={e => setAgrAVal(e.target.value)} 
                className="w-full bg-white border border-orange-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-orange" 
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-orange-200/80">
            <span className="text-[10px] uppercase font-title font-bold text-gray-500 block mb-0.5">Ticket Médio Agregador A</span>
            <span className="font-title font-black text-lg text-gray-950">
              R$ {tAgrA.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

        {/* Card 3: Agregador B (Verde Limão Claro da Paleta) */}
        <div className="bg-[#f4fce3] rounded-3xl p-6 border border-[#d6e3c5] relative overflow-hidden shadow-xs">
          <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-green rounded-l-3xl"></div>
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-title font-bold text-gray-950 text-sm uppercase tracking-wide">
              Agregador B
            </h4>
            <div className="w-6 h-6 rounded-full bg-gym-green flex items-center justify-center font-title font-black text-xs text-gray-950">
              B
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Usuários únicos</label>
              <input 
                type="number" 
                value={agrBUsr} 
                onChange={e => setAgrBUsr(e.target.value)} 
                className="w-full bg-white border border-lime-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-green" 
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-1 block">Valor recebido (R$)</label>
              <input 
                type="number" 
                value={agrBVal} 
                onChange={e => setAgrBVal(e.target.value)} 
                className="w-full bg-white border border-lime-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-900 outline-none focus:border-gym-green" 
              />
            </div>
          </div>
          <div className="bg-white rounded-2xl p-3 border border-lime-200/80">
            <span className="text-[10px] uppercase font-title font-bold text-gray-500 block mb-0.5">Ticket Médio Agregador B</span>
            <span className="font-title font-black text-lg text-gray-950">
              R$ {tAgrB.toFixed(2).replace('.', ',')}
            </span>
          </div>
        </div>

      </div>

      {/* Bloco de Simulação GymClub com Design Enriquecido */}
      <div className="bg-[#f0fdf4] rounded-3xl p-6 sm:p-8 border border-[#bbf7d0] shadow-xs relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-green opacity-25 blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h4 className="font-title font-black text-2xl text-gray-950">
              Simulação <span className="text-gym-orange">GymClub</span>
            </h4>
            <p className="text-xs font-title font-medium text-gray-600">
              Repasse transparente de 85% do valor do plano diretamente para sua academia.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-emerald-200 text-xs font-title font-bold text-gray-900 shadow-xs">
            <Award className="w-4 h-4 text-gym-orange" />
            <span>Repasse de 85% Garantido</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-xs">
            <label className="text-[10px] uppercase font-title font-bold text-gray-500 mb-1.5 block">
              Plano GymClub Selecionado
            </label>
            <select 
              value={planoGymclub} 
              onChange={e => setPlanoGymclub(Number(e.target.value))}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-bold text-gray-900 outline-none focus:border-gym-orange cursor-pointer"
            >
              <option value={39.90}>CLUBE 1 — R$ 39,90</option>
              <option value={69.90}>CLUBE 2 — R$ 69,90</option>
              <option value={99.90}>CLUBE 3 — R$ 99,90</option>
              <option value={139.90}>CLUBE 4 — R$ 139,90</option>
              <option value={199.90}>CLUBE 6 — R$ 199,90</option>
              <option value={249.90}>CLUBE 7 — R$ 249,90</option>
              <option value={309.90}>CLUBE 8 — R$ 309,90</option>
            </select>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-xs">
            <label className="text-[10px] uppercase font-title font-bold text-gray-500 mb-1.5 block">
              Total de Alunos (Agregador A + B)
            </label>
            <div className="w-full bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm font-black text-gray-950">
              {totalUsrAgr} alunos ativos
            </div>
          </div>

          <div className="bg-white rounded-2xl p-4 border border-emerald-200 shadow-xs">
            <label className="text-[10px] uppercase font-title font-bold text-gray-500 mb-1.5 block">
              Ticket Líquido GymClub (85%)
            </label>
            <div className="w-full bg-gray-50 rounded-xl px-3.5 py-2.5 text-sm font-black text-gym-orange border border-gray-200">
              R$ {ticketGymclub.toFixed(2).replace('.', ',')} / aluno
            </div>
          </div>
        </div>

        {/* 4 Cards de Métricas em Destaque */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs">
            <p className="text-[10px] uppercase font-title font-bold text-gray-400 mb-1">Ticket Planos Internos</p>
            <p className="font-title font-black text-base sm:text-lg text-gray-900">
              R$ {tInternos.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs">
            <p className="text-[10px] uppercase font-title font-bold text-gray-400 mb-1">Ticket Agregadores</p>
            <p className="font-title font-black text-base sm:text-lg text-gray-900">
              R$ {ticketAgrs.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs">
            <p className="text-[10px] uppercase font-title font-bold text-gray-400 mb-1">Diferença por aluno</p>
            <p className="font-title font-black text-base sm:text-lg text-emerald-700">
              +R$ {difAluno.toFixed(2).replace('.', ',')}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-4 border border-emerald-100 shadow-xs">
            <p className="text-[10px] uppercase font-title font-bold text-gray-400 mb-1">Lucro Potencial Mensal</p>
            <p className="font-title font-black text-base sm:text-lg text-emerald-700">
              +R$ {lucroPotencial.toFixed(2).replace('.', ',')}
            </p>
          </div>
        </div>
      </div>

      {/* Banner de Resultado e Destaque Estilizado no Padrão do Site */}
      <div className="rounded-3xl border border-orange-200/80 bg-[#fff9f5] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-2.5 bg-gym-orange rounded-l-3xl"></div>
        <div>
          <p className="text-xs uppercase font-title font-bold text-gray-700 mb-1 tracking-wider">
            Lucro Potencial Adicional com GymClub
          </p>
          <p className="text-4xl sm:text-5xl font-title font-black text-gym-orange tracking-tight my-1">
            +R$ {lucroPotencial.toFixed(2).replace('.', ',')}
          </p>
          <p className="text-xs font-title font-medium text-gray-500">
            Ganhos extras comparados ao modelo tradicional de agregadores.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full md:w-auto">
          <div className="px-5 py-2 bg-gym-green text-gray-950 rounded-full font-title font-black text-sm shadow-xs border border-lime-300">
            +{pctVsAtual.toFixed(1)}% vs. atual
          </div>
          <button
            type="button"
            onClick={() => navigate('/academias#credenciamento')}
            className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center gap-2 bg-gradient-orange hover:opacity-95 text-white px-8 py-2 rounded-full text-xs sm:text-sm font-title font-bold transition-all shadow-md hover:shadow-orange-500/20 hover:-translate-y-0.5"
          >
            <span>Quero ser parceiro</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

    </div>
  );
};

// ==========================================
// 3. CALCULADORA DE REPASSE DO VALOR (COLORIDA NO PADRÃO GYMCLUB)
// ==========================================
const RepasseRateioCalculator = () => {
  const navigate = useNavigate();
  const [planoGymclub, setPlanoGymclub] = useState(99.90);
  const [meusCheckins, setMeusCheckins] = useState(16);
  const [concorrentes, setConcorrentes] = useState([
    { id: 1, name: 'Academia Parceira 2', checkins: 4 }, 
    { id: 2, name: 'Academia Parceira 3', checkins: 2 }
  ]);

  const repasseTotal = planoGymclub * 0.85; // 85% do plano
  const totalCheckins = meusCheckins + concorrentes.reduce((acc, c) => acc + c.checkins, 0);

  const valorPorCheckin = totalCheckins > 0 ? repasseTotal / totalCheckins : 0;
  const meuRepasse = meusCheckins * valorPorCheckin;
  const minhaPct = totalCheckins > 0 ? (meusCheckins / totalCheckins) * 100 : 0;

  const addConcorrente = () => {
    setConcorrentes([...concorrentes, { id: Date.now(), name: `Academia Parceira ${concorrentes.length + 2}`, checkins: 3 }]);
  };

  const removeConcorrente = (id: number) => {
    setConcorrentes(concorrentes.filter(c => c.id !== id));
  };

  const updateConcorrente = (id: number, val: number) => {
    if (val < 0) return;
    setConcorrentes(concorrentes.map(c => c.id === id ? { ...c, checkins: val } : c));
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-[36px] sm:rounded-[44px] p-6 sm:p-10 lg:p-12 shadow-2xl border border-gray-200/90 space-y-8">
      
      {/* Header com Visual Colorido GymClub */}
      <div className="text-center mb-8">
       
        <h2 className="text-2xl sm:text-4xl font-title font-black text-gray-950 mb-2 tracking-tight">
          Simule o repasse da sua <span className="text-gym-orange">academia no GymClub</span>
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-title font-light max-w-2xl mx-auto">
          O GymClub repassa até 85% do valor do plano aos parceiros proporcionalmente aos check-ins realizados no mês.
        </p>
      </div>

      {/* Card Informativo com Regra de Pagamento Estilizado */}
      <div className="bg-gradient-to-r from-[#f4fce3] via-[#fefce8] to-[#fff9f5] border border-lime-200 rounded-3xl p-6 sm:p-7 relative overflow-hidden shadow-xs">
        <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-green rounded-l-3xl"></div>
        <h4 className="font-title font-bold text-xs text-emerald-900 uppercase tracking-wider mb-1">
          Regra de Pagamento Transparente de 85%
        </h4>
        <p className="font-title text-sm text-gray-800 leading-relaxed">
          O GymClub repassa <strong className="text-gray-950 font-black">85% do valor da mensalidade</strong> do plano, dividido proporcionalmente pelos check-ins entre as academias que o aluno frequentou no mês. Se ele treinou 100% na sua unidade, o repasse integral de 85% é seu!
        </p>
      </div>

      {/* Grid de Configuração e Resultados */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Coluna 1 & 2: Controles */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Card Minha Academia (Destaque Verde GymClub) */}
          <div className="bg-[#f0fdf4] rounded-3xl border border-[#bbf7d0] p-6 shadow-xs space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-green rounded-l-3xl"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-title font-black text-gray-950 text-lg">Minha Academia</h4>
                <p className="text-xs text-gray-600 font-title">Configure o plano e a frequência de um aluno</p>
              </div>
              <span className="px-3 py-1 bg-gym-green text-gray-950 text-[10px] font-title font-black uppercase rounded-full">
                Sua Unidade
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-2 block">
                  Plano GymClub do Aluno
                </label>
                <select 
                  value={planoGymclub} 
                  onChange={e => setPlanoGymclub(Number(e.target.value))}
                  className="w-full bg-white border border-emerald-200 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 outline-none focus:border-gym-green shadow-xs cursor-pointer"
                >
                  <option value={39.90}>CLUBE 1 — R$ 39,90</option>
                  <option value={69.90}>CLUBE 2 — R$ 69,90</option>
                  <option value={99.90}>CLUBE 3 — R$ 99,90</option>
                  <option value={139.90}>CLUBE 4 — R$ 139,90</option>
                  <option value={199.90}>CLUBE 6 — R$ 199,90</option>
                  <option value={249.90}>CLUBE 7 — R$ 249,90</option>
                  <option value={309.90}>CLUBE 8 — R$ 309,90</option>
                </select>
              </div>

              <div>
                <label className="text-[10px] uppercase font-title font-bold text-gray-600 mb-2 block">
                  Check-ins na sua academia no mês
                </label>
                <div className="flex items-center border border-emerald-200 rounded-xl overflow-hidden h-[46px] shadow-xs bg-white">
                  <button 
                    type="button"
                    onClick={() => setMeusCheckins(Math.max(0, meusCheckins - 1))} 
                    className="w-12 h-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center border-r border-emerald-200 transition-colors cursor-pointer"
                  >
                    <Minus className="w-4 h-4 text-emerald-900" />
                  </button>
                  <div className="flex-1 h-full flex items-center justify-center font-title font-black text-base bg-white text-gray-950">
                    {meusCheckins} treinos
                  </div>
                  <button 
                    type="button"
                    onClick={() => setMeusCheckins(meusCheckins + 1)} 
                    className="w-12 h-full bg-emerald-50 hover:bg-emerald-100 flex items-center justify-center border-l border-emerald-200 transition-colors cursor-pointer"
                  >
                    <Plus className="w-4 h-4 text-emerald-900" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Card Outras Academias (Destaque Laranja GymClub) */}
          <div className="bg-[#fff9f5] rounded-3xl border border-orange-200 p-6 shadow-xs space-y-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-2 bg-gym-orange rounded-l-3xl"></div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-title font-black text-gray-950 text-lg">Outras Academias Parceiras</h4>
                <p className="text-xs text-gray-600 font-title">Simule se o aluno treinou em outros locais parceiros no mês</p>
              </div>
              <span className="px-3 py-1 bg-orange-100 text-gym-orange text-[10px] font-title font-bold uppercase rounded-full">
                Rateio
              </span>
            </div>

            <div className="space-y-3">
              {concorrentes.map((c) => (
                <div key={c.id} className="flex items-center justify-between border border-orange-200/80 rounded-2xl p-3.5 bg-white shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gym-orange"></div>
                    <span className="text-sm font-title font-bold text-gray-900">{c.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-orange-200 rounded-xl overflow-hidden h-9 bg-white">
                      <button 
                        type="button"
                        onClick={() => updateConcorrente(c.id, c.checkins - 1)} 
                        className="w-9 h-full bg-orange-50 hover:bg-orange-100 flex items-center justify-center border-r border-orange-200 transition-colors cursor-pointer"
                      >
                        <Minus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                      <div className="w-12 h-full flex items-center justify-center font-title font-bold text-xs text-gray-900">
                        {c.checkins}
                      </div>
                      <button 
                        type="button"
                        onClick={() => updateConcorrente(c.id, c.checkins + 1)} 
                        className="w-9 h-full bg-orange-50 hover:bg-orange-100 flex items-center justify-center border-l border-orange-200 transition-colors cursor-pointer"
                      >
                        <Plus className="w-3.5 h-3.5 text-gray-700" />
                      </button>
                    </div>
                    <button 
                      type="button"
                      onClick={() => removeConcorrente(c.id)} 
                      className="w-9 h-9 flex items-center justify-center text-gray-400 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-xl bg-white transition-colors cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button 
              type="button"
              onClick={addConcorrente} 
              className="w-full border border-dashed border-orange-300 rounded-2xl py-3 text-xs font-title font-bold text-gym-orange hover:bg-orange-50/50 transition-colors cursor-pointer"
            >
              + Adicionar outra academia parceira
            </button>
          </div>

        </div>

        {/* Coluna 3: Resultados Coloridos */}
        <div className="space-y-4">
          
          {/* Card Principal de Repasse (Verde Neon GymClub) */}
          <div className="bg-white rounded-3xl p-6 text-gray-950 shadow-md border border-emerald-600 relative overflow-hidden">
            <h4 className="text-[10px] uppercase font-title font-black tracking-wider block mb-1">
              Seu repasse estimado por este Aluno
            </h4>
            <p className="text-4xl sm:text-5xl text-gym-orange font-title font-black tracking-tight my-2">
              R$ {meuRepasse.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-xs font-title font-semibold opacity-90">
              Sua academia recebe {minhaPct.toFixed(0)}% do repasse total (R$ {repasseTotal.toFixed(2).replace('.', ',')}).
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#fefce8] border border-[#fef08a] rounded-2xl p-4 shadow-xs">
              <h4 className="text-[9px] uppercase font-title font-bold text-gray-500 mb-1">Seus Check-ins</h4>
              <p className="text-xl font-title font-black text-gray-950">{meusCheckins}</p>
              <p className="text-[10px] font-title text-gray-500">de {totalCheckins} no total</p>
            </div>
            <div className="bg-[#fff9f5] border border-orange-200 rounded-2xl p-4 shadow-xs">
              <h4 className="text-[9px] uppercase font-title font-bold text-gray-500 mb-1">Repasse por Treino</h4>
              <p className="text-xl font-title font-black text-gym-orange">R$ {valorPorCheckin.toFixed(2).replace('.', ',')}</p>
              <p className="text-[10px] font-title text-gray-500">por check-in</p>
            </div>
          </div>

          {/* Distribuição visual com barras coloridas */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-xs">
            <h4 className="text-[10px] uppercase font-title font-bold text-gray-500 mb-3">
              Divisão Proporcional do Rateio
            </h4>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs font-title text-gray-800 mb-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-gym-green"></div>
                    <span className="font-bold text-gray-950">Sua academia</span> ({meusCheckins} treinos)
                  </div>
                  <strong className="text-emerald-800">R$ {meuRepasse.toFixed(2).replace('.', ',')}</strong>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gym-green rounded-full transition-all duration-300" style={{ width: `${minhaPct}%` }}></div>
                </div>
              </div>
              
              {concorrentes.map((c) => {
                const pct = totalCheckins > 0 ? (c.checkins / totalCheckins) * 100 : 0;
                const val = c.checkins * valorPorCheckin;
                return (
                  <div key={c.id}>
                    <div className="flex items-center justify-between text-xs font-title text-gray-600 mb-1">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-gym-orange"></div>
                        <span>{c.name}</span> ({c.checkins} treinos)
                      </div>
                      <span className="font-medium text-gray-900">R$ {val.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gym-orange rounded-full transition-all duration-300" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/academias#credenciamento')}
            className="w-full bg-gradient-orange hover:opacity-95 text-white font-title font-bold py-4 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer hover:-translate-y-0.5"
          >
            <span>Credenciar minha academia</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

        </div>

      </div>

    </div>
  );
};

// ==========================================
// PÁGINA PRINCIPAL DE CALCULADORAS (3 ABAS CONFORME SOLICITADO)
// ==========================================
export function Calculadoras() {
  const [activeTab, setActiveTab] = useState<'academias' | 'empresas' | 'repasse'>('empresas');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'academias' || tab === 'empresas' || tab === 'repasse') {
      setActiveTab(tab);
    }
  }, [location]);

  const handleTabChange = (tab: 'academias' | 'empresas' | 'repasse') => {
    setActiveTab(tab);
    navigate(`/calculadoras?tab=${tab}`, { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafafa]">
      <Navbar />

      <main className="flex-1 pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Barra de Abas Superior Centralizada com Gradiente */}
          <div className="flex justify-center items-center mb-12 pb-6 border-b border-gray-200/80">
            
            {/* Cápsula de Abas com Gradiente Oficial GymClub Centralizada */}
            <div className="inline-flex bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-gray-200/90 shadow-lg shadow-orange-500/5 relative">
              <button
                type="button"
                onClick={() => handleTabChange('academias')}
                className={`relative px-6 sm:px-8 py-3 rounded-full font-title font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer z-10 ${
                  activeTab === 'academias'
                    ? 'bg-gradient-orange text-gray-950 shadow-md shadow-orange-500/30'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100/70'
                }`}
              >
                Academias
              </button>
              
              <button
                type="button"
                onClick={() => handleTabChange('empresas')}
                className={`relative px-6 sm:px-8 py-3 rounded-full font-title font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer z-10 ${
                  activeTab === 'empresas'
                    ? 'bg-gradient-yellow text-gray-950 shadow-md shadow-yellow-500/30'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100/70'
                }`}
              >
                Empresas
              </button>

              <button
                type="button"
                onClick={() => handleTabChange('repasse')}
                className={`relative px-6 sm:px-8 py-3 rounded-full font-title font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer z-10 ${
                  activeTab === 'repasse'
                    ? 'bg-gradient-green text-gray-950 shadow-md shadow-emerald-500/30'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100/70'
                }`}
              >
                Repasse do Valor
              </button>
            </div>

          </div>

          {/* Conteúdo Dinâmico por Aba */}
          <div className="w-full">
            <AnimatePresence mode="wait">
              {activeTab === 'empresas' && (
                <motion.div
                  key="empresas"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <EmpresasCalculator variant="tab" />
                </motion.div>
              )}

              {activeTab === 'academias' && (
                <motion.div
                  key="academias"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <AcademiasCalculator />
                </motion.div>
              )}

              {activeTab === 'repasse' && (
                <motion.div
                  key="repasse"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <RepasseRateioCalculator />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

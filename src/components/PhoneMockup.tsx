import React from 'react';
import { motion } from 'motion/react';
import mark from '../assets/mark.png';

interface PhoneMockupProps {
  className?: string;
}

export function PhoneMockup({ className = '' }: PhoneMockupProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Halo de luz solar e gradiente no fundo */}
      <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-gradient-yellow-orange opacity-40 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Chassi do iPhone 15/16 Pro em Titanium Dark com bordas e botões realistas */}
      <motion.div
        initial={{ opacity: 0, y: 40, rotate: 6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative w-[280px] sm:w-[320px] bg-[#18181b] rounded-[52px] p-3 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35),0_0_20px_rgba(255,136,63,0.2)] border-[4px] border-[#27272a] select-none hover:rotate-0 transition-transform duration-500 cursor-pointer group"
      >
        {/* Botão de Ação / Silencioso */}
        <div className="absolute -left-[7px] top-24 w-[3.5px] h-7 bg-[#3f3f46] rounded-l-md" />
        {/* Botões de Volume */}
        <div className="absolute -left-[7px] top-36 w-[3.5px] h-12 bg-[#3f3f46] rounded-l-md" />
        <div className="absolute -left-[7px] top-52 w-[3.5px] h-12 bg-[#3f3f46] rounded-l-md" />
        {/* Botão Liga/Desliga */}
        <div className="absolute -right-[7px] top-36 w-[3.5px] h-16 bg-[#3f3f46] rounded-r-md" />

        {/* Tela OLED com cantos curvos perfeitos */}
        <div className="relative w-full h-[580px] sm:h-[620px] rounded-[42px] overflow-hidden bg-black flex flex-col justify-between border border-black/40 shadow-inner">
          
          {/* Barra de Status do iOS + Dynamic Island */}
          <div className="relative z-30 pt-3.5 px-7 flex items-center justify-between text-black text-[12px] font-sans font-bold select-none">
            <span className="tracking-tight">9:41</span>
            
            {/* Dynamic Island Pílula */}
            <div className="w-24 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-2.5 flex items-center justify-end px-2.5 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1c1c1e] border border-gray-700/60" />
            </div>

            {/* Ícones de Sinal, Wifi e Bateria */}
            <div className="flex items-center gap-1.5 text-black">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 4C7.31 4 3.07 5.9 0 8.98L12 21 24 8.98A16.88 16.88 0 0012 4z"/>
              </svg>
              <div className="w-5 h-2.5 border-[1.5px] border-black rounded-[4px] p-0.5 flex items-center">
                <div className="w-full h-full bg-black rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Fundo da Tela: Gradiente Conforme o Print Oficial GymClub (Verde Limão ao Amarelo Sol e Laranja) */}
          <div className="absolute inset-0 z-10 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#c2f463] via-[#f7e92a] to-[#ff883f]">
            
            {/* Círculos Concéntricos Ondulares em Degradê (Idêntico ao Print Real) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-96 h-96 rounded-full border-[32px] border-white/20 opacity-80" />
              <div className="absolute w-[290px] h-[290px] rounded-full border-[28px] border-white/25 opacity-90" />
              <div className="absolute w-[200px] h-[200px] rounded-full border-[20px] border-white/30" />
            </div>

            {/* Conteúdo Central: Ícone do App GymClub Flutuante */}
            <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 text-center pt-8">
              
              {/* Ícone Laranja do App com Logo Branco */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-[32px] bg-gradient-to-br from-[#ff883f] to-[#ff9e42] p-5 shadow-[0_20px_40px_rgba(255,136,63,0.5),0_0_0_2px_rgba(255,255,255,0.4)] flex items-center justify-center mb-4 transition-all duration-300"
              >
                <img
                  src={mark}
                  alt="GymClub App"
                  className="w-full h-full object-contain filter drop-shadow-md brightness-0 invert"
                />
              </motion.div>

              <h3 className="font-title font-black text-2xl text-gray-950 tracking-tight drop-shadow-xs mb-1">
                Gymclub
              </h3>
              <p className="font-title text-xs font-bold text-gray-900/80 uppercase tracking-widest">
                Treine sem limites
              </p>
            </div>

            {/* Card Inferior Flutuante com Check-in Liberado */}
            <div className="relative z-20 mx-4 mb-5 p-4 rounded-3xl bg-white/95 backdrop-blur-md shadow-2xl border border-white/80 space-y-2 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-title font-bold uppercase tracking-wider text-gray-700">
                    Check-in Liberado
                  </span>
                </div>
                <span className="text-[10px] font-title font-extrabold text-gym-orange bg-orange-50 border border-orange-100 px-2 py-0.5 rounded-full">
                  GPS + QR
                </span>
              </div>

              <div className="flex items-center justify-between bg-gray-50/80 p-2.5 rounded-2xl border border-gray-100/80">
                <div className="min-w-0 pr-2">
                  <p className="text-xs font-title font-bold text-gray-900 truncate">
                    Smart Fit • Centro
                  </p>
                  <p className="text-[10px] font-title font-light text-gray-500">
                    Musculação & Aulas • 350m
                  </p>
                </div>
                <div className="w-7 h-7 rounded-xl bg-gradient-green flex items-center justify-center font-title font-black text-xs text-gray-950 shadow-xs shrink-0">
                  ✓
                </div>
              </div>
            </div>

            {/* Barra Home Indicator do iOS */}
            <div className="relative z-30 pb-2.5 flex justify-center">
              <div className="w-32 h-1 bg-black/40 rounded-full" />
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}

import { useNavigate, useLocation } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';

interface FooterProps {
  onSelectSection?: (id: string) => void;
  onOpenCalculator?: () => void;
}

export function Footer({ onSelectSection, onOpenCalculator }: FooterProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (onSelectSection) {
      onSelectSection(id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // Navigates to appropriate page if section is not found
      if (id === 'card-empresas') {
        navigate('/empresas');
      } else if (id === 'card-academias') {
        navigate('/academias');
      } else if (id === 'card-alunos') {
        navigate('/usuario');
      } else if (id === 'planos') {
        navigate('/usuario#planos');
      } else {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="w-full bg-[#f4f5f7] text-gray-900 border-t border-gray-200/80 pt-16 sm:pt-15 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Grid com 4 Colunas Equilibradas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-3 sm:pb-5  ">
            {/* Coluna 1: Marca, Descrição, Botões das Lojas & Razão Social */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <div className="flex items-center gap-2">
                <img
                  src="https://gymclub.com.br/gc-orange.png"
                  alt="GymClub"
                  className="h-7 sm:h-8 w-auto object-contain"
                />
                <img
                  src="https://gymclub.com.br/gclogo.png"
                  alt="GymClub"
                  className="h-7 sm:h-15 w-auto object-contain"
                />
              </div>

              <p className="font-title font-light text-gray-600 text-sm sm:text-base max-w-md leading-relaxed">
                O benefício corporativo inteligente. Sem taxas ocultas, sem gestão complexa. Pague apenas pelo que sua equipe usar.
              </p>

              {/* Botões de Download das Lojas (App Store e Google Play) */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://apps.apple.com/br/app/gymclub-benef%C3%ADcios/id6763812347"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white hover:bg-gray-50 border border-gray-300/90 text-gray-900 transition-all shadow-2xs hover:shadow-xs group"
                >
                  <svg className="w-5 h-5 fill-current text-gray-900 shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.61-.75 1.04-1.8 0.92-2.87-.92.04-2.02.62-2.66 1.37-.56.65-.98 1.71-.85 2.74 1.03.08 2.05-.54 2.59-1.24z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] font-title font-medium text-gray-500 uppercase tracking-tight">Disponível na</span>
                    <span className="block font-title font-bold text-xs text-gray-900 group-hover:text-gym-orange transition-colors">App Store</span>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=gymclub.app&hl=pt_BR"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white hover:bg-gray-50 border border-gray-300/90 text-gray-900 transition-all shadow-2xs hover:shadow-xs group"
                >
                  <svg className="w-4 h-4 fill-current text-gray-900 shrink-0" viewBox="0 0 24 24">
                    <path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5.35 0 .68.12.94.33l13.8 8.5c.67.41.97 1.22.7 1.94-.17.45-.54.78-.99.94l-13.5 8.3c-.28.17-.61.27-.95.27-.83 0-1.5-.67-1.5-1.48zm2.25-15.54v14.08l11.45-7.04-11.45-7.04z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[9px] font-title font-medium text-gray-500 uppercase tracking-tight">Disponível no</span>
                    <span className="block font-title font-bold text-xs text-gray-900 group-hover:text-gym-orange transition-colors">Google Play</span>
                  </div>
                </a>
              </div>

              {/* Razão Social e Dados Cadastrais */}
              <div className="pt-2 text-xs font-title font-light text-gray-500 space-y-0.5">
                <p className="font-semibold text-gray-700 tracking-wide">ASGARD TECNOLOGIA LTDA</p>
                <p>CNPJ 66.009.331/0001-09</p>
                <p className="text-gray-400 text-[11px]">@ 2026 GymClub. Todos os direitos reservados.</p>
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="font-title text-xs font-bold uppercase tracking-widest text-gray-900">
                Navegação
              </h4>
              <ul className="space-y-2.5 font-title font-light text-sm text-gray-600">
                <li>
                  <button
                    onClick={() => {
                      if (location.pathname !== '/') {
                        navigate('/');
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('card-academias')}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Academias
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('card-empresas')}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Empresas
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('card-alunos')}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Usuário
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo('planos')}
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Planos
                  </button>
                </li>
                <li>
                  <a
                    href="https://gymclub.com.br/download-parceiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors cursor-pointer text-left inline-flex items-center gap-1.5"
                  >
                    <span>Materiais de marketing</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Legal & Dúvidas */}
            <div className="lg:col-span-2 space-y-4 text-left">
              <h4 className="font-title text-xs font-bold uppercase tracking-widest text-gray-900">
                Legal
              </h4>
              <ul className="space-y-2.5 font-title font-light text-sm text-gray-600">
                <li>
                  <a
                    href="https://gymclub.com.br/politica-de-privacidade"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Política de privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="https://gymclub.com.br/termos-de-uso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Termos de uso
                  </a>
                </li>
                <li>
                  <a
                    href="https://gymclub.com.br/preferencias-de-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors cursor-pointer text-left"
                  >
                    Preferências de cookies
                  </a>
                </li>
                <li>
                  <a
                    href="https://gymclub.com.br/central-de-duvidas"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black transition-colors cursor-pointer text-left font-medium text-gym-orange hover:underline"
                  >
                    Central de Dúvidas
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 4: Para Empresas & Contato Comercial */}
            <div className="lg:col-span-3 space-y-4 text-left">
              <div className="flex items-center justify-between">
                <h4 className="font-title text-xs font-bold uppercase tracking-widest text-gray-900">
                  Para Empresas
                </h4>

                {/* Redes Sociais no Topo Direito (WhatsApp & Instagram) */}
                <div className="flex items-center gap-2">
                  <a
                    href="https://wa.me/5543991831438?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20Gymclub"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:border-gym-orange hover:text-gym-orange transition-all p-1.5 shadow-2xs"
                    aria-label="WhatsApp"
                  >
                    <img src="https://gymclub.com.br/whatsapp.svg" alt="WhatsApp" className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="https://www.instagram.com/gymclub.beneficios/"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 hover:border-gym-orange hover:text-gym-orange transition-all p-1.5 shadow-2xs"
                    aria-label="Instagram"
                  >
                    <img src="https://gymclub.com.br/instagram.svg" alt="Instagram" className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <p className="font-title font-light text-gray-600 text-xs sm:text-sm leading-relaxed">
                Quer levar o GymClub para sua equipe? Fale diretamente com nosso atendimento comercial.
              </p>

              {/* Contato Comercial em Destaque com WhatsApp */}
              <div className="pt-1">
                <a
                  href="https://wa.me/5543991831438?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20GymClub%20para%20minha%20empresa"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white border border-gray-300 flex items-center justify-center text-gray-900 group-hover:border-gym-orange group-hover:text-gym-orange group-hover:shadow-xs transition-all shadow-2xs">
                    <MessageCircle className="w-4 h-4 stroke-[1.8]" />
                  </div>
                  <div>
                    <span className="block font-title text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      CONTATO COMERCIAL
                    </span>
                    <span className="block font-title text-sm sm:text-base font-bold text-gray-900 group-hover:text-gym-orange transition-colors">
                      (43) 99183-1438
                    </span>
                  </div>
                </a>
              </div>

              {/* Links para Portais */}
              <div className="pt-1">
                <p className="font-title text-xs text-gray-500">
                  Portais:{' '}
                  <a
                    href="https://gymclub.com.br/company/login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 underline hover:text-black"
                  >
                    Empresas
                  </a>{' '}
                  •{' '}
                  <a
                    href="https://gymclub.com.br/gym/login"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 underline hover:text-black"
                  >
                    Academias
                  </a>
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </footer>

    </>
  );
}


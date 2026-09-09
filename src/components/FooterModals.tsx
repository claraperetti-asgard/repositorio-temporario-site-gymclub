import { useState } from 'react';
import { X, ShieldCheck, FileText, Cookie, HelpCircle, Download, CheckCircle2 } from 'lucide-react';

export type FooterModalType = 'privacy' | 'terms' | 'cookies' | 'faq' | 'marketing' | null;

interface FooterModalsProps {
  type: FooterModalType;
  onClose: () => void;
}

export function FooterModals({ type, onClose }: FooterModalsProps) {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: true,
    marketing: false,
  });
  const [cookiesSaved, setCookiesSaved] = useState(false);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal: Política de Privacidade */}
        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gym-orange">
              <ShieldCheck className="w-7 h-7" />
              <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900">
                Política de Privacidade
              </h3>
            </div>
            <p className="font-title text-xs text-gray-500">
              ASGARD TECNOLOGIA LTDA • CNPJ 66.009.331/0001-09 • Atualizado em 2026
            </p>

            <div className="text-sm font-title font-light text-gray-700 space-y-3 leading-relaxed border-t border-gray-100 pt-4">
              <p>
                A <strong>GymClub</strong> (marca operada por ASGARD TECNOLOGIA LTDA) tem o compromisso de proteger a privacidade e os dados pessoais de seus usuários, empresas conveniadas e academias parceiras, em estrita conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)</strong>.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">1. Dados Coletados</h4>
              <p>
                Coletamos dados cadastrais (nome, CPF, e-mail, telefone), geolocalização no momento de check-in (com sua autorização explícita) e histórico de treinos para validação de acesso junto às academias parceiras.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">2. Finalidade do Tratamento</h4>
              <p>
                Os dados são utilizados exclusivamente para autenticar o uso do benefício, calcular o subsídio e coparticipação acordados com sua empresa e repassar o valor justo à academia onde o check-in foi realizado.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">3. Compartilhamento Seguro</h4>
              <p>
                Não comercializamos seus dados com terceiros sob nenhuma hipótese. As academias recebem apenas as informações estritamente necessárias para liberar sua entrada nas dependências físicas.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-2.5 rounded-full font-title text-xs font-bold hover:bg-gray-800 transition-colors"
              >
                Entendi e fechar
              </button>
            </div>
          </div>
        )}

        {/* Modal: Termos de Uso */}
        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gym-orange">
              <FileText className="w-7 h-7" />
              <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900">
                Termos de Uso
              </h3>
            </div>
            <p className="font-title text-xs text-gray-500">
              Condições gerais de utilização da plataforma GymClub
            </p>

            <div className="text-sm font-title font-light text-gray-700 space-y-3 leading-relaxed border-t border-gray-100 pt-4">
              <p>
                Bem-vindo ao <strong>GymClub</strong>. Ao utilizar nosso aplicativo ou portais web, você concorda com as disposições estabelecidas neste termo.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">1. Objeto do Serviço</h4>
              <p>
                O GymClub é uma plataforma de intermediação entre empresas contratantes, usuários beneficiários e a rede credenciada de academias e centros esportivos.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">2. Check-in e Utilização</h4>
              <p>
                O check-in é individual e intransferível. A liberação na catraca da academia é condicionada à validação presencial via QR Code ou confirmação de geolocalização no aplicativo.
              </p>
              <h4 className="font-bold text-gray-900 pt-2">3. Cancelamento e Flexibilidade</h4>
              <p>
                O colaborador tem total liberdade para pausar ou cancelar seu plano a qualquer momento pelo aplicativo, sem multas rescisórias ou carências abusivas.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-2.5 rounded-full font-title text-xs font-bold hover:bg-gray-800 transition-colors"
              >
                Aceitar e fechar
              </button>
            </div>
          </div>
        )}

        {/* Modal: Preferência de Cookies */}
        {type === 'cookies' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gym-orange">
              <Cookie className="w-7 h-7" />
              <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900">
                Preferência de Cookies
              </h3>
            </div>
            <p className="font-title text-xs text-gray-500">
              Personalize como os cookies são gerenciados no seu navegador
            </p>

            <div className="space-y-3 border-t border-gray-100 pt-4">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-title font-bold text-sm text-gray-900">Cookies Necessários</p>
                  <p className="font-title font-light text-xs text-gray-500">
                    Essenciais para a segurança, navegação e funcionamento dos formulários.
                  </p>
                </div>
                <span className="text-xs font-title font-semibold text-gray-400 uppercase">Sempre ativo</span>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-title font-bold text-sm text-gray-900">Cookies de Análise e Métricas</p>
                  <p className="font-title font-light text-xs text-gray-500">
                    Ajudam a entender o fluxo de navegação e aprimorar a experiência do site.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.analytics}
                  onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                  className="w-5 h-5 accent-gym-orange cursor-pointer"
                />
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-title font-bold text-sm text-gray-900">Cookies de Marketing</p>
                  <p className="font-title font-light text-xs text-gray-500">
                    Utilizados para exibir campanhas e conteúdos relevantes aos seus interesses.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={cookiePreferences.marketing}
                  onChange={(e) => setCookiePreferences({ ...cookiePreferences, marketing: e.target.checked })}
                  className="w-5 h-5 accent-gym-orange cursor-pointer"
                />
              </div>
            </div>

            {cookiesSaved && (
              <div className="flex items-center gap-2 text-green-700 bg-green-50 p-3 rounded-xl text-xs font-title">
                <CheckCircle2 className="w-4 h-4" />
                <span>Preferências de cookies salvas com sucesso!</span>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => {
                  setCookiesSaved(true);
                  setTimeout(() => onClose(), 800);
                }}
                className="bg-black text-white px-6 py-2.5 rounded-full font-title text-xs font-bold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Salvar preferências
              </button>
            </div>
          </div>
        )}

        {/* Modal: Central de Dúvidas (FAQ) */}
        {type === 'faq' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gym-orange">
              <HelpCircle className="w-7 h-7" />
              <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900">
                Central de Dúvidas (FAQ)
              </h3>
            </div>
            <p className="font-title text-xs text-gray-500">
              Perguntas frequentes de empresas, academias e colaboradores
            </p>

            <div className="space-y-3 border-t border-gray-100 pt-4 text-left">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="font-title font-bold text-sm text-gray-900">
                  Como funciona o pagamento para as empresas?
                </p>
                <p className="font-title font-light text-xs sm:text-sm text-gray-600 mt-1">
                  A empresa não paga mensalidade fixa pelo total de funcionários. Você define o valor de coparticipação que deseja subsidiar e paga <strong>apenas e exclusivamente</strong> por quem efetivamente treinar no mês.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="font-title font-bold text-sm text-gray-900">
                  Como o colaborador faz o check-in na academia?
                </p>
                <p className="font-title font-light text-xs sm:text-sm text-gray-600 mt-1">
                  Pelo app oficial (iOS e Android), o colaborador abre o aplicativo na recepção da academia parceira e realiza o check-in por geolocalização ou lendo o QR Code disponível no balcão.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="font-title font-bold text-sm text-gray-900">
                  Por que o GymClub é mais justo para as academias?
                </p>
                <p className="font-title font-light text-xs sm:text-sm text-gray-600 mt-1">
                  Repassamos até 85% do valor da diária, garantindo remuneração digna e sustentável para os parceiros esportivos locais.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200">
                <p className="font-title font-bold text-sm text-gray-900">
                  Como falar com o suporte humano?
                </p>
                <p className="font-title font-light text-xs sm:text-sm text-gray-600 mt-1">
                  Nosso time de atendimento está disponível no WhatsApp pelo número <strong>(43) 99183-1438</strong> de segunda a sexta, em horário comercial.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-2.5 rounded-full font-title text-xs font-bold hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

        {/* Modal: Materiais de Marketing */}
        {type === 'marketing' && (
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gym-orange">
              <Download className="w-7 h-7" />
              <h3 className="font-title text-xl sm:text-2xl font-bold text-gray-900">
                Materiais de Marketing & Brand Kit
              </h3>
            </div>
            <p className="font-title text-xs text-gray-500">
              Recursos oficiais da marca GymClub para empresas parceiras e academias credenciadas
            </p>

            <div className="space-y-3 border-t border-gray-100 pt-4 text-left">
              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-title font-bold text-sm text-gray-900">Kit de Endomarketing para RH</p>
                  <p className="font-title font-light text-xs text-gray-500">
                    Banners de e-mail, comunicado de lançamento do benefício e cartilhas em PDF para colaboradores.
                  </p>
                </div>
                <a
                  href="https://wa.me/5543991831438?text=Ol%C3%A1%2C%20gostaria%20de%20receber%20o%20Kit%20de%20Endomarketing%20do%20GymClub"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-title font-bold hover:bg-gray-800"
                >
                  Solicitar
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-between">
                <div>
                  <p className="font-title font-bold text-sm text-gray-900">Placas e Adesivos para Academias</p>
                  <p className="font-title font-light text-xs text-gray-500">
                    Display de balcão com QR Code, adesivos de porta e artes para redes sociais de parceiros credenciados.
                  </p>
                </div>
                <a
                  href="https://wa.me/5543991831438?text=Ol%C3%A1%2C%20sou%20academia%20parceira%20e%20gostaria%20do%20material%20de%20balc%C3%A3o"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-900 text-white px-4 py-2 rounded-xl text-xs font-title font-bold hover:bg-gray-800"
                >
                  Solicitar
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex justify-end">
              <button
                onClick={onClose}
                className="bg-black text-white px-6 py-2.5 rounded-full font-title text-xs font-bold hover:bg-gray-800 transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

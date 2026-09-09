import { ClubPlan, Modality, GymPartner, FAQItem, Testimonial } from '../types';

export const CLUB_PLANS: ClubPlan[] = [
  {
    id: 1,
    name: 'Clube 01',
    fullPrice: 59.90,
    color: '#ff9d3a',
    category: 'Iniciante',
    badge: 'Mais Acessível',
    description: 'Acesso a academias de musculação de bairro e treinos funcionais básicos.',
    features: [
      'Musculação essencial',
      'Treino funcional livre',
      'Check-in diário via aplicativo',
      'Cancelamento a qualquer momento'
    ],
    sampleGyms: ['Academias de Bairro Parceiras', 'Espaços Fitness Locais', 'Studios de Treino Funcional']
  },
  {
    id: 2,
    name: 'Clube 02',
    fullPrice: 99.90,
    color: '#ffb336',
    category: 'Econômico',
    badge: 'Popular',
    description: 'Redes regionais consolidadas, esteiras modernas, aulas coletivas e ginástica.',
    features: [
      'Tudo do Clube 01',
      'Aulas de FitDance e Zumba',
      'Avaliação física inicial gratuita',
      'Acesso a mais de 350 unidades'
    ],
    sampleGyms: ['Panobianco Fit', 'Pratique Fitness', 'Hammer Academia']
  },
  {
    id: 3,
    name: 'Clube 03',
    fullPrice: 139.90,
    color: '#ffaa5b',
    category: 'Intermediário',
    badge: 'Mais Escolhido',
    description: 'Ampliação para estúdios de pilates, artes marciais e musculação climatizada.',
    features: [
      'Tudo dos clubes anteriores',
      'Pilates solo e mat',
      'Muay Thai e Jiu-Jitsu',
      'Acesso interestadual em viagens'
    ],
    sampleGyms: ['Bluefit Básica', 'SkyFit', 'Team Nogueira Studios']
  },
  {
    id: 4,
    name: 'Clube 04',
    fullPrice: 189.90,
    color: '#f7c32a',
    category: 'Intermediário Plus',
    description: 'Boxes de Cross Training, natação livre e estúdios de spinning modernos.',
    features: [
      'Tudo dos clubes anteriores',
      'Cross Training e HIIT',
      'Aulas de Natação adulto/infantil',
      'Acesso livre aos finais de semana'
    ],
    sampleGyms: ['CrossFit Afiliados', 'Studio Velocity (unidades selecionadas)', 'AcquaFit']
  },
  {
    id: 5,
    name: 'Clube 05',
    fullPrice: 249.90,
    color: '#e8ec2b',
    category: 'Avançado',
    badge: 'Alta Procura',
    description: 'Redes premium com infraestrutura completa, musculação de alta performance e sauna.',
    features: [
      'Tudo dos clubes anteriores',
      'Áreas de relaxamento e sauna',
      'Equipamentos importados de biomecânica',
      'App de treinos personalizados'
    ],
    sampleGyms: ['Bluefit Premium', 'Selfit Gold', 'Alpha Fitness']
  },
  {
    id: 6,
    name: 'Clube 06',
    fullPrice: 309.90,
    color: '#d9f032',
    category: 'Avançado Plus',
    description: 'Arenas de Beach Tennis, quadras de futevôlei, estúdios boutique de yoga e recovery.',
    features: [
      'Tudo dos clubes anteriores',
      'Locação de quadras de Beach Tennis',
      'Yoga Studio e Meditação',
      'Crioterapia e recovery muscular'
    ],
    sampleGyms: ['Arena Beach Tennis SP/RJ', 'Mynd Studio', 'Vibe Yoga']
  },
  {
    id: 7,
    name: 'Clube 07',
    fullPrice: 359.90,
    color: '#c6f03a',
    category: 'Performance',
    description: 'Clubes poliesportivos de tradição e complexos com piscinas semiolímpicas aquecidas.',
    features: [
      'Tudo dos clubes anteriores',
      'Complexo poliesportivo completo',
      'Aulas com atletas de alta performance',
      'Acesso a nutricionista parceiro'
    ],
    sampleGyms: ['Companhia Athletica (Club 7)', 'Bio Ritmo (Seletivas)', 'Bodytech Express']
  },
  {
    id: 8,
    name: 'Clube 08',
    fullPrice: 399.90,
    color: '#b8ea40',
    category: 'Performance Plus',
    description: 'Studios de luxo com atendimento exclusivo, vestiários premium e toalhas cortesia.',
    features: [
      'Tudo dos clubes anteriores',
      'Toalharia e amenidades de luxo',
      'Pilates com aparelhos clássicos',
      'Estacionamento com manobrista cortesia'
    ],
    sampleGyms: ['Bio Ritmo Prime', 'Bodytech Standard', 'Studio Kore']
  },
  {
    id: 9,
    name: 'Clube 09',
    fullPrice: 449.90,
    color: '#c2f463',
    category: 'Elite',
    badge: 'Premium',
    description: 'As redes mais desejadas do país com acesso irrestrito em todas as capitais.',
    features: [
      'Tudo dos clubes anteriores',
      'Acesso sem restrição de horários',
      'Bodytech e Bio Ritmo Flagships',
      '1 convite por mês para amigo'
    ],
    sampleGyms: ['Bodytech Jardins/Leblon', 'Bio Ritmo Paulista', 'Sett Coaching']
  },
  {
    id: 10,
    name: 'Clube 10',
    fullPrice: 519.90,
    color: '#b1f24e',
    category: 'Elite Plus',
    description: 'Acesso VIP irrestrito, spas urbanos e centros de treinamento atlético avançado.',
    features: [
      'Tudo dos clubes anteriores',
      'Massoterapia e spa urbano (1x/mês)',
      'Aulas exclusivas com mestres certificados',
      'Atendimento concierge via WhatsApp'
    ],
    sampleGyms: ['Bodytech Iguatemi', 'Les Cinq Gym', 'Clube Hebraica Fitness']
  },
  {
    id: 11,
    name: 'Clube 11',
    fullPrice: 629.90,
    color: '#a5f144',
    category: 'Black VIP',
    description: 'Experiências boutique exclusivas, treinos monitorados por telemetria e personal.',
    features: [
      'Tudo dos clubes anteriores',
      'Sessões mensais de personal trainer',
      'Lounge executivo de trabalho e café',
      'Benefícios corporativos internacionais'
    ],
    sampleGyms: ['Reebok Sports Club', 'Bodytech VIP Concept', 'The Corner Boxing Club']
  },
  {
    id: 12,
    name: 'Clube 12',
    fullPrice: 739.90,
    color: '#a1f042',
    category: 'Black Supreme',
    badge: 'Máxima Exclusividade',
    description: 'O topo absoluto do bem-estar e da saúde: acesso a 100% da rede GymClub sem limites.',
    features: [
      'Acesso irrestrito a todas as 1.800+ academias',
      'Acompanhamento biométrico contínuo',
      'Convites ilimitados para acompanhante aos finais de semana',
      'Prioridade máxima de suporte e curadoria'
    ],
    sampleGyms: ['Toda a rede sem nenhuma restrição nacional', 'Spas de Luxo Afiliados', 'Centros Olímpicos de Treino']
  }
];

export const MODALITIES: Modality[] = [
  {
    id: 'musculacao',
    name: 'Musculação & Fitness',
    iconName: 'Dumbbell',
    count: '+1.200 unidades',
    description: 'Aparelhos modernos, pesos livres e treino cardiovascular.'
  },
  {
    id: 'pilates',
    name: 'Pilates & Postura',
    iconName: 'Activity',
    count: '+420 estúdios',
    description: 'Pilates solo e aparelhos para fortalecimento postural.'
  },
  {
    id: 'beach-tennis',
    name: 'Beach Tennis & Areia',
    iconName: 'Sun',
    count: '+180 arenas',
    description: 'Quadras de areia para beach tennis, futevôlei e vôlei.'
  },
  {
    id: 'crossfit',
    name: 'Cross Training & HIIT',
    iconName: 'Flame',
    count: '+310 boxes',
    description: 'Treinos de alta intensidade, levantamento e condicionamento.'
  },
  {
    id: 'natacao',
    name: 'Natação & Hidro',
    iconName: 'Waves',
    count: '+190 piscinas',
    description: 'Piscinas semiolímpicas aquecidas e aulas para todos os níveis.'
  },
  {
    id: 'lutas',
    name: 'Lutas & Artes Marciais',
    iconName: 'Shield',
    count: '+280 dojos',
    description: 'Jiu-Jitsu, Boxe, Muay Thai, Judô e defesa pessoal.'
  },
  {
    id: 'yoga',
    name: 'Yoga & Meditação',
    iconName: 'Heart',
    count: '+230 espaços',
    description: 'Hatha, Vinyasa, Ashtanga e práticas de respiração e mindfulness.'
  },
  {
    id: 'danca',
    name: 'Dança & Ritmos',
    iconName: 'Music',
    count: '+350 salas',
    description: 'Zumba, FitDance, Ballet fitness e ritmos para queimar calorias.'
  }
];

export const SAMPLE_PARTNER_GYMS: GymPartner[] = [
  { id: '1', name: 'Bluefit Paulista', city: 'São Paulo', state: 'SP', modality: 'Musculação', minClub: 3, rating: 4.8, badge: '24 Horas' },
  { id: '2', name: 'Bodytech Eldorado', city: 'São Paulo', state: 'SP', modality: 'Musculação & Spa', minClub: 9, rating: 4.9, badge: 'Premium' },
  { id: '3', name: 'Panobianco Centro', city: 'Campinas', state: 'SP', modality: 'Musculação', minClub: 2, rating: 4.7 },
  { id: '4', name: 'Arena Ibirapuera Beach', city: 'São Paulo', state: 'SP', modality: 'Beach Tennis', minClub: 6, rating: 4.9, badge: 'Quadras Cobertas' },
  { id: '5', name: 'SkyFit Savassi', city: 'Belo Horizonte', state: 'MG', modality: 'Musculação', minClub: 3, rating: 4.8 },
  { id: '6', name: 'Studio Velocity Moema', city: 'São Paulo', state: 'SP', modality: 'Spinning Boutique', minClub: 4, rating: 4.9 },
  { id: '7', name: 'Pratique Fitness Batel', city: 'Curitiba', state: 'PR', modality: 'Musculação & Aulas', minClub: 2, rating: 4.7 },
  { id: '8', name: 'Bio Ritmo Itaim', city: 'São Paulo', state: 'SP', modality: 'Alta Performance', minClub: 8, rating: 4.9, badge: 'Elite' },
  { id: '9', name: 'Team Nogueira Barra', city: 'Rio de Janeiro', state: 'RJ', modality: 'Lutas & Artes Marciais', minClub: 3, rating: 4.8 },
  { id: '10', name: 'AcquaFit Moinhos', city: 'Porto Alegre', state: 'RS', modality: 'Natação & Hidro', minClub: 4, rating: 4.8 },
  { id: '11', name: 'Vibe Yoga Copacabana', city: 'Rio de Janeiro', state: 'RJ', modality: 'Yoga & Meditação', minClub: 6, rating: 4.9 },
  { id: '12', name: 'CrossFit Posto 9', city: 'Rio de Janeiro', state: 'RJ', modality: 'Cross Training', minClub: 4, rating: 4.8 }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mariana Silveira',
    role: 'Head de Recursos Humanos',
    company: 'TechLog Soluções (450 colaboradores)',
    employeesCount: '450 colaboradores',
    economy: 'Economia de R$ 18.200 / mês',
    quote: 'No antigo benefício, pagávamos por quase 400 pessoas que nem abriam o app. No GymClub, eliminamos o desperdício no primeiro mês: pagamos estritamente pelos 110 colaboradores que treinam. O financeiro agradeceu de pé.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    author: 'Carlos Eduardo Mendes',
    role: 'Diretor Financeiro (CFO)',
    company: 'Grupo Varejo Sul (1.200 colaboradores)',
    employeesCount: '1.200 colaboradores',
    economy: 'Redução de 68% nos custos de benefício',
    quote: 'Taxa zero de adesão e sem surpresas na fatura. A previsibilidade orçamentária é fantástica, pois a empresa só arca com a coparticipação quando o colaborador valida o treino. É o modelo mais justo do mercado.',
    avatarUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    author: 'Renata Albuquerque',
    role: 'Gerente de Gente & Gestão',
    company: 'FinApex Investimentos (220 colaboradores)',
    employeesCount: '220 colaboradores',
    economy: '94% de aprovação interna',
    quote: 'Nossos colaboradores amaram a liberdade de escolher entre 12 clubes diferentes. Do estagiário à diretoria, cada um escolheu o plano perfeito e a adesão triplicou em relação ao benefício anterior.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Por que o GymClub não cobra por colaboradores que não usam?',
    answer: 'Ao contrário de plataformas tradicionais como Gympass/Wellhub e Totalpass, que faturam mensalidades fixas multiplicadas pelo número total de colaboradores da sua folha (mesmo os inativos), a tese do GymClub é 100% anti-desperdício: taxa zero de adesão, zero custo de manutenção de plataforma e cobrança gerada estritamente quando há check-in e validação de treino por um colaborador ativo.'
  },
  {
    id: 'faq-2',
    question: 'A empresa é obrigada a oferecer coparticipação financeira?',
    answer: 'Não! A sua empresa tem autonomia total. Você pode optar por coparticipação R$ 0,00 (apenas liberando o benefício corporativo com até 70% de desconto para o colaborador) ou definir qualquer valor fixo de incentivo por colaborador ativo (por exemplo, R$ 30, R$ 50 ou R$ 100/mês). Se o colaborador não treinar no mês, a sua empresa paga exatamente R$ 0,00.'
  },
  {
    id: 'faq-3',
    question: 'Existe contrato de fidelidade, carência ou multa de rescisão?',
    answer: 'Nenhum tipo de trava contratual ou multa. Acreditamos na parceria pelo valor real gerado para o RH e para a equipe. Se a qualquer momento sua empresa desejar pausar ou cancelar, não há cobrança residual de nenhuma natureza.'
  },
  {
    id: 'faq-4',
    question: 'Como o RH acompanha os check-ins e a fatura mensal?',
    answer: 'Você recebe acesso ao Portal GymClub Empresas, um painel em tempo real onde o RH visualiza adesão, engajamento saudável da equipe, colaboradores ativos e relatório analítico de faturamento transparente para conciliação contábil em um clique.'
  },
  {
    id: 'faq-5',
    question: 'Como os colaboradores ativam o plano e realizam check-in?',
    answer: 'É simples e 100% digital: após a empresa subir a lista de e-mails corporativos, os colaboradores baixam o app GymClub (iOS e Android), escolhem o Clube de sua preferência (Clube 01 a 12), cadastram o método de pagamento para a parte deles e realizam check-in via geolocalização ou QR Code na recepção da academia.'
  },
  {
    id: 'faq-6',
    question: 'O colaborador pode incluir familiares e dependentes?',
    answer: 'Sim! Cada colaborador pode cadastrar até 3 dependentes (cônjuge e filhos) usufruindo dos mesmos descontos corporativos exclusivos nos 12 clubes disponíveis.'
  },
  {
    id: 'faq-7',
    question: 'Qual é a rede de academias e modalidades disponíveis?',
    answer: 'São mais de 1.800 academias, estúdios e centros esportivos em todo o território nacional, englobando musculação, natação, crossfit, pilates, beach tennis, artes marciais, yoga, dança e muito mais, desde unidades regionais a redes renomadas de alto padrão.'
  }
];

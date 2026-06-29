/* =====================================================================
   K9 TRAINING - ARQUIVO EDITÁVEL PRINCIPAL
   ---------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para mudar:
   nome, slogan, WhatsApp, Instagram, horário, cidade,
   serviços, planos e fotos da galeria.

   Regras simples:
   - Edite apenas o que está DEPOIS dos dois pontos ":".
   - Mantenha as aspas "" e as vírgulas , como estão.
   - No WhatsApp, escreva apenas números, com código do país. Ex: 5511999998888
   - Salve o arquivo e recarregue a página (F5).
   ===================================================================== */

window.__K9TRAINING__ = {

  brand: {
    name: "K9 TRAINING",
    slogan: "Disciplina, vínculo e controle real.",
    whatsapp: "5511941500265",
    whatsappDisplay: "+55 11 94150-0265",
    instagram: "marcelo_k9_working_dogs",
    location: "São Paulo · Brasil",
    hours: "",
    email: ""
  },

  services: [
    {
      name: "Obediência básica",
      forWho: "Tutores, filhotes, cães jovens ou cães sem base.",
      includes: ["Sentado", "Fica", "Junto", "Chamada", "Controle de impulsos", "Caminhar sem puxar"],
      details:
        "Formação para iniciar no adestramento canino ou aprimorar a base de obediência. Trabalha fundamentos do treinamento, leitura comportamental, comunicação com o cão, manejo correto e aplicação prática dos comandos básicos.",
      detailList: ["Senta", "Deita", "Fica", "Junto", "Chamado", "Controle de impulsos", "Socialização", "Correção de comportamentos indesejados", "Técnicas de recompensa e motivação"],
      cta: "Quero começar"
    },
    {
      name: "Obediência avançada",
      forWho: "Cães com base, adestradores e alunos que querem evoluir tecnicamente.",
      includes: ["Foco com distrações", "Permanência", "Chamada forte", "Controle na rua", "Trabalho sem depender de comida"],
      details:
        "Trabalho voltado para precisão, foco e alta performance. O curso aborda marcadores e ferramentas para construir cães mais técnicos, concentrados e confiáveis em situações de maior exigência.",
      detailList: ["Target", "Caixa de referência", "Marcadores de comportamento", "Obediência avançada", "Precisão dos comandos", "Controle emocional", "Place elevado", "Saltos", "Retrieve", "Direcionamento à distância", "Controle sem guia"],
      cta: "Quero começar"
    },
    {
      name: "Guarda e proteção",
      forWho: "Cães com aptidão para guarda, sempre após avaliação de perfil.",
      includes: ["Defesa do condutor", "Guarda de ambiente", "Controle emocional", "Mordida técnica", "Soltura", "Obediência sob pressão"],
      details:
        "Treinamento desenvolvido de forma progressiva, respeitando o perfil comportamental do cão e priorizando equilíbrio, controle e segurança. O objetivo é formar um cão confiável para proteger quando necessário sem perder estabilidade no convívio diário.",
      detailList: ["Obediência aplicada à proteção", "Defesa do condutor", "Guarda de objetos e ambientes", "Controle em estresse", "Comandos de ataque, interrupção e soltura", "Controle antes, durante e após a proteção", "Socialização e estabilidade", "Ambientação em diferentes cenários"],
      cta: "Quero começar"
    },
    {
      name: "Detecção de entorpecentes",
      forWho: "Adestradores e profissionais que querem formar cães farejadores.",
      includes: ["Odor", "Busca", "Marcação passiva", "Motivação", "Cenários", "Leitura comportamental"],
      details:
        "Formação técnica para desenvolver cães detectores por meio de motivação, associação de odor e buscas em diferentes ambientes. O aluno aprende da introdução ao odor até a montagem de cenários de treinamento.",
      detailList: ["Fundamentos da detecção", "Instinto de caça e busca", "Brinquedos e recompensas", "Emparelhamento de odor", "Busca em caixas, malas, veículos e ambientes", "Evolução da dificuldade", "Correção de erros", "Manutenção do desempenho"],
      cta: "Quero começar"
    },
    {
      name: "Show Dog",
      forWho: "Adestradores e tutores que querem truques avançados e apresentações.",
      includes: ["Truques", "Marcadores", "Coordenação", "Foco", "Sequências", "Criatividade"],
      details:
        "Curso para ensinar exercícios de alta precisão, desenvolver truques avançados e fortalecer a comunicação entre cão e condutor. Une técnica, motivação e construção de comportamentos com fluidez.",
      detailList: ["Passar entre as pernas", "Giros", "Pulos", "Se arrastar", "Dar a pata", "Recuo", "Contornar objetos", "Permanência", "Sequências de truques", "Consciência corporal", "Construção de novos comportamentos"],
      cta: "Quero começar"
    },
    {
      name: "Consultoria online",
      forWho: "Tutores que precisam de orientação profissional sem sair de casa.",
      includes: ["Videochamada", "Avaliação", "Plano de ação", "Rotina", "Manejo", "Exercícios"],
      details:
        "Atendimento por videochamada com avaliação do comportamento do cão a partir das informações do tutor e, quando necessário, vídeos enviados previamente. Ao final, o tutor recebe um direcionamento claro para iniciar o trabalho de forma correta.",
      detailList: ["Identificação das causas", "Orientação de manejo", "Treinamento para o dia a dia", "Rotina personalizada", "Exercícios práticos", "Plano de ação por caso"],
      cta: "Quero começar"
    },
    {
      name: "Aula avulsa",
      forWho: "Tutores que querem orientação sem contratar um plano completo.",
      includes: ["Avaliação", "Exercícios práticos", "Manejo", "Comunicação", "Condução", "Dúvidas"],
      details:
        "Aula personalizada para corrigir comportamentos específicos, esclarecer dúvidas, aprender técnicas de treinamento ou receber uma avaliação profissional antes de iniciar um programa completo.",
      detailList: ["Avaliação completa", "Estratégia de trabalho", "Exercícios práticos", "Orientação ao tutor", "Correção de comportamentos específicos", "Duração de 45 a 50 minutos"],
      cta: "Quero começar"
    },
    {
      name: "Internato de adestramento",
      forWho: "Cães que precisam de treinamento intensivo ou reabilitação comportamental.",
      includes: ["Treinos diários", "Obediência", "Socialização", "Ambientação", "Passeios", "Adaptação"],
      details:
        "Durante o período de hospedagem, o cão realiza treinos conduzidos por adestrador profissional. A rotina é planejada conforme as necessidades do animal para gerar evolução consistente e personalizada.",
      detailList: ["Obediência básica e avançada", "Correção de comportamentos indesejados", "Socialização", "Ambientação", "Controle emocional", "Comportamento em passeios", "Aulas de adaptação para o tutor"],
      cta: "Quero começar"
    },
    {
      name: "Aulas a domicílio",
      forWho: "Tutores que querem treinamento no ambiente onde o cão vive.",
      includes: ["Casa do tutor", "Duas aulas semanais", "Obediência", "Educação", "Socialização", "Orientação"],
      details:
        "Treinamento personalizado na residência do tutor. Trabalha obediência, educação, controle de comportamento, socialização e problemas como puxar na guia, latidos excessivos, ansiedade, reatividade e desobediência.",
      detailList: ["Duas aulas por semana", "45 a 50 minutos por aula", "Treino no ambiente real", "Orientação ao tutor", "Continuidade no dia a dia", "Resultados duradouros"],
      cta: "Quero começar"
    }
  ],

  plans: [
    {
      name: "Plano Inicial",
      summary: "Avaliação + primeira aula.",
      ideal: "Ideal para conhecer o caso.",
      price: "Consultar valor"
    },
    {
      name: "Plano Obediência",
      summary: "Pacote de aulas.",
      ideal: "Ideal para construir uma base sólida.",
      price: "Consultar valor"
    },
    {
      name: "Plano Comportamento",
      summary: "Acompanhamento personalizado.",
      ideal: "Ideal para problemas específicos.",
      price: "Consultar valor"
    },
    {
      name: "Plano K9 Avançado",
      summary: "Trabalho técnico / funcional.",
      ideal: "Ideal para cães com mais energia ou exigência.",
      price: "Consultar valor"
    }
  ],

  gallery: [
    { img: "k9-1.webp", alt: "Guarda e proteção" },
    { img: "k9-2.webp", alt: "Guarda e proteção" },
    { img: "k9-3.webp", alt: "Guarda e proteção" },
    { img: "k9-4.webp", alt: "Detecção de entorpecentes" },
    { img: "k9-5.webp", alt: "Detecção de entorpecentes" },
    { img: "k9-6.webp", alt: "Obediência avançada" },
    { img: "k9-7.webp", alt: "Obediência avançada" },
    { img: "k9-8.webp", alt: "Obediência avançada" },
    { img: "k9-9.webp", alt: "Proteção no carro" }
  ],

  galleryFotos: [
    { img: "processo/proc-1.webp", alt: "Avaliação do cão" },
    { img: "processo/proc-2.webp", alt: "Obediência em plataforma" },
    { img: "processo/proc-3.webp", alt: "Trabalho de proteção" },
    { img: "processo/proc-4.webp", alt: "Treino individualizado" },
    { img: "processo/proc-5.webp", alt: "Defesa e controle" },
    { img: "processo/proc-6.webp", alt: "Guarda e proteção" }
  ],

  contact: {
    waTemplate:
      "Olá, quero agendar uma avaliação K9.\n" +
      "Nome: {nombre}\n" +
      "Telefone: {telefono}\n" +
      "Cão: {perro}\n" +
      "Idade / raça: {edadraza}\n" +
      "Principal problema: {problema}\n" +
      "Disponibilidade: {disponibilidad}"
  }
};

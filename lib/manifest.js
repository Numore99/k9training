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
    name: "MARCELO K9 WORKING DOGS",
    slogan: "Disciplina, vínculo e controle real.",
    whatsapp: "5511941500265",
    whatsappDisplay: "+55 11 94150-0265",
    instagram: "marcelo_k9_working_dogs",
    location: "São Paulo · Brasil",
    hours: "",
    email: ""
  },

  /* VÍDEOS DE CADA SERVIÇO (opcional — pode ter 1, 2 ou mais por serviço):
     - O botão "Ver vídeo(s)" só aparece nos serviços com a lista "videos" preenchida.
     - Coloque os arquivos .mp4 na pasta:  assets/video/serv/
     - Liste aqui só os NOMES dos arquivos, separados por vírgula. Exemplos:
         videos: ["guarda-protecao-1.mp4", "guarda-protecao-2.mp4"]   (dois vídeos)
         videos: ["show-dog-1.mp4"]                                   (um vídeo)
     - Para NÃO mostrar o botão num serviço, deixe a lista vazia:  videos: [] */
  services: [
    {
      name: "Obediência básica",
      videos: [],
      forWho: "Tutores, filhotes, cães jovens ou cães sem base.",
      includes: ["Sentado", "Fica", "Junto", "Chamada", "Controle de impulsos", "Caminhar sem puxar"],
      details:
        "Formação para iniciar no adestramento canino ou aprimorar a base de obediência. Trabalha fundamentos do treinamento, leitura comportamental, comunicação com o cão, manejo correto e aplicação prática dos comandos básicos.",
      detailList: ["Senta", "Deita", "Fica", "Junto", "Chamado", "Controle de impulsos", "Socialização", "Correção de comportamentos indesejados", "Técnicas de recompensa e motivação"],
      cta: "Quero começar"
    },
    {
      name: "Obediência avançada",
      videos: ["obediencia-avancada-1.mp4", "obediencia-avancada-2.mp4"],
      forWho: "Cães com base, adestradores e alunos que querem evoluir tecnicamente.",
      includes: ["Foco com distrações", "Permanência", "Chamada forte", "Controle na rua", "Trabalho sem depender de comida"],
      details:
        "Trabalho voltado para precisão, foco e alta performance. O curso aborda marcadores e ferramentas para construir cães mais técnicos, concentrados e confiáveis em situações de maior exigência.",
      detailList: ["Target", "Caixa de referência", "Marcadores de comportamento", "Obediência avançada", "Precisão dos comandos", "Controle emocional", "Place elevado", "Saltos", "Retrieve", "Direcionamento à distância", "Controle sem guia"],
      cta: "Quero começar"
    },
    {
      name: "Guarda e proteção",
      videos: ["guarda-protecao-1.mp4", "guarda-protecao-2.mp4"],
      forWho: "Cães com aptidão para guarda, sempre após avaliação de perfil.",
      includes: ["Defesa do condutor", "Guarda de ambiente", "Controle emocional", "Mordida técnica", "Soltura", "Obediência sob pressão"],
      details:
        "Treinamento desenvolvido de forma progressiva, respeitando o perfil comportamental do cão e priorizando equilíbrio, controle e segurança. O objetivo é formar um cão confiável para proteger quando necessário sem perder estabilidade no convívio diário.",
      detailList: ["Obediência aplicada à proteção", "Defesa do condutor", "Guarda de objetos e ambientes", "Controle em estresse", "Comandos de ataque, interrupção e soltura", "Controle antes, durante e após a proteção", "Socialização e estabilidade", "Ambientação em diferentes cenários"],
      cta: "Quero começar"
    },
    {
      name: "Detecção de entorpecentes",
      videos: ["deteccao-entorpecentes-1.mp4", "deteccao-entorpecentes-2.mp4"],
      forWho: "Adestradores e profissionais que querem formar cães farejadores.",
      includes: ["Odor", "Busca", "Marcação passiva", "Motivação", "Cenários", "Leitura comportamental"],
      details:
        "Formação técnica para desenvolver cães detectores por meio de motivação, associação de odor e buscas em diferentes ambientes. O aluno aprende da introdução ao odor até a montagem de cenários de treinamento.",
      detailList: ["Fundamentos da detecção", "Instinto de caça e busca", "Brinquedos e recompensas", "Emparelhamento de odor", "Busca em caixas, malas, veículos e ambientes", "Evolução da dificuldade", "Correção de erros", "Manutenção do desempenho"],
      cta: "Quero começar"
    },
    {
      name: "Show Dog",
      videos: ["show-dog-1.mp4", "show-dog-2.mp4"],
      forWho: "Adestradores e tutores que querem truques avançados e apresentações.",
      includes: ["Truques", "Marcadores", "Coordenação", "Foco", "Sequências", "Criatividade"],
      details:
        "Curso para ensinar exercícios de alta precisão, desenvolver truques avançados e fortalecer a comunicação entre cão e condutor. Une técnica, motivação e construção de comportamentos com fluidez.",
      detailList: ["Passar entre as pernas", "Giros", "Pulos", "Se arrastar", "Dar a pata", "Recuo", "Contornar objetos", "Permanência", "Sequências de truques", "Consciência corporal", "Construção de novos comportamentos"],
      cta: "Quero começar"
    },
    {
      name: "Consultoria online",
      videos: [],
      forWho: "Tutores que precisam de orientação profissional sem sair de casa.",
      includes: ["Videochamada", "Avaliação", "Plano de ação", "Rotina", "Manejo", "Exercícios"],
      details:
        "Atendimento por videochamada com avaliação do comportamento do cão a partir das informações do tutor e, quando necessário, vídeos enviados previamente. Ao final, o tutor recebe um direcionamento claro para iniciar o trabalho de forma correta.",
      detailList: ["Identificação das causas", "Orientação de manejo", "Treinamento para o dia a dia", "Rotina personalizada", "Exercícios práticos", "Plano de ação por caso"],
      cta: "Quero começar"
    }
  ],

  planGroups: [
    {
      id: "cursos",
      name: "Cursos para adestradores",
      description: "Formações técnicas para quem quer aprender, evoluir e trabalhar com cães.",
      plans: [
        {
          name: "Curso de formação de adestramento",
          summary: "Formação completa para aprender base, leitura do cão, manejo e condução prática.",
          ideal: "Para quem quer iniciar no adestramento com método, rotina de treino e fundamentos claros.",
          price: "R$ 5.000",
          priceDetail: "Curso de formação."
        },
        {
          name: "Curso de detecção de entorpecentes",
          summary: "Treinamento técnico de detecção, com odor, busca, marcação e progressão de cenários.",
          ideal: "Para adestradores que querem trabalhar da base até o ambiente real.",
          price: "R$ 8.000",
          priceDetail: "Da base até o ambiente real."
        },
        {
          name: "Curso de Show Dog",
          summary: "Construção de truques, precisão, sequências e comunicação entre cão e condutor.",
          ideal: "Para tutores e adestradores que querem trabalhar apresentação, foco e criatividade.",
          price: "R$ 5.000",
          priceDetail: "Curso técnico e prático."
        },
        {
          name: "Curso de obediência avançada para esporte",
          summary: "Obediência técnica com foco, precisão, controle emocional e comandos de maior exigência.",
          ideal: "Para quem quer evoluir o cão para esporte, performance e trabalho avançado.",
          price: "R$ 8.000",
          priceDetail: "Preparação para esporte."
        }
      ]
    },
    {
      id: "treinamento",
      name: "Treinamento para cães",
      description: "Planos práticos para desenvolver obediência, comportamento e proteção com acompanhamento profissional.",
      plans: [
        {
          name: "Treinamento de obediência",
          summary: "Aulas para construir comandos, rotina, foco e controle no dia a dia.",
          ideal: "Para tutores que querem um cão mais equilibrado, obediente e fácil de conduzir.",
          priceOptions: [
            { label: "1 aula", value: "R$ 250", detail: "Aula individual." },
            { label: "Pacote mensal 2 aulas por semana", value: "R$ 1.500/mês" },
            { label: "Pacote mensal 3 aulas por semana", value: "R$ 1.800/mês" }
          ]
        },
        {
          name: "Treinamento de guarda e proteção",
          summary: "Treinamento progressivo para proteção com equilíbrio, obediência e segurança.",
          ideal: "Para cães com perfil adequado, sempre após avaliação comportamental.",
          priceOptions: [
            { label: "1 aula", value: "R$ 250", detail: "Aula individual." },
            { label: "Pacote mensal 2 aulas por semana", value: "R$ 1.500/mês" },
            { label: "Pacote mensal 3 aulas por semana", value: "R$ 1.800/mês" }
          ]
        },
        {
          name: "Internato de adestramento",
          summary: "Treinamento intensivo no CT, com rotina planejada para evolução consistente.",
          ideal: "Para cães que precisam de treinamento intensivo ou reabilitação comportamental.",
          priceOptions: [
            { label: "Plano mensal", value: "R$ 3.500/mês", detail: "Treinamento intensivo no CT." },
            { label: "Plano trimestral", value: "R$ 2.500/mês", detail: "Permanência mínima de 3 meses." }
          ]
        },
        {
          name: "Aulas a domicílio",
          summary: "Treinamento no ambiente real onde o cão vive.",
          ideal: "Para tutores que querem acompanhamento em casa, com rotina e orientação prática.",
          priceOptions: [
            { label: "2 aulas por semana", value: "R$ 900/mês", detail: "Aulas semanais na residência do tutor." },
            { label: "3 aulas por semana", value: "R$ 1.200/mês", detail: "Aulas semanais na residência do tutor." }
          ]
        },
        {
          name: "Consultoria online",
          summary: "Atendimento por videochamada para avaliar o caso e organizar um plano de ação.",
          ideal: "Para tutores que precisam de orientação profissional sem sair de casa.",
          price: "Sob consulta",
          priceDetail: "Atendimento online."
        }
      ]
    }
  ],

  /* GALERIA DA HOME (somente fotos, sem vídeo).
     Para trocar uma foto: ponha o arquivo em assets/img/ e escreva o nome aqui.
     "alt" é a legenda que aparece ao passar o mouse. */
  gallery: [
    { img: "inicio-1.jpg", alt: "Treino de proteção", video: false },
    { img: "inicio-2.jpg", alt: "Cães de trabalho", video: false },
    { img: "inicio-3.jpg", alt: "Obediência e vínculo", video: false },
    { img: "inicio-4.jpg", alt: "Energia e controle", video: false },
    { img: "inicio-5.jpg", alt: "Mordida técnica", video: false },
    { img: "inicio-6.jpg", alt: "Socialização", video: false },
    { img: "inicio-8.jpg", alt: "Condução na guia", video: false }
  ],

  galleryFotos: [
    { img: "processo/proc-1.webp", alt: "Avaliação do cão", fit: "contain" },
    { img: "processo/proc-2.webp", alt: "Obediência em plataforma" },
    { img: "processo/proc-4.webp", alt: "Treino individualizado" },
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

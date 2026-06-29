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
    whatsapp: "550000000000",
    whatsappDisplay: "+55 00 00000-0000",
    instagram: "k9training",
    location: "Sua cidade · Brasil",
    hours: "Segunda a sábado · 08:00 - 20:00",
    email: ""
  },

  services: [
    {
      code: "S1",
      name: "Obediência básica",
      forWho: "Filhotes, cães jovens ou cães sem base.",
      includes: ["Sentado", "Fica", "Junto", "Chamada", "Controle de impulsos", "Caminhar sem puxar"],
      cta: "Quero começar"
    },
    {
      code: "S2",
      name: "Obediência avançada",
      forWho: "Cães com base ou tutores que querem mais controle.",
      includes: ["Foco com distrações", "Permanência", "Chamada forte", "Controle na rua", "Trabalho sem depender de comida"],
      cta: "Ver plano avançado"
    },
    {
      code: "S3",
      name: "Correção comportamental",
      forWho: "Cães reativos, ansiosos, inseguros ou descontrolados.",
      includes: ["Avaliação", "Manejo", "Rotina", "Limites claros", "Trabalho progressivo", "Acompanhamento do tutor"],
      note: "Trabalho sério e responsável. Não prometemos milagres: prometemos método.",
      cta: "Pedir avaliação"
    },
    {
      code: "S4",
      name: "Socialização guiada",
      forWho: "Cães com medo, ansiedade ou dificuldade com outros cães e pessoas.",
      includes: ["Exposição controlada", "Leitura corporal", "Manejo de distância", "Trabalho de calma"],
      cta: "Consultar disponibilidade"
    },
    {
      code: "S5",
      name: "K9 funcional / esportivo",
      forWho: "Cães com muita energia, tutores esportivos ou treinamento técnico.",
      includes: ["Foco", "Mordedor esportivo", "Condicionamento físico", "Obediência com estímulos", "Canalização de energia"],
      cta: "Falar pelo WhatsApp"
    },
    {
      code: "S6",
      name: "Plano para famílias",
      forWho: "Cães que convivem com crianças, visitas ou outros animais.",
      includes: ["Regras da casa", "Limites", "Rotina", "Calma", "Passeio", "Convivência"],
      cta: "Organizar uma avaliação"
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
    { img: "k9-1.jpg", alt: "Cão em obediência ao lado do condutor" },
    { img: "k9-2.jpg", alt: "Trabalho de guia na rua" },
    { img: "k9-3.jpg", alt: "Cão em foco com distração" },
    { img: "k9-4.jpg", alt: "Obediência no parque" },
    { img: "k9-5.jpg", alt: "Mordedor esportivo K9" },
    { img: "k9-6.jpg", alt: "Filhote aprendendo a sentar" },
    { img: "k9-7.jpg", alt: "Cão caminhando junto sem puxar" },
    { img: "k9-8.jpg", alt: "Trabalho urbano de controle" },
    { img: "k9-9.jpg", alt: "Cão adulto em permanência" }
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

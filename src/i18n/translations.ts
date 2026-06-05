export type Lang = "pt" | "en" | "fr" | "es";

export const LANGS: { code: Lang; label: string; flag: string }[] = [
  { code: "pt", label: "PT", flag: "🇵🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

export type Dict = {
  nav: { home: string; house: string; purpose: string; nature: string; activities: string; campaigns: string; location: string; book: string; openMenu: string; closeMenu: string };
  hero: { eyebrow: string; titleA: string; titleB: string; bookStay: string; whatsapp: string; campaignCta: string; scroll: string };
  house: {
    eyebrow: string; title: string; subtitle: string; tag: string;
    groups: { title: string; desc: string; alts: string[] }[];
  };
  purpose: { eyebrow: string; title: string; p1Part1: string; p1Part2: string; p2: string; p3: string; end: string };
  nature: {
    eyebrow: string; title: string; subtitle: string;
    p1: string; p2: string; tags: string[];
    alts: string[];
  };
  activities: {
    eyebrow: string; title: string; subtitle: string;
    prevImg: string; nextImg: string; goToImg: string; imageLabel: string;
    cards: { title: string; items: { name: string; details: string[] }[] }[];
  };
  campaign: {
    eyebrow: string; title: string; highlight: string; desc: string; videoNote: string;
    videoLabel: string;
    rooms: { name: string; day: string; week: string; perDay: string; perWeek: string }[];
    disclaimer1: string; disclaimer2: string;
    infoTitle: string; info: string[];
    bookCampaign: string;
    bookCampaignMsg: string;
  };
  location: {
    eyebrow: string; title: string; subtitle: string;
    distances: { km: string; to: string }[];
    addressLabel: string; openMaps: string; mapTitle: string;
  };
  footer: { tagline: string; contacts: string; phoneLabel: string; nav: string; copyright: string; signoff: string };
  whatsapp: { aria: string; defaultMsg: string };
  booking: {
    when: string; datesPlaceholder: string;
    who: string; adult: string; adults: string; child: string; children: string;
    adultsHint: string; childrenHint: string;
    promo: string; code: string; codePlaceholder: string;
    search: string; msgIntro: string;
  };
  langSwitcher: string;
};

const pt: Dict = {
  nav: { home: "Início", house: "A sua Casa", purpose: "Propósito", nature: "Natureza", activities: "Atividades", campaigns: "Campanhas", location: "Localização", book: "Reservar", openMenu: "Abrir menu", closeMenu: "Fechar menu" },
  hero: { eyebrow: "Agroturismo · Boutique Retreat", titleA: "A vida é de", titleB: "Momentos", bookStay: "Reservar Estadia", whatsapp: "WhatsApp", campaignCta: "Aproveite a Campanha · Muda os teus Planos", scroll: "scroll" },
  house: {
    eyebrow: "Alojamento", title: "A sua Casa",
    subtitle: "Cada espaço foi pensado para que se sinta em casa, rodeado pela tranquilidade do campo e pela autenticidade do Alentejo.",
    tag: "Três Experiências",
    groups: [
      { title: "Espaços Comuns", desc: "Salas, exteriores e zonas de convívio onde o tempo se demora.", alts: ["Sala comum com lareira", "Pátio exterior com mesa de madeira", "Jardim com rede de descanso"] },
      { title: "Quartos", desc: "Conforto sereno, decoração natural e o silêncio do campo.", alts: ["Quarto com dossel e madeiras", "Quarto com parede de pedra e vista", "Casa de banho rústica"] },
      { title: "Apartamento", desc: "Casa completa para estadias mais longas, com cozinha e sala.", alts: ["Cozinha e sala do apartamento", "Quarto do apartamento", "Sala do apartamento com pedra"] },
    ],
  },
  purpose: {
    eyebrow: "Manifesto", title: "Propósito.",
    p1Part1: "Queremos trazer a todos quantos nos visitam a consciência de que vale a pena valorizar a vida, a natureza",
    p1Part2: "!",
    p2: "Apreciar a biodiversidade presente no Agroturismo Xistos e pasmar-nos com a nossa pequenez e insignificância nesta grande cadeia de valor.",
    p3: "Temos por propósito tornar-nos humildes perante a grandiosidade deste maravilhoso ecossistema.",
    end: "Entre! Vai começar a viagem.",
  },
  nature: {
    eyebrow: "Ecossistema", title: "Natureza.",
    subtitle: "Descobrir, respirar, contemplar — no ritmo lento do Alentejo.",
    p1: "No Agroturismo Xistos, a natureza é vivida com calma, curiosidade e autenticidade. Entre o Bosque Mediterrânico, os trilhos, a ribeira, a charca, os animais do monte, as abelhas e o pôr do sol alentejano, cada visita convida a descobrir a biodiversidade local, respirar fundo e contemplar a paisagem com outro olhar.",
    p2: "Das atividades em família às caminhadas mais aventureiras, há experiências para todas as idades: visitas aos animais, caças ao tesouro, contacto com plantas, percursos pela ribeira, observação da fauna e flora, e momentos de pura tranquilidade no coração do Alentejo.",
    tags: ["Bosque Mediterrânico", "Ribeira", "Charca", "Animais", "Abelhas", "Pôr do Sol"],
    alts: ["Trilho no Bosque Mediterrânico", "Abelhas em flores de lavanda", "Rebanho ao pôr do sol no Alentejo", "Charca natural com reflexos", "Paisagem alentejana ao entardecer"],
  },
  activities: {
    eyebrow: "Experiências", title: "Atividades",
    subtitle: "Experiências autênticas para descobrir o Alentejo com outros olhos.",
    prevImg: "Imagem anterior", nextImg: "Imagem seguinte", goToImg: "Ir para imagem", imageLabel: "imagem",
    cards: [
      {
        title: "Workshops dos Sabores",
        items: [
          { name: 'Workshop na Herdade da Poupa – "Sabores da Terra – Vinho e Azeite"', details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sexta · Herdade da Poupa, Trindade, Beja"] },
          { name: 'Workshop com a Chefe Saudade Campeão – "Xistos à mesa"', details: ["Sessões até 12 pessoas — duração de 1h30", "De Segunda a Sábado · Agroturismo Xistos, Trindade, Beja"] },
          { name: 'Workshop com Manuel Oliveira – "Nós e as abelhas"', details: ["Sessões até 12 pessoas — duração de 1h30", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
      {
        title: "Workshops de Artesanato Local",
        items: [
          { name: 'Workshop com o Mestre Pica – "Mexer com o buinho"', details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sábado · Baleizão, Beja"] },
          { name: 'Workshop com Luthier Cardoso – "Artes e Ofícios – Viola campaniça"', details: ["Sessões até 8 pessoas — duração de 2h30", "De Segunda a Sábado · Trindade, Beja"] },
          { name: 'Workshop com António Mestre – "Mexer com barro"', details: ["Sessões até 8 pessoas — duração de 3h", "De Segunda a Sexta · Beringel, Beja"] },
          { name: 'Oficina de Tecelagem de Mértola – "A volta da lã e o tear"', details: ["Sessões até 8 pessoas — duração de 3h", "De Segunda a Sexta · Mértola"] },
        ],
      },
      {
        title: "Uma profissão nova, por um dia!",
        items: [
          { name: '"Ser pastor por um dia"', details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Sexta · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Ser agricultor por um dia"', details: ["Sessões até 12 pessoas — duração de 3h", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Ser veterinário por um dia"', details: ["Sessões até 2 pessoas — duração de 1h30", "De Segunda a Domingo · Por todo o Alentejo"] },
          { name: '"Ser investigador científico por um dia"', details: ["Sessões até 6 pessoas — duração até 1h30", "De Segunda a Domingo · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
    ],
  },
  campaign: {
    eyebrow: "Campanha", title: "Muda os teus planos!",
    highlight: "🌱 Aproveite 30% de desconto na sua estadia ao reservar 7 dias ou mais!",
    desc: "Esta campanha, focada em estadias de longa duração, é uma oportunidade para entender a importância da gestão do tempo — equilibrando trabalho e lazer — e perceber que vale a pena acreditar: é bom viver!",
    videoNote: "Por favor, visualize os vídeos abaixo, onde exemplificamos que o Agroturismo Xistos é um espaço para todos.",
    videoLabel: "Vídeo",
    rooms: [
      { name: "Quarto Duplo", day: "84 €", week: "588 €", perDay: "/ dia", perWeek: "/ semana" },
      { name: "Apartamento", day: "119 €", week: "883 €", perDay: "/ dia", perWeek: "/ semana" },
    ],
    disclaimer1: "O Agroturismo Xistos realiza o agendamento das experiências em parceria com empresários locais. O valor de cada atividade é definido pelo parceiro responsável, que também assume total responsabilidade pela sua realização. Para reservas, entre em contacto pelo telefone ",
    disclaimer2: ".",
    infoTitle: "Informações adicionais",
    info: [
      "Reserva mínima de uma semana",
      "Campanha ativa de março a dezembro de 2026, com interrupção em julho e agosto",
      "Utilização do espaço como a sua casa no campo, com possibilidade de realizar refeições e convidar amigos",
      "Serviço de compras semanal: fazemos as compras por si e entregamos no alojamento",
      "Não inclui pequeno-almoço",
      "Inclui internet",
    ],
    bookCampaign: "Reservar Campanha",
    bookCampaignMsg: "Olá! Quero reservar a campanha Muda os teus Planos.",
  },
  location: {
    eyebrow: "Como chegar", title: "Localização",
    subtitle: "O Agroturismo Xistos está localizado no distrito de Beja, entre Beja e Mértola, perto de Vale de Açor. Um refúgio rural no coração do Alentejo, com acesso fácil e envolvido pela tranquilidade da natureza.",
    distances: [
      { km: "19", to: "kms de Beja" },
      { km: "35", to: "kms de Mértola" },
    ],
    addressLabel: "Morada", openMaps: "Abrir no Google Maps", mapTitle: "Mapa Agroturismo Xistos",
  },
  footer: {
    tagline: "Um refúgio no Alentejo para viver a natureza com tempo, calma e autenticidade.",
    contacts: "Contactos", phoneLabel: "Telefone / WhatsApp", nav: "Navegação",
    copyright: "Todos os direitos reservados.", signoff: "Feito com calma no Alentejo.",
  },
  whatsapp: { aria: "Contactar via WhatsApp", defaultMsg: "Olá! Gostaria de saber mais sobre o Agroturismo Xistos." },
  booking: {
    when: "Quando", datesPlaceholder: "Entrada — Saída",
    who: "Quem", adult: "adulto", adults: "adultos", child: "criança", children: "crianças",
    adultsHint: "Desde 17 anos", childrenHint: "Até 16 anos",
    promo: "Promoção", code: "Código", codePlaceholder: "Insira o código",
    search: "Pesquisar", msgIntro: "Olá! Gostaria de pedir uma reserva:",
  },
  langSwitcher: "Idioma",
};

const en: Dict = {
  nav: { home: "Home", house: "Your House", purpose: "Purpose", nature: "Nature", activities: "Activities", campaigns: "Offers", location: "Location", book: "Book", openMenu: "Open menu", closeMenu: "Close menu" },
  hero: { eyebrow: "Agritourism · Boutique Retreat", titleA: "Life is made of", titleB: "Moments", bookStay: "Book your Stay", whatsapp: "WhatsApp", campaignCta: "Take advantage of the Campaign · Change your Plans", scroll: "scroll" },
  house: {
    eyebrow: "Accommodation", title: "Your House",
    subtitle: "Every space was designed so you feel at home, surrounded by the calm of the countryside and the authenticity of the Alentejo.",
    tag: "Three Experiences",
    groups: [
      { title: "Common Areas", desc: "Living rooms, outdoor areas and lounges where time slows down.", alts: ["Living room with fireplace", "Outdoor patio with wooden table", "Garden with hammock"] },
      { title: "Rooms", desc: "Serene comfort, natural decor and the silence of the countryside.", alts: ["Bedroom with canopy and wood", "Bedroom with stone wall and view", "Rustic bathroom"] },
      { title: "Apartment", desc: "A full house for longer stays, with kitchen and living room.", alts: ["Apartment kitchen and lounge", "Apartment bedroom", "Apartment lounge with stone"] },
    ],
  },
  purpose: {
    eyebrow: "Manifesto", title: "Purpose.",
    p1Part1: "We want to bring everyone who visits us the awareness that it is worth valuing life and nature",
    p1Part2: "!",
    p2: "Appreciate the biodiversity at Agroturismo Xistos and marvel at our smallness and insignificance in this great chain of value.",
    p3: "Our purpose is to become humble before the grandeur of this wonderful ecosystem.",
    end: "Come in! The journey begins.",
  },
  nature: {
    eyebrow: "Ecosystem", title: "Nature.",
    subtitle: "Discover, breathe, contemplate — at the slow pace of the Alentejo.",
    p1: "At Agroturismo Xistos, nature is lived with calm, curiosity and authenticity. Between the Mediterranean Forest, the trails, the stream, the pond, the farm animals, the bees and the Alentejo sunset, every visit invites you to discover local biodiversity, breathe deeply and contemplate the landscape with new eyes.",
    p2: "From family activities to more adventurous walks, there are experiences for all ages: visits to the animals, treasure hunts, contact with plants, walks along the stream, fauna and flora observation, and moments of pure tranquility in the heart of the Alentejo.",
    tags: ["Mediterranean Forest", "Stream", "Pond", "Animals", "Bees", "Sunset"],
    alts: ["Trail in the Mediterranean Forest", "Bees on lavender flowers", "Flock at sunset in the Alentejo", "Natural pond with reflections", "Alentejo landscape at dusk"],
  },
  activities: {
    eyebrow: "Experiences", title: "Activities",
    subtitle: "Authentic experiences to discover the Alentejo with new eyes.",
    prevImg: "Previous image", nextImg: "Next image", goToImg: "Go to image", imageLabel: "image",
    cards: [
      {
        title: "Flavours Workshops",
        items: [
          { name: 'Workshop at Herdade da Poupa – "Flavours of the Land – Wine and Olive Oil"', details: ["Sessions up to 12 people — 3h duration", "Monday to Friday · Herdade da Poupa, Trindade, Beja"] },
          { name: 'Workshop with Chef Saudade Campeão – "Xistos at the table"', details: ["Sessions up to 12 people — 1h30 duration", "Monday to Saturday · Agroturismo Xistos, Trindade, Beja"] },
          { name: 'Workshop with Manuel Oliveira – "Us and the bees"', details: ["Sessions up to 12 people — 1h30 duration", "Monday to Sunday · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
      {
        title: "Local Crafts Workshops",
        items: [
          { name: 'Workshop with Mestre Pica – "Working with reed"', details: ["Sessions up to 12 people — 3h duration", "Monday to Saturday · Baleizão, Beja"] },
          { name: 'Workshop with Luthier Cardoso – "Arts & Crafts – Campaniça guitar"', details: ["Sessions up to 8 people — 2h30 duration", "Monday to Saturday · Trindade, Beja"] },
          { name: 'Workshop with António Mestre – "Working with clay"', details: ["Sessions up to 8 people — 3h duration", "Monday to Friday · Beringel, Beja"] },
          { name: 'Mértola Weaving Workshop – "Around wool and the loom"', details: ["Sessions up to 8 people — 3h duration", "Monday to Friday · Mértola"] },
        ],
      },
      {
        title: "A new profession, for a day!",
        items: [
          { name: '"Be a shepherd for a day"', details: ["Sessions up to 12 people — 3h duration", "Monday to Friday · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Be a farmer for a day"', details: ["Sessions up to 12 people — 3h duration", "Monday to Sunday · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Be a vet for a day"', details: ["Sessions up to 2 people — 1h30 duration", "Monday to Sunday · Across the Alentejo"] },
          { name: '"Be a researcher for a day"', details: ["Sessions up to 6 people — up to 1h30", "Monday to Sunday · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
    ],
  },
  campaign: {
    eyebrow: "Campaign", title: "Change your plans!",
    highlight: "🌱 Get 30% off your stay when booking 7 days or more!",
    desc: "This campaign, focused on long stays, is an opportunity to understand the importance of managing time — balancing work and leisure — and to realise it is worth believing: life is good!",
    videoNote: "Please watch the videos below, where we show that Agroturismo Xistos is a place for everyone.",
    videoLabel: "Video",
    rooms: [
      { name: "Double Room", day: "€84", week: "€588", perDay: "/ day", perWeek: "/ week" },
      { name: "Apartment", day: "€119", week: "€883", perDay: "/ day", perWeek: "/ week" },
    ],
    disclaimer1: "Agroturismo Xistos schedules experiences in partnership with local entrepreneurs. The price of each activity is set by the responsible partner, who is also fully responsible for its delivery. For bookings, please call ",
    disclaimer2: ".",
    infoTitle: "Additional information",
    info: [
      "Minimum stay of one week",
      "Campaign active from March to December 2026, with a break in July and August",
      "Use the space like your country home, with the option to cook meals and invite friends",
      "Weekly shopping service: we do the shopping for you and deliver to your accommodation",
      "Breakfast not included",
      "Internet included",
    ],
    bookCampaign: "Book Campaign",
    bookCampaignMsg: "Hello! I'd like to book the Change Your Plans campaign.",
  },
  location: {
    eyebrow: "How to get here", title: "Location",
    subtitle: "Agroturismo Xistos is located in the Beja district, between Beja and Mértola, near Vale de Açor. A rural retreat in the heart of the Alentejo, with easy access and surrounded by nature's tranquility.",
    distances: [
      { km: "19", to: "km from Beja" },
      { km: "35", to: "km from Mértola" },
    ],
    addressLabel: "Address", openMaps: "Open in Google Maps", mapTitle: "Agroturismo Xistos Map",
  },
  footer: {
    tagline: "A retreat in the Alentejo to live nature with time, calm and authenticity.",
    contacts: "Contacts", phoneLabel: "Phone / WhatsApp", nav: "Navigation",
    copyright: "All rights reserved.", signoff: "Made calmly in the Alentejo.",
  },
  whatsapp: { aria: "Contact via WhatsApp", defaultMsg: "Hello! I'd like to know more about Agroturismo Xistos." },
  booking: {
    when: "When", datesPlaceholder: "Check-in — Check-out",
    who: "Who", adult: "adult", adults: "adults", child: "child", children: "children",
    adultsHint: "From 17 years", childrenHint: "Up to 16 years",
    promo: "Offer", code: "Code", codePlaceholder: "Enter code",
    search: "Search", msgIntro: "Hello! I'd like to request a booking:",
  },
  langSwitcher: "Language",
};

const fr: Dict = {
  nav: { home: "Accueil", house: "Votre Maison", purpose: "Vision", nature: "Nature", activities: "Activités", campaigns: "Offres", location: "Localisation", book: "Réserver", openMenu: "Ouvrir le menu", closeMenu: "Fermer le menu" },
  hero: { eyebrow: "Agrotourisme · Retraite Boutique", titleA: "La vie est faite de", titleB: "Moments", bookStay: "Réserver un séjour", whatsapp: "WhatsApp", campaignCta: "Profitez de la Campagne · Changez vos Plans", scroll: "défiler" },
  house: {
    eyebrow: "Hébergement", title: "Votre Maison",
    subtitle: "Chaque espace a été pensé pour que vous vous sentiez chez vous, entouré du calme de la campagne et de l'authenticité de l'Alentejo.",
    tag: "Trois Expériences",
    groups: [
      { title: "Espaces Communs", desc: "Salons, extérieurs et espaces de convivialité où le temps s'attarde.", alts: ["Salon avec cheminée", "Patio extérieur avec table en bois", "Jardin avec hamac"] },
      { title: "Chambres", desc: "Confort serein, décoration naturelle et le silence de la campagne.", alts: ["Chambre avec ciel de lit et bois", "Chambre avec mur en pierre et vue", "Salle de bain rustique"] },
      { title: "Appartement", desc: "Une maison complète pour les séjours plus longs, avec cuisine et salon.", alts: ["Cuisine et salon de l'appartement", "Chambre de l'appartement", "Salon de l'appartement en pierre"] },
    ],
  },
  purpose: {
    eyebrow: "Manifeste", title: "Vision.",
    p1Part1: "Nous voulons transmettre à tous ceux qui nous visitent la conscience qu'il vaut la peine de valoriser la vie, la nature",
    p1Part2: " !",
    p2: "Apprécier la biodiversité présente à l'Agroturismo Xistos et nous émerveiller de notre petitesse dans cette grande chaîne de valeur.",
    p3: "Notre but est de devenir humbles face à la grandeur de ce merveilleux écosystème.",
    end: "Entrez ! Le voyage commence.",
  },
  nature: {
    eyebrow: "Écosystème", title: "Nature.",
    subtitle: "Découvrir, respirer, contempler — au rythme lent de l'Alentejo.",
    p1: "À l'Agroturismo Xistos, la nature se vit avec calme, curiosité et authenticité. Entre la Forêt Méditerranéenne, les sentiers, le ruisseau, l'étang, les animaux, les abeilles et le coucher de soleil alentejano, chaque visite invite à découvrir la biodiversité locale, à respirer profondément et à contempler le paysage avec un autre regard.",
    p2: "Des activités en famille aux promenades plus aventureuses, il y a des expériences pour tous les âges : visites aux animaux, chasses au trésor, contact avec les plantes, parcours le long du ruisseau, observation de la faune et de la flore, et moments de pure tranquillité au cœur de l'Alentejo.",
    tags: ["Forêt Méditerranéenne", "Ruisseau", "Étang", "Animaux", "Abeilles", "Coucher de Soleil"],
    alts: ["Sentier dans la Forêt Méditerranéenne", "Abeilles sur des fleurs de lavande", "Troupeau au coucher du soleil dans l'Alentejo", "Étang naturel avec reflets", "Paysage alentejano au crépuscule"],
  },
  activities: {
    eyebrow: "Expériences", title: "Activités",
    subtitle: "Des expériences authentiques pour découvrir l'Alentejo avec un autre regard.",
    prevImg: "Image précédente", nextImg: "Image suivante", goToImg: "Aller à l'image", imageLabel: "image",
    cards: [
      {
        title: "Ateliers des Saveurs",
        items: [
          { name: 'Atelier à Herdade da Poupa – "Saveurs de la Terre – Vin et Huile d\'Olive"', details: ["Sessions jusqu'à 12 personnes — durée 3h", "Du lundi au vendredi · Herdade da Poupa, Trindade, Beja"] },
          { name: 'Atelier avec la Cheffe Saudade Campeão – "Xistos à table"', details: ["Sessions jusqu'à 12 personnes — durée 1h30", "Du lundi au samedi · Agroturismo Xistos, Trindade, Beja"] },
          { name: 'Atelier avec Manuel Oliveira – "Nous et les abeilles"', details: ["Sessions jusqu'à 12 personnes — durée 1h30", "Du lundi au dimanche · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
      {
        title: "Ateliers d'Artisanat Local",
        items: [
          { name: 'Atelier avec Mestre Pica – "Travailler le jonc"', details: ["Sessions jusqu'à 12 personnes — durée 3h", "Du lundi au samedi · Baleizão, Beja"] },
          { name: 'Atelier avec le Luthier Cardoso – "Arts et Métiers – Guitare campaniça"', details: ["Sessions jusqu'à 8 personnes — durée 2h30", "Du lundi au samedi · Trindade, Beja"] },
          { name: 'Atelier avec António Mestre – "Travailler l\'argile"', details: ["Sessions jusqu'à 8 personnes — durée 3h", "Du lundi au vendredi · Beringel, Beja"] },
          { name: 'Atelier de Tissage de Mértola – "Autour de la laine et du métier"', details: ["Sessions jusqu'à 8 personnes — durée 3h", "Du lundi au vendredi · Mértola"] },
        ],
      },
      {
        title: "Un nouveau métier, pour un jour !",
        items: [
          { name: '"Berger pour un jour"', details: ["Sessions jusqu'à 12 personnes — durée 3h", "Du lundi au vendredi · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Agriculteur pour un jour"', details: ["Sessions jusqu'à 12 personnes — durée 3h", "Du lundi au dimanche · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Vétérinaire pour un jour"', details: ["Sessions jusqu'à 2 personnes — durée 1h30", "Du lundi au dimanche · Partout dans l'Alentejo"] },
          { name: '"Chercheur scientifique pour un jour"', details: ["Sessions jusqu'à 6 personnes — jusqu'à 1h30", "Du lundi au dimanche · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
    ],
  },
  campaign: {
    eyebrow: "Campagne", title: "Changez vos plans !",
    highlight: "🌱 Profitez de 30% de remise sur votre séjour en réservant 7 jours ou plus !",
    desc: "Cette campagne, axée sur les longs séjours, est une occasion de comprendre l'importance de la gestion du temps — équilibrer travail et loisirs — et de réaliser qu'il vaut la peine de croire : la vie est belle !",
    videoNote: "Merci de visionner les vidéos ci-dessous, où nous montrons que l'Agroturismo Xistos est un espace pour tous.",
    videoLabel: "Vidéo",
    rooms: [
      { name: "Chambre Double", day: "84 €", week: "588 €", perDay: "/ jour", perWeek: "/ semaine" },
      { name: "Appartement", day: "119 €", week: "883 €", perDay: "/ jour", perWeek: "/ semaine" },
    ],
    disclaimer1: "L'Agroturismo Xistos organise les expériences en partenariat avec des entrepreneurs locaux. Le prix de chaque activité est défini par le partenaire responsable, qui assume également la responsabilité de sa réalisation. Pour les réservations, contactez le ",
    disclaimer2: ".",
    infoTitle: "Informations complémentaires",
    info: [
      "Séjour minimum d'une semaine",
      "Campagne active de mars à décembre 2026, avec une interruption en juillet et août",
      "Utilisation de l'espace comme votre maison à la campagne, avec possibilité de cuisiner et d'inviter des amis",
      "Service de courses hebdomadaire : nous faisons les courses pour vous et les livrons à votre hébergement",
      "Petit-déjeuner non inclus",
      "Internet inclus",
    ],
    bookCampaign: "Réserver la Campagne",
    bookCampaignMsg: "Bonjour ! Je souhaite réserver la campagne Changez vos Plans.",
  },
  location: {
    eyebrow: "Comment venir", title: "Localisation",
    subtitle: "L'Agroturismo Xistos est situé dans le district de Beja, entre Beja et Mértola, près de Vale de Açor. Un refuge rural au cœur de l'Alentejo, facilement accessible et entouré de la tranquillité de la nature.",
    distances: [
      { km: "19", to: "km de Beja" },
      { km: "35", to: "km de Mértola" },
    ],
    addressLabel: "Adresse", openMaps: "Ouvrir dans Google Maps", mapTitle: "Carte Agroturismo Xistos",
  },
  footer: {
    tagline: "Un refuge en Alentejo pour vivre la nature avec temps, calme et authenticité.",
    contacts: "Contacts", phoneLabel: "Téléphone / WhatsApp", nav: "Navigation",
    copyright: "Tous droits réservés.", signoff: "Fait calmement en Alentejo.",
  },
  whatsapp: { aria: "Contacter via WhatsApp", defaultMsg: "Bonjour ! Je souhaite en savoir plus sur l'Agroturismo Xistos." },
  langSwitcher: "Langue",
};

const es: Dict = {
  nav: { home: "Inicio", house: "Tu Casa", purpose: "Propósito", nature: "Naturaleza", activities: "Actividades", campaigns: "Ofertas", location: "Ubicación", book: "Reservar", openMenu: "Abrir menú", closeMenu: "Cerrar menú" },
  hero: { eyebrow: "Agroturismo · Retiro Boutique", titleA: "La vida son", titleB: "Momentos", bookStay: "Reservar Estancia", whatsapp: "WhatsApp", campaignCta: "Aprovecha la Campaña · Cambia tus Planes", scroll: "scroll" },
  house: {
    eyebrow: "Alojamiento", title: "Tu Casa",
    subtitle: "Cada espacio ha sido pensado para que te sientas como en casa, rodeado de la tranquilidad del campo y la autenticidad del Alentejo.",
    tag: "Tres Experiencias",
    groups: [
      { title: "Espacios Comunes", desc: "Salones, exteriores y zonas de convivencia donde el tiempo se demora.", alts: ["Salón con chimenea", "Patio exterior con mesa de madera", "Jardín con hamaca"] },
      { title: "Habitaciones", desc: "Confort sereno, decoración natural y el silencio del campo.", alts: ["Habitación con dosel y maderas", "Habitación con pared de piedra y vistas", "Baño rústico"] },
      { title: "Apartamento", desc: "Casa completa para estancias más largas, con cocina y salón.", alts: ["Cocina y salón del apartamento", "Habitación del apartamento", "Salón del apartamento con piedra"] },
    ],
  },
  purpose: {
    eyebrow: "Manifiesto", title: "Propósito.",
    p1Part1: "Queremos transmitir a todos los que nos visitan la conciencia de que vale la pena valorar la vida, la naturaleza",
    p1Part2: "!",
    p2: "Apreciar la biodiversidad presente en el Agroturismo Xistos y asombrarnos con nuestra pequeñez en esta gran cadena de valor.",
    p3: "Tenemos como propósito volvernos humildes ante la grandeza de este maravilloso ecosistema.",
    end: "¡Entra! El viaje va a comenzar.",
  },
  nature: {
    eyebrow: "Ecosistema", title: "Naturaleza.",
    subtitle: "Descubrir, respirar, contemplar — al ritmo lento del Alentejo.",
    p1: "En el Agroturismo Xistos, la naturaleza se vive con calma, curiosidad y autenticidad. Entre el Bosque Mediterráneo, los senderos, el arroyo, la charca, los animales del campo, las abejas y el atardecer alentejano, cada visita invita a descubrir la biodiversidad local, respirar hondo y contemplar el paisaje con otra mirada.",
    p2: "Desde actividades en familia hasta caminatas más aventureras, hay experiencias para todas las edades: visitas a los animales, búsquedas del tesoro, contacto con plantas, recorridos por el arroyo, observación de fauna y flora, y momentos de pura tranquilidad en el corazón del Alentejo.",
    tags: ["Bosque Mediterráneo", "Arroyo", "Charca", "Animales", "Abejas", "Atardecer"],
    alts: ["Sendero en el Bosque Mediterráneo", "Abejas en flores de lavanda", "Rebaño al atardecer en el Alentejo", "Charca natural con reflejos", "Paisaje alentejano al atardecer"],
  },
  activities: {
    eyebrow: "Experiencias", title: "Actividades",
    subtitle: "Experiencias auténticas para descubrir el Alentejo con otros ojos.",
    prevImg: "Imagen anterior", nextImg: "Imagen siguiente", goToImg: "Ir a imagen", imageLabel: "imagen",
    cards: [
      {
        title: "Talleres de Sabores",
        items: [
          { name: 'Taller en Herdade da Poupa – "Sabores de la Tierra – Vino y Aceite"', details: ["Sesiones hasta 12 personas — duración 3h", "De lunes a viernes · Herdade da Poupa, Trindade, Beja"] },
          { name: 'Taller con la Chef Saudade Campeão – "Xistos a la mesa"', details: ["Sesiones hasta 12 personas — duración 1h30", "De lunes a sábado · Agroturismo Xistos, Trindade, Beja"] },
          { name: 'Taller con Manuel Oliveira – "Nosotros y las abejas"', details: ["Sesiones hasta 12 personas — duración 1h30", "De lunes a domingo · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
      {
        title: "Talleres de Artesanía Local",
        items: [
          { name: 'Taller con Mestre Pica – "Trabajar el junco"', details: ["Sesiones hasta 12 personas — duración 3h", "De lunes a sábado · Baleizão, Beja"] },
          { name: 'Taller con Luthier Cardoso – "Artes y Oficios – Guitarra campaniça"', details: ["Sesiones hasta 8 personas — duración 2h30", "De lunes a sábado · Trindade, Beja"] },
          { name: 'Taller con António Mestre – "Trabajar con barro"', details: ["Sesiones hasta 8 personas — duración 3h", "De lunes a viernes · Beringel, Beja"] },
          { name: 'Taller de Tejido de Mértola – "En torno a la lana y el telar"', details: ["Sesiones hasta 8 personas — duración 3h", "De lunes a viernes · Mértola"] },
        ],
      },
      {
        title: "¡Una nueva profesión, por un día!",
        items: [
          { name: '"Ser pastor por un día"', details: ["Sesiones hasta 12 personas — duración 3h", "De lunes a viernes · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Ser agricultor por un día"', details: ["Sesiones hasta 12 personas — duración 3h", "De lunes a domingo · Agroturismo Xistos, Trindade, Beja"] },
          { name: '"Ser veterinario por un día"', details: ["Sesiones hasta 2 personas — duración 1h30", "De lunes a domingo · Por todo el Alentejo"] },
          { name: '"Ser investigador científico por un día"', details: ["Sesiones hasta 6 personas — hasta 1h30", "De lunes a domingo · Agroturismo Xistos, Trindade, Beja"] },
        ],
      },
    ],
  },
  campaign: {
    eyebrow: "Campaña", title: "¡Cambia tus planes!",
    highlight: "🌱 ¡Aprovecha un 30% de descuento en tu estancia al reservar 7 días o más!",
    desc: "Esta campaña, centrada en estancias largas, es una oportunidad para entender la importancia de gestionar el tiempo — equilibrando trabajo y ocio — y darse cuenta de que vale la pena creer: ¡es bueno vivir!",
    videoNote: "Por favor, mira los vídeos a continuación, donde mostramos que el Agroturismo Xistos es un espacio para todos.",
    videoLabel: "Vídeo",
    rooms: [
      { name: "Habitación Doble", day: "84 €", week: "588 €", perDay: "/ día", perWeek: "/ semana" },
      { name: "Apartamento", day: "119 €", week: "883 €", perDay: "/ día", perWeek: "/ semana" },
    ],
    disclaimer1: "El Agroturismo Xistos organiza las experiencias en colaboración con empresarios locales. El precio de cada actividad lo define el socio responsable, que también asume la total responsabilidad de su realización. Para reservas, contacta por teléfono al ",
    disclaimer2: ".",
    infoTitle: "Información adicional",
    info: [
      "Reserva mínima de una semana",
      "Campaña activa de marzo a diciembre de 2026, con interrupción en julio y agosto",
      "Uso del espacio como tu casa en el campo, con posibilidad de cocinar e invitar a amigos",
      "Servicio de compra semanal: hacemos la compra por ti y la entregamos en el alojamiento",
      "No incluye desayuno",
      "Incluye internet",
    ],
    bookCampaign: "Reservar Campaña",
    bookCampaignMsg: "¡Hola! Quiero reservar la campaña Cambia tus Planes.",
  },
  location: {
    eyebrow: "Cómo llegar", title: "Ubicación",
    subtitle: "El Agroturismo Xistos está ubicado en el distrito de Beja, entre Beja y Mértola, cerca de Vale de Açor. Un refugio rural en el corazón del Alentejo, con fácil acceso y rodeado por la tranquilidad de la naturaleza.",
    distances: [
      { km: "19", to: "km desde Beja" },
      { km: "35", to: "km desde Mértola" },
    ],
    addressLabel: "Dirección", openMaps: "Abrir en Google Maps", mapTitle: "Mapa Agroturismo Xistos",
  },
  footer: {
    tagline: "Un refugio en el Alentejo para vivir la naturaleza con tiempo, calma y autenticidad.",
    contacts: "Contactos", phoneLabel: "Teléfono / WhatsApp", nav: "Navegación",
    copyright: "Todos los derechos reservados.", signoff: "Hecho con calma en el Alentejo.",
  },
  whatsapp: { aria: "Contactar por WhatsApp", defaultMsg: "¡Hola! Me gustaría saber más sobre el Agroturismo Xistos." },
  langSwitcher: "Idioma",
};

export const translations: Record<Lang, Dict> = { pt, en, fr, es };

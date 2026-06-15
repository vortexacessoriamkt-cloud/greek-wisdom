(() => {
  "use strict";

  const STORAGE_KEY = "greek_wisdom_state_v4";
  const LANG_BASE = { ptBR: "pt", ptPT: "pt", enUS: "en", esES: "es", esLA: "es", pt: "pt", en: "en", es: "es" };
  const LANG_LABEL = {
    ptBR: "Português Brasil",
    ptPT: "Português Portugal",
    enUS: "English US",
    esES: "Español España",
    esLA: "Español Latinoamérica",
    pt: "Português",
    en: "English",
    es: "Español"
  };

  const authors = {
    all: { pt: "Todos", en: "All", es: "Todos", icon: "Ω", period: "" },
    socrates: { pt: "Sócrates", en: "Socrates", es: "Sócrates", icon: "Σ", period: "Século V a.C." },
    plato: { pt: "Platão", en: "Plato", es: "Platón", icon: "Π", period: "Século IV a.C." },
    aristotle: { pt: "Aristóteles", en: "Aristotle", es: "Aristóteles", icon: "Α", period: "Século IV a.C." },
    epicurus: { pt: "Epicuro", en: "Epicurus", es: "Epicuro", icon: "Ε", period: "Século IV a.C." },
    zeno: { pt: "Zenão", en: "Zeno", es: "Zenón", icon: "Ζ", period: "Século IV a.C." },
    heraclitus: { pt: "Heráclito", en: "Heraclitus", es: "Heráclito", icon: "Η", period: "Século VI a.C." },
    democritus: { pt: "Demócrito", en: "Democritus", es: "Demócrito", icon: "Δ", period: "Século V a.C." },
    pythagoras: { pt: "Pitágoras", en: "Pythagoras", es: "Pitágoras", icon: "Πθ", period: "Século VI a.C." },
    nike: { pt: "Nike", en: "Nike", es: "Nike", icon: "ΝΚ", period: "Arquétipo mitológico" },
    persephone: { pt: "Perséfone", en: "Persephone", es: "Perséfone", icon: "ΠΣ", period: "Arquétipo mitológico" },
    hecate: { pt: "Hécate", en: "Hecate", es: "Hécate", icon: "ΗΚ", period: "Arquétipo mitológico" },
    eros: { pt: "Eros", en: "Eros", es: "Eros", icon: "ΕΡ", period: "Arquétipo mitológico" },
    hermes: { pt: "Hermes", en: "Hermes", es: "Hermes", icon: "☿", period: "Arquétipo mitológico" },
    hera: { pt: "Hera", en: "Hera", es: "Hera", icon: "ΗΡ", period: "Arquétipo mitológico" },
    hephaestus: { pt: "Hefesto", en: "Hephaestus", es: "Hefesto", icon: "ΗΦ", period: "Arquétipo mitológico" },
    artemis: { pt: "Ártemis", en: "Artemis", es: "Artemisa", icon: "ΑΡ", period: "Arquétipo mitológico" },
    hestia: { pt: "Héstia", en: "Hestia", es: "Hestia", icon: "ΕΣ", period: "Arquétipo mitológico" },
    athena: { pt: "Atena", en: "Athena", es: "Atenea", icon: "ΑΘ", period: "Arquétipo mitológico" },
    apollo: { pt: "Apolo", en: "Apollo", es: "Apolo", icon: "☉", period: "Arquétipo mitológico" },
    dionysus: { pt: "Dionísio", en: "Dionysus", es: "Dionisio", icon: "Δι", period: "Arquétipo mitológico" },
    hades: { pt: "Hades", en: "Hades", es: "Hades", icon: "ΗΔ", period: "Arquétipo mitológico" },
    demeter: { pt: "Deméter", en: "Demeter", es: "Deméter", icon: "ΔΜ", period: "Arquétipo mitológico" },
    zeus: { pt: "Zeus", en: "Zeus", es: "Zeus", icon: "ΖΣ", period: "Arquétipo mitológico" },
    aphrodite: { pt: "Afrodite", en: "Aphrodite", es: "Afrodita", icon: "♀", period: "Arquétipo mitológico" },
    ares: { pt: "Ares", en: "Ares", es: "Ares", icon: "♂", period: "Arquétipo mitológico" },
    poseidon: { pt: "Poseidon", en: "Poseidon", es: "Poseidón", icon: "Ψ", period: "Arquétipo mitológico" },
    asclepius: { pt: "Asclépio", en: "Asclepius", es: "Asclepio", icon: "ΑΣ", period: "Arquétipo mitológico" }
  };

  const order = [
    "all",
    "socrates",
    "plato",
    "aristotle",
    "epicurus",
    "zeno",
    "heraclitus",
    "democritus",
    "pythagoras",
    "nike",
    "persephone",
    "hecate",
    "eros",
    "hermes",
    "hera",
    "hephaestus",
    "artemis",
    "hestia",
    "athena",
    "apollo",
    "dionysus",
    "hades",
    "demeter",
    "zeus",
    "aphrodite",
    "ares",
    "poseidon",
    "asclepius"
  ];

  const DEITY_IMAGES = {
    nike: "assets/deities/nike.png",
    persephone: "assets/deities/persephone.png",
    hecate: "assets/deities/hecate.png",
    eros: "assets/deities/eros.png",
    dionysus: "assets/deities/dionysus.png",
    hermes: "assets/deities/hermes.png",
    hera: "assets/deities/hera.png",
    hephaestus: "assets/deities/hephaestus.png",
    artemis: "assets/deities/artemis.png",
    hestia: "assets/deities/hestia.png",
    ares: "assets/deities/ares.png",
    athena: "assets/deities/athena.png",
    apollo: "assets/deities/apollo.png",
    hades: "assets/deities/hades.png",
    demeter: "assets/deities/demeter.png",
    poseidon: "assets/deities/poseidon.png",
    asclepius: "assets/deities/asclepius.png",
    zeus: "assets/deities/zeus.png",
    aphrodite: "assets/deities/aphrodite.png",
    socrates: "assets/deities/athena.png",
    plato: "assets/deities/athena.png",
    aristotle: "assets/deities/athena.png",
    epicurus: "assets/deities/aphrodite.png",
    zeno: "assets/deities/zeus.png",
    heraclitus: "assets/deities/poseidon.png",
    democritus: "assets/deities/hades.png",
    pythagoras: "assets/deities/apollo.png"
  };

  const rows = [
    ["socrates", "Conhecimento", "Autodomínio", "Vence primeiro a tua própria desordem.", "First conquer your own disorder.", "Vence primero tu propio desorden.", "Inspiração socrática: antes de convencer o mundo, organiza a própria alma."],
    ["socrates", "Conhecimento", "Exame", "Questiona o caminho, mas continua caminhando.", "Question the path, but keep walking.", "Cuestiona el camino, pero sigue caminando.", "O exame socrático não paralisa; ele afia a direção da vida."],
    ["socrates", "Conhecimento", "Humildade", "Aprender é trocar orgulho por força.", "To learn is to trade pride for strength.", "Aprender es cambiar orgullo por fuerza.", "A humildade intelectual vira potência quando abre espaço para crescer."],
    ["socrates", "Ética", "Virtude", "A verdadeira sabedoria começa quando reconhecemos a ignorância.", "True wisdom begins when we recognize ignorance.", "La verdadera sabiduría empieza cuando reconocemos la ignorancia.", "O método socrático abre espaço para perguntas melhores ao admitir limites."],
    ["socrates", "Ética", "Alma", "Cuida da tua alma antes de cuidar da tua aparência.", "Care for your soul before caring for your appearance.", "Cuida tu alma antes de cuidar tu apariencia.", "Para Sócrates, a vida pública e privada começa pelo cultivo interior."],
    ["socrates", "Comunicação", "Diálogo", "Não posso ensinar ninguém; apenas convidar a pensar.", "I cannot teach anyone; I can only invite them to think.", "No puedo enseñar a nadie; solo invitarlo a pensar.", "Paráfrase do espírito socrático: conhecimento vivo nasce do diálogo."],

    ["plato", "Justiça", "Harmonia", "A justiça é a harmonia da alma.", "Justice is the harmony of the soul.", "La justicia es la armonía del alma.", "Em Platão, justiça é ordem entre razão, coragem e desejo."],
    ["plato", "Conhecimento", "Educação", "A direção da educação molda o futuro da alma.", "The direction of education shapes the soul's future.", "La dirección de la educación moldea el futuro del alma.", "Ideia inspirada na República: aquilo que educa no início orienta a visão de mundo."],
    ["plato", "Amor", "Bem", "O amor é o desejo de possuir o bem para sempre.", "Love is the desire to possess the good forever.", "El amor es el deseo de poseer el bien para siempre.", "No Banquete, o amor move a alma em direção ao belo e ao bem."],
    ["plato", "Coragem", "Discernimento", "Coragem é saber o que não se deve temer.", "Courage is knowing what should not be feared.", "El coraje es saber qué no debe temerse.", "A coragem platônica depende de juízo educado, não de impulso."],
    ["plato", "Conhecimento", "Ideias", "Escolhe uma ideia digna e organiza tua vida ao redor dela.", "Choose a worthy idea and organize your life around it.", "Elige una idea digna y organiza tu vida alrededor de ella.", "Inspiração platônica: uma vida forte precisa de um norte maior que o impulso do momento."],
    ["plato", "Conhecimento", "Ignorância", "A ignorância é a raiz de muitos males.", "Ignorance is the root of many evils.", "La ignorancia es raíz de muchos males.", "Platão trata ignorância como desordem da alma e da cidade."],

    ["aristotle", "Ética", "Hábito", "Repete o que te fortalece até virar caráter.", "Repeat what strengthens you until it becomes character.", "Repite lo que te fortalece hasta que se vuelva carácter.", "Inspiração aristotélica: a virtude aparece quando a prática vira segunda natureza."],
    ["aristotle", "Ética", "Excelência", "A excelência não é um ato, mas um hábito.", "Excellence is not an act, but a habit.", "La excelencia no es un acto, sino un hábito.", "Paráfrase aristotélica: caráter se constrói por prática consistente."],
    ["aristotle", "Ética", "Felicidade", "A felicidade depende de nós mesmos.", "Happiness depends upon ourselves.", "La felicidad depende de nosotros mismos.", "Na Ética a Nicômaco, felicidade é atividade da alma conforme a virtude."],
    ["aristotle", "Ética", "Medida", "O meio termo protege a virtude dos excessos.", "The mean protects virtue from excess.", "El término medio protege la virtud de los excesos.", "A doutrina do meio termo busca equilíbrio entre falta e excesso."],
    ["aristotle", "Conhecimento", "Autoconhecimento", "Conhecer a si mesmo é começo de toda sabedoria.", "Knowing yourself is the beginning of all wisdom.", "Conocerse a uno mismo es el comienzo de toda sabiduría.", "Atribuição tradicional ligada ao ideal grego de exame interior."],
    ["aristotle", "Trabalho", "Obra", "O prazer no trabalho aperfeiçoa a obra.", "Pleasure in the work perfects the work.", "El placer en el trabajo perfecciona la obra.", "A excelência aparece quando ação e finalidade se encontram."],

    ["epicurus", "Prazer", "Gratidão", "Não estragues o que tens desejando o que não tens.", "Do not spoil what you have by desiring what you lack.", "No arruines lo que tienes deseando lo que te falta.", "Epicuro ensina prazer estável e simples, livre de ansiedade desnecessária."],
    ["epicurus", "Prazer", "Amizade", "De todos os meios para a felicidade, a amizade é o maior.", "Of all means to happiness, friendship is the greatest.", "De todos los medios para la felicidad, la amistad es el mayor.", "A amizade é refúgio, alegria e prática de vida filosófica."],
    ["epicurus", "Morte", "Serenidade", "Não entregues o dia ao medo do fim.", "Do not surrender the day to fear of the end.", "No entregues el día al miedo del final.", "Inspiração epicurista: libertar-se do medo devolve presença ao agora."],
    ["epicurus", "Prazer", "Simplicidade", "Quem não se contenta com pouco não se contenta com nada.", "Those not content with little are content with nothing.", "Quien no se contenta con poco no se contenta con nada.", "A autossuficiência epicurista reduz dependência de desejos caros e instáveis."],
    ["epicurus", "Conhecimento", "Medo", "A sabedoria começa quando o medo perde poder.", "Wisdom begins when fear loses power.", "La sabiduría comienza cuando el miedo pierde poder.", "Investigar a natureza ajuda a viver sem terror."],

    ["zeno", "Estoicismo", "Natureza", "A felicidade é um bom fluxo de vida.", "Happiness is a good flow of life.", "La felicidad es un buen flujo de vida.", "Definição estoica antiga: viver de acordo com a natureza racional."],
    ["zeno", "Comunicação", "Escuta", "Temos dois ouvidos e uma boca para escutar mais do que falar.", "We have two ears and one mouth so we may listen more than we speak.", "Tenemos dos oídos y una boca para escuchar más de lo que hablamos.", "Máxima tradicionalmente atribuída a Zenão e adequada à disciplina da atenção."],
    ["zeno", "Estoicismo", "Aceitação", "O sábio acompanha a natureza em vez de lutar contra ela.", "The wise follow nature rather than fight it.", "El sabio acompaña la naturaleza en vez de luchar contra ella.", "O estoicismo busca alinhar vontade, razão e realidade."],
    ["zeno", "Estoicismo", "Domínio", "Domina as paixões antes que elas dominem tua razão.", "Master passions before they master your reason.", "Domina las pasiones antes de que dominen tu razón.", "Emoções desordenadas podem ser educadas por julgamento e prática."],
    ["zeno", "Estoicismo", "Tranquilidade", "A tranquilidade nasce da aceitação do que não controlamos.", "Tranquility is born from accepting what we do not control.", "La tranquilidad nace al aceptar lo que no controlamos.", "Paráfrase estoica da distinção entre ação própria e acontecimentos externos."],

    ["heraclitus", "Mudança", "Fluxo", "Ninguém entra duas vezes no mesmo rio.", "No one steps into the same river twice.", "Nadie entra dos veces en el mismo río.", "Heráclito expressa a realidade como fluxo contínuo."],
    ["heraclitus", "Mudança", "Impermanência", "Muda com o rio, mas não abandones tua direção.", "Change with the river, but do not abandon your direction.", "Cambia con el río, pero no abandones tu dirección.", "Inspiração heraclítica: a vida muda sempre, mas a resposta pode ter firmeza."],
    ["heraclitus", "Ética", "Caráter", "O caráter é destino.", "Character is destiny.", "El carácter es destino.", "A máxima mostra como escolhas repetidas moldam o rumo da vida."],
    ["heraclitus", "Harmonia", "Oculto", "A harmonia oculta é mais forte que a aparente.", "Hidden harmony is stronger than the visible one.", "La armonía oculta es más fuerte que la visible.", "Heráclito vê ordem profunda no conflito e na tensão dos opostos."],
    ["heraclitus", "Mudança", "Renovação", "O sol é novo a cada dia.", "The sun is new each day.", "El sol es nuevo cada día.", "Imagem de renovação constante dentro da ordem do cosmos."],

    ["democritus", "Alegria", "Moderação", "A alegria verdadeira nasce da moderação.", "True joy is born from moderation.", "La alegría verdadera nace de la moderación.", "Demócrito valoriza boa disposição da alma e equilíbrio dos desejos."],
    ["democritus", "Conhecimento", "Natureza", "O mundo dança entre átomos e vazio.", "The world dances between atoms and void.", "El mundo danza entre átomos y vacío.", "Paráfrase da tradição atomista."],
    ["democritus", "Alegria", "Leveza", "A alegria leve vence o peso do excesso.", "Light joy defeats the weight of excess.", "La alegría ligera vence el peso del exceso.", "Inspiração democritiana: simplificar desejos torna a alma mais disponível para viver."],
    ["democritus", "Coragem", "Leveza", "A coragem torna leves as grandes tarefas.", "Courage makes great tasks lighter.", "El coraje vuelve ligeras las grandes tareas.", "A virtude prática transforma peso em movimento possível."],

    ["pythagoras", "Conhecimento", "Educação", "Educa as crianças e não será preciso punir os homens.", "Educate children and it will not be necessary to punish adults.", "Educa a los niños y no será necesario castigar a los hombres.", "Máxima tradicional atribuída a Pitágoras sobre formação moral desde cedo."],
    ["pythagoras", "Harmonia", "Número", "O número governa a forma das coisas.", "Number governs the form of things.", "El número gobierna la forma de las cosas.", "A escola pitagórica vê proporção e número como chaves da ordem do mundo."],
    ["pythagoras", "Comunicação", "Clareza", "Não digas pouco com muitas palavras, mas muito com poucas.", "Do not say little with many words, but much with few.", "No digas poco con muchas palabras, sino mucho con pocas.", "Concisão como disciplina da mente e da fala."],
    ["pythagoras", "Harmonia", "Alma", "A harmonia é a saúde da alma.", "Harmony is the health of the soul.", "La armonía es la salud del alma.", "Inspiração pitagórica que une música, proporção e vida interior."],

    ["hermes", "Comunicação", "Caminho", "Toda mensagem abre um caminho.", "Every message opens a path.", "Todo mensaje abre un camino.", "Frase inspirada em Hermes, mensageiro e guia das passagens."],
    ["hermes", "Comunicação", "Agilidade", "A inteligência viaja leve.", "Intelligence travels light.", "La inteligencia viaja ligera.", "Arquétipo hermético: rapidez, adaptação e astúcia."],
    ["hermes", "Comunicação", "Sinais", "Quem escuta os sinais encontra a passagem.", "Those who listen to signs find the passage.", "Quien escucha las señales encuentra el paso.", "Hermes simboliza leitura do momento e travessia entre mundos."],
    ["hermes", "Comunicação", "Palavra", "A palavra certa atravessa qualquer fronteira.", "The right word crosses every border.", "La palabra justa cruza cualquier frontera.", "Sabedoria inspirada no deus da linguagem e negociação."],

    ["athena", "Sabedoria", "Estratégia", "Sabedoria é coragem com estratégia.", "Wisdom is courage with strategy.", "La sabiduría es coraje con estrategia.", "Frase inspirada em Atena, deusa da sabedoria prática."],
    ["athena", "Sabedoria", "Preparo", "A vitória começa antes da batalha.", "Victory begins before the battle.", "La victoria empieza antes de la batalla.", "Atena representa planejamento, técnica e domínio do impulso."],
    ["athena", "Justiça", "Cidade", "Protege a cidade que aprende.", "Protect the city that learns.", "Protege la ciudad que aprende.", "Sabedoria política constrói instituições e memória."],
    ["athena", "Sabedoria", "Clareza", "A mente clara é o escudo mais forte.", "A clear mind is the strongest shield.", "Una mente clara es el escudo más fuerte.", "A defesa mais firme nasce do discernimento."],

    ["apollo", "Harmonia", "Medida", "Conhece a medida e encontrarás harmonia.", "Know the measure and you will find harmony.", "Conoce la medida y encontrarás armonía.", "Apolo se liga a Delfos, música, luz, medida e ordem."],
    ["apollo", "Ordem", "Luz", "A luz revela a ordem escondida.", "Light reveals hidden order.", "La luz revela el orden oculto.", "Frase inspirada no deus da clareza, cura e forma."],
    ["apollo", "Harmonia", "Música", "A música disciplina o caos.", "Music disciplines chaos.", "La música disciplina el caos.", "O símbolo apolíneo mostra beleza como proporção."],
    ["apollo", "Ordem", "Cura", "Cura primeiro a alma que olha o mundo.", "First heal the soul that looks at the world.", "Cura primero el alma que mira el mundo.", "A cura apolínea une luz, verdade e equilíbrio interior."],

    ["dionysus", "Transformação", "Vida", "Transforma-te sem perder o pulso da vida.", "Transform without losing life's pulse.", "Transfórmate sin perder el pulso de la vida.", "Dionísio simboliza metamorfose, rito e intensidade."],
    ["dionysus", "Transformação", "Presença", "A liberdade também pede presença.", "Freedom also asks for presence.", "La libertad también pide presencia.", "Energia dionisíaca sem fuga da responsabilidade."],
    ["dionysus", "Transformação", "Êxtase", "O êxtase abre a porta do que estava preso.", "Ecstasy opens the door of what was trapped.", "El éxtasis abre la puerta de lo que estaba preso.", "No mito, Dionísio rompe formas rígidas e devolve movimento."],
    ["dionysus", "Mudança", "Renascimento", "Quem dança com a mudança renasce.", "Those who dance with change are reborn.", "Quien danza con el cambio renace.", "Sabedoria inspirada no ciclo de perda, festa e retorno."],

    ["hades", "Morte", "Coragem", "Desce ao escuro e volta com domínio.", "Descend into the dark and return with mastery.", "Desciende a la oscuridad y vuelve con dominio.", "Hades entra como símbolo de enfrentar o que pesa sem perder soberania."],
    ["hades", "Morte", "Limite", "Nem todo fim é derrota; alguns fins libertam.", "Not every ending is defeat; some endings set you free.", "No todo final es derrota; algunos finales liberan.", "O submundo representa encerramentos necessários e força diante do inevitável."],
    ["hades", "Poder", "Silêncio", "O poder mais firme não precisa gritar.", "The firmest power does not need to shout.", "El poder más firme no necesita gritar.", "Hades simboliza autoridade contida, presença e controle."],
    ["hades", "Transformação", "Renascimento", "O que aceitas no escuro deixa de te governar.", "What you accept in the dark stops ruling you.", "Lo que aceptas en la oscuridad deja de gobernarte.", "Uma leitura motivacional do submundo: olhar para o medo reduz seu comando."],

    ["zeus", "Poder", "Justiça", "Poder sem justiça é tempestade sem céu.", "Power without justice is storm without sky.", "El poder sin justicia es tormenta sin cielo.", "Zeus simboliza soberania, lei e responsabilidade sobre a ordem."],
    ["zeus", "Poder", "Autoridade", "A autoridade verdadeira sustenta a ordem.", "True authority upholds order.", "La autoridad verdadera sostiene el orden.", "Frase inspirada no rei dos deuses e guardião dos juramentos."],
    ["zeus", "Justiça", "Lei", "O raio decide, mas a lei permanece.", "Lightning decides, but law remains.", "El rayo decide, pero la ley permanece.", "Imagem de poder maior do que impulso momentâneo."],
    ["zeus", "Poder", "Autodomínio", "Governa primeiro teu próprio excesso.", "First govern your own excess.", "Gobierna primero tu propio exceso.", "A soberania interior antecede qualquer comando externo."],

    ["aphrodite", "Amor", "Beleza", "A beleza floresce onde o amor educa o olhar.", "Beauty blooms where love educates the gaze.", "La belleza florece donde el amor educa la mirada.", "Afrodite simboliza atração, encanto e vínculo."],
    ["aphrodite", "Amor", "Reconhecimento", "Amar é reconhecer brilho no outro.", "To love is to recognize brightness in another.", "Amar es reconocer brillo en el otro.", "Frase inspirada na deusa do amor e da relação."],
    ["aphrodite", "Amor", "Ternura", "A ternura também é força.", "Tenderness is also strength.", "La ternura también es fuerza.", "O arquétipo de Afrodite mostra que suavidade também transforma."],
    ["aphrodite", "Amor", "Desejo", "O desejo se torna sábio quando respeita.", "Desire becomes wise when it respects.", "El deseo se vuelve sabio cuando respeta.", "Beleza guiada por limite e cuidado."],

    ["ares", "Coragem", "Direção", "A coragem não é fúria, é direção.", "Courage is not fury, it is direction.", "El coraje no es furia, es dirección.", "Ares representa conflito; esta leitura transforma força em disciplina."],
    ["ares", "Coragem", "Escolha", "Escolhe tuas batalhas antes que elas te escolham.", "Choose your battles before they choose you.", "Elige tus batallas antes de que ellas te elijan.", "Estratégia diante do conflito inevitável."],
    ["ares", "Coragem", "Disciplina", "O conflito revela o que precisa de disciplina.", "Conflict reveals what needs discipline.", "El conflicto revela lo que necesita disciplina.", "A energia de Ares se torna útil quando encontra forma e limite."],

    ["poseidon", "Adaptabilidade", "Maré", "A força aprende com as marés.", "Strength learns from the tides.", "La fuerza aprende de las mareas.", "Poseidon simboliza profundidade, instabilidade e potência natural."],
    ["poseidon", "Adaptabilidade", "Profundidade", "Adapta-te como água sem perder profundidade.", "Adapt like water without losing depth.", "Adáptate como el agua sin perder profundidad.", "Sabedoria inspirada no movimento do mar."],
    ["poseidon", "Adaptabilidade", "Paciência", "Quem governa as ondas conhece a paciência.", "Those who rule waves know patience.", "Quien gobierna las olas conoce la paciencia.", "A força marítima pede escuta de ritmos maiores que a vontade imediata."],

    ["nike", "Vitória", "Disciplina", "Disciplina vence antes de aparecer no pódio.", "Discipline wins before it appears on the podium.", "La disciplina vence antes de aparecer en el podio.", "Nike representa a vitória que nasce do preparo silencioso, não do acaso."],
    ["nike", "Vitória", "Coragem", "Vitória é o nome que damos à coragem treinada.", "Victory is the name we give to trained courage.", "La victoria es el nombre que damos al coraje entrenado.", "A imagem de Nike transforma triunfo em consequência de prática e direção."],

    ["persephone", "Transformação", "Retorno", "Volta mais forte quem aprende com o inverno.", "Those who learn from winter return stronger.", "Vuelve más fuerte quien aprende del invierno.", "Perséfone simboliza ciclos, descidas necessárias e retornos mais conscientes."],
    ["persephone", "Transformação", "Renascimento", "Nem toda descida é queda; algumas levam ao renascimento.", "Not every descent is a fall; some lead to rebirth.", "No todo descenso es caída; algunos llevan al renacimiento.", "O mito de Perséfone inspira atravessar fases difíceis sem confundir pausa com derrota."],

    ["hecate", "Escolha", "Encruzilhada", "Na encruzilhada, escolhe com calma e caminha inteiro.", "At the crossroads, choose calmly and walk whole.", "En la encrucijada, elige con calma y camina entero.", "Hécate guarda passagens e lembra que decisão forte nasce de presença."],
    ["hecate", "Intuição", "Chama", "A noite não confunde quem carrega uma chama.", "Night does not confuse those who carry a flame.", "La noche no confunde a quien lleva una llama.", "A deusa das travessias inspira confiança quando o caminho ainda não está claro."],

    ["eros", "Amor", "Desejo", "O desejo vira criação quando encontra direção.", "Desire becomes creation when it finds direction.", "El deseo se vuelve creación cuando encuentra dirección.", "Eros é impulso vital; guiado por cuidado, ele constrói em vez de consumir."],
    ["eros", "Amor", "Presença", "O coração também pensa quando ama com presença.", "The heart also thinks when it loves with presence.", "El corazón también piensa cuando ama con presencia.", "Uma leitura madura de Eros: intensidade precisa de consciência."],

    ["hera", "Dignidade", "Compromisso", "Dignidade é cumprir o voto que fizeste a ti mesmo.", "Dignity is keeping the vow you made to yourself.", "La dignidad es cumplir el voto que te hiciste a ti mismo.", "Hera simboliza aliança, honra e a força de sustentar uma escolha."],
    ["hera", "Dignidade", "Lealdade", "Compromisso é amor com coluna.", "Commitment is love with a spine.", "El compromiso es amor con columna.", "A majestade de Hera traz firmeza aos vínculos e às promessas."],

    ["hephaestus", "Trabalho", "Ofício", "Transforma cicatriz em ferramenta.", "Turn scar into tool.", "Transforma cicatriz en herramienta.", "Hefesto inspira criar força a partir do que parecia quebrado."],
    ["hephaestus", "Trabalho", "Forja", "Quem domina o ofício conversa com o fogo.", "Those who master the craft speak with fire.", "Quien domina el oficio conversa con el fuego.", "O deus da forja transforma paciência, técnica e calor em obra."],

    ["artemis", "Foco", "Liberdade", "Liberdade é mirar com precisão e caminhar sem pedir licença.", "Freedom is aiming with precision and walking without asking permission.", "La libertad es apuntar con precisión y caminar sin pedir permiso.", "Ártemis representa independência, proteção e foco limpo."],
    ["artemis", "Foco", "Proteção", "Protege teu foco como quem guarda um templo.", "Protect your focus like guarding a temple.", "Protege tu enfoque como quien guarda un templo.", "A energia de Ártemis defende o espaço interno contra ruído e dispersão."],

    ["hestia", "Serenidade", "Centro", "A paz também precisa ser mantida.", "Peace also needs to be maintained.", "La paz también necesita ser mantenida.", "Héstia lembra que calma é prática diária, não cenário perfeito."],
    ["hestia", "Serenidade", "Presença", "Guarda teu centro e o mundo perde poder de te arrastar.", "Guard your center and the world loses power to drag you.", "Guarda tu centro y el mundo pierde poder de arrastrarte.", "A chama doméstica de Héstia vira imagem de estabilidade interior."],

    ["demeter", "Crescimento", "Paciência", "O que amadurece em silêncio alimenta por mais tempo.", "What matures in silence nourishes for longer.", "Lo que madura en silencio alimenta por más tiempo.", "Deméter simboliza cultivo, colheita e confiança no tempo certo."],
    ["demeter", "Crescimento", "Plantio", "Planta hoje o que teu futuro vai agradecer.", "Plant today what your future will thank you for.", "Planta hoy lo que tu futuro agradecerá.", "A deusa da fertilidade inspira constância antes da recompensa."],

    ["asclepius", "Cura", "Paciência", "Cura é paciência repetida com esperança.", "Healing is patience repeated with hope.", "Sanar es paciencia repetida con esperanza.", "Asclépio representa restauração, escuta e cuidado com o ritmo da recuperação."],
    ["asclepius", "Cura", "Escuta", "Escuta a dor sem deixar que ela governe.", "Listen to pain without letting it rule.", "Escucha el dolor sin dejar que gobierne.", "A sabedoria da cura começa ao reconhecer o sinal sem entregar a direção a ele."]
  ];

  const quotes = rows.map((row, index) => ({
    id: `quote_${String(index + 1).padStart(3, "0")}`,
    author: row[0],
    category: row[1],
    theme: row[2],
    text: { pt: row[3], en: row[4], es: row[5] },
    explain: row[6]
  }));

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const state = loadState();
  let shareQuoteId = state.lockQuote || quotes[0].id;
  let startX = 0;
  let startY = 0;
  let notificationTimer = null;
  let rotationTimer = null;

  document.addEventListener("DOMContentLoaded", init);

  function init() {
    setupStreak();
    const linked = handleDeepLink();
    if (!linked) {
      maybeShowDaily();
      applyAutoRotation(false);
    }
    bind();
    applyPrefs();
    renderAll();
    registerServiceWorker();
    scheduleNotificationCheck();
    scheduleRotationCheck();
    maybeShowOnboarding();
  }

  function defaults() {
    return {
      screen: "home",
      lang: "ptBR",
      cursor: 0,
      selectedAuthor: "all",
      favs: {},
      seen: {},
      librarySearch: "",
      authorFilter: "all",
      themeFilter: "all",
      favoriteSearch: "",
      favoriteSort: "recent",
      lockQuote: "quote_001",
      lockLayout: "center",
      lockFont: "editorial",
      lockFontSize: 32,
      name: "",
      photo: "",
      dark: false,
      font: "editorial",
      fontSize: 32,
      quoteOffsetX: 0,
      quoteOffsetY: 0,
      imageQuality: "standard",
      notifications: false,
      notificationFrequency: 1,
      rotationFrequency: 0,
      times: ["08:00", "12:00", "18:00"],
      haptics: true,
      sound: false,
      onboarded: false,
      streak: 1,
      lastOpen: "",
      lastNotification: "",
      lastRotationSlot: "",
      lastDailyShown: ""
    };
  }

  function loadState() {
    try {
      return { ...defaults(), ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
    } catch {
      return defaults();
    }
  }

  function save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function bind() {
    $$(".bottom-nav button").forEach((button) => {
      button.addEventListener("click", () => {
        state.screen = button.dataset.target;
        save();
        renderScreens();
      });
    });

    $("#profileShortcut").addEventListener("click", () => go("settings"));
    $("#searchShortcut").addEventListener("click", () => go("explore"));
    $("#dailyCard").addEventListener("click", goToDaily);
    $("#nextQuote").addEventListener("click", () => move(1));
    $("#prevQuote").addEventListener("click", () => move(-1));
    $("#favQuote").addEventListener("click", () => toggleFavorite(currentQuote().id));
    $("#shareQuote").addEventListener("click", () => openShare(currentQuote().id));
    $("#lockQuote").addEventListener("click", () => setLockQuote(currentQuote().id));
    $("#detailsQuote").addEventListener("click", () => openDetails(currentQuote().id));
    $("#shuffleQuote").addEventListener("click", shuffle);

    $("#quoteStage").addEventListener("pointerdown", (event) => {
      startX = event.clientX;
      startY = event.clientY;
    });
    $("#quoteStage").addEventListener("pointerup", (event) => {
      const dx = event.clientX - startX;
      const dy = event.clientY - startY;
      if (Math.abs(dx) > 58 && Math.abs(dy) < 45) move(dx < 0 ? 1 : -1);
    });

    $("#authorChips").addEventListener("click", (event) => {
      const chip = event.target.closest("[data-author]");
      if (!chip) return;
      state.selectedAuthor = chip.dataset.author;
      state.cursor = 0;
      save();
      renderHome(true);
      renderAuthors();
    });

    $("#librarySearch").addEventListener("input", (event) => {
      state.librarySearch = event.target.value;
      save();
      renderLibrary();
    });
    $("#authorFilter").addEventListener("change", (event) => {
      state.authorFilter = event.target.value;
      save();
      renderLibrary();
    });
    $("#themeFilter").addEventListener("change", (event) => {
      state.themeFilter = event.target.value;
      save();
      renderLibrary();
    });
    $("#favoriteSearch").addEventListener("input", (event) => {
      state.favoriteSearch = event.target.value;
      save();
      renderFavorites();
    });
    $("#favoriteSort").addEventListener("change", (event) => {
      state.favoriteSort = event.target.value;
      save();
      renderFavorites();
    });

    $("#libraryList").addEventListener("click", handleQuoteCard);
    $("#favoriteList").addEventListener("click", handleQuoteCard);

    $("#lockLayouts").addEventListener("click", (event) => {
      const button = event.target.closest("[data-layout]");
      if (!button) return;
      state.lockLayout = button.dataset.layout;
      save();
      renderLock();
    });
    $("#lockFont").addEventListener("change", (event) => {
      state.lockFont = event.target.value;
      save();
      renderLock();
    });
    $("#lockFontSize").addEventListener("input", (event) => {
      state.lockFontSize = Number(event.target.value);
      save();
      renderLock();
    });
    $("#saveLock").addEventListener("click", () => toast("Tema de bloqueio salvo."));

    $("#saveSettings").addEventListener("click", saveSettings);
    $("#homeFontMode").addEventListener("change", (event) => {
      state.font = event.target.value;
      save();
      applyPrefs();
      renderSettings();
    });
    $("#homeFontSize").addEventListener("input", (event) => {
      state.fontSize = Number(event.target.value);
      save();
      applyPrefs();
      renderSettings();
    });
    $("#quoteOffsetX").addEventListener("input", (event) => {
      state.quoteOffsetX = Number(event.target.value);
      save();
      applyPrefs();
    });
    $("#quoteOffsetY").addEventListener("input", (event) => {
      state.quoteOffsetY = Number(event.target.value);
      save();
      applyPrefs();
    });
    $("#languageSelect").addEventListener("change", (event) => {
      state.lang = event.target.value;
      save();
      renderAll();
    });
    $("#themeMode").addEventListener("change", (event) => {
      state.dark = event.target.value === "dark";
      save();
      applyPrefs();
    });
    $("#fontMode").addEventListener("change", (event) => {
      state.font = event.target.value;
      save();
      applyPrefs();
      renderSettings();
    });
    $("#fontSize").addEventListener("input", (event) => {
      state.fontSize = Number(event.target.value);
      save();
      applyPrefs();
      renderSettings();
    });
    $("#notificationsEnabled").addEventListener("change", (event) => {
      state.notifications = event.target.checked;
      save();
      scheduleNotificationCheck();
      if (state.notifications) requestNotifications();
    });
    $("#notificationFrequency").addEventListener("change", (event) => {
      state.notificationFrequency = Number(event.target.value);
      save();
      scheduleNotificationCheck();
    });
    $("#rotationFrequency").addEventListener("change", (event) => {
      state.rotationFrequency = Number(event.target.value);
      state.lastRotationSlot = "";
      save();
      scheduleRotationCheck();
    });
    ["#timeOne", "#timeTwo", "#timeThree"].forEach((selector, index) => {
      $(selector).addEventListener("change", (event) => {
        state.times[index] = event.target.value;
        save();
        scheduleNotificationCheck();
      });
    });
    $("#profilePhotoInput").addEventListener("change", handleProfilePhoto);
    $("#hapticEnabled").addEventListener("change", (event) => {
      state.haptics = event.target.checked;
      save();
    });
    $("#soundEnabled").addEventListener("change", (event) => {
      state.sound = event.target.checked;
      save();
    });
    $("#imageQuality").addEventListener("change", (event) => {
      state.imageQuality = event.target.value;
      save();
    });
    $("#finishOnboarding").addEventListener("click", () => {
      state.onboarded = true;
      save();
      $("#onboardingDialog").close();
    });

    $$("[data-close]").forEach((button) => {
      button.addEventListener("click", () => {
        const dialog = $(`#${button.dataset.close}`);
        if (dialog?.open) dialog.close();
      });
    });

    $("#copyShare").addEventListener("click", copyShare);
    $("#nativeShare").addEventListener("click", nativeShare);
    $("#downloadShare").addEventListener("click", downloadShare);
  }

  function renderAll() {
    renderScreens();
    renderAuthors();
    renderFilters();
    renderDaily();
    renderHome(false);
    renderLibrary();
    renderFavorites();
    renderLock();
    renderSettings();
  }

  function renderScreens() {
    $$(".screen").forEach((screen) => screen.classList.toggle("active", screen.dataset.screen === state.screen));
    $$(".bottom-nav button").forEach((button) => button.classList.toggle("active", button.dataset.target === state.screen));
  }

  function renderAuthors() {
    $("#authorChips").innerHTML = order.map((id) => {
      const item = authors[id];
      return `<button class="chip ${state.selectedAuthor === id ? "active" : ""}" type="button" data-author="${id}">${escapeHtml(item.icon)} ${escapeHtml(authorName(id))}</button>`;
    }).join("");
  }

  function renderFilters() {
    $("#authorFilter").innerHTML = order.map((id) => {
      const item = authors[id];
      return `<option value="${id}">${escapeHtml(authorName(id))}</option>`;
    }).join("");
    $("#authorFilter").value = state.authorFilter;

    const themes = [...new Set(quotes.map((quote) => quote.category))].sort((a, b) => a.localeCompare(b));
    $("#themeFilter").innerHTML = `<option value="all">Todos</option>${themes.map((theme) => `<option value="${escapeHtml(theme)}">${escapeHtml(theme)}</option>`).join("")}`;
    $("#themeFilter").value = state.themeFilter;
  }

  function renderHome(animate) {
    const quote = currentQuote();
    const author = authors[quote.author];
    state.seen[quote.id] = state.seen[quote.id] || Date.now();
    $("#quoteTheme").textContent = `${quote.category} · ${quote.theme}`;
    $("#quoteText").textContent = `“${quoteText(quote)}”`;
    $("#quoteAuthor").textContent = authorName(quote.author);
    $("#quotePeriod").textContent = author.period;
    $("#authorIcon").textContent = author.icon;
    $("#authorImage").src = imageForQuote(quote);
    $("#authorImage").alt = authorName(quote.author);
    $("#authorVisualLabel").textContent = authorName(quote.author);
    $("#quoteCounter").textContent = `${homeList().indexOf(quote) + 1} / ${homeList().length}`;
    $("#quoteLanguage").textContent = LANG_LABEL[state.lang] || "Português";
    $("#dailyBadge").hidden = quote.id !== dailyQuote().id;
    $("#favQuote").textContent = state.favs[quote.id] ? "♥" : "♡";
    $("#favQuote").classList.toggle("favorite", Boolean(state.favs[quote.id]));
    if (animate) {
      $("#quoteStage").classList.remove("switching");
      requestAnimationFrame(() => $("#quoteStage").classList.add("switching"));
    }
    save();
    renderStats();
  }

  function renderLibrary() {
    $("#librarySearch").value = state.librarySearch;
    const query = normalize(state.librarySearch);
    const items = quotes.filter((quote) => {
      if (state.authorFilter !== "all" && quote.author !== state.authorFilter) return false;
      if (state.themeFilter !== "all" && quote.category !== state.themeFilter) return false;
      if (!query) return true;
      return searchable(quote).includes(query);
    });
    $("#libraryList").innerHTML = items.length ? items.map(card).join("") : `<div class="empty">Nenhuma frase encontrada.</div>`;
  }

  function renderFavorites() {
    $("#favoriteSearch").value = state.favoriteSearch;
    $("#favoriteSort").value = state.favoriteSort;
    $("#favoriteCount").textContent = Object.keys(state.favs).length;
    const query = normalize(state.favoriteSearch);
    const items = quotes.filter((quote) => state.favs[quote.id])
      .filter((quote) => !query || searchable(quote).includes(query))
      .sort(sortFavorites);
    $("#favoriteList").innerHTML = items.length ? items.map(card).join("") : `<div class="empty">Suas frases favoritas aparecerão aqui.</div>`;
    renderStats();
  }

  function renderLock() {
    const quote = findQuote(state.lockQuote);
    const author = authors[quote.author];
    const preview = $("#lockPreview");
    preview.className = `lock-preview ${state.lockLayout}`;
    preview.style.setProperty("--deity-image", `url("${imageForQuote(quote)}")`);
    preview.classList.add("image");
    $("#lockPreviewQuote").textContent = `“${quoteText(quote)}”`;
    $("#lockPreviewAuthor").textContent = authorName(quote.author);
    $("#lockFont").value = state.lockFont;
    $("#lockFontSize").value = state.lockFontSize;
    $("#lockPreviewQuote").style.fontFamily = fontFamily(state.lockFont);
    $("#lockPreviewQuote").style.fontSize = `${state.lockFontSize}px`;
    $$("#lockLayouts button").forEach((button) => button.classList.toggle("active", button.dataset.layout === state.lockLayout));
  }

  function renderSettings() {
    $("#profileName").value = state.name;
    $("#languageSelect").value = state.lang;
    $("#themeMode").value = state.dark ? "dark" : "light";
    $("#fontMode").value = state.font;
    $("#fontSize").value = state.fontSize;
    $("#homeFontMode").value = state.font;
    $("#homeFontSize").value = state.fontSize;
    $("#quoteOffsetX").value = state.quoteOffsetX;
    $("#quoteOffsetY").value = state.quoteOffsetY;
    $("#notificationsEnabled").checked = state.notifications;
    $("#notificationFrequency").value = String(state.notificationFrequency);
    $("#rotationFrequency").value = String(state.rotationFrequency);
    $("#timeOne").value = state.times[0] || "08:00";
    $("#timeTwo").value = state.times[1] || "12:00";
    $("#timeThree").value = state.times[2] || "18:00";
    $("#profileShortcut").textContent = (state.name || "G").slice(0, 1).toUpperCase();
    $("#profileFallback").textContent = (state.name || "GW").slice(0, 2).toUpperCase();
    $("#imageQuality").value = state.imageQuality;
    $("#hapticEnabled").checked = state.haptics;
    $("#soundEnabled").checked = state.sound;
    const avatar = $(".avatar-picker");
    const photo = $("#profilePhoto");
    if (state.photo) {
      avatar.classList.add("has-photo");
      photo.src = state.photo;
    } else {
      avatar.classList.remove("has-photo");
      photo.removeAttribute("src");
    }
    renderStats();
  }

  function renderStats() {
    $("#statSeen").textContent = Object.keys(state.seen).length;
    $("#statFavs").textContent = Object.keys(state.favs).length;
    $("#statStreak").textContent = state.streak;
  }

  function card(quote) {
    const author = authors[quote.author];
    const fav = Boolean(state.favs[quote.id]);
    return `
      <article class="quote-card">
        <img class="quote-card-image" src="${escapeHtml(imageForQuote(quote))}" alt="" loading="lazy" />
        <p>“${escapeHtml(quoteText(quote))}”</p>
        <footer>
          <small>${escapeHtml(authorName(quote.author))} · ${escapeHtml(quote.theme)}</small>
          <div class="mini-actions">
            <button type="button" data-action="details" data-id="${quote.id}" aria-label="Detalhes">i</button>
            <button type="button" data-action="favorite" data-id="${quote.id}" aria-label="Favoritar">${fav ? "♥" : "♡"}</button>
            <button type="button" data-action="share" data-id="${quote.id}" aria-label="Compartilhar">↗</button>
            <button type="button" data-action="lock" data-id="${quote.id}" aria-label="Tela de bloqueio">▣</button>
          </div>
        </footer>
      </article>
    `;
  }

  function handleQuoteCard(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const id = button.dataset.id;
    if (button.dataset.action === "details") openDetails(id);
    if (button.dataset.action === "favorite") toggleFavorite(id);
    if (button.dataset.action === "share") openShare(id);
    if (button.dataset.action === "lock") setLockQuote(id);
  }

  function currentQuote() {
    const list = homeList();
    return list[((state.cursor % list.length) + list.length) % list.length] || quotes[0];
  }

  function homeList() {
    return state.selectedAuthor === "all" ? quotes : quotes.filter((quote) => quote.author === state.selectedAuthor);
  }

  function move(step) {
    state.cursor += step;
    save();
    renderHome(true);
    vibrate();
  }

  function shuffle() {
    state.selectedAuthor = "all";
    state.cursor = Math.floor(Math.random() * quotes.length);
    save();
    go("home");
    renderAuthors();
    renderHome(true);
  }

  function todayKey() {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  }

  function dailyIndex() {
    const key = todayKey();
    let hash = 0;
    for (let i = 0; i < key.length; i += 1) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
    return hash % quotes.length;
  }

  function dailyQuote() {
    return quotes[dailyIndex()];
  }

  function renderDaily() {
    const quote = dailyQuote();
    $("#dailyText").textContent = `“${quoteText(quote)}”`;
    $("#dailyAuthor").textContent = authorName(quote.author);
  }

  function maybeShowDaily() {
    if (state.lastDailyShown === todayKey()) return false;
    state.selectedAuthor = "all";
    state.cursor = dailyIndex();
    state.lastDailyShown = todayKey();
    state.screen = "home";
    save();
    return true;
  }

  function goToDaily() {
    state.selectedAuthor = "all";
    state.cursor = dailyIndex();
    state.lastDailyShown = todayKey();
    save();
    go("home");
    renderAuthors();
    renderHome(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    toast("Frase do dia.");
  }

  function go(screen) {
    state.screen = screen;
    save();
    renderScreens();
  }

  function toggleFavorite(id) {
    if (state.favs[id]) {
      delete state.favs[id];
      toast("Removida dos favoritos.");
    } else {
      state.favs[id] = Date.now();
      toast("Adicionada aos favoritos.");
    }
    save();
    renderHome(false);
    renderLibrary();
    renderFavorites();
    vibrate();
  }

  function setLockQuote(id) {
    state.lockQuote = id;
    save();
    renderLock();
    go("lock");
    toast("Frase enviada para o preview.");
  }

  function openDetails(id) {
    const quote = findQuote(id);
    $("#detailsAuthorName").textContent = authorName(quote.author);
    $("#detailsText").textContent = `“${quoteText(quote)}”`;
    $("#detailsExplain").textContent = quote.explain;
    $("#detailsTags").innerHTML = [quote.category, quote.theme, authors[quote.author].period].map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    $("#detailsDialog").showModal();
  }

  async function openShare(id) {
    shareQuoteId = id;
    await drawShare(findQuote(id));
    $("#shareDialog").showModal();
  }

  function sharePayload() {
    const quote = findQuote(shareQuoteId);
    return {
      title: "Greek Wisdom",
      text: `“${quoteText(quote)}” - ${authorName(quote.author)}\nCompartilhado via Greek Wisdom`,
      url: `${location.origin}${location.pathname}?quote=${encodeURIComponent(quote.id)}`
    };
  }

  async function copyShare() {
    const payload = sharePayload();
    await navigator.clipboard?.writeText(`${payload.text}\n${payload.url}`);
    toast("Texto copiado.");
  }

  async function nativeShare() {
    const payload = sharePayload();
    if (navigator.share) {
      await navigator.share(payload).catch(() => {});
    } else {
      await copyShare();
    }
  }

  async function drawShare(quote) {
    const canvas = $("#shareCanvas");
    const ctx = canvas.getContext("2d");
    const image = await loadCanvasImage(imageForQuote(quote)).catch(() => null);
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1920);
    gradient.addColorStop(0, "#000");
    gradient.addColorStop(0.56, "#151515");
    gradient.addColorStop(1, "#4b390d");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 1080, 1920);
    if (image) {
      drawCover(ctx, image, 0, 0, 1080, 1920);
      const overlay = ctx.createLinearGradient(0, 0, 0, 1920);
      overlay.addColorStop(0, "rgba(0,0,0,.30)");
      overlay.addColorStop(0.45, "rgba(0,0,0,.72)");
      overlay.addColorStop(1, "rgba(0,0,0,.88)");
      ctx.fillStyle = overlay;
      ctx.fillRect(0, 0, 1080, 1920);
    }
    ctx.strokeStyle = "rgba(212,175,55,.48)";
    ctx.lineWidth = 8;
    ctx.strokeRect(58, 58, 964, 1804);
    ctx.fillStyle = "#d4af37";
    ctx.font = "700 34px Segoe UI, Arial";
    ctx.textAlign = "center";
    ctx.fillText("GREEK WISDOM", 540, 210);
    ctx.fillStyle = "#fff";
    ctx.font = state.imageQuality === "high" ? "500 84px Georgia, serif" : "500 78px Georgia, serif";
    wrapText(ctx, `“${quoteText(quote)}”`, 540, 860, 760, 92, 7);
    ctx.fillStyle = "#d4af37";
    ctx.font = "600 42px Segoe UI, Arial";
    ctx.fillText(authorName(quote.author), 540, 1295);
    ctx.fillStyle = "rgba(255,255,255,.64)";
    ctx.font = "400 28px Segoe UI, Arial";
    ctx.fillText("greek-wisdom.app", 540, 1710);
  }

  function wrapText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
    const words = text.split(" ");
    const lines = [];
    let line = "";
    words.forEach((word) => {
      const test = `${line}${word} `;
      if (ctx.measureText(test).width > maxWidth && line) {
        lines.push(line.trim());
        line = `${word} `;
      } else {
        line = test;
      }
    });
    lines.push(line.trim());
    const visible = lines.slice(0, maxLines);
    const start = y - ((visible.length - 1) * lineHeight) / 2;
    visible.forEach((item, index) => ctx.fillText(item, x, start + index * lineHeight));
  }

  function loadCanvasImage(src) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });
  }

  function drawCover(ctx, image, x, y, width, height) {
    const scale = Math.max(width / image.naturalWidth, height / image.naturalHeight);
    const sw = width / scale;
    const sh = height / scale;
    const sx = (image.naturalWidth - sw) / 2;
    const sy = (image.naturalHeight - sh) / 2;
    ctx.drawImage(image, sx, sy, sw, sh, x, y, width, height);
  }

  function downloadShare() {
    $("#shareCanvas").toBlob((blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "greek-wisdom.png";
      link.click();
      URL.revokeObjectURL(url);
    }, "image/png");
  }

  function saveSettings() {
    state.name = $("#profileName").value.trim();
    state.notifications = $("#notificationsEnabled").checked;
    state.notificationFrequency = Number($("#notificationFrequency").value);
    state.times = [$("#timeOne").value, $("#timeTwo").value, $("#timeThree").value];
    state.lang = $("#languageSelect").value;
    state.dark = $("#themeMode").value === "dark";
    state.font = $("#fontMode").value;
    state.fontSize = Number($("#fontSize").value);
    state.quoteOffsetX = Number($("#quoteOffsetX").value);
    state.quoteOffsetY = Number($("#quoteOffsetY").value);
    state.imageQuality = $("#imageQuality").value;
    state.rotationFrequency = Number($("#rotationFrequency").value);
    state.haptics = $("#hapticEnabled").checked;
    state.sound = $("#soundEnabled").checked;
    save();
    applyPrefs();
    renderAll();
    scheduleNotificationCheck();
    scheduleRotationCheck();
    if (state.notifications) requestNotifications();
    toast("Configurações salvas.");
  }

  function applyPrefs() {
    $("#appShell").classList.toggle("dark", state.dark);
    document.documentElement.style.setProperty("--quote-font", fontFamily(state.font));
    document.documentElement.style.setProperty("--quote-size", `${state.fontSize}px`);
    document.documentElement.style.setProperty("--quote-x", `${state.quoteOffsetX}px`);
    document.documentElement.style.setProperty("--quote-y", `${state.quoteOffsetY}px`);
    const themeColor = state.dark ? "#000000" : "#ffffff";
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themeColor);
  }

  function fontFamily(value) {
    if (value === "editorial") return "\"Playfair Display\", Georgia, serif";
    if (value === "classic") return "\"Cormorant Garamond\", Garamond, Georgia, serif";
    if (value === "mythic") return "Cinzel, \"Trajan Pro\", Georgia, serif";
    if (value === "lora") return "Lora, Georgia, serif";
    if (value === "marcellus") return "Marcellus, Optima, Georgia, serif";
    if (value === "sans") return "var(--sans)";
    if (value === "mono") return "var(--mono)";
    return "var(--serif)";
  }

  function sortFavorites(a, b) {
    if (state.favoriteSort === "alpha") return quoteText(a).localeCompare(quoteText(b));
    if (state.favoriteSort === "author") return authors[a.author].pt.localeCompare(authors[b.author].pt);
    return (state.favs[b.id] || 0) - (state.favs[a.id] || 0);
  }

  function searchable(quote) {
    const author = authors[quote.author];
    return normalize([
      quote.text.pt,
      quote.text.en,
      quote.text.es,
      author.pt,
      author.en,
      author.es,
      quote.category,
      quote.theme,
      quote.explain
    ].join(" "));
  }

  function findQuote(id) {
    return quotes.find((quote) => quote.id === id) || quotes[0];
  }

  function langBase() {
    return LANG_BASE[state.lang] || "pt";
  }

  function quoteText(quote) {
    return quote.text[langBase()] || quote.text.pt;
  }

  function authorName(id) {
    const item = authors[id] || authors.all;
    return item[langBase()] || item.pt;
  }

  function imageForQuote(quote) {
    if (DEITY_IMAGES[quote.author]) return DEITY_IMAGES[quote.author];
    const key = normalize(`${quote.category} ${quote.theme}`);
    if (key.includes("cura")) return DEITY_IMAGES.asclepius;
    if (key.includes("vitoria") || key.includes("excelencia")) return DEITY_IMAGES.nike;
    if (key.includes("desejo")) return DEITY_IMAGES.eros;
    if (key.includes("amor") || key.includes("beleza")) return DEITY_IMAGES.aphrodite;
    if (key.includes("prazer") || key.includes("alegria")) return DEITY_IMAGES.dionysus;
    if (key.includes("comunicacao") || key.includes("clareza")) return DEITY_IMAGES.hermes;
    if (key.includes("ordem") || key.includes("harmonia") || key.includes("musica")) return DEITY_IMAGES.apollo;
    if (key.includes("sabedoria") || key.includes("conhecimento") || key.includes("justica")) return DEITY_IMAGES.athena;
    if (key.includes("coragem") || key.includes("conflito")) return DEITY_IMAGES.ares;
    if (key.includes("adaptabilidade") || key.includes("mudanca") || key.includes("fluxo")) return DEITY_IMAGES.poseidon;
    if (key.includes("serenidade")) return DEITY_IMAGES.hestia;
    if (key.includes("morte")) return DEITY_IMAGES.hades;
    if (key.includes("transformacao")) return DEITY_IMAGES.persephone;
    return DEITY_IMAGES.zeus;
  }

  function handleDeepLink() {
    const params = new URLSearchParams(location.search);
    const quoteId = params.get("quote");
    if (!quoteId) return false;
    const index = quotes.findIndex((quote) => quote.id === quoteId);
    if (index >= 0) {
      state.selectedAuthor = "all";
      state.cursor = index;
      state.screen = "home";
      return true;
    }
    return false;
  }

  function maybeShowOnboarding() {
    if (state.onboarded) return;
    requestAnimationFrame(() => $("#onboardingDialog").showModal());
  }

  function handleProfilePhoto(event) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      state.photo = String(reader.result);
      save();
      renderSettings();
    };
    reader.readAsDataURL(file);
  }

  function normalize(value) {
    return String(value || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setupStreak() {
    const today = new Date().toISOString().slice(0, 10);
    if (!state.lastOpen) {
      state.lastOpen = today;
      save();
      return;
    }
    if (state.lastOpen === today) return;
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const prev = yesterday.toISOString().slice(0, 10);
    state.streak = state.lastOpen === prev ? state.streak + 1 : 1;
    state.lastOpen = today;
    save();
  }

  function scheduleRotationCheck() {
    if (rotationTimer) clearInterval(rotationTimer);
    rotationTimer = null;
    if (!Number(state.rotationFrequency)) return;
    rotationTimer = setInterval(() => applyAutoRotation(true), 60000);
    applyAutoRotation(true);
  }

  function applyAutoRotation(animate) {
    const frequency = Number(state.rotationFrequency) || 0;
    if (!frequency) return;
    const key = rotationSlotKey(frequency);
    if (state.lastRotationSlot === key) return;
    state.lastRotationSlot = key;
    const list = homeList();
    if (list.length) state.cursor = (state.cursor + 1) % list.length;
    save();
    if (state.screen === "home") renderHome(animate);
  }

  function rotationSlotKey(frequency) {
    const now = new Date();
    const day = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
    const minutes = now.getHours() * 60 + now.getMinutes();
    const slot = Math.floor(minutes / (1440 / Math.max(1, frequency)));
    return `${day}-${frequency}-${slot}`;
  }

  function scheduleNotificationCheck() {
    if (notificationTimer) clearInterval(notificationTimer);
    if (!state.notifications) return;
    notificationTimer = setInterval(checkNotification, 30000);
    checkNotification();
  }

  async function requestNotifications() {
    if (!("Notification" in window)) {
      toast("Notificações indisponíveis neste navegador.");
      return false;
    }
    if (Notification.permission === "granted") return true;
    const permission = await Notification.requestPermission();
    if (permission !== "granted") {
      state.notifications = false;
      save();
      renderSettings();
      return false;
    }
    return true;
  }

  async function checkNotification() {
    if (!state.notifications) return;
    const ok = await requestNotifications();
    if (!ok) return;
    const now = new Date();
    const hhmm = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const activeTimes = state.times.slice(0, state.notificationFrequency);
    if (!activeTimes.includes(hhmm)) return;
    const key = `${now.toISOString().slice(0, 10)}-${hhmm}`;
    if (state.lastNotification === key) return;
    state.lastNotification = key;
    save();
    const quote = quotes[now.getDate() % quotes.length];
    new Notification("Greek Wisdom", { body: `“${quoteText(quote)}” - ${authorName(quote.author)}` });
  }

  function registerServiceWorker() {
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  function vibrate() {
    if (state.haptics && navigator.vibrate) navigator.vibrate(10);
    playSound();
  }

  function playSound() {
    if (!state.sound) return;
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const context = new AudioContext();
    const osc = context.createOscillator();
    const gain = context.createGain();
    osc.frequency.value = 520;
    gain.gain.value = 0.025;
    osc.connect(gain);
    gain.connect(context.destination);
    osc.start();
    osc.stop(context.currentTime + 0.08);
  }

  function toast(message) {
    const element = $("#toast");
    element.textContent = message;
    element.classList.add("show");
    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => element.classList.remove("show"), 1800);
  }
})();

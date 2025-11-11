import { GameRound } from '../types';

export const wordBank: GameRound[] = [
  {
    sentence: "¿Que dia es hoy?",
    wordsToAccent: [
        { withAccent: 'Qué', withoutAccent: 'Que' },
        { withAccent: 'día', withoutAccent: 'dia' }
    ],
    explanation: "'Qué' como pronombre interrogativo y 'día' por el hiato de vocal débil tónica con vocal fuerte, ambas llevan tilde."
  },
  {
    sentence: "¿Tu quieres un poco de te?",
    wordsToAccent: [
        { withAccent: "tú", withoutAccent: "tu" },
        { withAccent: "té", withoutAccent: "te" }
    ],
    explanation: "Se usa 'tú' como pronombre personal y 'té' para la bebida. Ambas llevan tilde diacrítica para diferenciarlas de 'tu' (posesivo) y 'te' (pronombre)."
  },
  {
    sentence: "El es mi mejor amigo.",
    wordsToAccent: [{ withAccent: "Él", withoutAccent: "El" }],
    explanation: "'Él' (con tilde) es un pronombre personal, mientras que 'el' (sin tilde) es un artículo determinado."
  },
  {
    sentence: "No se que hacer.",
    wordsToAccent: [
        { withAccent: "sé", withoutAccent: "se" },
        { withAccent: "qué", withoutAccent: "que" }
    ],
    explanation: "'Sé' viene del verbo 'saber' y 'qué' es un pronombre interrogativo en una pregunta indirecta. Ambas llevan tilde."
  },
  {
    sentence: "¿Quieres mas cafe?",
    wordsToAccent: [
        { withAccent: "más", withoutAccent: "mas" },
        { withAccent: "café", withoutAccent: "cafe" }
    ],
    explanation: "'Más' es un adverbio de cantidad y 'café' es una palabra aguda terminada en vocal. Ambas llevan tilde."
  },
  {
    sentence: "Me gustaria tomar un te.",
    wordsToAccent: [
        { withAccent: "gustaría", withoutAccent: "gustaria" },
        { withAccent: "té", withoutAccent: "te" }
    ],
    explanation: "'Gustaría' lleva tilde por el hiato de vocal débil tónica con vocal fuerte ('í-a'). 'Té' (con tilde) se refiere a la bebida y lleva tilde diacrítica."
  },
  {
    sentence: "La cancion es muy bonita.",
    wordsToAccent: [{ withAccent: "canción", withoutAccent: "cancion" }],
    explanation: "Las palabras agudas llevan tilde si terminan en 'n', 's' o vocal."
  },
  {
    sentence: "Mi mama prepara un pastel delicioso.",
    wordsToAccent: [{ withAccent: "mamá", withoutAccent: "mama" }],
    explanation: "Es una palabra aguda que termina en vocal, por lo tanto, lleva tilde."
  },
  {
    sentence: "El arbol del jardin es muy alto.",
    wordsToAccent: [
        { withAccent: "árbol", withoutAccent: "arbol" },
        { withAccent: "jardín", withoutAccent: "jardin" }
    ],
    explanation: "“Árbol” es palabra grave que no termina en 'n', 's' ni vocal, por eso lleva tilde. “Jardín” es palabra aguda terminada en 'n', también lleva tilde."
  },
  {
    sentence: "Este examen es muy dificil.",
    wordsToAccent: [{ withAccent: "difícil", withoutAccent: "dificil" }],
    explanation: "Es una palabra grave que no termina en 'n', 's' o vocal, por eso lleva tilde."
  },
  {
    sentence: "La musica clasica me relaja.",
    wordsToAccent: [
        { withAccent: "música", withoutAccent: "musica" },
        { withAccent: "clásica", withoutAccent: "clasica" }
    ],
    explanation: "Tanto 'música' como 'clásica' son palabras esdrújulas y todas las palabras esdrújulas siempre llevan tilde."
  },
  {
    sentence: "Pasa la pagina, por favor.",
    wordsToAccent: [{ withAccent: "página", withoutAccent: "pagina" }],
    explanation: "Las palabras esdrújulas, como 'página', siempre se acentúan gráficamente."
  },
  {
    sentence: "¿Como estas hoy?",
    wordsToAccent: [
        { withAccent: "Cómo", withoutAccent: "Como" },
        { withAccent: "estás", withoutAccent: "estas" }
    ],
    explanation: "'Cómo' es un pronombre interrogativo y 'estás' es del verbo 'estar' (palabra aguda terminada en 's'). Ambas llevan tilde."
  },
  {
    sentence: "¿Donde pusiste las llaves?",
    wordsToAccent: [{ withAccent: "Dónde", withoutAccent: "Donde" }],
    explanation: "Como pronombre interrogativo, 'dónde' siempre lleva tilde."
  },
  {
    sentence: "La clase de fisica requiere una comprension profunda de las leyes de Newton.",
    wordsToAccent: [
        { withAccent: "física", withoutAccent: "fisica" },
        { withAccent: "comprensión", withoutAccent: "comprension" }
    ],
    explanation: "“Física” lleva tilde porque es esdrújula (todas las esdrújulas se acentúan).\n\n“Comprensión” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "Me gustaria poder reunirme con usted para conversar sobre la situacion de su alumno.",
    wordsToAccent: [
        { withAccent: "gustaría", withoutAccent: "gustaria" },
        { withAccent: "situación", withoutAccent: "situacion" }
    ],
    explanation: "“Gustaría” lleva tilde por hiato (í-a), y es aguda terminada en vocal.\n\n“Situación” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "Hagalo usted primero para estar seguro de que lo entiende.",
    wordsToAccent: [{ withAccent: "Hágalo", withoutAccent: "Hagalo" }],
    explanation: "“Hágalo” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Cada niño tiene un heroe al que admira y respeta.",
    wordsToAccent: [{ withAccent: "héroe", withoutAccent: "heroe" }],
    explanation: "“Héroe” lleva tilde porque es esdrújula; las tres vocales se pronuncian en sílabas separadas (hé-ro-e)."
  },
  {
    sentence: "Los estudiantes hablan ingles en el recreo.",
    wordsToAccent: [{ withAccent: "inglés", withoutAccent: "ingles" }],
    explanation: "“Inglés” lleva tilde porque es aguda terminada en s."
  },
  {
    sentence: "Le agradezco el interes que muestra sobre la educacion de su hija.",
    wordsToAccent: [
        { withAccent: "interés", withoutAccent: "interes" },
        { withAccent: "educación", withoutAccent: "educacion" }
    ],
    explanation: "“Interés” lleva tilde porque es aguda terminada en s.\n\n“Educación” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "El indice del libro nos ayudara a encontrar los temas rapidamente.",
    wordsToAccent: [
        { withAccent: "índice", withoutAccent: "indice" },
        { withAccent: "ayudará", withoutAccent: "ayudara" },
        { withAccent: "rápidamente", withoutAccent: "rapidamente" }
    ],
    explanation: "“Índice” lleva tilde porque es esdrújula.\n\n“Ayudará” lleva tilde porque es aguda terminada en vocal.\n\n“Rápidamente” conserva la tilde de “rápido” porque las palabras con -mente mantienen el acento gráfico de la palabra base."
  },
  {
    sentence: "La logica es fundamental para resolver problemas matematicos complejos.",
    wordsToAccent: [
        { withAccent: "lógica", withoutAccent: "logica" },
        { withAccent: "matemáticos", withoutAccent: "matematicos" }
    ],
    explanation: "“Lógica” lleva tilde porque es esdrújula.\n\n“Matemáticos” también lleva tilde por ser esdrújula."
  },
  {
    sentence: "Los estudiantes deben practicar mas la lectura.",
    wordsToAccent: [{ withAccent: "más", withoutAccent: "mas" }],
    explanation: "“Más” lleva tilde diacrítica para diferenciarlo de la conjunción mas (“pero”)."
  },
  {
    sentence: "El metodo cientifico es usado para garantizar la calidad de la investigacion.",
    wordsToAccent: [
        { withAccent: "método", withoutAccent: "metodo" },
        { withAccent: "científico", withoutAccent: "cientifico" },
        { withAccent: "investigación", withoutAccent: "investigacion" }
    ],
    explanation: "“Método” lleva tilde porque es esdrújula.\n\n“Científico” lleva tilde porque también es esdrújula.\n\n“Investigación” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "El estudio de la historia de Mexico es parte del curriculo.",
    wordsToAccent: [
        { withAccent: "México", withoutAccent: "Mexico" },
        { withAccent: "currículo", withoutAccent: "curriculo" }
    ],
    explanation: "“México” lleva tilde porque es esdrújula.\n\n“Currículo” lleva tilde porque también es esdrújula."
  },
  {
    sentence: "La clase de musica es mañana.",
    wordsToAccent: [{ withAccent: "música", withoutAccent: "musica" }],
    explanation: "“Música” lleva tilde porque es esdrújula."
  },
  {
    sentence: "El estudiante ha mejorado la ortografia mediante la practica constante.",
    wordsToAccent: [
        { withAccent: "ortografía", withoutAccent: "ortografia" },
        { withAccent: "práctica", withoutAccent: "practica" }
    ],
    explanation: "“Ortografía” lleva tilde por hiato (í-a) y es aguda terminada en vocal.\n\n“Práctica” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Tu papa esta muy preocupado por ti.",
    wordsToAccent: [
        { withAccent: "papá", withoutAccent: "papa" },
        { withAccent: "está", withoutAccent: "esta" }
    ],
    explanation: "“Papá” lleva tilde porque es aguda terminada en vocal.\n\n“Está” también lleva tilde porque es aguda terminada en vocal."
  },
  {
    sentence: "Podria llamarle al final de la semana.",
    wordsToAccent: [{ withAccent: "Podría", withoutAccent: "Podria" }],
    explanation: "“Podría” lleva tilde por hiato (í-a) y es aguda terminada en vocal."
  },
  {
    sentence: "Los estudiantes llevan la practica de matematicas para la casa.",
    wordsToAccent: [
        { withAccent: "práctica", withoutAccent: "practica" },
        { withAccent: "matemáticas", withoutAccent: "matematicas" }
    ],
    explanation: "“Práctica” y “Matemáticas” son esdrújulas; todas las esdrújulas se acentúan."
  },
  {
    sentence: "El proposito de esta clase es que todos aprendan.",
    wordsToAccent: [{ withAccent: "propósito", withoutAccent: "proposito" }],
    explanation: "“Propósito” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Puede venir a conversar conmigo el proximo lunes.",
    wordsToAccent: [{ withAccent: "próximo", withoutAccent: "proximo" }],
    explanation: "“Próximo” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Quizas sea necesario que nos reunamos para conversar.",
    wordsToAccent: [{ withAccent: "Quizás", withoutAccent: "Quizas" }],
    explanation: "“Quizás” lleva tilde porque es aguda terminada en s."
  },
  {
    sentence: "La razon de mi llamada es que debo hablarle sobre su hijo.",
    wordsToAccent: [{ withAccent: "razón", withoutAccent: "razon" }],
    explanation: "“Razón” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "Segun lo que han dicho los alumnos, no fue culpa de nadie.",
    wordsToAccent: [{ withAccent: "Según", withoutAccent: "Segun" }],
    explanation: "“Según” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "Seria importante que los estudiantes trabajaran en equipo.",
    wordsToAccent: [{ withAccent: "Sería", withoutAccent: "Seria" }],
    explanation: "“Sería” lleva tilde por hiato (í-a), y es aguda terminada en vocal."
  },
  {
    sentence: "En literatura, un simil es una figura retorica que compara dos cosas diferentes.",
    wordsToAccent: [
        { withAccent: "símil", withoutAccent: "simil" },
        { withAccent: "retórica", withoutAccent: "retorica" }
    ],
    explanation: "“Símil” lleva tilde porque es llana terminada en consonante distinta de n, s o vocal.\n\n“Retórica” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Tambien puede llamarme a mi telefono celular.",
    wordsToAccent: [
        { withAccent: "También", withoutAccent: "Tambien" },
        { withAccent: "teléfono", withoutAccent: "telefono" }
    ],
    explanation: "“También” lleva tilde porque es aguda terminada en n.\n\n“Teléfono” lleva tilde porque es esdrújula."
  },
  {
    sentence: "La tecnica de estudio que el maestro compartio ha mejorado mi rendimiento academico.",
    wordsToAccent: [
        { withAccent: "técnica", withoutAccent: "tecnica" },
        { withAccent: "compartió", withoutAccent: "compartio" },
        { withAccent: "académico", withoutAccent: "academico" }
    ],
    explanation: "“Técnica” y “académico” son palabras esdrújulas y siempre llevan tilde.\n\n“Compartió” es una palabra aguda que termina en vocal y también necesita tilde."
  },
  {
    sentence: "El estudiante tendra que reunirse con el director de escuela.",
    wordsToAccent: [{ withAccent: "tendrá", withoutAccent: "tendra" }],
    explanation: "“Tendrá” lleva tilde porque es aguda terminada en vocal."
  },
  {
    sentence: "Al aprobar este examen, el estudiante tendria la posibilidad de pasar al proximo grado.",
    wordsToAccent: [
        { withAccent: "tendría", withoutAccent: "tendria" },
        { withAccent: "próximo", withoutAccent: "proximo" }
    ],
    explanation: "“Tendría” lleva tilde por hiato (í-a), y es aguda terminada en vocal.\n\n“Próximo” lleva tilde porque es esdrújula."
  },
  {
    sentence: "El estudiante se muestra timido en clase.",
    wordsToAccent: [{ withAccent: "tímido", withoutAccent: "timido" }],
    explanation: "“Tímido” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Yo recomiendo que la estudiante participe en una clase de tutoria todas las semanas.",
    wordsToAccent: [{ withAccent: "tutoría", withoutAccent: "tutoria" }],
    explanation: "“Tutoría” lleva tilde por hiato (í-a), y es aguda terminada en vocal."
  },
  {
    sentence: "Es util revisar las notas de clase antes de un examen.",
    wordsToAccent: [{ withAccent: "útil", withoutAccent: "util" }],
    explanation: "“Útil” lleva tilde porque es llana terminada en consonante distinta de n o s."
  },
  {
    sentence: "La comunicacion con los padres se realiza a traves de una via electronica.",
    wordsToAccent: [
        { withAccent: "comunicación", withoutAccent: "comunicacion" },
        { withAccent: "vía", withoutAccent: "via" },
        { withAccent: "electrónica", withoutAccent: "electronica" }
    ],
    explanation: "“Comunicación” lleva tilde porque es aguda terminada en n.\n\n“Vía” lleva tilde por hiato (í-a).\n\n“Electrónica” lleva tilde porque es esdrújula."
  },
  {
    sentence: "El alumno pidio ayuda al maestro de fisica para resolver el problema.",
    wordsToAccent: [
        { withAccent: "pidió", withoutAccent: "pidio" },
        { withAccent: "física", withoutAccent: "fisica" }
    ],
    explanation: "“Pidió” lleva tilde porque es una palabra aguda terminada en vocal.\n\n“Física” lleva tilde porque es esdrújula; todas las esdrújulas se acentúan."
  },
  {
    sentence: "La mama del estudiante hablo con el director para conocer la situacion de su hijo.",
    wordsToAccent: [
        { withAccent: "mamá", withoutAccent: "mama" },
        { withAccent: "habló", withoutAccent: "hablo" },
        { withAccent: "situación", withoutAccent: "situacion" }
    ],
    explanation: "“Mamá” lleva tilde porque es aguda terminada en vocal.\n\n“Habló” lleva tilde porque es aguda terminada en vocal.\n\n“Situación” lleva tilde porque es aguda terminada en n."
  },
  {
    sentence: "Los estudiantes estan listos para presentar el examen de matematicas.",
    wordsToAccent: [
        { withAccent: "están", withoutAccent: "estan" },
        { withAccent: "matemáticas", withoutAccent: "matematicas" }
    ],
    explanation: "“Están” lleva tilde porque es una palabra aguda terminada en n.\n\n“Matemáticas” lleva tilde porque es esdrújula."
  },
  {
    sentence: "Segun el profesor, los alumnos deberian practicar mas la lectura.",
    wordsToAccent: [
        { withAccent: "Según", withoutAccent: "Segun" },
        { withAccent: "deberían", withoutAccent: "deberian" },
        { withAccent: "más", withoutAccent: "mas" }
    ],
    explanation: "“Según” lleva tilde porque es aguda terminada en n.\n\n“Deberían” lleva tilde porque es aguda terminada en n, con hiato í-a.\n\n“Más” lleva tilde diacrítica para distinguirlo de la conjunción 'mas' (pero)."
  },
  {
    sentence: "Mi papa me dijo que el proximo examen sera mas dificil que el anterior.",
    wordsToAccent: [
        { withAccent: "papá", withoutAccent: "papa" },
        { withAccent: "próximo", withoutAccent: "proximo" },
        { withAccent: "será", withoutAccent: "sera" },
        { withAccent: "más", withoutAccent: "mas" },
        { withAccent: "difícil", withoutAccent: "dificil" }
    ],
    explanation: "“Papá” lleva tilde porque es una palabra aguda terminada en vocal.\n\n“Próximo” lleva tilde porque es esdrújula.\n\n“Será” lleva tilde porque es una palabra aguda terminada en vocal.\n\n“Más” lleva tilde diacrítica para diferenciarlo de la conjunción “mas” (equivalente a 'pero'). En este caso, “más” se usa como adverbio de cantidad, por lo que lleva tilde.\n\n“Difícil” lleva tilde porque es una palabra llana terminada en consonante distinta de n o s."
  },
    {
    sentence: "El examen de geografia sera el viernes por la mañana.",
    wordsToAccent: [
        { withAccent: "geografía", withoutAccent: "geografia" },
        { withAccent: "será", withoutAccent: "sera" },
    ],
    explanation: "“Geografía” lleva tilde por hiato (í-a) y es aguda terminada en vocal.\n\n“Será” lleva tilde porque es aguda terminada en vocal.\n\n“Mañana” lleva tilde porque la letra ñ no elimina la regla general y la palabra es llana terminada en vocal."
  },
  {
    sentence: "Mi tia vivia en un edificio alto cerca del parque.",
    wordsToAccent: [
        { withAccent: "tía", withoutAccent: "tia" },
        { withAccent: "vivía", withoutAccent: "vivia" }
    ],
    explanation: "“Tía” y “vivía” llevan tilde por hiato (í-a). Ambas son palabras agudas terminadas en vocal."
  },
  {
    sentence: "El profesor explico la teoria con varios ejemplos practicos.",
    wordsToAccent: [
        { withAccent: "explicó", withoutAccent: "explico" },
        { withAccent: "teoría", withoutAccent: "teoria" },
        { withAccent: "prácticos", withoutAccent: "practicos" }
    ],
    explanation: "“Explicó” lleva tilde porque es aguda terminada en vocal.\n\n“Teoría” lleva tilde por hiato (í-a).\n\n“Prácticos” lleva tilde porque es esdrújula."
  },
  {
    sentence: "El medico recomendo descansar y beber mas agua.",
    wordsToAccent: [
        { withAccent: "médico", withoutAccent: "medico" },
        { withAccent: "recomendó", withoutAccent: "recomendo" },
        { withAccent: "más", withoutAccent: "mas" }
    ],
    explanation: "“Médico” lleva tilde porque es esdrújula.\n\n“Recomendó” lleva tilde porque es aguda terminada en vocal.\n\n“Más” lleva tilde diacrítica por ser adverbio de cantidad."
  },
  {
    sentence: "Segun los datos, la economia del pais ha mejorado este año.",
    wordsToAccent: [
        { withAccent: "Según", withoutAccent: "Segun" },
        { withAccent: "economía", withoutAccent: "economia" },
        { withAccent: "país", withoutAccent: "pais" },
    ],
    explanation: "“Según” lleva tilde porque es aguda terminada en n.\n\n“Economía” lleva tilde por hiato (í-a).\n\n“País” lleva tilde por hiato (a-í).\n\n“Año” lleva tilde en la letra ñ por ser parte de la ortografía, no del acento, pero se incluye por diferencia fonética importante."
  },
  {
    sentence: "El avion despego temprano para evitar la tormenta.",
    wordsToAccent: [
        { withAccent: "avión", withoutAccent: "avion" },
        { withAccent: "despegó", withoutAccent: "despego" }
    ],
    explanation: "“Avión” lleva tilde porque es aguda terminada en n.\n\n“Despegó” lleva tilde porque es aguda terminada en vocal."
  },
  {
    sentence: "Despues del recreo, los niños escribieron sobre su cumpleaños.",
    wordsToAccent: [
        { withAccent: "Después", withoutAccent: "Despues" },
    ],
    explanation: "“Después” lleva tilde porque es aguda terminada en s.\n\n“Niños” y “cumpleaños” contienen la letra ñ, que cambia el sonido pero no afecta la acentuación; son palabras llanas terminadas en s y vocal respectivamente."
  },
  {
    sentence: "Mi mama compro fruta fresca en el mercado y preparo jugo de limon.",
    wordsToAccent: [
        { withAccent: "mamá", withoutAccent: "mama" },
        { withAccent: "compró", withoutAccent: "compro" },
        { withAccent: "limón", withoutAccent: "limon" }
    ],
    explanation: "“Mamá” lleva tilde porque es aguda terminada en vocal.\n\n“Compró” lleva tilde porque es aguda terminada en vocal.\n\n“Limón” lleva tilde porque es aguda terminada en n."
  }
];
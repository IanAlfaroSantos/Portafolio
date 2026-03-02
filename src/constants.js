
export const SKILLS = [
  { name: 'HTML', icon: '/assets/images/icon-html.png', percent: 90, stars: 4 },
  { name: 'CSS', icon: '/assets/images/icon-css.png', percent: 85, stars: 4 },
  { name: 'JavaScript', icon: '/assets/images/icon-js.png', percent: 60, stars: 3 },
  { name: 'Axios', icon: '/assets/images/icon-axios.webp', percent: 90, stars: 4 },
  { name: 'GitHub', icon: '/assets/images/icon-github.png', percent: 75, stars: 3 },
  { name: 'MySQL', icon: '/assets/images/icon-mysql.png', percent: 65, stars: 2 },
  { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png', percent: 75, stars: 3 },
  { name: 'Material UI', icon: '/assets/images/icon-material_ui.png', percent: 50, stars: 2 },
  { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png', percent: 80, stars: 4 },
  { name: 'JWT', icon: '/assets/images/icon-jwt.png', percent: 70, stars: 3 },
  { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png', percent: 70, stars: 3 },
  { name: 'React', icon: '/assets/images/icon-react.jpg', percent: 60, stars: 3 },
  { name: 'Postman', icon: '/assets/images/icon-postman.webp', percent: 90, stars: 4 },
  { name: 'Java', icon: '/assets/images/icon-java.png', percent: 50, stars: 2 },
  { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png', percent: 50, stars: 3 },
  { name: 'JavaFX', icon: '/assets/images/icon-javaFX.jpg', percent: 30, stars: 1 },
];

export const VALUES = [
  { title: 'Respeto', description: 'Valoro las opiniones y el trabajo de mis compañeros, creando un ambiente colaborativo y armonioso.', icon: 'fa-handshake' },
  { title: 'Compromiso', description: 'Me comprometo a cumplir con los objetivos de cualquier proyecto, buscando la excelencia en cada tarea y superando expectativas.', icon: 'fa-clipboard-check' },
  { title: 'Responsabilidad', description: 'Asumo la responsabilidad de mis acciones y decisiones, y me aseguro de entregar un trabajo de alta calidad a tiempo.', icon: 'fa-clipboard-list' },
  { title: 'Esfuerzo', description: 'Trabajo con dedicación y perseverancia para superar desafíos, siempre dispuesto a aprender y mejorar mis habilidades.', icon: 'fa-dumbbell' },
  { title: 'Adaptabilidad', description: 'Soy flexible y me adapto rápidamente a nuevos entornos, tecnologías y metodologías de trabajo.', icon: 'fa-sync-alt' },
  { title: 'Honestidad', description: 'Actúo con transparencia, construyendo relaciones de confianza con mis compañeros.', icon: 'fa-balance-scale' },
];

export const EXPERIENCE = [
  { title: 'Desarrollo de aplicaciones con Java', year: '2023', description: 'Fundación Kinal Guatemala', icon: '/assets/images/icon-java.png' },
  { title: 'Desarrollo de aplicaciones con JavaFX', year: '2024', description: 'Fundación Kinal Guatemala', icon: '/assets/images/icon-javaFX.jpg' },
  { title: 'Desarrollo Backend', year: '2024 - 2025', description: 'Fundación Kinal Guatemala', icon: '/assets/images/icon-nodejs.png' },
  { title: 'Desarrollo Frontend', year: '2024 - 2025', description: 'Fundación Kinal Guatemala', icon: '/assets/images/icon-react.jpg' },
  { title: 'Desarrollador Web Full-Stack', year: '2024 - 2025', description: 'Fundación Kinal Guatemala', icon: '/assets/images/icon-jwt.png' },
  { title: 'Desarrollo página web de un catalogo y pedidos de productos', year: '2025', description: 'InnovaQ', icon: '/assets/images/0 InnovaQ.png' },
  { title: 'Desarrollo ChatBot', year: '2025-2026', description: 'Sistems Enterprise S.A.', icon: '/assets/images/senia_sentada.png' },
  { title: 'Modificación exportaciones CRM-Dolibarr', year: '2025-2026', description: 'Sistems Enterprise S.A.', icon: '/assets/images/logo_sencom_original.png' },
];

export const PROJECTS = [
  {
    title: 'Sen-IA ChatBot Conectado a Dolibarr CRM',
    featured: true,
    description: `Sen-IA es un chatbot inteligente desarrollado para atención automatizada de clientes, disponible tanto en Web Chat como en WhatsApp mediante la API oficial de Meta (WhatsApp Business Platform).
    
    El sistema está desplegado en Google Cloud e integra:
    
    • Dialogflow para la gestión de intenciones y flujos conversacionales.  
    • Gemini 1.5 para el procesamiento inteligente de lenguaje natural y generación de respuestas para preguntas directas del cliente.
    
    Funcionalidades principales:
    
    ✅ Atención automática a clientes vía WhatsApp y Web.  
    ✅ Registro automático de clientes como terceros dentro de Dolibarr CRM.  
    ✅ Creación automática de tickets de soporte vinculados al cliente.  
    ✅ Envío de correos electrónicos automáticos al cliente con confirmación de ticket.  
    ✅ Notificación por correo a los asesores cuando se genera un nuevo caso.  
    ✅ Consulta de información sobre soluciones y servicios.  
    ✅ Integración mediante API REST para sincronización en tiempo real con el CRM.
    
    Valor del Proyecto:
    
    El sistema optimiza la atención al cliente, reduce tiempos de respuesta y automatiza procesos administrativos dentro del CRM, mejorando la atención de solicitudes y la comunicación entre clientes y asesores.`,
    images: ['/assets/images/crm1.png', '/assets/images/crm2.png', '/assets/images/crm3.png', '/assets/images/crm4.png', '/assets/images/crm5.png', '/assets/images/crm6.png', '/assets/images/crm7.png', '/assets/images/crm8.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'Material UI', icon: '/assets/images/icon-material_ui.png' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
      { name: 'Dolibarr CRM', icon: '/assets/images/icon-dolibarr.png' },
      { name: 'Whatsapp API', icon: '/assets/images/icon-whatsapp-color.webp' },
      { name: 'Google Cloud', icon: '/assets/images/icon-google-cloud.png' },
      { name: 'Inteligencia Artificial', icon: '/assets/images/icon-ia.webp' },
      { name: 'Web Chat', icon: '/assets/images/icon-webchat.webp' },
      { name: 'ChatBots', icon: '/assets/images/logo_sencom.png' },
      { name: 'API REST', icon: '/assets/images/icon-apirest.png' },
      { name: 'Gemini 1.5', icon: '/assets/images/icon-gemini.png' }
    ],
    preview: 'https://sencom-chatbot.vercel.app/'
  },
  {
    title: 'Proyecto Banking System',
    description: `Sistema bancario full-stack desarrollado para la gestión integral de clientes, cuentas, créditos y transferencias en un entorno digital seguro.

    El sistema permite administrar operaciones bancarias básicas y avanzadas mediante una interfaz web intuitiva, conectada a un backend robusto y una base de datos centralizada.

    Funcionalidades principales:

    ✅ Registro y administración de clientes  
    ✅ Creación y gestión de cuentas bancarias  
    ✅ Solicitud y control de créditos  
    ✅ Transferencias entre cuentas con validaciones  
    ✅ Autenticación segura mediante JWT  
    ✅ Envío de notificaciones por correo electrónico  
    ✅ Control de acceso mediante inicio de sesión  

    Valor del Proyecto:

    La aplicación simula el funcionamiento de un sistema bancario moderno, permitiendo gestionar operaciones financieras de forma segura, organizada y eficiente, demostrando capacidades en desarrollo full-stack, seguridad básica y manejo de datos sensibles.`,
    featured: true,
    images: ['/assets/images/0 Banco.png', '/assets/images/1 Banco.png', '/assets/images/3 Banco.png', '/assets/images/4 Banco.png', '/assets/images/5 Banco.png', '/assets/images/6 Banco.png', '/assets/images/7 Banco.png', '/assets/images/8 Banco.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'Material UI', icon: '/assets/images/icon-material_ui.png' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'JWT', icon: '/assets/images/icon-jwt.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'PostMan', icon: '/assets/images/icon-postman.webp' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/KevinDGutierrez/Banking-System-Frontend.git',
    preview: 'https://banking-system-frontend-beige.vercel.app/'
  },
  {
    title: 'Proyecto Hotelera',
    description: 'Sistema de gestión hotelera que permite controlar habitaciones, reservas y eventos. Facilita el seguimiento del estado de las habitaciones y la organización de las reservas.',
    images: ['/assets/images/0 Hotelera.png', '/assets/images/1 Hotelera.png', '/assets/images/5 Hotelera.png', '/assets/images/2 Hotelera.png', '/assets/images/3 Hotelera.png', '/assets/images/4 Hotelera.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'Material UI', icon: '/assets/images/icon-material_ui.png' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'JWT', icon: '/assets/images/icon-jwt.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'PostMan', icon: '/assets/images/icon-postman.webp' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Proyecto-Bimestral2-2025_Fronted.git',
    preview: 'https://proyecto-bimestral2-2025-fronted.vercel.app/'
  },
  {
    title: 'Proyecto Blog',
    description: 'Plataforma web para crear y administrar publicaciones. Permite a los usuarios registrarse, iniciar sesión y gestionar contenido según sus permisos.',
    images: ['/assets/images/0 Blog.png', '/assets/images/1 Blog.png', '/assets/images/2 Blog.png', '/assets/images/3 Blog.png', '/assets/images/4 Blog.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'JWT', icon: '/assets/images/icon-jwt.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'PostMan', icon: '/assets/images/icon-postman.webp' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Blog_Fronted.git',
    preview: 'https://blog-fronted-two.vercel.app/'
  },
  {
    title: 'Proyecto Almacenadora',
    description: 'Sistema completo para la gestión de inventario, clientes y proveedores. Incluye inicio de sesión seguro y una estructura cliente-servidor para manejar la información de forma eficiente.',
    images: ['/assets/images/0 Storage.png', '/assets/images/1 Storage.png', '/assets/images/2 Storage.png', '/assets/images/3 Storage.png', '/assets/images/4 storage.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'Material UI', icon: '/assets/images/icon-material_ui.png' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'JWT', icon: '/assets/images/icon-jwt.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'PostMan', icon: '/assets/images/icon-postman.webp' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/storage.git',
    preview: 'https://storage-lemon.vercel.app/'
  },
  {
    title: 'Proyecto Spotify',
    description: 'Aplicación que integra los servicios de Spotify para buscar artistas, canciones y álbumes, incluyendo reproducción de fragmentos de audio. Utiliza autenticación para acceder a contenido protegido.',
    images: ['/assets/images/0 Spotify.png', '/assets/images/1 Spotify.png', '/assets/images/2 Spotify.png', '/assets/images/3 Spotify.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Proyecto-Spotify.git',
    preview: 'https://proyecto-spotify-lac.vercel.app/'
  },
  {
    title: 'Proyecto Marvel',
    description: 'Aplicación web que muestra personajes de Marvel con opciones de búsqueda y navegación por páginas. Permite explorar información de forma organizada y sencilla.',
    images: ['/assets/images/0 Marvel.png', '/assets/images/1 Marvel.png', '/assets/images/2 Marvel.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Proyecto-MarvelApp',
    preview: 'https://proyecto-marvelapp.vercel.app/'
  },
  {
    title: 'Proyecto Pokemon',
    description: 'Aplicación interactiva que permite consultar información de Pokémon mediante búsquedas. Muestra datos relevantes de forma clara y rápida utilizando información obtenida de una API pública.',
    images: ['/assets/images/0 Pokemon.png', '/assets/images/1 Pokemon.png', '/assets/images/3 Pokemon.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Proyecto-PokemonApp.git',
    preview: 'https://proyecto-pokemonapp.vercel.app/'
  },
  {
    title: 'Proyecto Giff',
    description: 'Aplicación web que permite buscar y visualizar GIFs en tiempo real mediante una API externa. Cuenta con búsqueda dinámica y diseño adaptable a diferentes dispositivos.',
    images: ['/assets/images/0 GiffApp.png', '/assets/images/1 GiffApp.png', '/assets/images/3 GiffApp.png'],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'Bootstrap', icon: '/assets/images/icon-bootstrap.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/Proyecto-GifApp.git',
    preview: 'https://proyecto-gifapp.vercel.app/'
  },
  {
    title: 'Proyecto SuperKinal',
    description: 'Sistema de gestión para una tienda que permite administrar productos, clientes, ventas e inventario. Facilita el control de las operaciones diarias y mantiene organizada la información del negocio.',
    images: ['/assets/images/0 SuperKinal.png', '/assets/images/1 SuperKinal.png', '/assets/images/2 SuperKinal.png', '/assets/images/3 SuperKinal.png'],
    skills: [
      { name: 'Java', icon: '/assets/images/icon-java.png' },
      { name: 'JavaFX', icon: '/assets/images/icon-javaFX.jpg' },
      { name: 'MySQL', icon: '/assets/images/icon-mysql.png' },
      { name: 'Scene Builder', icon: '/assets/images/icon-scene.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/IN5CM-Proyecto-SuperKinal.git'
  },
]
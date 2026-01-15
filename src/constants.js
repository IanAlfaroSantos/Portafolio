
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
];

export const PROJECTS = [
  {
    title: 'Proyecto SuperKinal',
    description: 'Este proyecto es un programa desarrollado con JavaFX, que su objetivo es crear una aplicación que facilite la gestión de una tienda.',
    images: ['/assets/images/0 SuperKinal.png', '/assets/images/1 SuperKinal.png', '/assets/images/2 SuperKinal.png', '/assets/images/3 SuperKinal.png'],
    skills: [
      { name: 'Java', icon: '/assets/images/icon-java.png' },
      { name: 'JavaFX', icon: '/assets/images/icon-javaFX.jpg' },
      { name: 'MySQL', icon: '/assets/images/icon-mysql.png' },
      { name: 'Scene Builder', icon: '/assets/images/icon-scene.png' },
    ],
    github: 'https://github.com/IanAlfaroSantos/IN5CM-Proyecto-SuperKinal.git'
  },
  {
    title: 'Proyecto Giff',
    description: 'Este proyecto es una API de GIFs que permite a los usuarios buscar GIFs de personajes de películas, animes, caricaturas, entre otros.',
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
    title: 'Proyecto Pokemon',
    description: 'Este proyecto es una API de Pokémon que permite a los usuarios buscar el nombre de cualquier Pokémon y consultar sus propiedades en detalle.',
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
    title: 'Proyecto Marvel',
    description: 'Este proyecto es una API de Marvel que muestra todas las versiones de los personajes de Marvel, con opciones de paginación y búsqueda.',
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
    title: 'Proyecto Spotify',
    description: 'Este proyecto es una API de Spotify que permite a los usuarios buscar por nombre de grupo, artista, canción o incluso álbum. Además, ofrece la opción de reproducir una parte de la canción.',
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
    title: 'Proyecto Almacenadora',
    description: 'Este proyecto está diseñado para la gestión de una almacén, permitiendo a administradores y empleados llevar un control eficiente sobre el inventario, clientes y proveedores.',
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
    title: 'Proyecto Blog',
    description: 'Este proyecto es una plataforma de gestión de publicaciones que permite a los profesores compartir material, facilitando el estudio eficiente.',
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
    title: 'Proyecto Hotelera',
    description: 'Sistema de gestión de hoteles que permite gestionar habitaciones y salas de eventos, ofreciendo a los usuarios la posibilidad de reservar.',
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
    title: 'Proyecto Banking System',
    description: 'Sistema bancario para gestión de clientes, cuentas, créditos y transferencias, con notificaciones por correo electrónico.',
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
  }
];

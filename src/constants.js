
export const SKILLS = [
  { 
    name: 'HTML', 
    icon: '/assets/images/icon-html.png', 
    percent: 90, 
    stars: 4,
    description: 'Estructura fundamental de páginas web, semántica HTML5 y optimización SEO básica. Uso de etiquetas semánticas y buenas prácticas de accesibilidad para garantizar que los sitios web sean legibles por motores de búsqueda y accesibles para todos los usuarios.'
  },
  { 
    name: 'CSS', 
    icon: '/assets/images/icon-css.png', 
    percent: 85, 
    stars: 4,
    description: 'Diseño y maquetación de interfaces responsivas y atractivas. Dominio de layouts modernos como Flexbox y CSS Grid, animaciones fluidas, transiciones, variables CSS, metodologías como BEM y compatibilidad entre distintos navegadores.'
  },
  { 
    name: 'JavaScript', 
    icon: '/assets/images/icon-js.png', 
    percent: 60, 
    stars: 3,
    description: 'Programación de lógica e interactividad del lado del cliente. Manipulación del DOM, programación asíncrona (Promises, async/await), consumo de APIs externas mediante fetch y Axios, y manejo modular del código con ES6+.'
  },
  { 
    name: 'Axios', 
    icon: '/assets/images/icon-axios.webp', 
    percent: 90, 
    stars: 4,
    description: 'Cliente HTTP basado en promesas para consumir servicios y APIs. Configuración de interceptores globales para el manejo automatizado de tokens JWT, manejo estructurado de peticiones, cancelaciones y control centralizado de errores.'
  },
  { 
    name: 'GitHub', 
    icon: '/assets/images/icon-github.png', 
    percent: 75, 
    stars: 3,
    description: 'Control de versiones colaborativo y gestión de repositorios de código. Manejo de ramas (branching), fusión de código (merging), resolución de conflictos, y flujos de trabajo como GitFlow para asegurar integraciones seguras.'
  },
  { 
    name: 'MySQL', 
    icon: '/assets/images/icon-mysql.png', 
    percent: 65, 
    stars: 2,
    description: 'Modelado y consulta de bases de datos relacionales. Escritura de queries eficientes, Joins complejos, indexación para optimizar el rendimiento, diseño de diagramas entidad-relación y programación de procedimientos almacenados.'
  },
  { 
    name: 'MongoDB', 
    icon: '/assets/images/icon-mongodb.png', 
    percent: 75, 
    stars: 3,
    description: 'Gestión de bases de datos NoSQL basadas en documentos. Creación de esquemas flexibles mediante Mongoose, operaciones CRUD avanzadas, pipelines de agregación complejos y optimización de consultas en el stack MERN.'
  },
  { 
    name: 'Material UI', 
    icon: '/assets/images/icon-material_ui.png', 
    percent: 50, 
    stars: 2,
    description: 'Implementación de sistemas de diseño consistentes y elegantes mediante componentes React prediseñados y personalizables. Uso de temas globales (theming), personalización mediante sx props y maquetación con Material Design.'
  },
  { 
    name: 'Bootstrap', 
    icon: '/assets/images/icon-bootstrap.png', 
    percent: 80, 
    stars: 4,
    description: 'Maquetación rápida y responsive utilizando la rejilla (grid system) de Bootstrap, utilidades CSS y componentes interactivos prediseñados y listos para producción, minimizando los tiempos de maquetación.'
  },
  { 
    name: 'JWT', 
    icon: '/assets/images/icon-jwt.png', 
    percent: 70, 
    stars: 3,
    description: 'Implementación de mecanismos de autenticación y autorización seguros en APIs web. Generación, firma y verificación de JSON Web Tokens (JWT) para la protección de endpoints, y almacenamiento seguro en cookies o LocalStorage.'
  },
  { 
    name: 'NodeJS', 
    icon: '/assets/images/icon-nodejs.png', 
    percent: 70, 
    stars: 3,
    description: 'Desarrollo de servidores y APIs REST robustas y escalables con Express. Control de flujos de middleware, enrutamiento semántico, control de CORS, carga de archivos y comunicación asíncrona con bases de datos relacionales y NoSQL.'
  },
  { 
    name: 'React', 
    icon: '/assets/images/icon-react.jpg', 
    percent: 60, 
    stars: 3,
    description: 'Desarrollo de aplicaciones de una sola página (SPA) interactivas y modulares. Creación de componentes funcionales reutilizables, gestión de estados (useState, useEffect, useContext) y enrutamiento dinámico.'
  },
  { 
    name: 'Postman', 
    icon: '/assets/images/icon-postman.webp', 
    percent: 90, 
    stars: 4,
    description: 'Pruebas y documentación interactiva de APIs REST. Creación de colecciones de endpoints, simulación de llamadas HTTP complejas, automatización de scripts de testeo y validación de payloads y códigos de estado HTTP.'
  },
  { 
    name: 'Java', 
    icon: '/assets/images/icon-java.png', 
    percent: 50, 
    stars: 2,
    description: 'Programación orientada a objetos en entornos estructurados. Implementación de estructuras de datos, colecciones, algoritmos lógicos, herencia, encapsulamiento, polimorfismo y manejo de archivos y excepciones.'
  },
  { 
    name: 'Tailwind', 
    icon: '/assets/images/icon-tailwind.png', 
    percent: 50, 
    stars: 3,
    description: 'Estilización rápida basada en clases de utilidad directo en el HTML. Permite crear interfaces dinámicas y altamente personalizadas sin salir del código React, manteniendo un bundle css extremadamente ligero y optimizado.'
  },
  { 
    name: 'JavaFX', 
    icon: '/assets/images/icon-javaFX.jpg', 
    percent: 30, 
    stars: 1,
    description: 'Desarrollo de interfaces gráficas de usuario para aplicaciones de escritorio en Java. Uso de contenedores, layouts, controles de UI y animaciones interactivas utilizando FXML y Scene Builder.'
  },
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
  { 
    title: 'Desarrollo de aplicaciones con Java', 
    year: '2023', 
    description: 'Fundación Kinal Guatemala', 
    icon: '/assets/images/icon-java.png',
    company: 'Fundación Kinal Guatemala',
    role: 'Estudiante de Programación',
    longDescription: `Durante este periodo formativo me introduje formalmente en el mundo de la programación orientada a objetos utilizando Java. Desarrollé múltiples proyectos prácticos de consola que me permitieron comprender a fondo conceptos fundamentales como clases, herencia, polimorfismo, interfaces y manejo de excepciones.

    Fue mi primer contacto directo con la estructuración formal de código y la lógica de programación avanzada, sentando las bases esenciales para mi trayectoria como desarrollador de software. Aprendí a pensar algorítmicamente y a organizar mis desarrollos de forma limpia.`,
    skillsUsed: ['Java', 'GitHub']
  },
  { 
    title: 'Desarrollo de aplicaciones con JavaFX', 
    year: '2024', 
    description: 'Fundación Kinal Guatemala', 
    icon: '/assets/images/icon-javaFX.jpg',
    company: 'Fundación Kinal Guatemala',
    role: 'Estudiante de Programación',
    longDescription: `En esta etapa profundicé en la creación de aplicaciones de escritorio interactivas utilizando la biblioteca JavaFX en combinación con Scene Builder para el diseño visual de interfaces. Desarrollé interfaces enriquecidas con elementos de control modernos y estructuras visuales complejas, interactuando directamente con bases de datos relacionales SQL para registrar, modificar y visualizar información de forma dinámica.

    Esta experiencia mejoró significativamente mi entendimiento sobre el patrón Modelo-Vista-Controlador (MVC) y la correcta separación de responsabilidades en el desarrollo de software.`,
    skillsUsed: ['Java', 'JavaFX', 'MySQL', 'GitHub']
  },
  { 
    title: 'Desarrollo Backend', 
    year: '2024 - 2025', 
    description: 'Fundación Kinal Guatemala', 
    icon: '/assets/images/icon-nodejs.png',
    company: 'Fundación Kinal Guatemala',
    role: 'Desarrollador Backend en Formación',
    longDescription: `Formación intensiva enfocada en la creación de servicios backend seguros, rápidos y altamente escalables. Aprendí a estructurar servidores HTTP con NodeJS y Express, gestionar bases de datos NoSQL con MongoDB mediante Mongoose, e implementar flujos de seguridad robustos utilizando JSON Web Tokens (JWT) y encriptación de contraseñas.

    Desarrollé la capacidad de diseñar e implementar arquitecturas de APIs REST limpias, documentando endpoints y controlando errores de forma sistemática y ordenada.`,
    skillsUsed: ['NodeJS', 'MongoDB', 'JWT', 'Postman', 'GitHub']
  },
  { 
    title: 'Desarrollo Frontend', 
    year: '2024 - 2025', 
    description: 'Fundación Kinal Guatemala', 
    icon: '/assets/images/icon-react.jpg',
    company: 'Fundación Kinal Guatemala',
    role: 'Desarrollador Frontend en Formación',
    longDescription: `Periodo dedicado a dominar la construcción de interfaces de usuario modernas, interactivas y responsivas. Aprendí React a profundidad, abarcando el ciclo de vida de componentes, Hooks esenciales, manejo de estados y enrutamiento dinámico. Complementé mis proyectos con frameworks de CSS como Bootstrap y Tailwind para lograr interfaces adaptables y estéticamente atractivas.

    El enfoque principal estuvo en crear experiencias de usuario interactivas de alto rendimiento y consumir APIs REST seguras mediante Axios de forma estructurada.`,
    skillsUsed: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Tailwind', 'Axios', 'GitHub']
  },
  { 
    title: 'Desarrollador Web Full-Stack', 
    year: '2024 - 2025', 
    description: 'Fundación Kinal Guatemala', 
    icon: '/assets/images/icon-jwt.png',
    company: 'Fundación Kinal Guatemala',
    role: 'Desarrollador Full-Stack en Formación',
    longDescription: `Consolidación de las destrezas backend y frontend mediante la creación de aplicaciones web completas utilizando el stack MERN. Llevé a cabo la integración de bases de datos estructuradas y no estructuradas, APIs REST seguras y paneles de administración dinámicos e interactivos.

    Esta formación culminó con proyectos de alta complejidad que simulan escenarios del mundo real, mejorando mi capacidad para solucionar problemas en ambas capas de la aplicación y coordinar flujos de datos complejos.`,
    skillsUsed: ['React', 'NodeJS', 'MongoDB', 'JWT', 'Axios', 'Tailwind', 'GitHub', 'HTML', 'CSS', 'JavaScript']
  },
  { 
    title: 'Desarrollo ChatBot', 
    year: '2025-2026', 
    description: 'Sistems Enterprise S.A.', 
    icon: '/assets/images/senia_sentada.png',
    company: 'Sistems Enterprise S.A.',
    role: 'Desarrollador de Inteligencia Artificial / Chatbots',
    longDescription: `Participé en el desarrollo e implementación del chatbot inteligente 'Sen-IA', integrado con Dialogflow, Gemini 1.5 y WhatsApp Business API de Meta para Sistems Enterprise S.A. Fui responsable de configurar flujos de diálogo interactivos, enlazar intenciones con webhooks del CRM Dolibarr y refinar el procesamiento de lenguaje natural (NLP) para optimizar la interacción con los usuarios.

    Logramos automatizar el registro de leads, creación de tickets y envío de correos electrónicos en tiempo real, impulsando significativamente la productividad comercial y el soporte técnico.`,
    skillsUsed: ['React', 'NodeJS', 'Axios', 'JavaScript', 'Google Cloud', 'Dolibarr CRM', 'Gemini 1.5', 'GitHub', 'HTML', 'CSS']
  },
  { 
    title: 'Modificación exportaciones CRM-Dolibarr', 
    year: '2025-2026', 
    description: 'Sistems Enterprise S.A.', 
    icon: '/assets/images/logo_sencom_original.png',
    company: 'Sistems Enterprise S.A.',
    role: 'Desarrollador de Software',
    longDescription: `Llevé a cabo la modificación y optimización de los módulos de exportación de datos en el CRM Dolibarr para cumplir con las necesidades específicas de la gerencia comercial en Sistems Enterprise S.A. Ajusté scripts internos del CRM y extendí endpoints de su API REST para garantizar exportaciones limpias de reportes comerciales, cotizaciones y estados de tickets hacia formatos estructurados compatibles con los requerimientos operativos de la empresa.

    Esta tarea requirió un minucioso análisis del modelo de datos del CRM y la optimización de consultas SQL para evitar cuellos de botella en la generación de reportes masivos.`,
    skillsUsed: ['Dolibarr CRM', 'MySQL', 'NodeJS', 'GitHub']
  },
];

export const PROJECTS = [
  {
    title: 'Zenith AI',
    featured: true,
    description: `Zenith AI es una plataforma SaaS de prospección B2B automatizada e inteligente diseñada para revolucionar la forma en que las empresas identifican y contactan a clientes potenciales. El sistema integra tecnologías de punta para automatizar por completo la investigación de empresas y la redacción de correos electrónicos fríos personalizados.

    Desarrollada bajo una arquitectura de alto rendimiento, la aplicación combina un frontend de última generación en React y Next.js con un backend robusto en NodeJS y Express, complementado con persistencia NoSQL en MongoDB y consumo optimizado de servicios en la nube.

    Funcionalidades principales:

    ✅ Extracción masiva y automática de prospectos y empresas mediante scraping inteligente.
    ✅ Análisis semántico de sitios web corporativos en tiempo real utilizando Inteligencia Artificial.
    ✅ Identificación automatizada de tecnologías, infraestructura y puntos de dolor empresariales.
    ✅ Redacción de correos electrónicos fríos hiper-personalizados adaptados al perfil de cada prospecto.
    ✅ Constructor visual de plantillas de correo y gestión interactiva de campañas masivas.
    ✅ Pipeline comercial y CRM integrado para el seguimiento de leads (Frío, Contactado, Ganado).
    ✅ Módulos seguros de autenticación JWT y autorización de remitentes mediante tokens.
    ✅ Dashboard de analíticas avanzadas con tasas de apertura, clics y conversión en tiempo real.

    Valor del Proyecto:

    Este proyecto representa una solución integral de grado empresarial que optimiza el proceso de ventas mediante el uso de inteligencia artificial generativa, resolviendo la ineficiencia del contacto frío tradicional. Demuestra habilidades avanzadas en la integración de modelos de lenguaje grande (LLMs), scraping robusto, persistencia de datos estructurados y el diseño de interfaces de usuario interactivas de alta gama.`,
    images: [
      '/assets/images/ze1.png', '/assets/images/ze2.png', '/assets/images/ze3.png', '/assets/images/ze4.png',
      '/assets/images/ze5.png', '/assets/images/ze6.png', '/assets/images/ze7.png', '/assets/images/ze8.png',
      '/assets/images/ze9.png', '/assets/images/ze10.png', '/assets/images/ze11.png', '/assets/images/ze12.png',
      '/assets/images/ze13.png', '/assets/images/ze14.png', '/assets/images/ze15.png', '/assets/images/ze16.png',
      '/assets/images/ze18.png'
    ],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
      { name: 'JWT', icon: '/assets/images/icon-jwt.png' },
      { name: 'Inteligencia Artificial', icon: '/assets/images/icon-ia.webp' },
      { name: 'API REST', icon: '/assets/images/icon-apirest.png' }
    ],
    github: 'https://github.com/IanAlfaroSantos/Zenith-AI.git',
    preview: 'https://prospeccion-12ca0.web.app'
  },
  {
    title: 'Proyecto Chilaquiles Top',
    featured: true,
    description: `Chilaquiles Top es una aplicación web de pedidos desarrollada para un restaurante especializado en chilaquiles. El sistema permite a los clientes personalizar sus pedidos seleccionando bases, salsas, proteínas y extras de forma dinámica.

    El proyecto fue desarrollado con un frontend en React y un backend en NodeJS, conectados mediante una API REST para manejar la comunicación y gestión de pedidos en tiempo real.

    Funcionalidades principales:

    ✅ Menú interactivo con personalización de productos
    ✅ Sistema de autenticación y gestión de usuarios
    ✅ Carrito de compras y proceso de pedidos
    ✅ Seguimiento del estado de los pedidos
    ✅ Integración con WhatsApp para notificaciones y verificación OTP
    ✅ Panel de administración para productos y pedidos
    ✅ Diseño responsive para móviles y escritorio

    Este proyecto me permitió fortalecer conocimientos en desarrollo full-stack, integración de APIs, autenticación de usuarios y manejo de estados en aplicaciones web modernas.

    Valor del Proyecto:

    Este proyecto demuestra la capacidad de desarrollar soluciones completas, enfocadas en mejorar la eficiencia operativa y la experiencia del cliente en el sector gastronómico, integrando tecnologías modernas de desarrollo web y servicios de comunicación inteligentes.`,
    images: [
      '/assets/images/ch1.png', '/assets/images/ch2.png', '/assets/images/ch3.png', '/assets/images/ch4.png',
      '/assets/images/ch5.png', '/assets/images/ch6.png', '/assets/images/ch7.png', '/assets/images/ch8.png',
      '/assets/images/ch16.png',
      '/assets/images/ch9.png', '/assets/images/ch10.png', '/assets/images/ch11.png', '/assets/images/ch12.png',
      '/assets/images/ch17.png', '/assets/images/ch18.png',
      '/assets/images/ch13.png', '/assets/images/ch14.png', '/assets/images/ch15.png'
    ],
    skills: [
      { name: 'React', icon: '/assets/images/icon-react.jpg' },
      { name: 'NodeJS', icon: '/assets/images/icon-nodejs.png' },
      { name: 'MongoDB', icon: '/assets/images/icon-mongodb.png' },
      { name: 'Tailwind', icon: '/assets/images/icon-tailwind.png' },
      { name: 'Axios', icon: '/assets/images/icon-axios.webp' },
      { name: 'JavaScript', icon: '/assets/images/icon-js.png' },
      { name: 'GitHub', icon: '/assets/images/icon-github.png' },
      { name: 'HTML', icon: '/assets/images/icon-html.png' },
      { name: 'CSS', icon: '/assets/images/icon-css.png' },
      { name: 'Whatsapp API', icon: '/assets/images/icon-whatsapp-color.webp' },
      { name: 'API REST', icon: '/assets/images/icon-apirest.png' }
    ],
    preview: 'https://chilaquilestop.com/'
  },
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
    preview: 'https://wa.me/50223792400'
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
      { name: 'Postman', icon: '/assets/images/icon-postman.webp' },
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
      { name: 'Postman', icon: '/assets/images/icon-postman.webp' },
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
      { name: 'Postman', icon: '/assets/images/icon-postman.webp' },
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
      { name: 'Postman', icon: '/assets/images/icon-postman.webp' },
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
    ],
    github: 'https://github.com/IanAlfaroSantos/IN5CM-Proyecto-SuperKinal.git'
  },
];
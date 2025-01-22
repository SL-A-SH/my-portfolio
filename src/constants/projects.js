export const projects = [
  {
    id: '1',
    category: 'Game Development',
    title: '3D Hack & Slash Adventure',
    description: 'An immersive 3D hack & slash game featuring a beautiful open world environment with diverse enemy types and interactive item collection system.',
    longDescription: `A third-person hack & slash game that showcases a vibrant open world filled with 
    challenging enemies and discoverable items. Players engage in fluid combat while exploring 
    a meticulously crafted environment.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/5R8MFhXC0Lw',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['Unreal Engine', 'C++', 'Blueprints', 'Game Design'],
    demoLink: 'https://youtu.be/5R8MFhXC0Lw',
    codeLink: 'https://github.com/SL-A-SH/Slash',
    features: [
      'Dynamic combat system with multiple attack combinations',
      'Diverse enemy AI behaviors and combat patterns',
      'Interactive item pickup and inventory system',
      'Expansive open world environment'
    ],
    technicalDetails: `Developed using Unreal Engine 5, implementing advanced character controllers
    and combat mechanics using C++ and Blueprints. Features custom animation systems and
    optimized environment streaming for seamless open-world exploration.`,
    timeline: 'July 2023 - Oct 2023',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing responsive combat mechanics',
      'Creating diverse enemy AI behaviors',
    ]
  },
  {
    id: '2',
    category: 'Game Development',
    title: 'Third-Person Shooter',
    description: 'An open-world third-person shooter featuring multiple enemy types, comprehensive inventory system, and diverse weapon mechanics.',
    longDescription: `A tactical third-person shooter set in an expansive open world. Players manage 
    resources like ammunition and health while engaging various enemy types, featuring a robust 
    inventory system and pickup mechanics.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/DUZof8BJ7TM',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['Unreal Engine', 'C++', 'Blueprints', 'AI'],
    demoLink: 'https://youtu.be/DUZof8BJ7TM',
    codeLink: 'https://github.com/SL-A-SH/AlienInvasion',
    features: [
      'Multiple weapon types with unique mechanics',
      'Complex inventory management system',
      'Dynamic enemy AI with different behaviors',
      'Resource management (ammo, health)',
      'Interactive environment with collectible items'
    ],
    technicalDetails: `Built in Unreal Engine 5, featuring advanced weapon systems, inventory 
    management, and enemy AI. Implements optimized pickup systems and resource management.`,
    timeline: 'Dec 2023 - Apr 2023',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing complex inventory system',
      'Creating engaging enemy AI behaviors'
    ]
  },
  {
    id: '3',
    category: 'Game Development',
    title: 'Rogue-like Top-down Shooter',
    description: 'A dark-themed top-down rogue-like shooter developed during a gam jam featuring procedurally generated levels and dynamic room layouts.',
    longDescription: `Developed during a game jam, this rogue-like shooter combines procedural 
    generation with intense top-down combat. Features a dark atmosphere and randomly generated 
    levels for high replayability.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/szF0RlDMpvw',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['Unreal Engine', 'C++', 'Blueprints', 'Game Jam'],
    demoLink: 'https://youtu.be/szF0RlDMpvw',
    codeLink: 'https://github.com/lzeio/NU_GameJam/tree/main/NUGameJam',
    features: [
      'Procedurally generated levels',
      'Dynamic room layouts',
      'Smooth player mechanics and animations',
      'Dark-themed environment design'
    ],
    technicalDetails: `Created in Unreal Engine, featuring procedural level generation and 
    refined player mechanics. Implements smooth character animations and atmospheric lighting.`,
    timeline: '6th Jan 2025 - 19th Jan 2025',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing procedural level generation',
      'Creating responsive player controls',
      'Developing smooth character animations'
    ]
  },
  {
    id: '4',
    category: 'Game Development',
    title: 'Multiplayer Cat Maze Adventure',
    description: 'A puzzle maze game where players control a cat searching for its kittens while solving puzzles and competing for high scores in multiplayer mode.',
    longDescription: `An engaging maze puzzle game combining single-player story elements with 
    multiplayer competition. Players navigate as a cat, collecting coins and finding kittens 
    while avoiding enemies, with multiplayer support for competitive gameplay.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/wL6tOVd26D0',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['Custom Engine', 'OpenGL', 'C++', 'Multiplayer'],
    demoLink: 'https://youtu.be/wL6tOVd26D0',
    codeLink: 'https://github.com/SL-A-SH/CSC8503',
    features: [
      'Single-player puzzle solving gameplay',
      'Multiplayer competitive mode',
      'Coin collection and scoring system',
      'Enemy avoidance mechanics',
      'Kitten rescue objectives'
    ],
    technicalDetails: `Developed using a custom game engine and OpenGL, implementing both 
    single-player and multiplayer functionality. Features networked gameplay for score competition.`,
    timeline: '18th Nov 2024 - 13th Dec 2024',
    role: 'Developer',
    challenges: [
      'Working with custom game engine',
      'Implementing multiplayer functionality',
      'Creating engaging puzzle mechanics'
    ]
  },
  {
    id: '5',
    category: 'Game Development',
    title: 'Mars Evolution Simulation',
    description: 'An interactive Mars environment simulation showcasing the planets evolution with dynamic weather, lighting effects, and atmospheric transitions.',
    longDescription: `A technical demonstration showing Mars' transformation from ancient to 
    current state, featuring dynamic weather systems, day/night cycles, and special effects 
    including UFO interactions and environmental changes.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/CCkT28HZl3M',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['OpenGL', 'C++', 'Graphics Programming', 'Shader Programming'],
    demoLink: 'https://youtu.be/CCkT28HZl3M',
    codeLink: 'https://github.com/SL-A-SH/CSC8502',
    features: [
      'Dynamic weather system (lightning, rain)',
      'Day/night cycle implementation',
      'Interactive UFO with beam lighting',
      'Terrain modification effects',
      'Ancient to modern Mars transition',
      'Post-processing effects (bloom, blur)'
    ],
    technicalDetails: `Created using OpenGL, implementing advanced graphics techniques including 
    custom shaders, lighting systems, and post-processing effects. Features dynamic terrain 
    modification and atmospheric effects.`,
    timeline: '21st Oct 2024- 15th Nov 2024',
    role: 'Graphics Programmer',
    challenges: [
      'Implementing complex weather systems',
      'Creating realistic lighting effects',
      'Developing terrain modification system',
      'Adding post-processing effects'
    ]
  },
  {
    id: 'prof-1',
    category: 'Professional Work',
    title: 'Cross-Platform Banking Application',
    description: 'A comprehensive banking application developed for both Android and iOS platforms, featuring robust security measures and seamless user experience.',
    longDescription: `A full-featured banking application that provides users with secure access to 
    their financial services across both Android and iOS platforms. The application maintains 
    consistent functionality while adhering to platform-specific design guidelines.`,
    media: {
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Banking application concept illustration'
    },
    mediaType: 'banking',
    tags: ['React Native', 'iOS', 'Android', 'Node.js', 'Security', 'CI/CD'],
    features: [
      'Cross-platform compatibility',
      'Secure authentication system',
      'Real-time transaction tracking',
      'Automated build deployment system'
    ],
    technicalDetails: `Built using React Native for cross-platform development, implementing 
    platform-specific optimizations. Features automated CI/CD pipeline for streamlined deployment 
    and rigorous security measures compliant with banking industry standards.`,
    timeline: 'May 2019 - Apr 2021',
    role: 'Software Developer',
    team: 'International Development Team',
    challenges: [
      'Ensuring consistent functionality across platforms',
      'Implementing robust security measures',
      'Implementing Document Scanner and Auto-Fill'
    ]
  },
  {
    id: 'prof-2',
    category: 'Professional Work',
    title: 'Educational Communication Suite',
    description: 'A comprehensive suite of educational tools including real-time chat, video conferencing, and student management applications.',
    longDescription: `An integrated educational platform that facilitates real-time communication 
    between teachers and students through chat and video conferencing capabilities. Includes 
    features for attendance tracking and real time quiz system.`,
    media: {
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Educational platform concept'
    },
    mediaType: 'education',
    tags: ['React', 'React-Native', 'WebRTC', 'Redis', 'Node.js', 'AWS','MongoDB', 'WebSockets', 'Android'],
    features: [
      'Real-time chat with Redis synchronization',
      'Real-time quiz system',
      'Real-time document upload and download functionality',
      'Live video conferencing capabilities',
      'Student attendance tracking',
      'Test score management',
      'Cross-server communication'
    ],
    technicalDetails: `Developed using React for web applications and native Android development. 
    Implements Redis for message synchronization, WebRTC for video conferencing, and real-time 
    WebSocket connections for chat functionality.`,
    timeline: 'Oct 2017 - Apr 2019',
    role: 'Software Developer',
    challenges: [
      'Implementing cross-server communication',
      'Optimizing video conferencing performance',
      'Ensuring real-time data synchronization'
    ]
  },
  {
    id: 'prof-3',
    category: 'Professional Work',
    title: 'Hotel Booking Platform',
    description: 'A single-page web application designed to streamline and simplify the hotel booking process.',
    longDescription: `A modern, user-friendly hotel booking platform that simplifies the process 
    of finding and reserving accommodations. Features an intuitive interface and streamlined 
    booking flow.`,
    media: {
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Hotel booking application concept'
    },
    mediaType: 'hotel',
    tags: ['AngularJS', 'Single Page Application', 'RESTful API'],
    features: [
      'Intuitive search interface',
      'Real-time availability checking',
      'Streamlined booking process',
      'Responsive design'
    ],
    technicalDetails: `Built as a single-page application using AngularJS, featuring optimized 
    performance and seamless user experience. Implements RESTful API integration for real-time 
    data handling.`,
    timeline: 'Mar 2017 - June 2017',
    role: 'Software Developer',
    challenges: [
      'Optimizing application performance',
      'Implementing real-time availability updates',
      'Creating intuitive user interface'
    ]
  },
  {
    id: 'prof-4',
    category: 'Professional Work',
    title: 'Mobile Test Taking Platform',
    description: 'An Android application for conducting and managing educational tests with real-time results and attendance tracking.',
    longDescription: `A comprehensive test-taking platform developed for Android devices, 
    featuring secure login, real-time result tracking, and automated attendance management. 
    Designed to streamline the assessment process in educational settings.`,
    media: {
      type: 'image',
      src: '/api/placeholder/400/300',
      alt: 'Mobile test taking platform illustration'
    },
    mediaType: 'test',
    tags: ['Android', 'React Native', 'MySQL'],
    features: [
      'Real-time test result tracking',
      'Automated attendance system',
      'Timer functionality',
      'Offline support'
    ],
    technicalDetails: `Developed for Android using React Native, with PhpMySQL 
    integration for real-time data synchronization. Features offline support and secure 
    test-taking environment.`,
    timeline: 'Mar 2021 - June 2022',
    role: 'Freelance Mobile App Developer',
    challenges: [
      'Implementing secure test environment',
      'Ensuring real-time result synchronization',
      'Managing offline functionality'
    ]
  }
];
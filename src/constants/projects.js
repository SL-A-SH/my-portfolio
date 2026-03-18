import screenshot1 from '../assets/leaf-and-spine/screenshots/1.png';
import screenshot2 from '../assets/leaf-and-spine/screenshots/2.png';
import screenshot3 from '../assets/leaf-and-spine/screenshots/3.png';
import screenshot4 from '../assets/leaf-and-spine/screenshots/4.png';
import screenshot5 from '../assets/leaf-and-spine/screenshots/5.png';
import screenshot6 from '../assets/leaf-and-spine/screenshots/6.png';
import screenshot7 from '../assets/leaf-and-spine/screenshots/7.png';
import screenshot8 from '../assets/leaf-and-spine/screenshots/8.png';
import screenshot9 from '../assets/leaf-and-spine/screenshots/9.png';

export const projects = [
  {
    id: 'leaf-and-spine',
    category: 'Mobile Apps',
    title: 'Leaf & Spine',
    description: 'A cross-platform PDF & EPUB reader with customizable 3D bookshelves, immersive reading environments, and ambient soundscapes. Live on Google Play and Apple App Store.',
    longDescription: `Leaf & Spine is a production mobile application I designed and shipped independently from the ground up. The app transforms digital reading into a personalized sanctuary. Users can import PDFs and EPUBs, organize them on beautifully rendered 3D bookshelves, and create the perfect reading atmosphere with ambient sounds and immersive environments.
                      The app features a dynamic in-app content store with unlockable UI assets including bookshelves, book covers, and animated ambient environments. All premium purchases are secured with server-side validation via Google Cloud Functions, and Firebase Anonymous Authentication ensures account-less usage while maintaining entitlements across devices.
                      Designed with a privacy-first architecture as no personal data is collected, yet secure purchase entitlements are maintained.`,
    media: {
      type: 'screenshots',
      src: screenshot1,
      alt: 'Leaf & Spine — 3D bookshelf reading app'
    },
    screenshots: [screenshot1, screenshot2, screenshot3, screenshot4, screenshot5, screenshot6, screenshot7, screenshot8, screenshot9],
    tags: ['React Native', 'Expo', 'Firebase', 'Google Cloud Functions', 'TypeScript', 'iOS', 'Android'],
    playStoreLink: 'https://play.google.com/store/apps/details?id=com.experaforge.leafandspine&pcampaignid=web_share',
    appStoreLink: 'https://apps.apple.com/in/app/leaf-spine/id6758519785',
    timeline: 'Oct 2025 – Present',
    role: 'Solo Developer',
    features: [
      'Cross-platform iOS & Android — deployed to Google Play and Apple App Store',
      'Modular 3D bookshelf library with customizable designs and materials',
      'Clean, distraction-free PDF and EPUB reader',
      'Dynamic in-app content store with unlockable bookshelves, covers, and environments',
      'Immersive ambient environments with soundscapes (rain, fireplace, cafe, beach)',
      'Secure server-side in-app purchase validation via Google Cloud Functions',
      'Firebase Anonymous Authentication for account-less usage',
      'Persistent book spine and cover customization system',
      'Privacy-first architecture — no personal data collected'
    ],
    responsibilities: [
      'Architected and developed the full application using React Native and Expo, supporting both iOS and Android deployments',
      'Designed a modular library system allowing users to import, organize, and read PDF and EPUB documents within customizable 3D bookshelf environments',
      'Built a dynamic in-app content store delivering unlockable UI assets such as bookshelves, book covers, and animated ambient environments',
      'Implemented secure server-side in-app purchase validation using Google Cloud Functions to verify store receipts and prevent fraudulent purchases',
      'Integrated Firebase Anonymous Authentication to enable account-less usage while maintaining secure purchase entitlements across devices',
      'Developed persistent user customization systems supporting dynamic book spine design, cover personalization, and bookshelf configuration',
      'Optimized document rendering and navigation for smooth reading performance and responsive library browsing',
      'Deployed and maintained the application on Google Play and Apple App Store'
    ],
    technicalDetails: `Built with React Native and Expo for cross-platform deployment. Firebase provides anonymous authentication and real-time entitlement sync. Google Cloud Functions handle server-side receipt validation for both Apple and Google in-app purchases, preventing fraudulent access to premium content. The 3D bookshelf UI is built with custom rendering logic for performant, animated shelf environments. Expo EAS manages build and submission pipelines for both stores.`,
    challenges: [
      'Implementing secure cross-platform in-app purchase validation without storing personal user data',
      'Building performant 3D bookshelf rendering with smooth animations on both iOS and Android',
      'Designing a scalable content store architecture that supports multiple asset types (shelves, covers, environments, sounds)',
      'Managing anonymous user entitlements persistently across device reinstalls'
    ]
  },
  {
    id: '1',
    category: 'Game Development',
    title: 'Graphics Engine',
    description: 'A DirectX11-based rendering engine that utilizes compute shaders, demonstrating significant performance improvements when rendering thousands of objects',
    longDescription: `Our system renders up to 5,000 spaceship models while providing real-time performance metrics and comprehensive benchmarking capabilities. 
    Results show that GPU-driven rendering achieves substantial performance gains, particularly in scenarios with high object counts, validating the effectiveness of moving scene management computations to the GPU.`,
    media: {
      type: 'youtube',
      src: 'https://youtu.be/BJ0ktjxmzzc',
      thumbnail: '/api/placeholder/400/300'
    },
    tags: ['C++', 'DirectX11', 'HLSL', 'Qt'],
    demoLink: 'https://youtu.be/BJ0ktjxmzzc',
    codeLink: 'https://github.com/SL-A-SH/GraphicsEngine',
    responsibilities: [
      'Implemented DirectX11 rendering pipeline',
      'Implemented a Compute Shader Pipeline',
      'Created a robust benchmarking system capable of collecting detailed performance metrics including frame rates, draw calls, memory usage, and culling efficiency',
      'Implemented a comprehensive performance monitoring interface that provides real-time visibility intorendering pipeline performance',
      'Conducted a systematic performance comparison between CPU-driven and GPU-driven rendering approaches across varying object counts and scene complexities'
    ],
    features: [
      'Rendering Engine Core',
      'Performance Profiling System',
      'Compute Shader Pipeline',
      'User Interface Layer'
    ],
    timeline: 'May 2025 - July 2025',
    role: 'Rendering Engineer',
    challenges: [
      'GPU-CPU Synchronization',
      'Memory Management',
      'Rendering Pipeline Integration',
      'Debugging and Validation'
    ]
  },
  {
    id: '2',
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
    tags: ['Unreal Engine', 'C++', 'Blueprints', 'AI'],
    demoLink: 'https://youtu.be/5R8MFhXC0Lw',
    codeLink: 'https://github.com/SL-A-SH/Slash',
    responsibilities: [
      'Developed complete gameplay systems including character movement, combat mechanics, and enemy AI from scratch using C++ and Blueprints',
      'Implemented interactive features including sword collection, equipment system, destructible objects, player HUD and health/potion mechanics with corresponding sound effects',
      'Created responsive combat system with enemy AI behavior, chase mechanics, and damage systems, while integrating marketplace assets for visuals and audio'
    ],
    features: [
      'Dynamic combat system with multiple attack combinations',
      'Diverse enemy AI behaviors and combat patterns',
      'Interactive item pickup and inventory system',
      'Expansive open world environment'
    ],
    timeline: 'July 2023 - Oct 2023',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing responsive combat mechanics',
      'Creating diverse enemy AI behaviors',
    ]
  },
  {
    id: '3',
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
    responsibilities: [
      'Developed complete gameplay systems including character movement, shooting mechanics, inventory management, and enemy AI from scratch using C++ and Blueprints',
      'Implemented interactive features including gun collection, equipment system, explosive objects, player HUD and health/potion mechanics with corresponding sound effects',
      'Created responsive combat system with enemy AI behavior, chase mechanics, and damage systems, while integrating marketplace assets for visuals and audio'
    ],
    features: [
      'Multiple weapon types with unique mechanics',
      'Complex inventory management system',
      'Dynamic enemy AI with different behaviors',
      'Resource management (ammo, health)',
      'Interactive environment with collectible items'
    ],
    timeline: 'Dec 2023 - Apr 2024',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing complex inventory system',
      'Creating engaging enemy AI behaviors'
    ]
  },
  {
    id: '4',
    category: 'Game Development',
    title: 'Rogue-like Top-down Shooter',
    description: 'A dark-themed top-down rogue-like shooter developed during a game jam featuring procedurally generated levels and dynamic room layouts.',
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
    responsibilities: [
      'Developed gameplay systems including character movement, shooting mechanics using C++',
      'Implemented features such as gun collection and weapon change effects',
      'Created a HUD for the player'
    ],
    timeline: '6th Jan 2025 - 19th Jan 2025',
    role: 'Gameplay Programmer',
    challenges: [
      'Implementing procedural level generation',
      'Creating responsive player controls',
      'Developing smooth character animations'
    ]
  },
  {
    id: '5',
    category: 'Game Development',
    title: 'Multiplayer Cat Maze Adventure - Advanced Game Technologies',
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
    responsibilities: [
      'Built core game mechanics including player movement, collision detection, and scoring system using custom game engine and OpenGL',
      'Implemented network multiplayer functionality with client-server architecture, enabling real-time competition and score synchronization',
      'Developed game physics system including collision response, trigger zones for collectibles, and character state management'
    ],
    timeline: '18th Nov 2024 - 13th Dec 2024',
    role: 'Developer',
    challenges: [
      'Working with custom game engine',
      'Implementing multiplayer functionality',
      'Creating engaging puzzle mechanics'
    ]
  },
  {
    id: '6',
    category: 'Game Development',
    title: 'Mars Evolution Simulation - Advanced Graphics for Games',
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
    responsibilities: [
      'Developed advanced graphics features including custom shaders for atmospheric effects, dynamic weather systems using OpenGL',
      'Implemented complex rendering techniques such as post-processing effects (bloom, blur), dynamic lighting, day/night cycle simulation and multiple camera angles',
      'Created interactive elements including UFO beam effects and environmental transitions'
    ],
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
    tags: ['React Native', 'iOS', 'Android', 'Python'],
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
    role: 'Software Developer - Banca Sella',
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
    longDescription: `An integrated educational platform developed from scratch that facilitates real-time communication 
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
    role: 'Software Developer - Ahaguru',
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
    longDescription: `A modern, user-friendly hotel booking platform developed from scratch that simplifies the process 
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
    role: 'Software Developer - Bookingjini',
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
    longDescription: `A comprehensive test-taking platform developed from scratch for Android devices, 
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
    role: 'Mobile App Developer - Star Projects',
    challenges: [
      'Implementing secure test environment',
      'Ensuring real-time result synchronization',
      'Managing offline functionality'
    ]
  }
];
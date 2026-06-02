export const projectsData = [
  {
    id: 1,
    title: 'CareerCompass - AI-Powered Career Guidance Platform',
    description: 'Developed an AI-powered career guidance platform for 10th and 12th-grade students, enabling exploration of 50+ career pathways through personalized LLM-based recommendations, interactive roadmaps, advanced search capabilities, and location-based college discovery using Maps API integration.',
    image: '/images/careerPath.png',
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "LLM",
      "JWT",
      "Google Maps API",
      "JavaScript",
      "REST API",
      "Tailwind CSS"
    ],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Gaurav-singh101/career_guidance-SIH-',
    liveUrl: 'https://career-guidance-sih.vercel.app/',
    status: 'In Progress',

    highlights: [
      'Built an AI-powered career recommendation system using LLM integration',
      'Provided personalized career guidance for 10th and 12th-grade students',
      'Designed interactive career roadmaps covering 50+ career pathways',
      'Implemented advanced search and filtering for careers, courses, and colleges',
      'Integrated Google Maps API for discovering nearby colleges and institutions',
      'Developed secure user authentication and profile management',
      'Created responsive and user-friendly dashboards with modern UI/UX',
      'Enabled data-driven career exploration through structured learning paths'
    ]
  },
  {
    id: 2,
    title: 'FiT-Based Early Diagnosis Framework for Ocular Disorders',
    description: 'Developed an AI-powered medical imaging framework using FiT (Fine-grained Vision Transformer) models for the early detection and classification of ocular disorders from retinal and eye images. The system assists in identifying eye diseases at an early stage, enabling faster diagnosis and improved clinical decision-making.',
    image: '/images/Eye_Img.png',
    duration: 'Research paper published  - IC3ET 2026 – IEEE',
    technologies: [
      "Vision Transformer",
      "Deep Learning Model"
    ],
    category: 'AI-ML',
    featured: true,
    status: 'Completed',
    highlights: [
      'Developed an AI-based framework for early ocular disease diagnosis',
      'Utilized FiT (Fine-grained Vision Transformer) architecture for image classification',
      'Processed and analyzed retinal and ocular medical images',
      'Achieved high-accuracy disease detection through deep learning techniques',
      'Implemented image preprocessing and feature extraction pipelines',
      'Enabled automated screening to assist healthcare professionals',
      'Reduced manual diagnostic effort through intelligent image analysis',
      'Generated prediction results with visual performance evaluation metrics'
    ]
  },
  {
    id: 3,
    title: 'Flooded Area Estimation and Rescue Path Planning Using DeepLabV3+',
    description: 'Developed an AI-powered flood monitoring and disaster response system using DeepLabV3+ (ResNet-50) for semantic segmentation of drone-captured flood imagery. The framework accurately identified flooded regions, estimated affected areas using Ground Sampling Distance (GSD) calculations, and generated optimal rescue routes through A* path planning for emergency response operations.',
    image: '/images/Flooded_Area.png',
    technologies: [
      "Python",
      "DeepLabV3+",
      "ResNet-50",
      "PyTorch",
      "OpenCV",
      "NumPy",
      "Drone Imagery",
      "Semantic Segmentation",
      "A* Algorithm",
      "Matplotlib"
    ],
    category: 'AI-ML',
    featured: true,
    status: 'Completed',
    highlights: [
      'Built an end-to-end flood segmentation pipeline using DeepLabV3+ with ResNet-50 backbone',
      'Processed high-resolution drone imagery for flooded area detection',
      'Achieved 85.21% pixel-level segmentation accuracy',
      'Implemented semantic segmentation to distinguish flooded and non-flooded regions',
      'Calculated flood-affected area using Ground Sampling Distance (GSD) estimation',
      'Integrated A* path planning algorithm for optimal rescue route generation',
      'Automated disaster assessment and emergency response support',
      'Generated visual flood maps and actionable insights for disaster management'
    ]
  },
  {
    id: 4,
    title: 'Real-Time Vehicle Tracking and Traffic Density Estimation',
    description: 'Real-Time Vehicle Tracking and Traffic Density Estimation Built a live system using FastAPI, YOLOv8, and OpenCV to detect and track vehicles from drone or traffic camera feeds, estimating traffic density in real time without storing data.',
    image: '/images/Vehicle.png',
    technologies: ["FastAPI", "Flask", "YOLOv8", "OpenCV", "Python", "Uvicorn", "Ultralytics", "NumPy"],
    category: 'AI-ML',
    featured: true,
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: '',
    status: 'Completed',
    highlights: [
      'Real-time vehicle detection using YOLOv8',
      'Live video stream processing with OpenCV',
      'FastAPI backend for high-performance inference',
      'Lightweight architecture without database dependency',
      'Supports drone and traffic camera integration',
      'Instant traffic density estimation on incoming feeds'
    ]

  },
  {
    id: 5,
    title: 'BOOK NOVA',
    description: 'Built a user-friendly e-commerce platform for buying and selling books, with features like categorized listings, smart search and filters, and a secure, hassle-free checkout experience.',
    image: '/images/book.png',
    technologies: ["Node.js", "MongoDB", "React.js", "Express.js", "TailwindCSS", "Postman"],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Gaurav-singh101/BookNova',
    liveUrl: 'https://booknova-frontend.onrender.com/',
    status: 'Completed',
    highlights: [
      "Categorized book listings for easy browsing",
      "Smart search and multi-parameter filters",
      "Secure and seamless checkout process",
      "User-friendly UI with responsive design"
    ]
  },
  {
    id: 6,
    title: 'Snap-Board-LookOnce',
    description: 'A comprehensive blog management platform that enables content creation, publication, and reader engagement with an intuitive dashboard for managing posts, media uploads, and user interactions.',
    image: '/images/snapboard.png',
    technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Bootstrap'],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/Snap-Board-LookOnce',
    liveUrl: 'https://snap-board-lookonce.onrender.com/',
    status: 'Completed',
    highlights: [
      'Easy blog post creation',
      'Cover image uploading',
      'Clean, modern interface',
      'Content management system'
    ]
  },
  {
    id: 7,
    title: 'Weather Application',
    description: 'A real-time weather forecasting app that provides current temperature, humidity, wind speed, and weather conditions for any location. Users can search for cities worldwide and get instant weather updates.',
    image: '/images/wether.png',
    technologies: ['OpenWeather', 'API', 'HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/Weather-Application',
    liveUrl: 'https://gaurav-singh101.github.io/Weather-Application/',
    status: 'Completed',
    highlights: [
      'Real-time weather data for global cities',
      'Displays temperature, humidity, wind speed, and conditions',
      'Clean and responsive user interface',
      'Search functionality with instant results'
    ]
  },
  {
    id: 8,
    title: 'Short URL Generator',
    description: 'A web application that allows users to shorten long URLs into concise links, with features for redirection tracking and URL management.',
    image: '/images/Short.png',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    category: 'Backend',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/SHORT-URL',
    liveUrl: 'https://short-url-hixn.onrender.com/signup',
    status: 'Completed',
    highlights: [
      'Generate short URLs from long links',
      'Track number of visits per short URL',
      'Unique redirection using MongoDB IDs',
      'Clean and responsive UI with EJS templates'
    ]
  }

];

export const categories = ['All', 'AI-ML', 'Full Stack', 'Frontend', 'Backend'];
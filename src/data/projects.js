export const projectsData = [
  {
    id: 1,
    title: 'Real-Time Vehicle Tracking and Traffic Density Estimation',
    description: 'Real-Time Vehicle Tracking and Traffic Density Estimation Built a live system using FastAPI, YOLOv8, and OpenCV to detect and track vehicles from drone or traffic camera feeds, estimating traffic density in real time without storing data.',
    image: '/images/Vehicle.png',
    technologies: ["FastAPI", "Flask", "YOLOv8", "OpenCV", "Python", "Uvicorn", "Ultralytics", "NumPy"],
    category: 'AI-ML',
    featured: true,
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: '',
    status: 'In Progress',
    duration: '2 months',
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
    id: 2,
    title: 'BOOK NOVA',
    description: 'Built a user-friendly e-commerce platform for buying and selling books, with features like categorized listings, smart search and filters, and a secure, hassle-free checkout experience.',
    image: '/images/book.png',
    technologies: ["Node.js", "MongoDB", "React.js", "Express.js", "TailwindCSS", "Postman"],
    category: 'Full Stack',
    featured: true,
    githubUrl: 'https://github.com/Gaurav-singh101/BookNova',
    liveUrl: 'https://booknova-frontend.onrender.com/',
    status: 'Completed',
    duration: '1 months',
    highlights: [
    "Categorized book listings for easy browsing",
    "Smart search and multi-parameter filters",
    "Secure and seamless checkout process",
    "User-friendly UI with responsive design"
    ]
  },
  {
    id: 3,
    title: 'Fake news detector',
    description: 'A machine learning-powered web application that detects and classifies news articles as real or fake using natural language processing. Trained on a Kaggle dataset to analyze text patterns and provide instant credibility checks for online content.',
    image: '/images/fake.png',
    technologies: ['Python', 'Scikit-learn', 'NLTK', 'Pandas', 'Flask', 'Kaggle Dataset'],
    category: 'AI-ML',
    featured: true,
    githubUrl: 'https://github.com/Gaurav-singh101/Fake_news-detector.git',
    liveUrl: 'https://',
    status: 'In Progress',
    duration: '3 month',
    highlights: [
      'Detects fake or real news with high accuracy',
      'Uses NLP techniques like TF-IDF and tokenization',
      'Trained on Kaggle dataset for real-world reliability',
      'User-friendly interface for instant verification'
    ]

  },
  {
    id: 4,
    title: 'Snap-Board-LookOnce',
    description: 'A comprehensive blog management platform that enables content creation, publication, and reader engagement with an intuitive dashboard for managing posts, media uploads, and user interactions.',
    image: '/images/snapboard.png',
    technologies: ['Node.js', 'Express.js', 'EJS', 'MongoDB', 'Bootstrap'],
    category: 'Full Stack',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/Snap-Board-LookOnce',
    liveUrl: 'https://snap-board-lookonce.onrender.com/',
    status: 'Completed',
    duration: '1 months',
    highlights: [
      'Easy blog post creation',
      'Cover image uploading',
      'Clean, modern interface',
      'Content management system'
    ]
  },
  {
    id: 5,
    title: 'Weather Application',
    description: 'A real-time weather forecasting app that provides current temperature, humidity, wind speed, and weather conditions for any location. Users can search for cities worldwide and get instant weather updates.',
    image: '/images/wether.png',
    technologies: ['OpenWeather', 'API' , 'HTML' , 'CSS' , 'JavaScript'],
    category: 'Frontend',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/Weather-Application',
    liveUrl: 'https://gaurav-singh101.github.io/Weather-Application/',
    status: 'Completed',
    duration: '3 weeks',
    highlights: [
      'Real-time weather data for global cities',
      'Displays temperature, humidity, wind speed, and conditions',
      'Clean and responsive user interface',
      'Search functionality with instant results'
    ]
  },
  {
    id: 6,
    title: 'Short URL Generator',
    description: 'A web application that allows users to shorten long URLs into concise links, with features for redirection tracking and URL management.',
    image: '/images/Short.png',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS'],
    category: 'Backend',
    featured: false,
    githubUrl: 'https://github.com/Gaurav-singh101/SHORT-URL',
    liveUrl: 'https://short-url-hixn.onrender.com/signup', 
    status: 'Completed',
    duration: '2 weeks',
    highlights: [
      'Generate short URLs from long links',
      'Track number of visits per short URL',
      'Unique redirection using MongoDB IDs',
      'Clean and responsive UI with EJS templates'
    ]
  }

];

export const categories = ['All', 'AI-ML', 'Full Stack', 'Frontend', 'Backend'];
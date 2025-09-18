export interface Project {
  id: string;
  title: string;
  color: 'yellow' | 'green' | 'blue' | 'red';
  badges: { text: string; url: string }[];
  links: {
    github?: string;
    devpost?: string;
    youtube?: string;
    live?: string;
  };
  images: string[];
  description: string[];
}

export const projects: Project[] = [
  {
    id: 'motispectra',
    title: 'MotiSpectra',
    color: 'red',
    badges: [
      { text: 'ConUHacks VIII - 2nd Overall', url: 'https://conuhacks-viii.devpost.com/project-gallery' }
    ],
    links: {
      github: 'https://github.com/brasenxu/MotiSpectra',
      devpost: 'https://devpost.com/software/motispectra',
      youtube: 'https://www.youtube.com/watch?v=yr4MhT2WnGA'
    },
    images: [
      '/assets/projects/motispectra/MotiSpectra-logos_white.png',
      '/assets/projects/motispectra/motispectra.png',
      '/assets/projects/motispectra/averages.png'
    ],
    description: [
      'Developed a real-time emotion analysis software using **Next.js** and **Python** to seamlessly integrate with virtual call platforms (Zoom, Google Meet, MS Teams).',
      'Implemented intuitive user interfaces with dynamic radar graphs and rolling averages for visualizing emotion and attentiveness data.',
      'Built and trained ML models from scratch using the **FER-2013** dataset for emotion and attentiveness recognition.',
      'Fine-tuned the **YuNet** face detection model, ensuring an accuracy rate of 97%'
    ]
  },
  {
    id: 'narratorrl',
    title: 'NarratorRL',
    color: 'blue',
    badges: [
      { text: 'MetHacks - 2nd Overall', url: 'https://methacks-2023.devpost.com/project-gallery' },
      { text: 'MetHacks - CoHere Sponsor Challenge 1st', url: 'https://methacks-2023.devpost.com/submissions/search?utf8=%E2%9C%93&prize_filter%5Bprizes%5D%5B%5D=66459' }
    ],
    links: {
      github: 'https://github.com/brasenxu/narratorRL',
      devpost: 'https://devpost.com/software/narratorrl',
      youtube: 'https://www.youtube.com/watch?v=90Nnksmp8TM'
    },
    images: ['/assets/projects/narratorRL/logo.png'],
    description: [
      'Developed a **mobile app** to address vision impairment using **React Native**, **Tesseract OCR (optical character recognition)**, and **Django** that recognizes text in images and narrates it aloud using **Expo**&apos;s speech synthesis service',
      'Verified legibility of text and summarized text into keywords using custom-trained **Cohere NLP** models, implementing **NLP text pre-processing strategies** to increase model effectiveness.',
      'Applied the **Cohere API** to implement advanced features such as text language detection and summarization'
    ]
  },
  {
    id: 'quizcaster',
    title: 'QuizCaster',
    color: 'blue',
    badges: [],
    links: {
      github: 'https://github.com/brasenxu/QuizCaster',
      devpost: 'https://devpost.com/software/quizcaster',
      youtube: 'https://www.youtube.com/watch?v=vjnKNGjlxCM'
    },
    images: [
      '/assets/projects/quizcaster/1.png',
      '/assets/projects/quizcaster/2.png',
      '/assets/projects/quizcaster/3.png'
    ],
    description: [
      'Developed a web application with **Python** and **OpenAI APIs** to generate multiple-choice questions from a variety of content formats such as PDFs, websites, Markdown files, and YouTube videos',
      'Integrated **text-to-speech** and **speech-to-text** capabilities with **Whisper AI** and **Microsoft Azure** to provide greater accessibility to the visual impaired',
      'Trained a **Naïve-Bayes machine learning model** using **7.8 million lines** of Wiki sentences to format text.',
      'Implemented **caching** by maintaining generated quiz questions in a **MongoDB** database, designating each with a unique UUID to allow for user replayability and sharing.'
    ]
  },
  {
    id: 'gpt-george',
    title: 'GPT George - AI Virtual Assistant',
    color: 'green',
    badges: [],
    links: {
      github: 'https://github.com/brasenxu/gpt-george',
      devpost: 'https://devpost.com/software/gpt-george',
      youtube: 'https://www.youtube.com/watch?v=Gz9_PRwB_vs'
    },
    images: ['/assets/projects/gpt-george/logo.png'],
    description: [
      'Developed a **personalized AI voice assistant** that is powered by **OpenAI APIs** to provide long-term memory and context features, setting it apart from commercial voice assistants like Alexa or Siri',
      'Implemented voice recognition and transcription using **Microsoft Azure** and **Whisper AI**, and added **GPT-4** and **Hume AI**&apos;s emotion detection model to allow the assistant to detect and adapt to the user&apos;s emotions, providing a more enhanced conversation experience.',
      'Integrated support for **10+ services features** including **Wolfram Alpha**, **Google Maps**, **News**, and **Spotify**, allowing users to perform a wide range of tasks effortlessly'
    ]
  },
  {
    id: 'review-recap',
    title: 'Review Recap',
    color: 'yellow',
    badges: [
      { text: 'uOttaHack 5 - Noibu Sponsor Challenge 1st', url: 'https://uottahack5.devpost.com/project-gallery' }
    ],
    links: {
      github: 'https://github.com/brasenxu/ReviewRecap',
      devpost: 'https://devpost.com/software/bob-gj5h29'
    },
    images: [],
    description: [
      'Built a **Chrome extension** that parses and analyzes thousands of Amazon product reviews and sorts them by rating, allowing users to make purchasing decisions more easily and boosting efficiency',
      'Used **CoHere&apos;s NLP** and **Beautiful Soup** to scrape and extract keywords from 5000+ reviews in seconds',
      'Stored and cached results in a **RESTful Django** backend'
    ]
  },
  {
    id: 'quiztopia',
    title: 'Quiztopia',
    color: 'red',
    badges: [],
    links: {
      github: 'https://github.com/brasenxu/quiztopia',
      devpost: 'https://devpost.com/software/quiztopia'
    },
    images: [],
    description: [
      'Developed a trivia app featuring a question bank of nearly **4000 problems**, allowing users to log into an account to save their elo progress on the global leaderboard',
      'Designed an intuitive and engaging user interface using **React Native**',
      'Built the backend using **AppWrite**'
    ]
  }
];

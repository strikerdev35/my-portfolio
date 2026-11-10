// All the text and lists used by the sections live here.
// Edit this file to update your portfolio without touching the components.

import disasterImg from '../assets/project-disaster.webp'
import plantImg from '../assets/project-plant.webp'
import ayurvedaImg from '../assets/project-ayurveda.webp'

export const profile = {
  name: 'Deep Narayan Baidya',
  github: 'https://github.com/strikerdev35',
  githubHandle: 'strikerdev35',
  location: 'New Delhi, India',
}

// Nav links (shown in the header)
export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
]

// Every section id, used to highlight the active nav link while scrolling
export const sectionIds = ['work', 'tools', 'process', 'about', 'journey', 'contact']

export const skills = ['Python', 'SQL', 'Excel', 'Power BI', 'React', 'Java', 'AI/ML']

export const projects = [
  {
    id: 'disaster',
    number: '01',
    category: 'AI / ML',
    title: 'AI-Powered Disaster Prediction System',
    summary: 'An AI-powered system for predicting disasters.',
    image: disasterImg,
    alt: 'Flood monitoring dashboard with a satellite map and population exposed statistics',
    width: 590,
    height: 331,
  },
  {
    id: 'plant',
    number: '02',
    category: 'AI / ML',
    title: 'Plant Disease Recognition System',
    summary: 'A system that recognises plant diseases.',
    image: plantImg,
    alt: 'AI crop disease detection screen showing a tomato early blight result',
    width: 595,
    height: 335,
  },
  {
    id: 'ayurveda',
    number: '03',
    category: 'Health tech',
    title: 'Ayurveda Diet Management System',
    summary: 'A system for managing Ayurveda-based diets.',
    image: ayurvedaImg,
    alt: 'Meal plan and health report screen of a diet app',
    width: 596,
    height: 336,
  },
]

export const processSteps = [
  { title: 'Understand', text: 'Start with the question the data needs to answer.' },
  { title: 'Clean', text: 'Fix gaps and errors so the numbers can be trusted.' },
  { title: 'Analyze', text: 'Find the patterns with Python, SQL and Excel.' },
  { title: 'Visualize', text: 'Turn findings into clear charts and Power BI dashboards.' },
  { title: 'Share', text: 'Explain what the results mean and what to do next.' },
]

// Bar heights (in %) for the little chart next to the process steps
export const processBars = [38, 55, 44, 72, 60, 92]

export const timeline = [
  { when: 'Now', title: 'Looking for data analysis roles', text: 'New Delhi, India' },
  { when: '2026 – present', title: 'MCA', text: 'Galgotias University, Greater Noida' },
  {
    when: '2026',
    title: 'BCA, AI/ML specialization',
    text: 'Galgotias University, Greater Noida. Completed.',
  },
]

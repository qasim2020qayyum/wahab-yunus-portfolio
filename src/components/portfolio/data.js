import gigbaseImage from './images/image.png'
import quizillaImage from './images/image2.png'
import fruityChatImage from './images/image3.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: gigbaseImage,
    title: 'Gigbase - Freelance Business Platform',
    description:
      'A comprehensive freelance business management platform that combines project management, CRM, messaging, file sharing, contracts, and invoicing in one streamlined platform. Built with MERN stack and AWS services.',
    demo: 'https://gigbase.io/',
  },
  {
    id: 2,
    img: quizillaImage,
    title: 'QuizillaPro - Learning Management System',
    description:'A complete LMS platform for schools (The Educator & Beaconhouse) to generate exams, manage campuses, teachers, and students. Features quiz generation and practice exam functionality.',
    demo: 'https://quizillapro.com/',
  },
  {
    id: 3,
    img: fruityChatImage,
    title: 'FruityChat - Social Media Platform',
    description:'A social media application similar to Facebook/LinkedIn with advanced features for connecting users, sharing content, and building communities. Built with MERN stack.',
     demo: 'https://www.fruitychat.com',
  },
  {
    id: 4,
    img: './images/port1.png',
    title: 'Podcast Management System',
    description:'A PMS for podcast to generate questions using previous YouTube podcast videos with the help of OpenAI integration.',
    demo: 'https://app.podpacer.com/authentication/login',
  },
  {
    id: 7,
    img: './images/port4.png',
    title: 'Multi-Company Website',
    description:'Developed Multi-Company Website to display company data.',
    demo: 'http://bluesurge.com.pk/',
  },
  {
    id: 8,
    img: './images/port5.png',
    title: 'House Renting Website',
    description:'Developing House renting website like AvantStay.',
    demo: 'http://staywithlumina.com/',
  },
  {
    id: 6,
    img: './images/port6.png',
    title: 'PNY Trainings Website',
    description:'Developed the company website frontend for PNY Trainings, Pakistan\'s No.1 IT Training Institute with 100+ courses and professional development programs.',
    demo: 'https://www.pnytrainings.com/',
  },
  {
    id: 5,
    img: quizillaImage,
    title: 'QuizillaPro Quiz App',
    description:'A comprehensive quiz application for students to generate quizzes and practice exams. Part of the QuizillaPro LMS platform.',
    demo: 'https://quizapp.quizillapro.com/pages/login/',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}

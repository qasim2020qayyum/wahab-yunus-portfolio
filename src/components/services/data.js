import { faDesktop, faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faNode, faReact, faAws} from '@fortawesome/free-brands-svg-icons'

export const services = [
  {
    id: 1,
    icon: faReact,
    title: 'Frontend Development',
    description: 'Your website frontend will be built with modern technologies like ReactJS, NextJS, Material UI, Tailwind CSS, and Bootstrap for responsive and beautiful user interfaces.',
  },
  {
    id: 2,
    icon: faNode,
    title: 'Backend Development',
    description:
      'Your website backend will be built with NodeJS, ExpressJS, MongoDB, PostgreSQL, and RESTful APIs for scalable and efficient server-side solutions.',
  },
  {
    id: 3,
    icon: faDatabase,
    title: 'Database Design',
    description:
      'I will design and implement efficient database schemas using MongoDB and PostgreSQL, ensuring optimal performance and data integrity.',
  },
  
  {
    id: 4,
    icon: faAws,
    title: 'Cloud & Deployment',
    description:
      'I will deploy and manage your applications on AWS services including EC2, S3, Lambda, and Amplify, ensuring high availability and scalability.',
  },
  {
    id: 5,
    icon: faDesktop,
    title: 'Full Stack Development',
    description:
      'I provide complete MERN/PERN stack development services, from concept to deployment, creating comprehensive web applications.',
  },
]

import cityGuide from './images/port1.png'
import portfolio from './images/port2.png'
import taskManager from './images/port4.png'

const PORTFOLIODATA = [
  {
    id: 1,
    img: cityGuide,
    title: 'Clients & Community',
    description:
      'This is a project of Clients & Community. This is made by me in wordpress.',
    demo: 'https://clientsandcommunity.com/',
  },
  {
    id: 2,
    img: portfolio,
    title: 'Bold Media',
    description:'This is a project of Bold Media. This is made by me in Shopify.',
    demo: 'https://boldmda.com/',
  },
  {
    id: 3,
    img: taskManager,
    title: 'Future Green Step',
    description:'This is a project of Future Green Step. This is made by me in MERN Stack Development.',
     demo: 'https://futuregreensteps.com/',
  },
]

export function portfolioData() {
  return PORTFOLIODATA
}

export function getPortfolioId(id) {
  return PORTFOLIODATA.find((portfolio) => portfolio.id === id)
}

import React from 'react';

import classes from './ThumbnailWorks.module.css';
import ThumbnailWork from './ThumbnailWork/ThumbnailWork';
import { withRouter } from 'react-router';

const works = [
  { 
    id: 1,
    category: 'Freelance', 
    title: 'Mutiara Mutu Sertifikasi training registration',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Mutiara-Mutu-Sertifikasi-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Mutiara-Mutu-Sertifikasi-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Mutiara-Mutu-Sertifikasi-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Mutiara-Mutu-Sertifikasi-04.png',
    url: 'https://mutiaramutusertifikasi.com/',
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'PHP', 
      'CodeIgniter',  
      'MySql',
      'Bootstrap'
    ],
    description: 'In this website project, a website is used by training participants to register and confirm payments, besides this website is also used as the company profile of Mutiara Mutu Certification. Until now, there have been more than 4000 participants who have registered through this website.',
    startBuild: 'Agustus 2019',
  },
  { 
    id: 2,
    category: 'Freelance',
    title: 'Givaudan employee data collection',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Employee-Data-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Employee-Data-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Employee-Data-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Employee-Data-04.png',
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'Google Apps Script', 
      'Google Spreadsheet', 
      'Bootstrap'
    ],
    description: 'The second project of PT Givaudan, this Web app was created using the JavaScript language on the Google Apps Script platform and the SpreadSheet database. This Web App has a feature of recording employee data and recording the training competency results of each employee of PT Givaudan.',
    startBuild: 'April 2020',
  },
  {
    id: 3,
    category: 'Freelance',
    title: 'Givaudan import shipping data collection',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Import-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Import-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Import-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Import-04.png',
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'Google Apps Script', 
      'Google Spreadsheet', 
      'Bootstrap'
    ],
    description: 'This is a project that my lecturer gave me after the skripsi. This web app features data recording of industrial raw material imports at PT Givaudan. In addition to recording data, this WebApp also has a report feature, printing letters for goods, and there is data visualization to see whether the speed of the import process is on target or not.',
    startBuild: 'Maret 2020'
  },
  { 
    id: 4,
    category: 'Campus Project',
    title: 'Social Media Intelligent Sentiment Analysist',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/social-media-intelligent-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/social-media-intelligent-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/social-media-intelligent-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/social-media-intelligent-04.png',
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS', 
      'PHP',
      'CodeIgniter', 
      'MySql',
      'Bootstrap', 
      'Twitter API',
      'Machine Learning'
    ],
    description: 'Is part of my skripsi. On this website I created a website that can be used to conduct sentiment analysis. I created this website using the PHP programming language and the Naive Bayes Classifier agorithm. This website can determine whether a sentence is a sentence that contains positive, negative, or neutral sentiments.',
    startBuild: 'September 2019',
  },
  { 
    id: 5,
    category: 'Submission at Dicoding',
    title: 'LoveEat',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/LoveEat-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/LoveEat-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/LoveEat-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/LoveEat-04.png',
    url: 'https://love-eat.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Love-Eat',
    technologies: [
      'HTML', 
      'CSS',
      'Sass', 
      'JavaScript', 
      'Fetch API',
      'Webpack',
      'Karma.js',
      'End to end Testing',
    ],
    description: 'This is a final class web submission on the Front-End Web Developer path at Dicoding Academy. On this website I created a User Interface based on the industry requirements criteria in the front-end, which are implemented on this website, including, Mobile First Approach, Web Accessibility, Clean Code, Progressive Web Apps (PWA), Testing, and Optimizing Web Performance.',
    startBuild: 'September 2020',
  },
  { 
    id: 6,
    category: 'Submission at Dicoding',
    title: 'Global Covid Data',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Global-Covid-Data.png',
    image1: null,
    image2: null,
    image3: null,
    url: 'https://global-covid.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Covid-Data',
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'Fetch API',
      'Webpack'
    ],
    description: 'The final project of the Learning Fundamentals Front-End Web Development class, learn about JavaScript ES6, Fetch API, and Web Components. So that it can create a Web that displays the development of covid data from around the world.',
    startBuild: 'May 2020',
  },
  { 
    id: 7,
    category: 'Campus Project',
    title: 'Nursuri Planst’s - plant ordering',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Nursuri-Plants-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Nursuri-Plants-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Nursuri-Plants-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Nursuri-Plants-04.png',
    url: 'http://nursuri-plants.epizy.com/',
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'PHP',
      'MySql'
    ],
    description: 'This is a website for the purposes of my Penulisan Ilmiah, this website can be used by users to place orders for plant seeds in a plant shop. The features on this website include displaying products, shopping carts, payment confirmation and payment status.',
    startBuild: 'April 2018',
  },
  { 
    id: 8,
    category: 'Campus Project',
    title: 'E-Parking',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/E-Parking-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/E-Parking-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/E-Parking-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/E-Parking-04.png',
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript',
      'PHP',
      'MySql',
      'BootStrap'
    ],
    description: 'This is a website that I created for my classmates at Penulisan Ilmiah in semester 6, on this website there are features for vehicle entry and exit, financial reports, employee management, and changing parking rates.',
    startBuild: 'Desember 2018',
  },
  { 
    id: 9,
    category: 'Freelance',
    title: 'MMS - Email Blasting',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/MMS-Email-Blasting-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/MMS-Email-Blasting-02.png',
    image2: null,
    image3: null,
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'Bootstrap',
      'JavaScript',
      'Google Apps Script',
      'Google Spread Sheet'
    ],
    description: 'This website is a project to fulfill email marketing needs at Mutiara Mutu Setifikasi. The main feature of this website is accompanying email marketing such as notification of training schedules or promos that run via email on the list automatically.',
    startBuild: 'Juli 2020'
  },
  { 
    id: 10,
    category: 'Submission at Dicoding',
    title: 'EPL Football Standings',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Football-Lite-01.png',
    image1: null,
    image2: null,
    image3: null,
    url: 'https://football-lite.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Football-Lite',
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript',
      'Fetch API',
      'Materialize CSS',
      'Progressive Web Apps'
    ],
    description: 'Create a dynamic football match schedule website that applies Progressive Web Apps, where the website can be used offline and can add icons to the homescreen, send notifications, and can save favorite clubs.',
    startBuild: 'Juni 2020'
  },
  { 
    id: 11,
    category: 'Submission at Dicoding',
    title: 'Pengenalan UI',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Pengenalan-UI-01.png',
    image1: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Pengenalan-UI-02.png',
    image2: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Pengenalan-UI-03.png',
    image3: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Pengenalan-UI-04.png',
    url: 'https://pengenalan-ui.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Pengenalan-UI',
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript',
      'Materialize CSS',
      'Progressive Web Apps'
    ],
    description: 'Creating a static website display that implements Progressive Web Apps, where the website can be used offline and can add icons to the smartphone homescreen like Android applications.',
    startBuild: 'Juni 2020'
  },
  { 
    id: 12,
    category: 'Submission at Dicoding',
    title: 'Pengenalan Bangun Ruang',
    urlThumbnailPhoto: 'https://raw.githubusercontent.com/Indra-RMT/Assets-Img/master/thumbnail-images/Bangun-Ruang-01.png',
    image1: null,
    image2: null,
    image3: null,
    url: 'https://pengenalan-bangunruang.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Pengenalan-Bangun-Ruang',
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript'
    ],
    description: 'My first Dicoding Submission, is to create a website display that applies semantic tags and responsive display on various devices, be it mobile, tablet or desktop.',
    startBuild: 'april 2020'
  },
];

const getThreeMailWorks = (works) => {
  const listMainWorks = [
    'LoveEat',
    'Mutiara Mutu Sertifikasi training registration',
    'Social Media Intelligent Sentiment Analysist'
  ];
  return works.filter(work => listMainWorks.includes(work.title));
}

const ThumbnailWorks = (props) => {
  const workDetailSelectedHandler = () => {
    const { history } = props
    history.push({
      pathname: '/all-work',
      state: { works: works }
    });
  }

  const orderingMainWorks = (threeMainWorks) => {
    return [threeMainWorks[2], threeMainWorks[0], threeMainWorks[1]];
  }

  const threeMainWorks = getThreeMailWorks(works);
  const orderedMainWorks = orderingMainWorks(threeMainWorks);

  return (
  <div className={classes.ThumbnailWorks}>
    <ul className={classes.thumbnailContainer}>
      {orderedMainWorks.map(work => (
        <li className={classes.wrapper}
        key={work.id}
        >
          <ThumbnailWork 
            {...work}
            key={work.id}
          >{}
          </ThumbnailWork>
        </li>
      ))}
    </ul>
    <div className={classes.buttonMore}>
      <div className={classes.button}
        onClick={() => workDetailSelectedHandler()}>
        See More <i className={['fa fa-arrow-right', classes.fontAwesome].join(' ')}></i>
      </div>
    </div>
  </div>
  )
}

export default withRouter(ThumbnailWorks);
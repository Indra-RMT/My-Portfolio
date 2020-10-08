import React from 'react';

import classes from './ThumbnailWorks.module.css';
import ThumbnailWork from './ThumbnailWork/ThumbnailWork';
import Aux from '../../../hoc/Aux/Aux';
import { withRouter } from 'react-router';

const works = [
  { 
    id: 1,
    category: 'Freelance', 
    title: 'Mutiara Mutu Sertifikasi training registration',
    urlThumbnailPhoto: 'Mutiara-Mutu-Sertifikasi-01.png',
    image1: 'Mutiara-Mutu-Sertifikasi-02.png',
    image2: 'Mutiara-Mutu-Sertifikasi-03.png',
    image3: 'Mutiara-Mutu-Sertifikasi-04.png',
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
    description: 'Adalah website untuk melakukan pendaftaran peserta pelatihan k3, melakukan konfirmasi pembayaran pelatihan dan melihat nomor sertifikat yang telah didapatkan oleh peserta sekaligus sebagai company profile. Website ini juga dilengkapi dengan halaman admin yang digunakan administrator untuk mengatur isi konten dan melakukan konfirmasi setiap pendaftar yang telah melakukan konfirmasi pembayaran. Hingga saat ini sudah terdapat lebih dari 3200 orang peserta yang mendaftar melalui website ini',
    startBuild: 'Agustus 2019',
  },
  { 
    id: 2,
    category: 'Freelance',
    title: 'Givaudan employee data collection',
    urlThumbnailPhoto: 'Employee-Data-01.png',
    image1: 'Employee-Data-02.png',
    image2: 'Employee-Data-03.png',
    image3: 'Employee-Data-04.png',
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
    description: 'Website yang digunakan oleh manager untuk melakukan pencatatan data karyawan yang diantaranya adalah id, nama, job level, dan position title. Pada wesite ini juga dilengkapi fitur pencatatan skill kompetensi yang dimiliki oleh setiap karyawan',
    startBuild: 'April 2020',
  },
  {
    id: 3,
    category: 'Freelance',
    title: 'Givaudan import shipping data collection',
    urlThumbnailPhoto: 'Givaudan-Import-01.png',
    image1: 'Givaudan-Import-02.png',
    image2: 'Givaudan-Import-03.png',
    image3: 'Givaudan-Import-04.png',
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
    description: 'Fitur utaman dalam website ini adalah melakukan pencatatan setiap bahan baku industri yang telah dipesan PT Givaudan Indonesia, selain itu fitur website ini adalah membuat surat jalan dan reporting',
    startBuild: 'Maret 2020'
  },
  { 
    id: 4,
    category: 'Campus Project',
    title: 'Social Media Intelligent Sentiment Analysist',
    urlThumbnailPhoto: 'social-media-intelligent-01.png',
    image1: 'social-media-intelligent-02.png',
    image2: 'social-media-intelligent-03.png',
    image3: 'social-media-intelligent-04.png',
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
    description: 'WebApp menerapkan Machine Learning, digunakan untuk melakukan Analisis Sentimen (positif, netral, negatif) pada suatu topik terhadap cuitan-cuitan netizen yang ada di Twitter. Proses berjalannya web app ini yaitu pengambilan data melalui API twitter -> text preprocessing (cleansing, case folding, tokenizing, convert slangword, negation handling, remove stopword, dan stemming) -> Klasifikasi menggunakan Algoritma Naive Bayes Classifier.',
    startBuild: 'September 2019',
  },
  { 
    id: 5,
    category: 'Submission at Dicoding',
    title: 'LoveEat',
    urlThumbnailPhoto: 'LoveEat-01.png',
    image1: null,
    image2: null,
    image3: null,
    url: 'https://love-eat.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Love-Eat',
    technologies: [
      'HTML', 
      'CSS', 
      'JavaScript', 
      'Fetch API',
      'Webpack'
    ],
    description: 'Website yang dibuat untuk menampilkan data covid terkini dari seluruh dunia, data diambil menggunakan Fetch API dan ditampilkan ke dalam sebuah Singgle Web Page yang responsive di semua perangkat serta menggunakan webpack sebagai module bundler agar website dapat diakses melalui beragam browser terkini maupun browser lawas',
    startBuild: '-',
  },
  { 
    id: 6,
    category: 'Submission at Dicoding',
    title: 'Global Covid Data',
    urlThumbnailPhoto: 'Global-Covid-Data.png',
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
    description: 'Website yang dibuat untuk menampilkan data covid terkini dari seluruh dunia, data diambil menggunakan Fetch API dan ditampilkan ke dalam sebuah Singgle Web Page yang responsive di semua perangkat serta menggunakan webpack sebagai module bundler agar website dapat diakses melalui beragam browser terkini maupun browser lawas',
    startBuild: '-',
  },
  { 
    id: 7,
    category: 'Campus Project',
    title: 'Nursuri Planst’s - plant ordering',
    urlThumbnailPhoto: 'Nursuri-Plants-01.png',
    image1: 'Nursuri-Plants-02.png',
    image2: 'Nursuri-Plants-03.png',
    image3: 'Nursuri-Plants-04.png',
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'PHP',
      'MySql'
    ],
    description: '',
    startBuild: 'April 2018',
  },
  { 
    id: 8,
    category: 'Campus Project',
    title: 'E-Parking',
    urlThumbnailPhoto: 'E-Parking-01.png',
    image1: 'E-Parking-02.png',
    image2: 'E-Parking-03.png',
    image3: 'E-Parking-04.png',
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
    description: 'Website untuk managemen parkir kendaraan bermotor, didalamnya terdapat input kendaraan masuk dan kendaraan keluar oleh petugas yang selanjutnya menampilkan struk pembayaran kendaraan yang keluar. Terdapat laporan harian hingga bulanan total kendaraan yang terparkir',
    startBuild: 'Desember 2018',
  },
  { 
    id: 9,
    category: 'Freelance',
    title: 'MMS - Email Blasting',
    urlThumbnailPhoto: 'MMS-Email-Blasting-01.png',
    image1: 'MMS-Email-Blasting-02.png',
    image2: null,
    image3: null,
    url: null,
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript',
      'Google Apps Script',
      'Google Spread Sheet'
    ],
    description: 'Website yang digunakan untuk mengirim email pemberitahuan ataupun promosi secara broadcast kepada seluruh alumni peserta pelatihan di PT mutiara mutu sertifikasi, Email yang dikirim berhasil masuk ke kotak masuk utama penerima, tanpa diklasifikasi sebagai spam atau iklan oleh sistem google',
    startBuild: 'Juli 2020'
  },
  { 
    id: 10,
    category: 'Submission at Dicoding',
    title: 'Pengenalan UI',
    urlThumbnailPhoto: 'Pengenalan-UI-01.png',
    image1: 'Pengenalan-UI-02.png',
    image2: 'Pengenalan-UI-03.png',
    image3: 'Pengenalan-UI-04.png',
    url: 'https://pengenalan-ui.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Pengenalan-UI',
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript',
      'Materialize CSS',
      'Progressive Web Apps'
    ]
  },
  { 
    id: 11,
    category: 'Submission at Dicoding',
    title: 'EPL Football Standings',
    urlThumbnailPhoto: 'Football-Lite-01.png',
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
    ]
  },
  { 
    id: 12,
    category: 'Submission at Dicoding',
    title: 'Pengenalan Bangun Ruang',
    urlThumbnailPhoto: 'Bangun-Ruang-01.png',
    image1: null,
    image2: null,
    image3: null,
    url: 'https://pengenalan-bangunruang.netlify.app/',
    githubUrl: 'https://github.com/Indra-RMT/Pengenalan-Bangun-Ruang',
    technologies: [
      'HTML', 
      'CSS',
      'JavaScript'
    ]
  },
];

const getFirtsThreeWorks = (works) => {
  return works.slice(0, 3);
}

const ThumbnailWorks = (props) => {
  const workDetailSelectedHandler = () => {
    const { history } = props
    history.push({
      pathname: '/all-work',
      state: { works: works }
    });
  }

  const firstSixWorks = getFirtsThreeWorks(works);

  return (
  <Aux>
    <ul className={classes.ThumbnailWorks}>
      {firstSixWorks.map(work => (
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
      <div className={classes.buttonMore}>
        <div className={classes.button}
          onClick={() => workDetailSelectedHandler()}>
          See More <i className={['fa fa-arrow-right', classes.fontAwesome].join(' ')}></i>
        </div>
      </div>
    </ul>
  </Aux>
  )
}

export default withRouter(ThumbnailWorks);
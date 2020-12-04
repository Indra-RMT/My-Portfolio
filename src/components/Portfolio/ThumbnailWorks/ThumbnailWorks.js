import React from 'react';

import classes from './ThumbnailWorks.module.css';
import ThumbnailWork from './ThumbnailWork/ThumbnailWork';
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
    description: 'Pada projek pembuatan website ini saya membuat sebuah website yang digunakan oleh calon peserta training untuk melakukan pendaftaran dan konfirmasi pembayaran, selain itu website ini digunakan juga sebagai company profile Mutiara Mutu Sertifikasi. Sampai saat ini sudah ada lebih dari 3500 orang peserta yang mendaftar lewat website tersebut.',
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
    description: 'Merupakan projek kedua PT Givaudan, Web app ini dibuat menggunakan bahasa JavaScript di platform Google Apps Script dan database SpreadSheet. Web App ini mempunyai fitur pencatatan data karyawan dan pencatatan hasil kompetensi training setiap karyawan PT Givaudan.',
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
    description: 'Merupakan project yang diberikan dosen saya kepada saya setelah sidang skripsi, web app ini memiliki fitur pencatatan data impor bahan baku industri pada PT Givaudan. Selain pencatatan data, WebApp ini juga terdapat fitur laporan, pencetakan surat guna barang, dan terdapat visualisasi data untuk melihat kecepatan alur proses impor apakah sudah sesuai target atau belum.',
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
    description: 'Merupakan bagian dari Skripsi saya. Pada website ini saya membuat sebuah web yang dapat digunakan untuk melakukan analisis sentimen. Saya membuat website ini menggunakan bahasa pemrograman PHP dan agoritma Naive Bayes Classifier. Wesite ini dapat menentukan apakah sebuah kalimat merupakan kalimat yang mengandung sentimen Positif, Negatif, ataupun Netral.',
    startBuild: 'September 2019',
  },
  { 
    id: 5,
    category: 'Submission at Dicoding',
    title: 'LoveEat',
    urlThumbnailPhoto: 'LoveEat-01.png',
    image1: 'LoveEat-02.png',
    image2: 'LoveEat-03.png',
    image3: 'LoveEat-04.png',
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
    description: 'Merupakan web Submission kelas akhir jalur Front-End Web Developer di Dicoding Indonesia. Pada website ini saya membuat User Interface berdasarkan kriteria kebutuhan industri pada bidang front-end saat ini, yang saya terapkan pada website ini diantaranya adalah, Mobile First Approach, Web Accessibility, Clean Code, PWA, Testing, dan pengoptimalan Web Performance',
    startBuild: 'September 2020',
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
    description: 'Pembuatan website Singgle Page Application (SPA) ini saya mempelajari tentang JavaScript ES6, Fetch API, dan Web Component. Sehingga dapat membuat sebuah User Interface SPA yang menampilkan perkembangan data covid dari seluruh dunia.',
    startBuild: 'May 2020',
  },
  { 
    id: 7,
    category: 'Campus Project',
    title: 'Nursuri Planst’s - plant ordering',
    urlThumbnailPhoto: 'Nursuri-Plants-01.png',
    image1: 'Nursuri-Plants-02.png',
    image2: 'Nursuri-Plants-03.png',
    image3: 'Nursuri-Plants-04.png',
    url: 'http://nursuri-plants.epizy.com/',
    githubUrl: null,
    technologies: [
      'HTML', 
      'CSS',
      'PHP',
      'MySql'
    ],
    description: 'Merupakan website untuk keperluan Penulisan Ilmiah saya, website ini dapat digunakan pengguna untuk melakukan pemesanan bibit tanaman yang ada pada sebuah toko tanaman. Fitur yang ada pada website ini diantaranya yaitu menampiklan produk, keranjang belanja, konfirmasi pembayaran dan status pembayaran.',
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
    description: 'Merupakan website yang saya buat untuk teman sekelas saya yang sedang mengerjakan penulisan ilmiahnya di semester 6, pada website ini terdapat fitur input keluar masuk kendaraan, laporan keuangan, manajemen karyawan, dan mengubah tarif parkir.',
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
      'Bootstrap',
      'JavaScript',
      'Google Apps Script',
      'Google Spread Sheet'
    ],
    description: 'Website ini merupakan projek untuk memenuhi kebutuhan email marketing pada Mutiara Mutu Setifikasi. Fitur utama dari website ini adalah mengiring email marketing seperti pemberitahuan jadwal training atau promo yang sedang berjalan kepada email yang ada pada list secara otomatis.',
    startBuild: 'Juli 2020'
  },
  { 
    id: 10,
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
    ],
    description: 'Membuat sebuah tampilan pertandingan sepakbola secara dinamis yang menerapkan Progressive Web Apps, dimana website dapat digunakan dalam keadaan offline dan dapat menambahkan icon pada homescreen smartphone, mengirimkan notifikasi, dan dapat menyimpan klub favorite.',
    startBuild: 'Juni 2020'
  },
  { 
    id: 11,
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
    ],
    description: 'Membuat sebuah tampilan website statis yang menerapkan Progressive Web Apps, dimana website dapat digunakan dalam keadaan offline dan dapat menambahkan icon pada homesreen smartphone layaknya aplikasi native.',
    startBuild: 'Juni 2020'
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
    ],
    description: 'Sumbmission pertama saya pada Dicoding, membuat sebuah tampilan website sederhana yang menerapkan semantic tag dan tampilan yang responsive pada berbagai perangkat, baik itu mobile, tablet ataupun desktop.',
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
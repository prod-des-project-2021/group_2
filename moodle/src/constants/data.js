import { SCHOOL, SCHOOL_CAMPUS, STUDENTS } from './images'

export const DUMMY_DATA = [
  {
    course1: {
      id: 'd1',
      name: 'Entrepreneurship  K21 DIN19SP',
      teacher: 2,
      favorite: false,
      enrollment_code: '33W3F5UT',
    },
    course2: {
      id: 'd2',
      name: 'ID00BO92 Internet of Things',
      teacher: 2,
      favorite: false,
      enrollment_code: 'SSDTT342',
    },
  },
]

export const backgroundImg = [
  {
    id: 1,
    image: SCHOOL_CAMPUS,
    alt: 'background img',
    title: 'Virtual tour of Linnanmaa Campus',
    news: 'Take a virtual tour of our Linnanmaa campus! There’s plenty to see. For example, you will get to see what our radio studio and cross-media studio look like and you will get to visit our automotive and robotics laboratories.',
    link: 'https://www.oamk.fi/en/about-oamk/current-topics/?kid=68&tiedote_id=69089',
  },
  {
    id: 2,
    image: SCHOOL,
    alt: 'background img',
    title: 'Corona News (11/11)',
    news: 'Oamk is constantly updating information about the coronavirus and our guidelines for preparedness.',
    link: 'https://www.oamk.fi/en/about-oamk/news-and-events/coronavirus-and-contingency-at-oamk',
  },
  {
    id: 3,
    image: STUDENTS,
    alt: 'background img',
    title: 'The new Studies in English brochure out now!',
    news: `Be prepared for the new application period for our English degree programmes on 5–19 January 2022 and have a look at our new Studies in English brochure. We offer three Bachelor's degree programmes and four Master's degree programmes taught entirely in English.`,
    link: 'https://www.oamk.fi/images/pdf/Oulu_University_of_Applied_Sciences_Study_in_Oulu_2022.pdf',
  },
]

export const imgSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
}

export const course = [
  {
    name: 'Company-Oriented Product Development Projects',
    teacher: ['Lasse Haverinen', 'Janne Kumpuoja'],
    code: 'T771010D',
    slug: 'company-oriented-product',
  },
  {
    name: 'Mobile Project (autumn 2021)',
    teacher: ['Jouni Juntunen', 'Pekka Ojala', 'Jussi Väisänen'],
    code: 'IT00CJ06',
    slug: 'mobile-project',
  },
  // {
  //   name: 'Music Theory 3',
  //   teacher: ['Janne Mikkonen'],
  //   code: 'MA00BT22',
  // },
  // {
  //   name: 'Engine Testing KTO19SP3',
  //   teacher: ['Janne Ilomaki'],
  //   code: 'TK00CX86',
  // },
  // {
  //   name: 'Production Automation',
  //   teacher: [
  //     'Elina Bergroth',
  //     'Juha Junttila',
  //     'Petri Junttila',
  //     'Jyri-Jussi Torvinen',
  //     'Jari Viitala',
  //   ],
  //   code: 'TK00BP66',
  // },
  // {
  //   name: 'Work Community Skills (BIO, OPT, STH)',
  //   teacher: ['Merja Suomalainen'],
  //   code: 'YY00BH05',
  // },
  {
    name: 'Basics of Mathematics and Physics DIN21SP',
    teacher: ['Jaakko Kaski', 'Susanna Kujanpää'],
    code: 'ID00CS33',
    slug: 'math-physics',
  },
]

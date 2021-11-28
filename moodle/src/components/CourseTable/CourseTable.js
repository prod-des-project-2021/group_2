import { Grid } from '@mui/material'
import React from 'react'
import { CourseName } from '../index'
import styles from './styles.module.css'

const data = [
  {
    name: 'Company-Oriented Product Development Projects',
    teacher: ['Lasse Haverinen', 'Janne Kumpuoja'],
    code: 'T771010D',
  },
  {
    name: 'Mobile Project (autumn 2021)',
    teacher: ['Jouni Juntunen', 'Pekka Ojala', 'Jussi Väisänen'],
    code: 'IT00CJ06',
  },
  {
    name: 'Music Theory 3',
    teacher: ['Janne Mikkonen'],
    code: 'MA00BT22',
  },
  {
    name: 'Engine Testing KTO19SP3',
    teacher: ['Janne Ilomaki'],
    code: 'TK00CX86',
  },
  {
    name: 'Production Automation',
    teacher: [
      'Elina Bergroth',
      'Juha Junttila',
      'Petri Junttila',
      'Jyri-Jussi Torvinen',
      'Jari Viitala',
    ],
    code: 'TK00BP66',
  },
  {
    name: 'Work Community Skills (BIO, OPT, STH)',
    teacher: ['Merja Suomalainen'],
    code: 'YY00BH05',
  },
  {
    name: 'Basics of Mathematics and Physics DIN21SP',
    teacher: ['Jaakko Kaski', 'Susanna Kujanpää'],
    code: 'ID00CS33',
  },
  {
    name: 'Technical Drawing and Building Modelling',
    teacher: ['Ari Oikarinen', 'Jussi Puumalainen'],
  },
]

export default function CourseTable() {
  return (
    <Grid
      container
      direction='row'
      justifyContent='space-between'
      alignItems='center'
    >
      {data.map((row, index) => (
        <Grid
          item
          xs={12}
          key={`course-name-${index}`}
          className={styles.course_container}
        >
          <CourseName course={row}></CourseName>
        </Grid>
      ))}
    </Grid>
  )
}

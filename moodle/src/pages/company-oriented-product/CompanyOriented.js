import { Breadcrumbs, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from './styles.module.css'

const CompanyOriented = () => {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Box>
          <Typography className={styles.course_name}>
            Company-Oriented Product Development Projects
          </Typography>
        </Box>
        <Breadcrumbs className={styles.breadcrums_wrapper}>
          <Link to={'/dashboard'} className={styles.link}>
            Dashboard
          </Link>
          <Link to={'/course'} className={styles.link}>
            <Typography> Course</Typography>
          </Link>
          <Link
            to='course/company-oriented-product'
            aria-current='page'
            className={styles.link}
          >
            Company-Oriented Product Development Projects
          </Link>
        </Breadcrumbs>
        <Box className={styles.course_content}>
          <Box className={styles.course_part}>
            <Typography className={styles.title}>Intro</Typography>
            <Box className={styles.content_wrapper}>
              <Typography>
                Company-Oriented Product Development projects are projects in
                which students work on project topics given by companies. The
                work is done under company supervision, with company equipment
                and in company premises.
                <br />
                The goal is to apply your learning in projects and get familiar
                to specify, design and implement a software project. The
                projects combine the theory and practice, give a realistic
                picture of the required skills and work tasks in software
                projects.
                <br />
                Each student has three projects in their curriculum
                <br />
                Company-Oriented Product Development Project 1
                <br />
                Company-Oriented Product Development Project 2
                <br />
                Company-Oriented Product Development Project 3
                <br />
                Each project is sized 200 hours of work - projects total 600
                hours​.
                <br />
                Every year we have companies which present project work
                opportunities to you during the fall. Every student applies
                independently to the projects/companies. Apply to multiple
                companies to increase chances to get a project position.
                <br />
                When you get a project position, you must contact Lasse
                Haverinen or Janne Kumpuoja for setting up a start meeting for
                your project.
              </Typography>
            </Box>
          </Box>
          <Box className={styles.course_part}>
            <Typography className={styles.title}>Project Overview</Typography>
            <Box className={styles.content_wrapper}>
              <ol>
                <li>Project begins with a start meeting</li>
                <li>
                  During the project there are one or two status meetings or
                  calls with the teacher and students
                </li>
                <li>
                  Closing meeting where students present the project results and
                  final report. Everybody who were in the start meeting should
                  attend finish meeting as well
                </li>
                <li>Grading</li>
              </ol>
            </Box>
          </Box>
          <Box className={styles.course_part}>
            <Typography className={styles.title}>
              What you as student must do now?
            </Typography>
            <Box className={styles.content_wrapper}>
              <ol>
                <li>Participate to the company project presentations</li>
                <li>Apply for companies</li>
                <li>Agree with a company with project details</li>
                <li>
                  Contact Lasse Haverinen (lasse.haverinen@oamk.fi) or Janne
                  Kumpuoja (janne.kumpuoja@oamk.fi) to organize a start meeting
                </li>
                <li>
                  After start meeting you can start working on the project
                </li>
              </ol>
            </Box>
          </Box>
          <Box>
            <Typography className={styles.title}>
              Frequently Asked Questions
            </Typography>
            <Box className={styles.content_wrapper}>
              <Typography>
                - I have worked in a company for the whole summer, can I get
                credits for Company Oriented Product Development Project
                course?​
              </Typography>
              <Typography>
                No – you need to agree on project with supervising teacher
                before you start working​
              </Typography>
              <br />
              <Typography>
                I work for company X, can I do a project there?
              </Typography>
              <Typography>
                Yes – you need to find a suitable topic which has work estimate
                of roughly 200 hours and requires you to plan your work as a
                project
              </Typography>
              <br />
              <Typography>What must I do to start a project?</Typography>
              <Typography>
                When you have agreed with a company to start a project you must
                contact Lasse Haverinen or Janne Kumpuoja and arrange a project
                starting meeting. Do not start working on a project before you
                have contacted Lasse or Janne.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default CompanyOriented

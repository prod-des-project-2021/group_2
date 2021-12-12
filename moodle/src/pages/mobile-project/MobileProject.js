import { Breadcrumbs, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import { Footer, Header } from '../../UI'
import styles from '../company-oriented-product-development-projects/styles.module.css'

const MobileProject = () => {
  return (
    <>
      <Header />
      <Container className={styles.container}>
        <Box>
          <Typography className={styles.course_name}>Mobile Project</Typography>
        </Box>
        <Breadcrumbs className={styles.breadcrums_wrapper}>
          <Link to={'/dashboard'} className={styles.link}>
            Dashboard
          </Link>
          <Link to={'/course'} className={styles.link}>
            <Typography> Course</Typography>
          </Link>
          <Link
            to='course/mobile-project'
            aria-current='page'
            className={styles.link}
          >
            Mobile Project
          </Link>
        </Breadcrumbs>
        <Box className={styles.course_part}>
          <Typography className={styles.title}>Learning Outcomes</Typography>
          <Box className={styles.content_wrapper}>
            <Typography>
              Upon completion of the course, the student understands the basic
              concepts of finance and is capable of applying them in financial
              problem solving. Students are also able to express their ideas
              analytically and effectively in written form.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.course_part}>
          <Typography className={styles.title}>Content</Typography>
          <Box className={styles.content_wrapper}>
            <Typography>
              Interest rates and discounting, asset pricing, fixed-income
              securities, derivative securities, portfolio performance
              evaluation, corporate cash flows, firm valuation.
            </Typography>
          </Box>
        </Box>
        <Box className={styles.course_part}>
          <Typography className={styles.title}>
            Completing the course
          </Typography>
          <Box className={styles.content_wrapper}>
            <Typography>
              During the course, there are two mandatory intermediate exams. In
              addition, the student has to complete a course project, which
              includes a written report.
            </Typography>
            <Typography>Exam I Friday, 08.11.2019.</Typography>
            <Typography>Exam II Wednesday, 04.12.2019.</Typography>
            <Typography>
              Project report must be returned by Wednesday 15.01.2020.
            </Typography>
            <Typography>
              If a student fails to take the first exam, he/she is still
              eligible to continue the course. In this case, the student must
              inform the lecturer by an email of the continuing the course by
              Monday 11.11.2019.
            </Typography>
            <Typography>
              If a student fails to take the second exam, he/she is still
              eligible to continue the course. There is no possibility to retake
              an exam.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography className={styles.title}>Assessment methods</Typography>
          <Box className={styles.content_wrapper}>
            <Typography>
              Exam I contains 10 multiple choice problems. The right answer
              provides +2 points, a wrong one -1 point, and ’no answer’ 0
              points. The maximum points is 20.
            </Typography>
            <Typography>
              Exam II contains 10 multiple choice problems. The right answer
              provides +2 points, a wrong one -1 point, and ’no answer’ 0
              points. The maximum points is 20.
            </Typography>
            <Typography>
              The course project contains four problems, where the student has
              to complete an analysis with a personal data, and write a report
              of the results. The standard report provides a maximum of 10
              points per problem. The maximum total points from a standard
              report is thus 40. With additional analyses one can earn up to
              five additional points per problem, and the maximum total points
              from the project rises up to 60.
            </Typography>
            <Typography>
              The final grade of the course is based on the total points from
              the two exams and the course project as follows:
            </Typography>
          </Box>
        </Box>
      </Container>
      <Footer />
    </>
  )
}

export default MobileProject

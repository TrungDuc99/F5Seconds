import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
const Section12: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <div className={styles.grid}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/master/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </Container>
  )
}

const serviceList = [
  {
    icon: Truck,
    title: 'Worldwide Delivery',
  },
  {
    icon: CreditCardVerified,
    title: 'Safe Payment',
  },
  {
    icon: Shield,
    title: 'Shop With Confidence',
  },
  {
    icon: CustomerService,
    title: '24/7 Support',
  },
]

export default Section12

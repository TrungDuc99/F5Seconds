import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Container } from '@material-ui/core'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
const navLinkStyle = {
  cursor: 'pointer',
  marginRight: '2rem',
  transition: 'color 150ms ease-in-out',

  '&:hover': {
    color: 'primary.main',
  },
  '&:last-child': {
    marginRight: '0',
  },
}

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
    title: 'Bất động sản',
    image: '/assets/images/exbImage/production/prd-batdongsan.jpg',
  },
  {
    icon: CreditCardVerified,
    title: 'Tiêu dùng',
    image: '/assets/images/exbImage/production/prd-tieudung.jpg',
  },
  {
    icon: Shield,
    title: 'Ô tô',
    image: '/assets/images/exbImage/production/prd-oto.jpg',
  },
  {
    icon: CustomerService,
    title: 'Thẻ tín dụng',
    image: '/assets/images/exbImage/production/prd-thetindung.jpg',
  },
  {
    icon: CustomerService,
    title: 'Xe máy',
    image: '/assets/images/exbImage/production/prd-xemay.jpg',
  },
  {
    icon: CustomerService,
    title: 'tín chấp',
    image: '/assets/images/exbImage/production/prd-tinchap.jpg',
  },
]

export default Section12

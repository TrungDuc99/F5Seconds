import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Container, Grid } from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import { Box } from '@material-ui/system'
import React, { FC } from 'react'
import styles from '../../styles/Home.module.css'
import { H4, Span } from '../Typography'
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
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Sản phẩm của chúng tôi
      </h1>
      <p style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna leo turpis
        sodales nibh felis non at venenatis. Mattis tortor nunc, augue et elit
        ultricies.{' '}
      </p>
      <div className={styles.grid}>
        <BazarCard
          sx={{
            display: 'flex',
            flexDirection: 'row',

            p: '1rem',

            borderRadius: '8px',
          }}
          hoverEffect
        >
          {' '}
          <BazarImage
            sx={{
              maxHeight: 200,
              maxWidth: 200,
            }}
            src="/assets/images/exbImage/production/prd-batdongsan.jpg"
            alt="hinh-san-pham"
          ></BazarImage>
          <div
            style={{
              paddingLeft: 15,
              display: 'flex',

              flexWrap: 'wrap',
              alignContent: 'space-between',
            }}
          >
            <H4
              mt={-1.5}
              mb={1.25}
              style={{ fontSize: '22px', lineHeight: '24px' }}
              textAlign="center"
            >
              asdasdas
            </H4>
            <Span textAlign="center" color="grey.600">
              We offer competitive prices on our 100 million plus product any range.
            </Span>
            <Box sx={navLinkStyle} style={{ display: 'flex', flexDirection: 'row' }}>
              <H4
                mt={3.5}
                mb={1.25}
                style={{
                  fontSize: '14px',
                  lineHeight: '17px',
                  color: '#0098CE',
                }}
                textAlign="center"
              >
                Xem chi tiết
              </H4>
              <ArrowForwardIcon
                style={{
                  fontSize: '20px',
                  lineHeight: '10px',
                  color: '#0098CE',
                  marginTop: '25px',
                  marginLeft: '15px',
                }}
              ></ArrowForwardIcon>
            </Box>
          </div>
        </BazarCard>

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
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>

      <Grid container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                p: '1rem',

                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarImage
                sx={{
                  maxHeight: 200,
                  maxWidth: 200,
                }}
                src={item.image}
                alt="hinh-san-pham"
              ></BazarImage>
              <Box
                style={{
                  height: '100%',
                  width: '100%',
                  padding: 10,
                  paddingLeft: 15,
                }}
              >
                {' '}
                <H4
                  mt={-1.5}
                  mb={1.25}
                  style={{ fontSize: '22px', lineHeight: '24px' }}
                  textAlign="center"
                >
                  {item.title}
                </H4>
                <Span textAlign="center" color="grey.600">
                  We offer competitive prices on our 100 million plus product any
                  range.
                </Span>
                <Box
                  sx={navLinkStyle}
                  style={{ display: 'flex', flexDirection: 'row' }}
                >
                  <H4
                    mt={3.5}
                    mb={1.25}
                    style={{
                      fontSize: '14px',
                      lineHeight: '17px',
                      color: '#0098CE',
                    }}
                    textAlign="center"
                  >
                    Xem chi tiết
                  </H4>
                  <ArrowForwardIcon
                    style={{
                      fontSize: '20px',
                      lineHeight: '10px',
                      color: '#0098CE',
                      marginTop: '25px',
                      marginLeft: '15px',
                    }}
                  ></ArrowForwardIcon>
                </Box>
              </Box>
            </BazarCard>
          </Grid>
        ))}
      </Grid>
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

import BazarCard from '@component/BazarCard'
import BazarImage from '@component/BazarImage'
import CreditCardVerified from '@component/icons/CreditCardVerified'
import CustomerService from '@component/icons/CustomerService'
import Shield from '@component/icons/Shield'
import Truck from '@component/icons/Truck'
import { Container, Grid } from '@material-ui/core'
import React, { FC } from 'react'
import { H4, Span } from '../Typography'

const Section12: FC = () => {
  return (
    <Container sx={{ mb: '70px' }}>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        Sản phẩm của chúng tôi
      </h1>
      <p style={{ display: 'flex', justifyContent: 'center' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna leo turpis
        sodales nibh felis non at venenatis. Mattis tortor nunc, augue et elit
        ultricies.{' '}
      </p>
      <Grid container spacing={3}>
        {serviceList.map((item, ind) => (
          <Grid item lg={3} md={6} xs={12} key={ind}>
            <BazarCard
              sx={{
                display: 'flex',
                flexDirection: 'row',

                p: '1rem',
                height: '100%',
                borderRadius: '8px',
              }}
              hoverEffect
            >
              <BazarImage
                sx={{
                  maxHeight: 200,
                  maxWidth: 200,
                }}
                src="/assets/images/exbImage/production/prd_img_batdongsan.jpg"
                alt="hinh-bds"
              ></BazarImage>

              <H4 mt={2.5} mb={1.25} textAlign="center">
                {item.title}
              </H4>
              <Span textAlign="center" color="grey.600">
                We offer competitive prices on our 100 million plus product any
                range.
              </Span>
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
  {
    icon: CustomerService,
    title: '24/7 Support',
  },
  {
    icon: CustomerService,
    title: '24/7 Support',
  },
]

export default Section12
